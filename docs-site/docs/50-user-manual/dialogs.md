---
title: Dialogs & Input Fields
sidebar_position: 5
---

# Dialogs & Input Fields

Various dialogs and input fields guide you through specific tasks like jumping to a puzzle, selecting options, or entering numeric values.

![Screenshot](...)

## About Dialog

**Purpose:** Display application version, copyright, and license information.

**Prerequisites:** None — always available.

**Usage**
- Open via **Menu > Help > About SokoLogic**.
- The dialog shows:
  - Application name and version number
  - Copyright notice (© 2026 Matthias Meger, Germany)
  - License information (GNU General Public License v3)
  - A clickable link to the official SokoLogic GitHub repository

- Click the **OK** button or press **Escape** or **Enter** to close the dialog.
- Click the website link to open it in your default browser.

**Result:** Information is displayed; clicking OK dismisses the dialog.

**Notes:**
- The version number helps you verify that you have the latest release.
- The GPLv3 license means SokoLogic is free software and distributable.

**Related Features**
- [Menu: Help](menus.md#help-menu) — where to access this dialog

---

## Go to Puzzle Dialog

**Purpose:** Jump to a specific puzzle by number without using the Puzzle Browser.

**Prerequisites:** A puzzle collection is loaded.

**Usage**
- Open via **Menu > Collection > Go to Puzzle…** or press <kbd>Ctrl</kbd>+<kbd>G</kbd>.
- The dialog prompts you to enter a puzzle number (e.g., `1`, `42`, `999`).
- Type the number and press **Enter** or click **Go**.
- The dialog validates the input:
  - Must be a number between 1 and the total count of puzzles in the collection.
  - The **Go** button is grayed out if the number is invalid.

**Result:** The specified puzzle loads immediately; the dialog closes.

**Notes:**
- Puzzle numbers are the IDs assigned by the collection, not arbitrary.
- If you enter an out-of-range number, the dialog warns you and does not proceed.
- Press **Escape** to cancel without changing puzzles.

**Related Features**
- [Puzzle Browser](puzzle-browser.md) — interactive alternative for finding puzzles
- [Menu: Collection](menus.md#collection-menu) — navigate puzzles via next/previous
- [Keyboard Shortcuts](keyboard-shortcuts.md) — customize the Go to Puzzle keybinding

---

## Jump to Move / Jump to Push Dialogs

**Purpose:** Skip to a specific move or push in your move history without replaying everything.

**Prerequisites:** You have made at least one move in the current puzzle.

**Usage**

### Jump to Move
- Open via **Menu > Moves > Jump to move…**
- Enter the move number (1 = first move, 2 = second move, etc.)
- Press **Enter** or click **Jump**
- The board state updates to that move position; your full move history is preserved

### Jump to Push
- Open via **Menu > Moves > Jump to push…**
- Enter the push number (1 = first box push, 2 = second push, etc.)
- Press **Enter** or click **Jump**
- The board state updates to that push position

**Result:** The board jumps to the specified move/push; animations play (if enabled).

**Notes:**
- Move counting includes all player steps (even those that don't push a box).
- Push counting only counts actual box pushes.
- You can undo from the jumped-to position and make a different sequence of moves.
- Invalid numbers (out of range) prevent jumping; the **Jump** button is disabled.

**Related Features**
- [Menu: Moves](menus.md#moves-menu) — other move-related options
- [Main Window > History Controls](main-window.md#history-controls) — undo/redo buttons
- [Settings: Gameplay](settings.md#gameplay) — configure undo behavior

---

## Numeric Input Dialogs (Animation Delay, Copy Moves Range, etc.)

**Purpose:** Enter numeric parameters for various settings and operations.

**Prerequisites:** Depends on the specific dialog (see below).

**Types of Input Dialogs**

### Animation Delay Input
- **Accessed from:** [Settings > Animations](settings.md#animations) or [Menu > Settings > Animations](menus.md#settings-menu)
- **Purpose:** Set the speed of move animations (lower = faster)
- **Input range:** 0–5000 milliseconds (default: usually around 200 ms)
- **Result:** Animations play at the specified speed; setting is saved immediately

### Undo/Redo Animation Delay Input
- **Accessed from:** [Settings > Animations](settings.md#animations) or the toolbar
- **Purpose:** Set animation speed when undoing/redoing moves (separate from forward move animation speed)
- **Input range:** 0–5000 milliseconds
- **Result:** Undo/redo sequences animate at the specified speed

### Copy Moves Range Dialog
- **Accessed from:** [Menu > Moves > Copy moves range to clipboard…](menus.md#moves-menu)
- **Purpose:** Copy only a specific range of moves (e.g., moves 5–15)
- **Input:** Two fields — start move number and end move number
- **Result:** Only the specified moves are copied to clipboard as LURD text

### Copy Moves of Pushes Range Dialog
- **Accessed from:** [Menu > Moves > Copy moves of pushes range to clipboard…](menus.md#moves-menu)
- **Purpose:** Copy moves that occurred during a specific range of pushes (e.g., pushes 3–7)
- **Input:** Two fields — start push number and end push number
- **Result:** Only moves from those pushes are copied to clipboard

## Usage Pattern for All Numeric Input Dialogs

1. **Focus** — the input field is pre-focused when the dialog opens; you can type immediately
2. **Validation** — the dialog validates your input and disables the **OK** / **Confirm** button if invalid
3. **Keyboard shortcuts:**
   - **Enter** — confirm and apply the input
   - **Escape** — cancel without applying changes
4. **Mouse** — click **OK** or **Confirm** to apply, or **Cancel** to dismiss

**Notes:**
- Numeric fields typically accept only digits (0–9).
- Out-of-range values are rejected silently (the confirm button stays disabled).
- Settings applied via these dialogs save automatically and persist across sessions.

**Related Features**
- [Settings](settings.md) — configure all these parameters persistently
- [Menu: Moves](menus.md#moves-menu) — access copy-range operations
- [Settings: Gameplay](settings.md#gameplay) — animation and move-related settings

---

## Notes on Dialog Behavior

- **Keyboard-first:** All dialogs support keyboard shortcuts for navigation and confirmation; you don't need a mouse.
- **Modal:** Dialogs block interaction with the main window until dismissed.
- **Centering:** Dialogs open centered on the main window (or screen if the main window position isn't known).
- **Dismissal:** Press **Escape**, click **Cancel**, or close the dialog window to dismiss without applying changes.

## Related Features

- [Menu Bar](menus.md) — where most dialogs are triggered from
- [Settings](settings.md) — persistent alternatives to one-time dialog inputs
- [Keyboard Shortcuts](keyboard-shortcuts.md) — keybindings for opening dialogs
