Lumen is a reusable design system for professional SaaS products: dashboards, admin tools, billing and settings screens. Quiet surfaces, one strong blue, built on a 4px grid. Every value lives in `tokens.json` with a light and a dark theme; components are React 18 and live in `components/bundle.js` as `window.Lumen`.

## Principles

1. **Content first, chrome quiet.** Neutral surfaces and hairline borders carry structure. Color is reserved for action (`primary`) and status (`success`, `warning`, `danger`).
2. **One primary action per view.** If everything is blue, nothing is.
3. **Dense but calm.** 14px working text, 36px controls, generous gaps between groups rather than inside them.
4. **Accessible by default.** Text holds 4.5:1 and control edges 3:1 in both themes; every status pairs color with an icon or word; focus is always visible.
5. **Same layout, both themes.** Dark is not an inversion: surfaces step lighter as they rise, accents lighten, and labels on accent fills turn dark.

## Content fundamentals

- **Voice:** plain, direct, calm. Say what happened and what to do next. No exclamation marks, no jokes in errors, no emoji in product UI.
- **Person:** "you" for the user, "we" only for the company in legal or billing copy. Never "my" in labels ("Settings", not "My settings").
- **Casing:** sentence case everywhere: buttons, titles, tabs, menu items. Uppercase only through the `overline` style.
- **Buttons:** verb first, specific. "Create project", "Send invoice", "Delete workspace". Never "OK", "Submit" or "Yes".
- **Errors:** the problem and the fix in one line. "This URL is already taken. Try northwind-labs." not "Error 409: conflict".
- **Numbers:** numerals always ("3 members"), thousands separators, currency symbol before the amount ("$4,200.00"), dates as "Oct 18, 2026". Right-align numbers in tables.
- **Empty states:** one sentence on what will appear here, one primary button to make the first one.

## Color

Semantic tokens only; never hard-code hex values in components.

| Role | Tokens | Rule |
| --- | --- | --- |
| Grounds | `bg`, `surface`, `surface-subtle`, `surface-overlay` | `bg` is the canvas and sidebar; content sits on `surface` in cards; `surface-subtle` for table headers, hovers and tracks; `surface-overlay` for anything floating. |
| Lines | `border`, `border-strong` | `border` for decorative hairlines and dividers; `border-strong` for the edges of inputs, checkboxes, switches and secondary buttons (3:1 on every ground). |
| Text | `fg`, `fg-muted`, `fg-disabled` | `fg` for content, `fg-muted` for secondary text and placeholders, `fg-disabled` only for disabled controls. |
| Brand | `primary`, `primary-hover`, `primary-pressed`, `primary-soft`, `on-primary` | The one blue. Fills for the primary button, active nav, selected states, links and focus. Text on a primary fill is always `on-primary`, never literal white. |
| Status | `success`, `warning`, `danger`, `info` plus each `*-soft`; `on-danger` | Status text on its `*-soft` ground or on `surface`. `info` aliases `primary`. Always with an icon or word. |
| Utility | `focus`, `link`, `scrim` | Aliases and the dialog backdrop. |

Proportions on a typical screen: about 90% neutrals, under 8% `primary`, the rest status.

## Typography

Geist for interface text, Geist Mono for code and IDs (both from Google Fonts; fall back to the system UI font). Styles map to `tokens.json` `type`:

- `display` 40/48 for marketing and empty-state headlines only.
- `heading-1` 30/38 page title, once per page. `heading-2` 22/30 sections and dialog titles. `heading-3` 17/24 card titles.
- `body` 14/20 is the default for UI; `body-lg` 16/24 for reading (docs, onboarding, auth).
- `label` 13/18 medium for form labels and nav; `caption` 12/16 for hints, errors and timestamps; `overline` 11/16 uppercase for group labels.
- `metric` 28/36 for KPI values; `code` 13/20 mono for keys, IDs and code.
- Turn on tabular figures (`font-variant-numeric: tabular-nums`) for any number that is compared in a column or updates live.
- Headings tighten tracking as size grows; never letter-space body text.

## Spacing and layout

- 4px base: `space-1` (4) to `space-16` (64). Use 1 to 4 inside components, 4 to 8 between components, 8 to 16 between page regions.
- App shell: Sidebar at `sidebar-width` on `bg`; Topbar at `topbar-height` on `surface`; page content padded `space-8`, capped at `content-max`.
- Grids: `space-4` between KPI tiles, `space-6` between cards. Forms in one or two columns with `space-5` gaps.
- Controls: `control-sm` 32px (tables, toolbars), `control-md` 36px (default), `control-lg` 44px (auth, touch).
- Responsive: below 960px the sidebar becomes a drawer; below 640px grids collapse to one column and page padding drops to `space-4`.

## Shape and elevation

- Radius grows with size: `radius-xs` checkboxes and badges, `radius-sm` buttons and inputs, `radius-md` menus and alerts, `radius-lg` cards, tables and dialogs, `radius-full` avatars, switches and pills.
- Borders, not shadows, separate content. Shadows only mean "this floats": `shadow-xs` on controls at rest, `shadow-sm` elevated cards, `shadow-md` hover and menus, `shadow-lg` dialogs and toasts. Dark-theme shadows are darker and tighter.

## States

Every interactive component follows the same ladder (see the StateMatrix card):

- **Hover:** one shade step (`primary-hover`, or `surface-subtle` for neutral fills; input edges to `fg-muted`).
- **Focus:** the `focus-ring` shadow, a 2px `surface` gap then a solid 2px `primary` ring, on `:focus-visible` only. Never removed.
- **Pressed:** a second step (`primary-pressed`, `border`). No scale or movement.
- **Selected or current:** `primary` text on `primary-soft`, or a `primary` edge.
- **Disabled:** `fg-disabled` on `surface-subtle`, `border` edge, no shadow.
- **Error:** `danger` edge, icon and an actionable message under the field.
- **Loading:** spinner replaces the leading icon; label stays; control disabled.

## Motion

Short and functional: 120ms ease for color and border changes, 150ms for position (switch thumb, menus). Nothing bounces. Respect `prefers-reduced-motion`.

## Iconography

- One outline set drawn on a 24px grid with a 1.75px stroke, round caps and joins, shipped inside the bundle as the `Icon` component (33 glyphs). Icons inherit `currentColor`.
- Sizes: `icon-md` 20px default, `icon-sm` 16px in small controls and badges.
- No filled icons, no emoji, no mixing with other icon sets. New icons follow the same grid and stroke.
- Icons are decorative unless they stand alone; icon-only buttons always carry `aria-label`.

## Brand mark

There is no logo file. The wordmark is "Lumen" set in Geist semibold beside a 10px `primary` square with a 3px radius (see the Sidebar). Replace it with a real mark when one exists.

## Using this system

- Load `tokens.css`, then `components/bundle.css`, then React 18, ReactDOM 18 and `components/bundle.js`; components are on `window.Lumen` (`Lumen.Button`, `Lumen.TextField`, ...). Prop types are in `components/index.d.ts`.
- Theme switching: set `data-theme="light"` or `data-theme="dark"` on `<html>`. Light is the fallback.
- Compose screens from the components and the layout helpers in `bundle.css` (`lm-shell`, `lm-main`, `lm-page`, `lm-page-head`, `lm-grid`, `lm-row`, `lm-col`). The Examples group shows a dashboard, a settings page and a sign-in screen built only from these parts.
- The `state` prop on components forces hover, focus or pressed looks for documentation pages; do not use it in product code.
