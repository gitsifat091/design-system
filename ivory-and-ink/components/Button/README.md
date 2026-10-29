# Button

Buttons start an action; one primary per view, the rest secondary or ghost.

**Provide:** a short verb-first label in sentence case ("Save changes", not "SAVE"), an optional 16px leading or trailing icon, and `aria-label` when the button is icon-only.

| Variant | Class | When |
|---|---|---|
| Primary | `ii-btn-primary` | The main action of the view. `ink` fill, `on-ink` label. |
| Secondary | `ii-btn-secondary` | Alternatives and cancel. `surface` fill, `line-strong` border. |
| Ghost | `ii-btn-ghost` | Low-emphasis actions in toolbars and cards. |
| Accent | `ii-btn-accent` | Upsell or a single premium moment. `brass` fill. At most once per screen. |
| Danger | `ii-btn-danger` | Destructive actions, always behind a confirmation. |

Sizes: `ii-btn-sm` (`control-sm`, tables), default (`control-md`), `ii-btn-lg` (`control-lg`, hero and mobile).

**States:** hover darkens the fill one step; focus adds the 2px `focus` ring with a 2px `canvas` gap; loading hides the label and shows a spinner but keeps the width; disabled uses `surface-sunken` and `ink-faint`.

- Do: keep labels to three words or fewer.
- Don't: put two primary buttons side by side, or use `brass` for ordinary saves.
