# Tabs

Switches between views of the same content without leaving the page.

**Provide** `items` (`{ value, label, icon, count, disabled }`) and `value` / `onChange`, or `defaultValue`. Optional: `variant` (`underline` default, `segmented`), `label` for the tablist.

- `underline` for page-level sections (Settings tabs, record views). The selected tab gets a 2px `primary` bar and `fg` text; others `fg-muted`.
- `segmented` for small view toggles inside a card or toolbar (date ranges, chart vs table).
- Arrow keys move between tabs; only the selected tab is in the tab order.
- Two to six tabs. Do not use tabs for steps in a sequence.
