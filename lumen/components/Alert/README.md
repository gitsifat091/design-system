# Alert

An inline message about the page or a section: something the user should know or fix.

**Provide** `tone` and `title`, plus optional body text as children, `actions` (small secondary and ghost buttons) and `onClose`.

- Tones map to the status tokens: `info` uses `primary-soft` / `primary`, the rest their `*-soft` ground with the matching icon color; body text stays `fg` for reading.
- Each tone has a fixed icon (info, check, triangle, cross), so meaning never depends on color alone. `danger` and `warning` announce with `role="alert"`.
- Title says what happened in a few words; body says what to do next.
- Place at the top of the region it is about. Errors on a single field belong under that field, not in an Alert.
- Only `info` and `success` should be dismissible.
