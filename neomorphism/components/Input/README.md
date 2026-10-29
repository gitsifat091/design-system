# Input

A sunken text field (`surface-sunken` + `inset-sm`) with a visible label above and helper text below.

- Always a real `<label>`; never rely on placeholder text.
- Error: 2px `danger` outline plus `danger` helper text, so the state is not colour-only in the shadow.
- Do not draw a `line` border inside the well (it falls below 3:1 on `surface-sunken` in light).
