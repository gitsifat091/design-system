# Breadcrumbs

Shows where the current page sits in the hierarchy and links back up it.

**Provide** `items` (`{ label, href }`); the last item is the current page and is not a link.

- Use when pages are more than two levels deep; usually inside Topbar.
- Text is `label` size in `fg-muted`, the current page in `fg`.
- Truncate the middle with an ellipsis menu beyond five levels.
