# Switch

A toggle for settings that take effect the moment they change.

**Provide** `label` (or `aria-label`) and `checked` / `onChange`, or `defaultChecked` for uncontrolled use. Optional: `disabled`.

- Use only where the change saves instantly; inside a form with a Save button, use Checkbox.
- The label names the setting, not the state: "Two-factor authentication", not "Turn on 2FA".
- Off track is `surface-subtle` with a `border-strong` edge; on track is `primary` with an `on-primary` thumb, so state never relies on color alone.
