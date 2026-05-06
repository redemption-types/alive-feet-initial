# aLIͥVͩEͥ FͩEͥEͩTͥ IͩNͩIͩTͩIͩAͩLͩA̶̠̰͉̰̞̗̺̓̓̃̾̾L̶̡̨̟̖̟̙̦̝̪̳̺͌̈́̇͂̾̋͘͘͘I̶̛̟̪͉͖̘̺̭̮̯̻͐̈́͌̏̐̓͐̀̚V̴̧̧͎͚̖͓̺͈̪̓̋̾͒͊͐̚͘̚ͅȨ̶̖̰̗̟̞͚̮̓̋̾͒͊͐̚͘̚ ̶̢̖̰̗̟̞͚̮̓̋̾͒͊͐̚͘̚F̶̢̖̰̗̟̞͚̮̓̋̾͒͊͐̚͘̚E̶̢̖̰̗̟̞͚̮̓̋̾͒͊͐̚͘̚E̶̢̖̰̗̟̞͚̮̓̋̾͒͊͐̚͘̚T̶̢̖̰̗̟̞͚̮̓̋̾͒͊͐̚͘̚ ̶̢̖̰̗̟̞͚̮̓̋̾͒͊͐̚͘̚I̶̢̖̰̗̟̞͚̮̓̋̾͒͊͐̚͘̚N̶̢̖̰̗̟̞͚̮̓̋̾͒͊͐̚͘̚I̶̢̖̰̗̟̞͚̮̓̋̾͒͊͐̚͘̚T̶̢̖̰̗̟̞͚̮̓̋̾͒͊͐̚͘̚I̶̢̖̰̗̟̞͚̮̓̋̾͒͊͐̚͘̚A̶̢̖̰̗̟̞͚̮̓̋̾͒͊͐̚͘̚L̶̢̖̰̗̟̞͚̮̓̋̾͒͊͐̚͘̚

> *A terminal-aesthetic CS2-inspired loot offer game.*

---

## What Is It?

Alive Feet Initial is a browser-based single-page game built around a simple but tense premise: you are presented with **6 weapon skin offers**, one at a time, drawn from a weighted random pool. For each offer you must make a decision — **Accept** it and add it to your inventory, or **Decline** and move on to the next. Once you've seen all 6, the session ends and your results are tallied.

The aesthetic is a retro terminal screen — dark, purple-tinted, with CRT scanlines, glow effects, and a flickering border — inspired loosely by the visual language of CS2 case openings but filtered through an early-2000s hacking interface.

---

## How to Play

1. **Open `index.html`** in any modern browser. No server required.
2. A weapon skin offer appears on screen showing:
   - A low-poly pixel-art image of the item
   - The item name and rarity tier
   - Its market price
3. Click **Accept** to add the item to your inventory and move to the next offer.
4. Click **Decline** to skip the item and move to the next offer.
5. After all 6 offers have been resolved, the screen fades to black and a **Session Summary** appears.

That's it. No currency. No cost. Just the offer.

---

## Items & Rarity

Items are drawn from a weighted pool across five rarity tiers:

| Rarity | Colour | Example | Approx. Weight |
|---|---|---|---|
| Mil-Spec | Blue | AK-47 \| Slate | Very Common |
| Restricted | Purple | USP-S \| Cortex | Common |
| Classified | Pink | USP-S \| Flashback | Uncommon |
| Covert | Red | AWP \| Dragon Lore | Rare |
| Gloves | Gold | Hand Wraps \| Slaughter | Very Rare |

The higher the rarity, the more valuable the item — and the less likely you are to see it.

---

## UI Panels

- **Offer Counter** (top-left) — shows your current position, e.g. `Offer: 3/6`
- **Statistics** (top-right) — appears after your first decision; tracks how many of each rarity tier have been resolved so far in the session
- **Inventory** (bottom-right) — appears once you accept your first item; lists everything you've accepted with its price

---

## Session Summary

When the final offer is either accepted or declined, the terminal fades to black and a summary card appears showing:

- **Rolls Summary** — a breakdown of every rarity tier you encountered across all 6 offers, colour-coded
- **Acquired** — the full list of items you accepted, with individual prices
- **Total Value** — the combined market price of your accepted items
- A note if all offers were declined

---

## Easter Egg

Type the word **`gold`** on your keyboard at any point during a session. Something will happen.

---

## Files

```
alive-feet/
├── index.html          # Structure and layout
├── style.css           # All visual styling, animations, theme
├── script.js           # Game logic, item database, weighted RNG
├── process_images.py   # Image processing utility (used to prepare low-poly assets)
├── timeline.md         # Full development history
└── low-poly/           # Pixel-art weapon skin images
```

---

## A Note on How This Was Made

**Every single line of this project was written by AI.**

Not assisted. Not co-piloted in the traditional sense. Written. From scratch, in conversation.

The project started with a brief in a VS Code Copilot chat — build a terminal-aesthetic loot game. The AI scaffolded the HTML, designed the CSS theme, wrote the weighted random item system, built the game loop, and added the low-poly image display. When bugs were introduced (including one that silently broke the entire script), a second AI session — Claude Sonnet 4.6 — diagnosed the root causes, restructured the layout architecture, fixed 13 distinct bugs across the course of iterative back-and-forth, and extended the game with new features: the summary screen, the fade-to-black transition, the title bar, the stats/inventory panel system.

Even `process_images.py` — the Python script used to batch-convert and resize the weapon artwork into low-poly pixel assets — was AI-generated.

No Stack Overflow. No templates. No human wrote a function, a selector, or a variable name.

What's genuinely striking about this isn't just that it works. It's the **speed of iteration**. An idea that might have taken a weekend to scaffold, debug, and polish was playable in an afternoon. Each conversation turn was a feature request or a bug report, and the response was working code. The gap between *"I want a thing"* and *"the thing exists"* has collapsed in a way that is difficult to fully internalise until you've experienced it firsthand.

This is what it looks like when you can go from idea to execution without the friction of implementation standing in the way.

---

*Built with VS Code Copilot + Claude Sonnet 4.6. Zero human-written code.*
