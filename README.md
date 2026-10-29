# design-system

Four design systems made with Claude, exported from their Claude Design System artifacts. Each folder holds that system's guidelines, tokens and components.

| System | Style | Components | Source artifact |
| --- | --- | --- | --- |
| [Claymorph](claymorph/) | Soft, puffy objects pressed out of warm clay. Pastel fills on a putty ground, depth from a three-part clay shadow. | Button, Card, TextField, Switch, Badge (React) | [claude.ai](https://claude.ai/artifact/JAjRX3Ufw9cWZmV7F6SUNG) |
| [Neomorphism](neomorphism/) | Soft UI carved from one material. Same-colour surfaces, depth from a light and a dark shadow. | Button, Card, Input, Toggle (CSS only) | [claude.ai](https://claude.ai/artifact/BNwvyk6SStZhZcECSaoaXt) |
| [Lumen](lumen/) | Professional SaaS: quiet surfaces, one strong blue, 4px grid. | 17 components plus dashboard, settings and sign-in examples (React) | [claude.ai](https://claude.ai/artifact/YKKdDurYvsHnuWJLGyiKtL) |
| [Ivory & Ink](ivory-and-ink/) | Minimal and premium. Ivory, ink and a single brass accent, serif headlines. | Button, Input, Selection, Badge, Card, Navigation, States plus three example screens (CSS only) | [claude.ai](https://claude.ai/artifact/TZBFT9MjFvNs5obzCicLsX) |

## What's in each folder

```
<system>/
  README.md            Principles, colour, type, spacing, states and usage rules
  tokens.json          Source of truth: colours (light and dark), type, spacing, radius, shadows
  tokens.css           CSS custom properties generated from tokens.json
  design-system.json   Metadata from the Claude artifact
  components/
    bundle.css         Component styles
    bundle.js          React components (Claymorph and Lumen only)
    index.d.ts         TypeScript prop types (Claymorph and Lumen only)
    <Component>/
      README.md        When and how to use it
      preview.html     Live example
```

## Using a system

Load the tokens, then the component styles:

```html
<link rel="stylesheet" href="lumen/tokens.css">
<link rel="stylesheet" href="lumen/components/bundle.css">
```

For Claymorph and Lumen, also load React 18 and the bundle; components are then on `window.Claymorph` or `window.Lumen`:

```html
<script src="https://unpkg.com/react@18.3.1/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js"></script>
<script src="lumen/components/bundle.js"></script>
```

Neomorphism and Ivory & Ink are plain HTML with CSS classes (`nm-*` and `ii-*`); copy the markup from each component's `preview.html`.

Light theme is the default. Set `data-theme="dark"` on `<html>` for dark; with no `data-theme`, the page follows the OS setting.

The `preview.html` files are the snippets the Claude viewer renders. They don't link the stylesheets themselves, so add the tags above when opening one directly.
