# StatCard

A KPI tile: one labelled number, its change and its comparison period.

**Provide** `label`, `value` (pre-formatted, with unit), and optionally `delta`, `trend` (`up`, `down`, `flat`), `caption` and `icon`.

- Label in `overline` style, value in `metric` style with tabular figures, so columns of numbers line up.
- `trend` picks color and arrow: up = `success`, down = `danger`, flat = `fg-muted`. If "down" is good (churn, cost), still pass the true direction and say so in the caption; never flip colors silently.
- Always say what the delta compares against ("vs last month").
- Show 3 to 4 stats in a row; more belongs in a table.
