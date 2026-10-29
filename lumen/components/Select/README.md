# Select

A native select styled like TextField, for choosing one option from a short list.

**Provide** `label` and `options` (strings or `{ value, label, disabled }`), plus `value` / `onChange` or `defaultValue`. Optional: `placeholder`, `hint`, `error`, `icon`, `size`.

- Use for 4 to 15 options. Fewer than 4: radio-style segmented Tabs or Checkbox. More than 15, or searchable: build a combobox on the same field shell.
- Keep the native element so keyboard, screen readers and mobile pickers work without extra code.
- Order options logically (by frequency, alphabetically or by size), never randomly.
