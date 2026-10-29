# TextField

A labelled single-line or multi-line text input with hint, error, icon and affix slots.

**Provide** `label` (always; use `aria-label` only where a visible label is impossible, such as a search box), plus any native input props (`value`, `onChange`, `type`, `placeholder`). Optional: `hint`, `error`, `icon`, `prefix`, `suffix`, `trailing`, `required`, `optional`, `size`, `multiline`, `rows`.

- Label above the field in `label` style; hint and error below in `caption` style. An `error` replaces the hint and sets `aria-invalid`.
- Write errors as what to do, not what went wrong in system terms: "Enter an email like name@company.com".
- Edges use `border-strong` (3:1 on every surface); focus swaps the edge to `primary` and adds `focus-ring`; errors swap it to `danger`.
- Placeholder is an example, never the label. Mark the minority: if most fields are required, mark the optional ones with `optional`.
- `readOnly` is for values the user can copy but not change; `disabled` for fields that do not apply right now.
- Default width fills its container; size forms in columns, not by fixed input widths.
