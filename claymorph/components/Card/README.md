# Card

The base clay object: a radius-lg body with `shadow-clay`. Provide `children` (usually an `h3` title and a `p`), an optional `tone`, and `interactive` when the whole card is a link or button.

- `raised` is the default; use it for most content.
- `clay`, `mint` and `butter` are for one featured card per row, never a whole grid.
- Pad with space-6; space-8 between cards so the shadows don't collide.

Don't nest cards. Don't add borders; depth does the separating.
