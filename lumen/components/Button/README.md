# Button

Buttons start an action; one primary button per view marks the thing the page exists to do.

**Provide** a short verb-first label as children (sentence case: "Create project", not "Project Creation"), and optionally `variant`, `size`, `icon`, `iconRight`, `loading`, `disabled`, `block` or `href`.

| Variant | Use for |
| --- | --- |
| `primary` | The main action of a page, card or dialog. At most one per region. |
| `secondary` | Other actions beside a primary; standalone actions in toolbars. |
| `ghost` | Low-emphasis actions: Cancel, icon buttons in headers and tables. |
| `danger` | Irreversible destruction only, usually inside a confirm dialog. |

- Sizes follow the control scale: `sm` = `control-sm` for tables and dense toolbars, `md` = `control-md` default, `lg` = `control-lg` for auth and touch screens.
- Order: primary on the right of a button group, Cancel to its left.
- Icon-only buttons must have `aria-label`.
- `loading` shows a spinner, keeps the label and disables the button; do not swap the label for "Loading...".
- Do not disable a submit button to signal invalid input; keep it enabled and show field errors.
- The `state` prop only forces the hover, pressed or focus look for documentation.
