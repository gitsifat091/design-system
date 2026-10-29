Ivory & Ink is a minimal, premium design system for calm, content-first products. Warm ivory and deep ink do almost all the work; a single brass accent marks what matters. Space, hairlines and a refined serif carry the premium feel, not effects.

## Principles

- **Restraint first.** Two neutrals and one accent. If a screen needs a second accent, the hierarchy is wrong.
- **Borders, not shadows.** Separate with 1px `line` hairlines. Shadows are only for things that float (menus, dialogs).
- **Generous space.** Default to the larger spacing step. Cards breathe at `space-5`; sections at `space-7`.
- **Serif for voice, sans for work.** `display` styles set the tone in headlines; everything interactive is `sans`.
- **Same in both themes.** Every token has a light and a dark value; never hard-code a color.

## Content fundamentals

- Sentence case everywhere: "Save changes", "Account settings". Uppercase only in the `overline` style.
- Short, plain and calm. No exclamation marks, no hype words ("amazing", "revolutionary"), no emoji in the UI.
- Speak to the user as "you"; the product does not say "we" in controls.
- Buttons start with a verb and stay under three words. Errors say what happened and how to fix it: "Enter a full email address, like name@domain.com."
- Numbers use tabular figures (`numeric-lg`, `mono`). Currency sits before the value: "৳ 4,82,500".

## Color

- Page: `canvas`. Raised: `surface`, bordered with `line`. Recessed (sidebars, table heads, tracks): `surface-sunken`.
- Text: `ink` for primary, `ink-muted` for secondary, `ink-faint` only for placeholders and disabled labels.
- Primary actions are `ink` fills with `on-ink` labels. This is the signature: black on ivory in light, ivory on black in dark.
- `brass` is the only accent: links, the active nav underline, a selected card ring, the one highlighted bar in a chart. Text on a brass fill is `on-brass`.
- Status uses `success`, `warning`, `danger` as text on their `-soft` grounds, always with a word or icon.
- Overlays use `scrim`. Focus uses `focus`.
- Every text pair named in a token's usage note holds 4.5:1 or better in both themes; borders that define controls (`line-strong`) and the `focus` ring hold 3:1 or better.

## Typography

- Families: `display` (Instrument Serif), `sans` (Instrument Sans), `mono` (IBM Plex Mono), all from Google Fonts. Load them as `components/bundle.css` does.
- Marketing headlines: `display-xl`, `display-lg`. App page titles: `title-lg` in sans. A `display-md` greeting or section opener is allowed once per app screen.
- Body copy: `body` (15/24). Long reading: `body-lg`. Metadata and helper text: `body-sm` in `ink-muted`.
- Labels and nav: `label`. Eyebrows: `overline`, uppercase.
- Figures, prices and IDs: `numeric-lg` and `mono`.
- Italic serif is an accent: use it for one word in a headline, or the ampersand in the wordmark, in `brass`.

## Spacing and layout

- 4px base: `space-1` (4) to `space-9` (96). Default gap `space-4`; card padding `space-5`; between cards `space-6`; between sections `space-7`.
- Control heights: `control-sm` (32), `control-md` (40, default), `control-lg` (48). Top bar: `nav-height`.
- Reading width tops out around 720px. App content uses a 232px sidebar plus a fluid main column.

## Shape and elevation

- Radius: `radius-xs` checkboxes, `radius-sm` buttons and inputs, `radius-md` cards and menus, `radius-lg` dialogs, `radius-full` toggles and avatars.
- Elevation: none at rest. `shadow-md` for menus and hovered interactive cards, `shadow-lg` for dialogs. `shadow-sm` only for the selected segment of a segmented control.

## States and motion

- One state model for every control: default, hover, focus, selected, error, disabled (see the States card).
- Keyboard focus: a 2px solid `focus` ring outside a 2px `canvas` gap. Never remove it.
- Motion: 150ms ease on color, border and shadow. No bounces, no slide-ins on content.

## Iconography

- No icon set is bundled. Use a single-weight line set at 1.5px stroke (Lucide matches well), 16px in controls and 20px in empty states, colored with `currentColor`.
- Icons never stand alone for meaning without a label or `aria-label`.

## Components

Styles live in `components/bundle.css` as plain CSS classes prefixed `ii-` (no JavaScript bundle). Load the tokens, then `bundle.css`, and use the markup shown in each component's preview: Button, Input, Selection, Badge, Card, Navigation and States, plus three full-screen examples (Dashboard, Sign in, Settings).

## Don'ts

- No gradients, glows or glassmorphism.
- No colored left-border cards, no emoji decoration.
- No more than one `brass` button per screen; never `brass` for an ordinary save.
- No pure `#000` or `#fff`; use `ink` and `surface`.
