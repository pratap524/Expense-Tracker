import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "./api/auth";
import { clearAuthSession, getRefreshToken } from "./auth/session";

const CSV_DATA_KEY = "architectImportedCsvRows";

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function parseAmount(value) {
  const cleaned = String(value || "").replace(/[^0-9+-.]/g, "");
  const parsed = Number.parseFloat(cleaned);
  return Number.isFinite(parsed) ? parsed : 0;
}

function parseCsvRows(csvText) {
  const text = String(csvText || "").trim();
  if (!text) {
    return [];
  }

  const rows = [];
  let current = "";
  let row = [];
  let inQuotes = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];

    if (char === '"') {
      if (inQuotes && next === '"') {
        current += '"';
        index += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (!inQuotes && char === ",") {
      row.push(current.trim());
      current = "";
      continue;
    }

    if (!inQuotes && (char === "\n" || char === "\r")) {
      if (char === "\r" && next === "\n") {
        index += 1;
      }
      row.push(current.trim());
      if (row.some((cell) => cell.length > 0)) {
        rows.push(row);
      }
      row = [];
      current = "";
      continue;
    }

    current += char;
  }

  if (current.length > 0 || row.length > 0) {
    row.push(current.trim());
    if (row.some((cell) => cell.length > 0)) {
      rows.push(row);
    }
  }

  if (rows.length < 2) {
    return [];
  }

  const headers = rows[0].map((header) => header.toLowerCase().trim());
  const normalizedRows = rows
    .slice(1)
    .map((cells) => {
      const getValue = (...keys) => {
        for (const key of keys) {
          const headerIndex = headers.findIndex((header) => header === key);
          if (headerIndex >= 0) {
            return cells[headerIndex] || "";
          }
        }
        return "";
      };

      const amountRaw = getValue("amount", "value", "price", "total");
      const budgetRaw = getValue("budget", "limit", "allocated", "cap");
      const typeRaw = getValue("type", "kind", "transaction_type").toLowerCase();
      const statusRaw = getValue("status") || "Completed";

      let amount = parseAmount(amountRaw);
      const hasExplicitMinus = /^\s*-/.test(String(amountRaw || ""));
      const hasExplicitPlus = /^\s*\+/.test(String(amountRaw || ""));
      const isExpenseType = /expense|debit|spend|purchase|payment|withdraw/.test(typeRaw);
      const isIncomeType = /income|credit|deposit|salary|refund/.test(typeRaw);

      if (hasExplicitMinus && amount > 0) {
        amount *= -1;
      }

      if (isExpenseType && amount > 0) {
        amount *= -1;
      }

      if (isIncomeType && amount < 0) {
        amount *= -1;
      }

      // Most imported CSVs in this flow are expense sheets; default unsigned values to expense.
      if (!isExpenseType && !isIncomeType && !hasExplicitMinus && !hasExplicitPlus && amount > 0) {
        amount *= -1;
      }

      return {
        date: getValue("date", "transaction_date") || "N/A",
        description: getValue("description", "merchant", "name", "title") || "Transaction",
        category: getValue("category", "group", "tag") || "General",
        amount,
        budget: parseAmount(budgetRaw),
        status: statusRaw,
      };
    })
    .filter((item) => item.description || item.amount);

  return normalizedRows;
}

function formatCurrency(value) {
  const amount = Number.isFinite(value) ? value : 0;
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount);
}

function loadCsvRows() {
  try {
    const raw = localStorage.getItem(CSV_DATA_KEY);
    const parsed = JSON.parse(raw || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveCsvRows(rows) {
  localStorage.setItem(CSV_DATA_KEY, JSON.stringify(rows));
}

function clearCsvRows() {
  localStorage.removeItem(CSV_DATA_KEY);
}

function summarizeExpenseCategories(rows) {
  const byCategory = new Map();

  rows.forEach((item) => {
    if (item.amount >= 0) {
      return;
    }

    const category = item.category || "General";
    const existing = byCategory.get(category) || { category, spent: 0, budget: 0 };
    existing.spent += Math.abs(item.amount);
    if (Number.isFinite(item.budget) && item.budget > 0) {
      existing.budget += item.budget;
    }
    byCategory.set(category, existing);
  });

  const categories = Array.from(byCategory.values())
    .map((entry) => ({
      ...entry,
      budget: entry.budget > 0 ? entry.budget : entry.spent * 1.25,
    }))
    .sort((left, right) => right.spent - left.spent);

  const totalSpent = categories.reduce((sum, entry) => sum + entry.spent, 0);
  const totalBudget = categories.reduce((sum, entry) => sum + entry.budget, 0);

  return { categories, totalSpent, totalBudget };
}

function applyDashboardPieChart(doc, rows) {
  const pieCircles = Array.from(doc.querySelectorAll("svg .pie-segment"));
  pieCircles.forEach((circle) => {
    circle.setAttribute("stroke-dasharray", "0 999");
    circle.setAttribute("stroke-dashoffset", "0");
  });


  // Always zero out all legend rows if no data
  const legendRows = Array.from(doc.querySelectorAll("h3"))
    .find((node) => /spending categories/i.test(node.textContent || ""))
    ?.closest("div")
    ?.querySelectorAll(".space-y-4 > .flex.items-center.justify-between.text-sm");

  if (!rows || !rows.length) {
    if (legendRows && legendRows.length) {
      Array.from(legendRows).forEach((row) => {
        row.style.display = "flex";
        const label = row.querySelector("span.font-medium");
        const percentage = row.querySelector("span.text-on-surface-variant");
        if (label) {
          label.textContent = "No Data";
        }
        if (percentage) {
          percentage.textContent = "0%";
        }
      });
    }
    const totalLabel = Array.from(doc.querySelectorAll("span")).find((node) => (node.textContent || "").trim().toLowerCase() === "total");
    const totalValue = totalLabel?.nextElementSibling;
    if (totalValue) {
      totalValue.textContent = formatCurrency(0);
    }
    return;
  }

  const totalLabel = Array.from(doc.querySelectorAll("span")).find((node) => (node.textContent || "").trim().toLowerCase() === "total");
  const totalValue = totalLabel?.nextElementSibling;
  if (totalValue) {
    totalValue.textContent = formatCurrency(0);
  }

  const { categories, totalSpent } = summarizeExpenseCategories(rows);
  if (!categories.length || totalSpent <= 0) {
    return;
  }

  const topCategories = categories.slice(0, 3);
  const displayedTotal = topCategories.reduce((sum, entry) => sum + entry.spent, 0);
  if (displayedTotal <= 0) {
    return;
  }

  const circleRadius = Number.parseFloat(pieCircles[0]?.getAttribute("r") || "40");
  const circumference = 2 * Math.PI * circleRadius;

  let offset = 0;
  pieCircles.forEach((circle, index) => {
    const entry = topCategories[index];
    if (!entry) {
      circle.setAttribute("stroke-dasharray", `0 ${circumference.toFixed(1)}`);
      circle.setAttribute("stroke-dashoffset", "0");
      return;
    }

    const segmentLength = (entry.spent / displayedTotal) * circumference;
    circle.setAttribute("stroke-dasharray", `${segmentLength.toFixed(1)} ${(circumference - segmentLength).toFixed(1)}`);
    circle.setAttribute("stroke-dashoffset", `${(-offset).toFixed(1)}`);
    offset += segmentLength;
  });

  if (legendRows && legendRows.length) {
    Array.from(legendRows).forEach((row, index) => {
      const entry = topCategories[index];
      const label = row.querySelector("span.font-medium");
      const percentage = row.querySelector("span.text-on-surface-variant");

      if (!entry) {
        row.style.display = "none";
        return;
      }

      row.style.display = "flex";
      if (label) {
        label.textContent = entry.category;
      }
      if (percentage) {
        const percent = Math.round((entry.spent / displayedTotal) * 100);
        percentage.textContent = `${percent}%`;
      }
    });
  }

  if (totalValue) {
    totalValue.textContent = formatCurrency(totalSpent);
  }
}

function LegacyPage({ title, html }) {
  const iframeRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = `${title} | Expense Tracker React`;
  }, [title]);

  const resolveRoute = (content) => {
    if (/\bfull report\b/.test(content)) {
      return "/spending-report";
    }

    if (/\bsettings\b/.test(content) || /\bperson\b/.test(content)) {
      return "/settings";
    }
    if (/\btransactions?\b/.test(content) || /\bactivity\b/.test(content)) {
      return "/transactions-list";
    }
    if (/\bbudgets?\b/.test(content) || /\baccounts?\b/.test(content)) {
      return "/budgets-categories";
    }
    if (/\bdashboard\b/.test(content) || /\bhome\b/.test(content)) {
      return "/dashboard-3";
    }
    if (/\badd expense\b/.test(content)) {
      return "/add-expense";
    }

    return null;
  };

  const removeAnalyticsItems = (doc) => {
    const labelNodes = Array.from(doc.querySelectorAll("span, p, a, div"));

    labelNodes
      .filter((node) => {
        const text = (node.textContent || "").trim().toLowerCase();
        return text === "analytics";
      })
      .forEach((node) => {
        const item = node.closest("a, button, div");
        if (item) {
          item.remove();
        }
      });

    const iconNodes = Array.from(doc.querySelectorAll(".material-symbols-outlined"));
    iconNodes
      .filter((icon) => (icon.textContent || "").trim().toLowerCase() === "bar_chart")
      .forEach((icon) => {
        const item = icon.closest("a, button, div");
        if (item && /analytics/i.test(item.textContent || "")) {
          item.remove();
        }
      });
  };

  const applySignedUpProfile = (doc) => {
    const savedName = localStorage.getItem("architectUserName") || "";
    const savedEmail = localStorage.getItem("architectUserEmail") || "";

    if (!savedName && !savedEmail) {
      return;
    }

    const nodes = Array.from(doc.querySelectorAll("*"));

    nodes.forEach((node) => {
      if (node.children.length > 0) {
        return;
      }

      const text = (node.textContent || "").trim();

      if (savedName && text === "Alex Sterling") {
        node.textContent = savedName;
      }

      if (savedEmail && text === "alex.sterling@architect-finance.com") {
        node.textContent = savedEmail;
      }
    });
  };

  const applyCsvDataToDashboard = (doc, rows) => {
    const incomeTotal = rows.filter((item) => item.amount > 0).reduce((sum, item) => sum + item.amount, 0);
    const spendingTotal = rows.filter((item) => item.amount < 0).reduce((sum, item) => sum + Math.abs(item.amount), 0);
    const balance = incomeTotal - spendingTotal;

    const summaryLabel = Array.from(doc.querySelectorAll("h2")).find((node) => /financial architecture summary/i.test(node.textContent || ""));
    const summaryValue = summaryLabel?.nextElementSibling;
    if (summaryValue) {
      summaryValue.textContent = formatCurrency(balance);
    }

    const incomeLabel = Array.from(doc.querySelectorAll("p")).find((node) => (node.textContent || "").trim().toLowerCase() === "monthly income");
    const incomeValue = incomeLabel?.parentElement?.querySelector("p.text-3xl");
    if (incomeValue) {
      incomeValue.textContent = `+${formatCurrency(incomeTotal)}`;
    }

    const spendingLabel = Array.from(doc.querySelectorAll("p")).find((node) => (node.textContent || "").trim().toLowerCase() === "monthly spending");
    const spendingValue = spendingLabel?.parentElement?.querySelector("p.text-3xl");
    if (spendingValue) {
      spendingValue.textContent = `-${formatCurrency(spendingTotal)}`;
    }

    const recentHeader = Array.from(doc.querySelectorAll("h3")).find((node) => /recent transactions/i.test(node.textContent || ""));
    const listContainer = recentHeader?.parentElement?.nextElementSibling;
    if (!listContainer) {
      return;
    }

    if (!rows.length) {
      listContainer.innerHTML = `<div class="bg-surface-container-lowest p-4 rounded-2xl text-on-surface-variant text-sm">No CSV transactions imported yet.</div>`;
      applyDashboardPieChart(doc, []);
      return;
    }

    const previewRows = rows.slice(0, 6);
    listContainer.innerHTML = previewRows
      .map((item) => {
        const isIncome = item.amount >= 0;
        return `<div class="bg-surface-container-lowest p-4 rounded-2xl flex items-center justify-between transition-transform hover:scale-[1.01] cursor-pointer">
  <div>
    <p class="font-bold text-on-surface">${escapeHtml(item.description)}</p>
    <p class="text-xs text-on-surface-variant">${escapeHtml(item.date)} • ${escapeHtml(item.category)}</p>
  </div>
  <div class="text-right">
    <p class="font-bold ${isIncome ? "text-tertiary" : "text-on-surface"}">${isIncome ? "+" : "-"}${formatCurrency(Math.abs(item.amount))}</p>
    <span class="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-tighter ${isIncome ? "bg-tertiary-container text-on-tertiary-container" : "bg-error-container text-on-error-container"}">${isIncome ? "Income" : "Expense"}</span>
  </div>
</div>`;
      })
      .join("");

    applyDashboardPieChart(doc, rows);
  };

  const applyCsvDataToTransactions = (doc, rows) => {
    const pageSize = 10;
    const normalizedRows = Array.isArray(rows) ? rows : [];
    let activeRows = [...normalizedRows];
    const state = {
      currentPage: 1,
      totalPages: Math.max(1, Math.ceil(activeRows.length / pageSize)),
    };

    const createPageSequence = (currentPage, totalPages) => {
      if (totalPages <= 7) {
        return Array.from({ length: totalPages }, (_, index) => index + 1);
      }

      const sequence = [1];
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      if (start > 2) {
        sequence.push("...");
      }

      for (let page = start; page <= end; page += 1) {
        sequence.push(page);
      }

      if (end < totalPages - 1) {
        sequence.push("...");
      }

      sequence.push(totalPages);
      return sequence;
    };

    const renderTransactionsPage = () => {
      state.totalPages = Math.max(1, Math.ceil(activeRows.length / pageSize));
      state.currentPage = Math.min(Math.max(state.currentPage, 1), state.totalPages);

      const tbody = doc.querySelector("tbody");
      if (tbody) {
        const startIndex = (state.currentPage - 1) * pageSize;
        const endIndex = Math.min(startIndex + pageSize, activeRows.length);
        const pageRows = activeRows.slice(startIndex, endIndex);

        if (!pageRows.length) {
          tbody.innerHTML = `<tr><td colspan="6" class="px-8 py-10 text-center text-on-surface-variant">No transactions found for the selected category.</td></tr>`;
        } else {
          tbody.innerHTML = pageRows
            .map((item) => {
              const isIncome = item.amount >= 0;
              return `<tr class="hover:bg-surface-container-low/40 transition-colors group">
  <td class="px-8 py-6"><span class="text-sm font-bold text-on-surface">${escapeHtml(item.date)}</span></td>
  <td class="px-8 py-6"><span class="text-sm font-bold text-on-surface">${escapeHtml(item.description)}</span></td>
  <td class="px-8 py-6"><span class="px-3 py-1 bg-surface-container-high rounded-full text-[11px] font-bold text-on-primary-fixed-variant">${escapeHtml(item.category)}</span></td>
  <td class="px-8 py-6 text-right"><span class="px-3 py-1 bg-tertiary-container/20 text-tertiary text-[11px] font-bold rounded-full">${escapeHtml(item.status || "Completed")}</span></td>
  <td class="px-8 py-6 text-right"><span class="text-sm font-extrabold ${isIncome ? "text-tertiary" : "text-on-surface"}">${isIncome ? "+" : "-"}${formatCurrency(Math.abs(item.amount))}</span></td>
  <td class="px-8 py-6"></td>
</tr>`;
            })
            .join("");
        }
      }

      const info = Array.from(doc.querySelectorAll("span")).find((node) => {
        const text = (node.textContent || "").trim().toLowerCase();
        return text.startsWith("showing") && text.includes("transactions");
      });

      const footer = info?.closest("div");

      if (footer && info) {
        const total = activeRows.length;
        const startRow = total === 0 ? 0 : (state.currentPage - 1) * pageSize + 1;
        const endRow = total === 0 ? 0 : Math.min(state.currentPage * pageSize, total);
        info.textContent = `Showing ${startRow}-${endRow} of ${total} transactions`;

        const controls = footer.querySelector("div.flex.items-center.gap-1");
        if (controls) {
          controls.innerHTML = "";

          const appendButton = ({ text, page, disabled = false, isActive = false, icon = "" }) => {
            const button = doc.createElement("button");
            button.className = isActive
              ? "w-10 h-10 rounded-xl flex items-center justify-center bg-primary text-on-primary text-xs font-bold"
              : "w-10 h-10 rounded-xl flex items-center justify-center hover:bg-surface-container-high text-xs font-bold transition-colors";

            if (icon) {
              button.innerHTML = `<span class="material-symbols-outlined text-sm">${icon}</span>`;
            } else {
              button.textContent = String(text);
            }

            button.disabled = disabled;
            if (disabled) {
              button.className += " opacity-40 cursor-not-allowed";
            }

            if (!disabled && typeof page === "number") {
              button.addEventListener("click", () => {
                state.currentPage = page;
                renderTransactionsPage();
              });
            }

            controls.appendChild(button);
          };

          appendButton({ icon: "chevron_left", page: state.currentPage - 1, disabled: state.currentPage === 1 });

          createPageSequence(state.currentPage, state.totalPages).forEach((item) => {
            if (item === "...") {
              const dots = doc.createElement("span");
              dots.className = "px-2 text-on-surface-variant";
              dots.textContent = "...";
              controls.appendChild(dots);
              return;
            }

            appendButton({ text: item, page: item, isActive: item === state.currentPage });
          });

          appendButton({ icon: "chevron_right", page: state.currentPage + 1, disabled: state.currentPage === state.totalPages });
        }
      }

      const spendingSummary = Array.from(doc.querySelectorAll("span")).find((node) => /total spending/i.test(node.textContent || ""));
      const spendingValue = spendingSummary?.parentElement?.querySelector("h2");
      if (spendingValue) {
        const spendingTotal = activeRows.filter((item) => item.amount < 0).reduce((sum, item) => sum + Math.abs(item.amount), 0);
        spendingValue.textContent = formatCurrency(spendingTotal);
      }
    };

    const categorySelect = Array.from(doc.querySelectorAll("select")).find((select) =>
      Array.from(select.options).some((option) => (option.textContent || "").trim().toLowerCase() === "all categories"),
    );

    if (categorySelect) {
      const categoryMap = new Map();
      normalizedRows.forEach((item) => {
        const rawCategory = String(item.category || "General").trim() || "General";
        const key = rawCategory.toLowerCase();
        if (!categoryMap.has(key)) {
          categoryMap.set(key, rawCategory);
        }
      });

      const categories = Array.from(categoryMap.values()).sort((a, b) => a.localeCompare(b));
      categorySelect.innerHTML = ["All Categories", ...categories].map((category) => `<option>${escapeHtml(category)}</option>`).join("");

      categorySelect.addEventListener("change", () => {
        const selected = (categorySelect.value || "All Categories").trim().toLowerCase();
        activeRows =
          selected === "all categories"
            ? [...normalizedRows]
            : normalizedRows.filter((item) => String(item.category || "General").trim().toLowerCase() === selected);
        state.currentPage = 1;
        renderTransactionsPage();
      });
    }

    renderTransactionsPage();
  };

  const applyCsvData = (doc, pageTitle, rows) => {
    if (/dashboard/i.test(pageTitle)) {
      applyCsvDataToDashboard(doc, rows);
    }

    if (/transactions/i.test(pageTitle)) {
      applyCsvDataToTransactions(doc, rows);
    }
  };

  const injectCsvImportButton = (doc, pageTitle) => {
    if (!/dashboard/i.test(pageTitle)) {
      return;
    }

    if (doc.getElementById("architect-csv-importer")) {
      return;
    }

    const topBar = doc.querySelector("header .flex.items-center.gap-4") || doc.querySelector("header .flex.items-center");
    if (!topBar) {
      return;
    }

    const fileInput = doc.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".csv,text/csv";
    fileInput.style.display = "none";
    fileInput.id = "architect-csv-file";

    const importButton = doc.createElement("button");
    importButton.type = "button";
    importButton.id = "architect-csv-importer";
    importButton.className = "bg-primary hover:bg-primary-container text-on-primary px-4 py-2 rounded-xl font-manrope text-sm font-semibold tracking-tight transition-all active:scale-95 duration-200 ease-in-out";
    importButton.textContent = "Add CSV";

    const removeButton = doc.createElement("button");
    removeButton.type = "button";
    removeButton.id = "architect-csv-remover";
    removeButton.className = "bg-error-container hover:opacity-90 text-on-error-container px-4 py-2 rounded-xl font-manrope text-sm font-semibold tracking-tight transition-all active:scale-95 duration-200 ease-in-out";
    removeButton.textContent = "Remove CSV";

    importButton.addEventListener("click", () => {
      fileInput.click();
    });

    removeButton.addEventListener("click", () => {
      clearCsvRows();
      applyCsvData(doc, pageTitle, []);
      doc.defaultView?.alert("CSV data removed.");
    });

    fileInput.addEventListener("change", async () => {
      const file = fileInput.files?.[0];
      if (!file) {
        return;
      }

      const fileText = await file.text();
      const parsedRows = parseCsvRows(fileText);

      if (!parsedRows.length) {
        doc.defaultView?.alert("Could not read CSV data. Expected headers like date, description, category, amount.");
        return;
      }

      saveCsvRows(parsedRows);
      applyCsvData(doc, pageTitle, parsedRows);
      doc.defaultView?.alert(`Imported ${parsedRows.length} transactions from CSV.`);
      fileInput.value = "";
    });

    topBar.insertBefore(removeButton, topBar.firstChild);
    topBar.insertBefore(importButton, topBar.firstChild);
    doc.body.appendChild(fileInput);
  };

  const attachNavigationBridge = () => {
    const iframe = iframeRef.current;

    if (!iframe || !iframe.contentDocument) {
      return;
    }

    if (iframe.__cleanupBridge) {
      iframe.__cleanupBridge();
    }

    const doc = iframe.contentDocument;
    removeAnalyticsItems(doc);
    applySignedUpProfile(doc);
    injectCsvImportButton(doc, title);

    const importedRows = loadCsvRows();
    applyCsvData(doc, title, importedRows);


    const clickHandler = async (event) => {
      let target = event.target;
      // Traverse up to find actionable element
      while (target && !target.closest("a,button,div")) {
        target = target.parentElement;
      }
      target = target?.closest("a,button,div");
      if (!target) return;

      // Robust sign out detection
      const isSignOut =
        target.hasAttribute("data-signout") ||
        /sign out|logout/i.test(target.textContent || "") ||
        /logout|sign out/i.test((target.querySelector(".material-symbols-outlined")?.textContent || ""));

      if (isSignOut) {
        event.preventDefault();
        const refreshToken = getRefreshToken();
        if (refreshToken) {
          try {
            await logoutUser({ refreshToken });
          } catch {}
        }
        clearAuthSession();
        navigate("/login");
        return;
      }

      const href = target.getAttribute("href");
      const text = (target.textContent || "").toLowerCase();
      const icon = (target.querySelector(".material-symbols-outlined")?.textContent || "").toLowerCase();
      const content = `${text} ${icon}`;
      const route = resolveRoute(content);
      if (!route) return;
      if (href === "#" || target.tagName === "BUTTON" || target.tagName === "DIV") {
        event.preventDefault();
        navigate(route);
      }
    };

    doc.addEventListener("click", clickHandler);
    iframe.__cleanupBridge = () => doc.removeEventListener("click", clickHandler);
  };

  return (
    <div className="legacy-page">
      <iframe
        ref={iframeRef}
        title={title}
        className="legacy-iframe"
        srcDoc={html}
        sandbox="allow-forms allow-modals allow-popups allow-same-origin allow-scripts"
        onLoad={attachNavigationBridge}
      />
    </div>
  );
}

export default LegacyPage;
