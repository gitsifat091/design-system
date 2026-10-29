# States

Every interactive component follows the same six states, so behavior feels consistent everywhere.

| State | Treatment |
|---|---|
| Default | Border `line-strong`, fill `surface`, text `ink`. |
| Hover | One step stronger: border to `ink-muted` or fill to `surface-sunken`. No color shift to `brass`. |
| Focus (keyboard) | 2px solid `focus` ring outside a 2px `canvas` gap. Always visible, never removed. |
| Selected / on | `ink` fill with `on-ink` content, or a `brass` marker (nav underline, selected card ring). |
| Error | `danger` border plus a message with an icon below the control. |
| Disabled | `surface-sunken` fill, `line` border, `ink-faint` text, `not-allowed` cursor. |

Loading keeps the control's size and replaces its label with a spinner. Transitions are 150ms ease on color, border and shadow only.
