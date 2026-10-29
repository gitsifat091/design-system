# StateMatrix

Reference sheet showing how every interactive component looks at rest, hovered, focused, pressed and disabled.

How states are built, so new components match:

- **Hover**: fills step one shade (`primary` to `primary-hover`; neutral fills to `surface-subtle`); input edges darken to `fg-muted`.
- **Focus** (keyboard only, `:focus-visible`): the `focus-ring` shadow, a 2px `surface` gap then 2px `primary`. Never remove it; never show it on mouse click.
- **Pressed**: one more shade (`primary-pressed`, `border` for neutral fills). No movement or scale.
- **Selected / current**: `primary` text on `primary-soft` (nav, rows) or a `primary` edge (cards, tabs).
- **Disabled**: `fg-disabled` on `surface-subtle` with a `border` edge, no shadow, `not-allowed` cursor. Exempt from contrast, so pair with a hint explaining why when it is not obvious.
- **Error**: `danger` edge plus an icon and message below. In the matrix, "n/a" marks states that do not apply.
- **Loading**: a spinner in place of the leading icon, label kept, control disabled.
- Motion: 120ms ease for color, 150ms for position; reduced under `prefers-reduced-motion`.
