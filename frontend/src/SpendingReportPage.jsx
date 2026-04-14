import { useState } from "react";
import { Link } from "react-router-dom";

const CSV_DATA_KEY = "architectImportedCsvRows";

const CHART_COLORS = [
  "#a8b7ec",
  "#d8bceb",
  "#fb9b43",
  "#6dd3ce",
  "#f07178",
  "#63b3ed",
  "#f6e05e",
  "#68d391",
  "#f687b3",
  "#9f7aea",
  "#4fd1c5",
  "#fc8181",
];

function loadImportedRows() {
  try {
    const raw = localStorage.getItem(CSV_DATA_KEY);
    const parsed = JSON.parse(raw || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function formatCurrency(value) {
  const amount = Number.isFinite(value) ? value : 0;
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount);
}

function summarizeExpenseCategories(rows) {
  const byCategory = new Map();

  rows.forEach((row) => {
    const amount = Number(row?.amount) || 0;
    if (amount >= 0) {
      return;
    }

    const category = String(row?.category || "General").trim() || "General";
    const current = byCategory.get(category) || 0;
    byCategory.set(category, current + Math.abs(amount));
  });

  const categories = Array.from(byCategory.entries())
    .map(([category, spent]) => ({ category, spent }))
    .sort((left, right) => right.spent - left.spent);

  const totalSpent = categories.reduce((sum, entry) => sum + entry.spent, 0);
  return { categories, totalSpent };
}

function SpendingReportPage() {
  const [activeCategory, setActiveCategory] = useState(null);
  const rows = loadImportedRows();
  const { categories, totalSpent } = summarizeExpenseCategories(rows);

  const radius = 44;
  const strokeWidth = 18;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;

  const segments = categories.map((entry, index) => {
    const ratio = totalSpent > 0 ? entry.spent / totalSpent : 0;
    const length = ratio * circumference;
    const segment = {
      ...entry,
      color: CHART_COLORS[index % CHART_COLORS.length],
      percent: ratio * 100,
      dashArray: `${length.toFixed(2)} ${(circumference - length).toFixed(2)}`,
      dashOffset: `${(-offset).toFixed(2)}`,
    };
    offset += length;
    return segment;
  });

  const activeSegment = segments.find((segment) => segment.category === activeCategory) || null;

  return (
    <div className="min-h-screen bg-background px-6 py-8 text-on-surface">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant">CSV Expense Insights</p>
            <h1 className="mt-2 text-4xl font-black">Full Spending Report</h1>
          </div>
          <Link className="rounded-xl bg-surface-container-high px-4 py-2 text-sm font-semibold text-on-surface transition-colors hover:bg-surface-container-highest" to="/dashboard-3">
            Back to Dashboard
          </Link>
        </div>

        {!segments.length ? (
          <div className="rounded-2xl bg-surface-container p-8">
            <h2 className="text-2xl font-bold">No Expense Data Found</h2>
            <p className="mt-3 text-on-surface-variant">Upload a CSV from dashboard using Add CSV to generate this report.</p>
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-[380px,1fr]">
            <div className="rounded-3xl bg-surface-container p-6">
              <h2 className="text-xl font-bold">All Expense Categories</h2>
              <div className="relative mx-auto mt-6 h-72 w-72">
                <svg className="h-full w-full -rotate-90" viewBox="0 0 120 120">
                  {segments.map((segment) => {
                    const isActive = activeSegment?.category === segment.category;
                    const isDimmed = Boolean(activeSegment) && !isActive;

                    return (
                    <circle
                      key={segment.category}
                      cx="60"
                      cy="60"
                      r={radius}
                      fill="transparent"
                      stroke={segment.color}
                      strokeWidth={isActive ? strokeWidth + 4 : strokeWidth}
                      strokeDasharray={segment.dashArray}
                      strokeDashoffset={segment.dashOffset}
                      style={{
                        opacity: isDimmed ? 0.35 : 1,
                        cursor: "pointer",
                        transition: "opacity 180ms ease, stroke-width 180ms ease",
                      }}
                      onMouseEnter={() => setActiveCategory(segment.category)}
                      onMouseLeave={() => setActiveCategory(null)}
                    />
                    );
                  })}
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant">{activeSegment ? activeSegment.category : "Total Expenses"}</p>
                  <p className="mt-1 text-3xl font-black">{formatCurrency(activeSegment ? activeSegment.spent : totalSpent)}</p>
                  <p className="mt-1 text-xs text-on-surface-variant">{activeSegment ? `${activeSegment.percent.toFixed(2)}% of total` : `${segments.length} categories`}</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-surface-container p-6">
              <h2 className="text-xl font-bold">Category Breakdown</h2>
              <div className="mt-4 space-y-3">
                {segments.map((segment) => {
                  const isActive = activeSegment?.category === segment.category;
                  return (
                  <div
                    key={segment.category}
                    className={`flex items-center justify-between rounded-xl p-4 transition-all duration-200 ${isActive ? "bg-surface-container-highest ring-1 ring-primary/35" : "bg-surface-container-high hover:bg-surface-container-highest"}`}
                    onMouseEnter={() => setActiveCategory(segment.category)}
                    onMouseLeave={() => setActiveCategory(null)}
                    role="button"
                    tabIndex={0}
                    onFocus={() => setActiveCategory(segment.category)}
                    onBlur={() => setActiveCategory(null)}
                  >
                    <div className="flex items-center gap-3">
                      <span className="h-3 w-3 rounded-full" style={{ backgroundColor: segment.color, boxShadow: isActive ? `0 0 0 6px ${segment.color}33` : "none" }} />
                      <span className="font-semibold">{segment.category}</span>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{formatCurrency(segment.spent)}</p>
                      <p className="text-xs text-on-surface-variant">{segment.percent.toFixed(2)}%</p>
                    </div>
                  </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SpendingReportPage;
