# Card

A bordered container that groups related content on `canvas`.

**Provide:** content (a title in `title`, body in `body`), optionally media at the top (`ii-card-media`), and a footer row (`ii-card-foot`) for metadata and one action.

- `surface` fill, 1px `line` border, `radius-md`, padding `space-5`. No shadow at rest.
- Stat card: overline label, value in `numeric-lg` (mono, tabular), delta in `success` or `danger` with a sign.
- Interactive (`is-interactive`): on hover the border moves to `line-strong` and `shadow-md` appears. The whole card is one link target.
- Selectable (`is-selected`): `brass` border plus a 1px `brass` ring, paired with a radio so the state is not color only.
- Gap between cards `space-6`. Don't nest cards, and don't add colored left borders.
