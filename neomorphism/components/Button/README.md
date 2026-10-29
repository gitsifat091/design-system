# Button

A raised surface-coloured button that sinks (shadow `pressed`) when pressed.

- Classes: `nm-btn`, `nm-btn--primary` (accent fill, `on-accent` text). One primary per view.
- `aria-pressed="true"` keeps the pressed look for toggle buttons.
- Secondary buttons carry a 1px `line` outline (≥3.2:1) so their edge does not depend on the shadows alone. The primary button needs none: its accent fill is the edge.
- Disabled drops the shadow and gets a dashed `line` outline, so it never reads as merely "flat".
- Focus: 2px `focus` ring, offset 3px. Never remove it.
