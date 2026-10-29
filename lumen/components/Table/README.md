# Table

A data table for comparing records: header on `surface-subtle`, rows on `surface`, hairline `border` rules.

**Provide** `columns` (`{ key, label, align, width, render }`) and `rows` (objects with those keys, an `id`, and optional `_selected`). Optional: `dense`, `caption` (read by screen readers).

- Right-align numbers and money (`align: 'right'`); they render with tabular figures. Left-align everything else.
- Put the identifying column first; status second or third as a Badge; row actions last in a ghost icon button.
- Header text is `caption` size in `fg-muted`, sentence case, no units in cells when the header can carry them.
- Hover shades the row `surface-subtle`; selection uses `primary-soft` plus a checked Checkbox, never color alone.
- `dense` (space-2 by space-3 cells) for admin lists over 20 rows; default otherwise.
- Wrap a full-width table in a Card with `flush`, or use it bare; do not put padding around it inside a card.
