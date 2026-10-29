# Badge

A short, non-interactive label for status or category, one or two words.

**Provide** children (the word), and optionally `tone`, `icon`, `dot`, `pill`.

| Tone | Text on ground | Meaning |
| --- | --- | --- |
| `neutral` | `fg` on `surface-subtle` | Draft, archived, version numbers |
| `primary` | `primary` on `primary-soft` | In progress, plan names |
| `success` | `success` on `success-soft` | Paid, active, healthy |
| `warning` | `warning` on `warning-soft` | Needs attention soon |
| `danger` | `danger` on `danger-soft` | Failed, blocked |

- The word carries the meaning; color only reinforces it. Status badges add an icon or dot so they survive grayscale and color blindness.
- Sentence case, no punctuation. Never make a badge clickable; use a Button or a filter Tab.
