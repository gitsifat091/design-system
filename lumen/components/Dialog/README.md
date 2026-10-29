# Dialog

A modal that interrupts the flow for a decision or a short focused task.

**Provide** `open`, `onClose`, `title`, and optionally `description`, `icon`, `tone` (`danger` for destructive confirms), children for form content, `footer` buttons and `width` (default 440px).

- Sits on `surface-overlay` with `shadow-lg` and `radius-lg` over the `scrim`. Escape and a click on the scrim call `onClose`.
- Title is a question or the task ("Delete workspace?", "Invite members"). The confirm button repeats the verb ("Delete workspace"), never "OK" or "Yes".
- Footer: Cancel as secondary on the left, the action on the right. Destructive actions use `danger`.
- Move focus into the dialog when it opens and back to the trigger when it closes.
- Do not stack dialogs, and do not use one for content longer than a screen; use a page.
