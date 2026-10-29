# Topbar

The bar above page content: location on the left, search, notifications and account on the right, at `topbar-height`.

**Provide** `breadcrumbs` (or a plain `title`), and optionally `search` (set `false` to hide), `unread`, `actions` and `user`.

- Lives on `surface` with a bottom `border`; add `shadow-sm` only once content scrolls under it.
- Search is a small TextField with a keyboard hint; it opens the command palette.
- The notification dot uses `danger` and appears only when something needs action.
- Page actions belong in the page header, not here.
