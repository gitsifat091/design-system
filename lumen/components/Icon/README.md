# Icon

Outline icons drawn on a 24px grid with a 1.75px stroke and round joins; they inherit `currentColor`, so color them with the text token of their context.

**Provide** `name` (one of the 33 names shown) and optionally `size` (`md` 20px default from `icon-md`, `sm` 16px from `icon-sm`).

- Use `sm` inside small buttons, badges and inline text; `md` everywhere else.
- Icons are decorative by default (`aria-hidden`). When an icon is the only content of a control, put `aria-label` on the control; when it carries meaning on its own, pass `label`.
- Do pair status icons with a word. Do not use an icon as the only signal of success or failure.
- Do not mix in filled icons or other icon sets; add new glyphs on the same grid and stroke.
