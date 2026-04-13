import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "./api/auth";
import { clearAuthSession, getRefreshToken } from "./auth/session";

function LegacyPage({ title, html }) {
  const iframeRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = `${title} | Expense Tracker React`;
  }, [title]);

  const resolveRoute = (content) => {
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

    const clickHandler = async (event) => {
      const target = event.target.closest("a, button, div");

      if (!target) {
        return;
      }

      const href = target.getAttribute("href");
      const text = (target.textContent || "").toLowerCase();
      const icon = (target.querySelector(".material-symbols-outlined")?.textContent || "").toLowerCase();
      const content = `${text} ${icon}`;

      if (/\blogout\b|\bsign out\b/.test(content)) {
        event.preventDefault();

        const refreshToken = getRefreshToken();
        if (refreshToken) {
          try {
            await logoutUser({ refreshToken });
          } catch {
            // Client logout should still succeed even if backend token revoke fails.
          }
        }

        clearAuthSession();
        navigate("/login");
        return;
      }

      const route = resolveRoute(content);

      if (!route) {
        return;
      }

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
