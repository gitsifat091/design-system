# Selection

Checkbox, radio, toggle and segmented control for choosing options.

**Provide:** a label for every control (clicking the label toggles it) and a group heading for sets of radios or checkboxes.

- Checkbox (`ii-box`): multiple independent choices. Checked state is an `ink` fill with an `on-ink` check, corners `radius-xs`.
- Radio (`ii-radio`): one choice from a short list (2 to 5). For more, use a select.
- Toggle (`ii-toggle`): settings that apply immediately. Never inside a form with a Save button.
- Segmented (`ii-seg`): switching views of the same data (Day, Week, Month). Track `surface-sunken`, selected segment `surface` with `shadow-sm`.
- Unchecked borders use `line-strong` so the control holds 3:1 in both themes. Focus uses the `focus` ring.
