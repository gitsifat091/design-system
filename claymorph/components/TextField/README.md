# TextField

A pressed-in clay well with a label above it. Provide `label` (required), optional `hint` and `error`, and any input props (`value`, `onChange`, `placeholder`, `type`).

- The well is `surface-sunken` with `shadow-clay-pressed`, so fields read as pushed into the surface while buttons stick out of it.
- `error` replaces the hint, tints the well `danger-soft` and is read out with an "Error:" prefix; never rely on the colour alone.
- Placeholders are examples ("e.g. Read 10 pages"), never the label.
