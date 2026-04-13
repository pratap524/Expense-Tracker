# Design System Document: Financial Precision & Tonal Depth

## 1. Overview & Creative North Star: "The Financial Architect"
This design system moves away from the cluttered, line-heavy aesthetic of traditional banking apps toward a "Financial Architect" philosophy. The goal is to instill confidence through **Structural Serenity**. We achieve this by replacing rigid borders with tonal layering and utilizing aggressive whitespace to allow complex financial financial data to breathe. The overall feel is now **dark** and sophisticated.

The system treats the UI as a series of physical, architectural planes. By using intentional asymmetry—such as offsetting large display typography against dense data tables—we create an editorial feel that suggests sophistication and high-level oversight rather than just "tracking."

---

## 2. Colors: Tonal Logic over Structural Lines
Our palette is anchored in muted Indigos and cool Grays, designed to feel authoritative yet modern in a **dark mode** context.

### The "No-Line" Rule
**Prohibit 1px solid borders for sectioning.** Boundaries must be defined solely through background color shifts.

### Surface Hierarchy & Nesting
Treat the UI as stacked sheets of fine paper, adapted for a **dark theme**.

### The "Glass & Gradient" Rule
For "Floaters" (floating action buttons, navigation bars, or quick-entry widgets), use Glassmorphism. Apply a semi-transparent `surface` color with a 20px-40px `backdrop-blur`.

### Signature Textures
Main CTAs and Hero Graphs should use a subtle linear gradient (135°) from `primary` (#6978a9) to a slightly lighter variant. This depth prevents the color from feeling "flat" or "default."

---

## 3. Typography: Editorial Clarity
We utilize a dual-font strategy to balance character with legibility.

*   **Display & Headlines (Manrope):** A geometric sans-serif that feels engineered. Use `display-lg` (3.5rem) for total balance summaries to create a high-contrast, editorial hierarchy.
*   **Body & Labels (Inter):** The workhorse for transaction lists. Inter’s high x-height ensures that numbers and dates are legible even at `body-sm` (0.75rem).

**Hierarchy as Identity:**
*   **Big Numbers:** Use `headline-lg` in `on-surface` for primary currency amounts.
*   **Secondary Context:** Use `label-md` in `on-surface-variant` for transaction categories and timestamps.

---

## 4. Elevation & Depth: The Layering Principle
Hierarchy is achieved through **Tonal Layering** rather than drop shadows.

*   **Natural Lift:** Use tonal shifts to create soft, natural separation.
*   **Ambient Shadows:** If a floating element (like a FAB) requires a shadow, use a large blur (30px+) at 6% opacity. Use a tinted shadow to mimic natural light refraction.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use `outline-variant` at **15% opacity**. Never use a 100% opaque border.

---

## 5. Components

### Cards & Lists
*   **The Rule:** Forbid divider lines.
*   **Execution:** Use 16px of vertical whitespace to separate list items. For group headers, use a subtle `surface-variant` background fill behind the header text to create an "anchor" for the eye.

### Buttons
*   **Primary:** Gradient fill (using `primary` (#6978a9)), `rounded-lg` (0.5rem). No shadow.
*   **Secondary:** `surface-container-highest` background with `on-primary-fixed-variant` text.
*   **Tertiary:** Ghost style. No background; text-only using `primary` (#6978a9) with an icon.

### Input Fields
*   **Style:** Filled containers using `surface-container-high`.
*   **Focus State:** Instead of a border, use a 2px outer glow of `primary` at 20% opacity.
*   **Validation:** Error states use `error` text but the background shifts to `error-container` for high-scannability.

### Transaction Chips
*   **Categories:** Use `tertiary-container` for "Income" and `error-container` for "Expenses." Shape should be `rounded-full` (9999px) for high contrast against rectangular cards.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use asymmetrical spacing. A 40px left margin vs. a 24px right margin on tablet views creates a sophisticated, "magazine" feel.
*   **Do** use `tertiary` (#866e98) sparingly as a "success" or "growth" signal.
*   **Do** allow the background color to bleed through semi-transparent navigation elements.

### Don't:
*   **Don't** use pure black for text. Always use `on-surface` to maintain a soft, premium feel in **dark mode**.
*   **Don't** use 1px dividers to separate transactions. Use color blocking or white space.
*   **Don't** use standard Material Design "elevated" shadows. They feel like templates. Stick to tonal shifts.