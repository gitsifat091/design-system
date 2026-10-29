# Navigation

Top bar, sidebar, tabs and breadcrumbs. Navigation stays quiet so content leads.

**Provide:** the wordmark, 3 to 6 top-level links, the current location (`is-active`), and for the sidebar an icon per item (16px line icons) with optional counts.

- Top bar (`ii-topnav`): `nav-height` tall on `canvas` with a `line` bottom border. The active link is `ink` with a 2px `brass` underline; others are `ink-muted`.
- Sidebar (`ii-side`): 232px on `surface-sunken`. The active item lifts to `surface` with a `line` inset and a `brass` icon.
- Tabs (`ii-tabs`): switch views within a page. Active tab gets a 2px `ink` underline.
- Breadcrumbs (`ii-crumbs`): `body-sm`, separators in `line-strong`, current page in `ink`.
- Wordmark: set in `display` at 24px; the ampersand may be `brass` italic. This is the only place italic serif appears in the app chrome.
