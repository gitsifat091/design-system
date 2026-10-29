# Avatar

A round marker for a person or workspace, showing a photo or initials.

**Provide** `name` (used for initials and the accessible name), and optionally `src`, `size` (`sm` 24, `md` 32, `lg` 44), `tone` (`neutral` for workspaces and bots) and `status`.

- Initials are two letters: first and last name. Photos fill the circle with `object-fit: cover`.
- `status` dot uses `success`, `warning` or `fg-disabled`, ringed in `surface`. Show presence only where it changes a decision (chat, assignment).
- AvatarGroup overlaps by 8px with a `surface` ring; show at most four, then a "+N" count.
