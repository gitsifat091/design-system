# SettingsExample

A settings page that shows form composition: underline Tabs, two-column sections, a validated form in a Card with a save footer, instant Switches, and a danger zone.

Form rules it demonstrates:

- Section layout: a 280px description column (`heading-3` + `fg-muted`) beside the card, `space-8` apart.
- Fields in a two-column grid with `space-5` gaps; full-width fields span both columns.
- Validation shows on the field (danger edge, icon, actionable message), not in a toast.
- Save and Discard live in the card footer, primary on the right. Switches save instantly, so their card has no footer.
- Destructive actions sit last, alone, behind a `danger` button that opens a confirm Dialog.
