import addExpenseHtml from "../add_expense/code.html?raw";
import addExpenseFixedHtml from "../add_expense_fixed_layout/code.html?raw";
import budgetsCategoriesHtml from "../budgets_categories/code.html?raw";
import dashboard3Html from "../dashboard_3/code.html?raw";
import settingsHtml from "../settings/code.html?raw";
import transactionsListHtml from "../transactions_list/code.html?raw";

const normalizeMarkup = (html) =>
  html
    .replace(/\sdata-alt="[^"]*"/g, "")
    .replace(/\sdata-icon="[^"]*"/g, "");

const toLegacyPage = (title, html) => ({
  title,
  html: normalizeMarkup(html),
});

export const legacyPages = {
  "/dashboard-3": toLegacyPage("Dashboard 3", dashboard3Html),
  "/add-expense": toLegacyPage("Add Expense", addExpenseHtml),
  "/add-expense-fixed-layout": toLegacyPage("Add Expense Fixed Layout", addExpenseFixedHtml),
  "/budgets-categories": toLegacyPage("Budgets & Categories", budgetsCategoriesHtml),
  "/settings": toLegacyPage("Settings", settingsHtml),
  "/transactions-list": toLegacyPage("Transactions", transactionsListHtml),
};

export const navLinks = [
  { path: "/dashboard-3", label: "Dashboard 3" },
  { path: "/transactions-list", label: "Transactions" },
  { path: "/add-expense", label: "Add Expense" },
  { path: "/add-expense-fixed-layout", label: "Add Expense Fixed" },
  { path: "/budgets-categories", label: "Budgets" },
  { path: "/settings", label: "Settings" },
];
