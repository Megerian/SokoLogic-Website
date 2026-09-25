---
title: Dialogs & Input Fields
sidebar_position: 5
---

# Dialogs & Input Fields

Small dialogs help you with quick tasks: jumping to a puzzle, a move, or a push, copying part of your moves, and looking up the program version. The larger export dialogs have their own page, [Exporting Puzzles & Animations](export.md).

![Screenshot](...)

## About Dialog

**Purpose:** Shows the program version, copyright, and license.

**Prerequisites:** None — always available.

**Usage**
- Open it from the Help menu with **About SokoLogic**.
- It shows the program name, "Version …", the copyright notice, the license (GNU General Public License v3), and a link to the SokoLogic website on GitHub.
- Click the link to open the website in your browser.
- Click **Okay**, or press <kbd>Enter</kbd> or <kbd>Esc</kbd>, to close the dialog.

**Result:** The dialog closes; nothing else changes.

**Notes:** None.

**Related Features**
- [Menu: Help](menus.md#help-menu)

---

## Go to Puzzle Dialog

**Purpose:** Jump to a puzzle of the loaded collection by its number.

**Prerequisites:** A puzzle collection is loaded.

**Usage**
- Open it with **Go to puzzle…** in the Collection menu, or press <kbd>Ctrl</kbd>+<kbd>G</kbd>.
- The field (**Puzzle number (1-N)**) starts with the current puzzle's number, already selected, so you can simply type over it. Only digits can be entered.
- Press <kbd>Enter</kbd> or click **Go** to jump; press <kbd>Esc</kbd> or click **Cancel** to close without changing the puzzle.

**Result:** The chosen puzzle opens and the dialog closes.

**Notes:** **Go** stays disabled while the number is outside the range shown in the field label.

**Related Features**
- [Puzzle Browser](puzzle-browser.md) — search and filter puzzles
- [Main Window > Puzzle Navigation](main-window.md#puzzle-navigation) — previous/next buttons
- [Keyboard Shortcuts](keyboard-shortcuts.md) — change the Go to puzzle shortcut

---

## Jump to Move / Jump to Push Dialogs

**Purpose:** Go straight to a particular move or push in your move history.

**Prerequisites:** A puzzle is loaded.

**Usage**

### Jump to Move
- Open it with **Jump to move…** in the Moves menu, or click the move indicator ("Move: 12/47") in the [status bar](main-window.md#status-bar-bottom-bar).
- Enter a number between 0 and the total number of moves in your history (**Move number (0-N)**); the field starts with your current move number.
- Press <kbd>Enter</kbd> or click **Go**.

### Jump to Push
- Open it with **Jump to push…** in the Moves menu.
- Enter a number between 0 and the total number of pushes (**Push number (0-N)**); the field starts with your current push count.
- Press <kbd>Enter</kbd> or click **Go**.

**Result:** The board jumps to the chosen position in your move history. Moves after it remain available for redo.

**Notes:**
- The range includes moves you have undone, so you can also jump forward.
- 0 takes you back to the start position.
- **Go** stays disabled while the number is out of range; <kbd>Esc</kbd> or **Cancel** closes the dialog.

**Related Features**
- [Main Window > History Controls](main-window.md#history-controls)
- [Menu: Moves](menus.md#moves-menu)

---

## Copy Moves Range Dialogs

**Purpose:** Copy only part of your moves to the clipboard, as LURD text.

**Prerequisites:** A puzzle is loaded and you have made moves.

**Usage**

### Copy moves range to clipboard…
- Open it from the Moves menu (default shortcut <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>M</kbd>). The dialog is titled "Enter move range to copy".
- Enter a **Start move** (starts at 1) and an **End move** (starts at the total number of moves).
- Press <kbd>Enter</kbd> in the first field to move to the second; <kbd>Enter</kbd> in the second field (or clicking **Copy**) copies the moves.

### Copy moves of push range to clipboard…
- Open it from the Moves menu. The dialog is titled "Select push range for copying moves".
- Enter a **Start push** and an **End push**; all moves from right after the push before the start push up to and including the end push are copied.
- Confirm with <kbd>Enter</kbd> or **Copy**.

**Result:** The moves are copied to the clipboard and a notification confirms it.

**Notes:**
- If a field is empty or the numbers don't fit, a message appears below the field when you try to copy: "Input required.", "Start move number must be 1 or higher.", or "End move number must not be lower than start move number." (the same with "push" in the push dialog).
- The range refers to your whole move history, including moves you have undone. An end number beyond the last move copies up to the last move.
- <kbd>Esc</kbd> or **Cancel** closes the dialog without copying.

**Related Features**
- [Menu: Moves](menus.md#moves-menu) — copy and paste moves
- [Keyboard Shortcuts](keyboard-shortcuts.md#default-shortcuts--moves)

---

## Notes on Dialog Behavior

- **Keyboard-first:** The number dialogs open with the input field focused, confirm with <kbd>Enter</kbd>, and close with <kbd>Esc</kbd>.
- **Modal:** While a dialog is open, you cannot use the main window.
- **One at a time:** A dialog does not open on top of another blocking dialog.

## Related Features

- [Menu Bar](menus.md) — where most dialogs are triggered from
- [Exporting Puzzles & Animations](export.md) — the export dialogs, template editors, and the move animation export
- [Settings](settings.md) — animation delays and other preferences
- [Keyboard Shortcuts](keyboard-shortcuts.md) — keybindings for opening dialogs
