# Checkbox

A checkbox for independent on/off choices in forms and for selecting rows.

**Provide** `label` and `checked` / `onChange` (or `defaultChecked`). Optional: `description`, `indeterminate`, `disabled`.

- Use Checkbox when the choice is applied on submit; use Switch when the change applies immediately.
- `indeterminate` is for a parent "select all" whose children are partly selected.
- Labels are positive statements ("Email me weekly reports"), never double negatives.
- The whole label is the hit target; the 18px box sits on the first line of text.
