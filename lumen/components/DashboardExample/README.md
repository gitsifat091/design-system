# DashboardExample

A complete overview screen composed only from Lumen components and tokens: Sidebar, Topbar, page header, StatCards, a chart Card, a usage Card and a Table.

Layout rules it demonstrates:

- App shell: Sidebar on `bg` at `sidebar-width`, main column with a Topbar at `topbar-height`, content padded `space-8` and capped at `content-max`.
- Page header: `heading-1` title with a one-line `fg-muted` subtitle on the left; range toggle, a secondary and one primary button on the right.
- Grid gaps: `space-4` between KPI tiles, `space-6` between cards and page sections.
- Charts use one emphasis color: the current period in `primary`, history in a muted neutral; gridlines in `border`, labels in `caption` / `fg-muted`.
- A table inside a card uses `flush` so rows run edge to edge.
