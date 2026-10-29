# Sidebar

The app's primary navigation: brand, grouped nav items and the signed-in user, fixed at `sidebar-width`.

**Provide** `sections` (each with an optional `label` and `items` of `{ label, icon, href, active, badge }`), plus optional `brand`, `user` and `onSelect`.

- Mark exactly one item `active`; it renders with `aria-current="page"`, `primary` text on `primary-soft`.
- Every item has an icon from the Icon set; labels are one or two words, nouns not verbs.
- Section labels use `overline` style. Keep to 2 or 3 sections and under 10 items in total.
- `badge` is for counts that need attention (unpaid invoices), not for totals.
- The sidebar sits on `bg` with a `border` on its right; content sits on `surface` in cards.
- Below 960px wide, collapse it into a drawer opened from the Topbar.
