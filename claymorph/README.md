Claymorph is a soft, tactile interface style: every surface looks like a puffy object pressed out of modelling clay. Shapes are round and generous, colours are warm pastels on a putty ground, and depth comes from a three-part shadow instead of borders. It suits friendly consumer products: habit trackers, learning apps, kids' and wellbeing tools, playful dashboards.

## Principles

- **Objects, not panels.** Every interactive thing is a rounded body that sits on the surface (`shadow-clay`, `shadow-clay-sm`) or is pressed into it (`shadow-clay-pressed`). Raised means "you can press this"; sunken means "you can type or slide here".
- **Depth separates, lines don't.** No borders on cards, buttons or inputs. Use `line` only for a rare divider inside a card.
- **Few colours, big fields.** Putty `surface` everywhere, one `clay` primary, `mint` and `butter` as accents. A screen shows at most two accent fills at once.
- **Round everything.** The smallest corner is `radius-sm` (12px).

## Voice

Warm, short and plain. Sentence case everywhere, verbs first on buttons ("Save changes", "Mark done"), second person ("your week"). No exclamation marks in UI chrome, no emoji as decoration.

## Colour

- Page: `surface`. Cards, menus, secondary buttons: `surface-raised`. Inputs and tracks: `surface-sunken`.
- Text: `ink` for body, `ink-muted` for hints and metadata. Both pass 4.5:1 on all three surfaces in both themes.
- Primary fill: `clay` with `on-clay` text, never white. Clay as text, links and focus: `clay-text` (`link` is its alias).
- Accents: `mint` with `on-mint`, `butter` with `on-butter`. Never set `ink` on `butter` (it fails in dark).
- Tints: `clay-soft`, `mint-soft`, `danger-soft` behind matching text (`clay-text`, `mint-text`, `danger`) or `ink`.
- Status: success is `mint-text`, error is `danger`; they differ strongly in lightness and always carry a word ("Done", "Error: ...").

## Depth: the clay shadow

The look comes from stacking three shadows on one fill:

1. a soft warm drop shadow down-right (the object casts it on the surface),
2. a dark inset shade on the bottom-right inner edge (the object's own curve),
3. a white inset highlight on the top-left inner edge (the light catching it).

Use the tokens, never hand-written shadows:

| Token | Use |
| --- | --- |
| `shadow-clay-sm` | Buttons, badges, switch knob |
| `shadow-clay` | Cards, blocks |
| `shadow-clay-lg` | Dialogs, menus, a hovered card |
| `shadow-clay-pressed` | Inputs, switch track, a button while held |

Shadows fall 10 to 20px away, so leave at least `space-4` between clay objects and `space-8` between cards.

## Type

- Display face: Fredoka (`--font-display`) in `display-xl`, `display`, `heading`. Big moments only.
- Text face: Nunito (`--font-sans`) in `title`, `body`, `label`, `caption`. Rounded terminals match the shapes.
- Both are hosted on Google Fonts; `components/bundle.css` imports them. Outside the bundle load `https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600&family=Nunito:wght@400;600;700;800&display=swap`.

## Shape and spacing

- Buttons and inputs `radius-md`, cards and dialogs `radius-lg`, badges and switches `radius-full`.
- 4px spacing base: `space-1` to `space-12`. Card padding `space-6`; page sections `space-12` apart.

## Motion and states

- Hover: lift 2px (buttons) or 4px with `shadow-clay-lg` (interactive cards), 160 to 200ms ease-out.
- Press: sink 1px, scale to 0.98 and swap to `shadow-clay-pressed`. Things should feel squishy, not clicky.
- Switch knob springs (`cubic-bezier(.34,1.56,.64,1)`, 200ms).
- Focus: `focus-ring` (3px surface gap, then 3px solid `clay-text`, 5:1 or better on every surface), stacked before the element's own clay shadow.
- Disabled: 55% opacity and the pressed shadow, no lift.
- Respect `prefers-reduced-motion`: drop lifts and springs, keep the shadow swaps.

## Iconography

No icon set ships with this system yet. Use a rounded line set at 24px with 2px strokes and round caps and joins (Phosphor "regular" or Lucide fit), in `ink` or the matching `on-` colour. Icons can sit inside a `radius-full` clay disc with `shadow-clay-sm` for feature tiles. No emoji as icons.

## Using the components

Components live in `components/bundle.js` as `window.Claymorph` (Button, Card, TextField, Switch, Badge) and expect React 18 on the page, with `components/bundle.css` and the tokens stylesheet loaded.
