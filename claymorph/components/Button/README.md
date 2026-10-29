# Button

A puffy clay pill that lifts on hover and presses in when held. Provide `children` (the label, verb first, sentence case: "Save changes"), plus `variant` and `size`.

- `primary` (clay fill, `on-clay` text): once per view, for the main action.
- `secondary` (raised putty): everything else.
- `accent` (mint): a positive secondary action, such as "Mark done".
- `ghost` (clay-text, no body): low-priority actions inside cards.

Do keep space-4 or more around a button so its shadow can breathe. Don't stack two primaries side by side, and don't put a button on a clay card; use `secondary` there.
