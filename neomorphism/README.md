# Neomorphism

Soft UI carved from one material. Every surface is the same colour as the page; depth comes only from a pair of shadows cast by a light in the top-left corner.

## Principles

1. **One material.** Cards, buttons and toggles use `surface`, the page colour. Wells use `surface-sunken`. No other fills, except `accent`.
2. **One light.** `shadow-dark` falls down-right, `shadow-light` up-left. Never flip it per element.
3. **Raised means touchable, sunken means input.** Buttons and cards use `raised-*`; fields and tracks use `inset-sm`; a press swaps to `pressed`.
4. **One hue.** `accent` marks the primary action and "on" states. Everything else is grey.
5. **Shadows are decoration, not signal.** Focus, errors and disabled states always get an outline or text change too.

## Colour

- Text: `ink` for content, `ink-muted` for labels and captions. Both pass 4.5:1 on `surface` and `surface-sunken` in both themes.
- Accent text in light theme is `accent-text`, not `accent` (accent is only 3.8:1 as text).
- `line` is for control outlines on `surface` only.
- Status: `success` and `danger`, always paired with an icon or words.

## Type

Nunito (Google Fonts, loaded by `components/bundle.css`), weights 500 to 800. Body is 500: on a soft grey ground, 400 looks washed out. Styles: `display`, `title`, `heading`, `body`, `label`, `caption`.

## Space and shape

Spacing steps `space-1` to `space-12` (4px base). Raised elements need at least `space-6` of air or their shadows collide. Radii are generous: `radius-md` for controls, `radius-lg` for cards, `radius-pill` for toggles.

## Accessibility

Neumorphism's known weakness is that a raised button and a flat panel can look the same to low-vision users. This system answers it by: a mandatory 2px `focus` ring, a dashed outline on disabled controls, real labels on every field, and `accent` fill on the primary action so it does not rely on shadow alone.

## Iconography

No icon set yet. Use a rounded 2px-stroke outline set in `ink`, 20px in controls.

## Components

Button, Card, Input, Toggle. Plain HTML and CSS classes (`nm-*` in `components/bundle.css`); no JavaScript bundle.
