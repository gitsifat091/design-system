# Card

A bordered container that groups one topic: a form section, a chart, a list, a choice.

**Provide** children, and optionally `title`, `description`, `actions` (top right; usually ghost icon buttons), `footer` (right-aligned buttons), `variant` and `flush` (removes body padding for tables and lists that run edge to edge).

| Variant | Look | Use for |
| --- | --- | --- |
| `outlined` | `surface`, `border`, `radius-lg` | Default. Most page content. |
| `elevated` | plus `shadow-sm` | Content over a busy or tinted background. |
| `interactive` | renders a `<button>`; `shadow-md` on hover; `primary` edge when `selected` | A card that is a single choice or link, like plan pickers. |

- Do not nest cards. Inside a card, separate parts with spacing or a `border` divider.
- Never put more than one primary button in a card footer.
- Interactive cards contain no other buttons or links.
