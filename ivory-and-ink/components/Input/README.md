# Input

Text inputs, search, select and textarea share one field shape: label above, control, helper or error below.

**Provide:** a visible label (`ii-label`, never placeholder-only), the control (`ii-input`, add `ii-select` on a `select`), optional helper text (`ii-help`), and for errors `is-error` on the control plus an `ii-help is-error` message that says how to fix it.

- Height `control-md`, radius `radius-sm`, border `line-strong` on `surface`.
- Placeholder in `ink-faint`; it is an example, not a label.
- Focus: border turns `ink` and the `focus` ring appears.
- Error: border and message in `danger`, with an icon so color is not the only signal.
- Disabled: `surface-sunken` fill, `line` border, `ink-faint` text.
- Gap between label and control `space-2`; between fields `space-5`.
