---
title: Sidebar Panels (Solutions, Snapshots, Macros)
sidebar_position: 3
---

# Sidebar Panels

The left sidebar contains three tabbed panels for managing solutions, board snapshots, and custom move macros. You can toggle the sidebar visibility using the toolbar buttons or keyboard shortcuts.

![Screenshot](...)

## Overview

**Purpose:** Access saved solutions, board positions, and move macros for the current puzzle.

**Prerequisites:** A puzzle is loaded.

**Usage**
- Click one of the three tab buttons at the top of the sidebar to switch between Solutions, Snapshots, and Macros.
- Each panel is a scrollable list; click an item to activate it.
- Right-click an item for additional options (copy, delete, edit notes, etc.).
- Click the **X** (or press the corresponding toolbar button again) to hide the sidebar and give the board more space.

**Result:** The selected panel displays its contents; clicking an item activates it (loads a solution, jumps to a snapshot, or plays a macro).

**Notes:**
- Only one panel is visible at a time.
- The sidebar's visibility state is remembered across sessions.
- You can resize the sidebar by dragging its right edge.

**Related Features**
- [Main Window > Sidebar Toggles](main-window.md#sidebar-toggles) — toolbar buttons for sidebar control
- [Settings: Sidebar](settings.md#sidebar) — configure sidebar appearance and default visibility
- [Keyboard Shortcuts](keyboard-shortcuts.md) — keybindings to toggle individual panels

---

## Solutions Panel

**Purpose:** Browse, load, and manage saved solutions for the current puzzle.

**Prerequisites:** The puzzle must have at least one saved solution.

**Usage**

Each solution in the list shows:
- **Solution type badge** — single character indicating the best metric(s):
  - **P** — Best known push count (fewest pushes)
  - **M** — Best known move count (fewest moves)
  - **!** — Best overall (fewest pushes **and** fewest moves)
- **Metrics** — the solution's move and push counts (e.g., "123 moves / 45 pushes" or abbreviated as "123/45")
- **Title** (optional) — if the solution has a custom name, shown on hover or in an expanded view
- **Notes** (optional) — additional comments you added to the solution

Click a solution to load it into your active move history. The board jumps to the solution's starting position (usually the puzzle's initial state) and replays it.

**Right-click actions:**
- **Copy to clipboard** — export the solution as LURD text
- **Set as move history** — load this solution without animation
- **Rename** — edit the solution's title or notes
- **Delete** — remove the solution from the puzzle's collection
- **Export to clipboard with metadata** — copy the solution with title and notes

**Result:** The selected solution becomes your active move history; you can undo/redo or modify it.

**Notes:**
- Solutions are saved automatically when you reach the puzzle's win condition (all boxes on goals).
- You can manually save your current move sequence via [Menu: Moves > Copy to Clipboard](menus.md#moves-menu), then import it on a different puzzle using [Menu: Moves > Paste from Clipboard](menus.md#moves-menu).
- Multiple solutions for the same puzzle can be stored; the app tracks the best by pushes and by moves separately.
- Solutions are stored in the puzzle database; they persist across sessions.
- A solution's "best" status is visual (the badge) but does not prevent you from loading slower solutions if you want to study them.

**Related Features**
- [Menu: Moves > Copy to Clipboard](menus.md#moves-menu) — save your current solution
- [Menu: Moves > Paste from Clipboard](menus.md#moves-menu) — load a solution from text
- [Settings: Sidebar](settings.md#sidebar) — configure solution display format (all metrics vs. moves/pushes only)

---

## Snapshots Panel

**Purpose:** Save and restore board positions from your play session.

**Prerequisites:** You have taken at least one snapshot.

**Usage**

Each snapshot shows:
- **Move count** — how many moves in you were when the snapshot was taken
- **Push count** — how many pushes at that point
- **Notes** (optional) — a comment you added to the snapshot
- **Play-direction badge** (optional) — a single character marking whether the snapshot was recorded playing forward (pushing boxes) or in [reverse play](main-window.md#reverse-play-pull-boxes) (pulling boxes); configured in [Settings: Sidebar](settings.md#sidebar)

**Actions:**
- **Click a snapshot** — jump to that exact board state and move count. Your full move history is preserved; you can undo/redo from that position.
- **Click the + button** — create a new snapshot at your current position (adds an entry to the list).
- **Right-click a snapshot** — options include:
  - Edit notes (add or update a comment)
  - Delete the snapshot
  - Jump to it (same as clicking)

**Result:** The board state jumps to the snapshot position; move history is preserved.

**Notes:**
- Snapshots are **per-session only** — they are lost when you load a different puzzle or close the app.
- They are useful for exploring multiple solution strategies without restarting from scratch.
- Unlike solutions, snapshots are not saved to the database; they're a temporary analysis tool.
- You can have many snapshots; the list scrolls if it exceeds the sidebar height.
- A snapshot recorded in the other play direction than the one you're currently in shows no live hover preview; double-click it to load it (which switches your play direction to match) or right-click for options.

**Related Features**
- [Settings: Sidebar](settings.md#sidebar) — configure snapshot list appearance
- [Solutions Panel](#solutions-panel) — for persistent, saved solutions
- [Menu: Moves > Undo/Redo](menus.md#moves-menu) — step through moves without snapshots
- [Reverse Play](main-window.md#reverse-play-pull-boxes) — playing a puzzle backward, which snapshots can be tagged with

---

## Macros Panel

**Purpose:** Display and play custom move sequences (macros) for the current puzzle.

**Prerequisites:** Macros must be defined for the puzzle (see [Macro Studio](macro-studio.md)).

**Usage**

Each macro shows:
- **Macro name** — the custom label you gave it when creating it
- **Description** (optional) — what the macro does

**Actions:**
- **Click a macro** — start playing it from the current board position. The moves in the macro are executed in sequence.
- **Right-click a macro** — options include:
  - Edit (open the macro in Macro Studio)
  - Delete the macro
  - Duplicate it
  - View/edit notes or description

**Result:** The macro's moves are applied to the board; animations play (if enabled).

**Notes:**
- Macros are **puzzle-specific** — each puzzle can have its own set of macros.
- Macros can include complex logic:
  - Loops (e.g., "push this box 5 times")
  - Conditionals (e.g., "if player is here, do this")
  - Comments and documentation
- A macro fails gracefully if you play it from a position where its moves are invalid (e.g., trying to move the player into a wall).
- Macros are stored in the puzzle database and persist across sessions.

**Related Features**
- [Macro Studio](macro-studio.md) — create and edit macros with detailed scripting
- [Keyboard Shortcuts](keyboard-shortcuts.md) — macro-related keybindings
- [Settings: Sidebar](settings.md#sidebar) — configure macro list appearance

---

## Keyboard Shortcuts for Sidebar

| Action | Default Shortcut | Description |
|--------|----------|-------------|
| Toggle Solutions panel | <kbd>S</kbd> | Show/hide the Solutions tab |
| Toggle Snapshots panel | <kbd>D</kbd> | Show/hide the Snapshots tab |
| Toggle Macros panel | <kbd>M</kbd> | Show/hide the Macros tab |

You can customize these shortcuts in [Settings > Controls](keyboard-shortcuts.md#customizing-a-shortcut).

---

## Related Features

- [Main Window](main-window.md) — toolbar and sidebar control buttons
- [Settings: Sidebar](settings.md#sidebar) — appearance and behavior configuration
- [Keyboard Shortcuts](keyboard-shortcuts.md) — complete keybinding reference
- [Menu: Moves](menus.md#moves-menu) — copy/paste and manage solutions from the menu
- [Macro Studio](macro-studio.md) — detailed macro creation and editing
