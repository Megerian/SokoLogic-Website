---
title: Macro Studio
sidebar_position: 7
---

# Macro Studio

The Macro Studio is where you write, test, and manage macros — small scripts in the SokoLogic Macro Language (SML) that walk the player and push boxes for you, with loops, conditions, and reusable sub-macros.

![Screenshot](...)

## Opening Macro Studio

**Purpose:** Open the macro workspace for the current puzzle.

**Prerequisites:** A puzzle is loaded.

**Usage**
- Choose **Macro Studio** in the Tools menu, or press <kbd>F9</kbd>.
- From the [Macros panel](sidebar.md#macros-panel) in the sidebar, click **Open Macro Studio**.

**Result:** The Macro Studio opens in its own window. From left to right it shows the **Saved Macros** library, the **SML Script** editor, the **SML Syntax Reference** (shown by default), and a sandbox copy of the puzzle board.

**Notes:** Everything you do in the studio happens on the sandbox board — a separate copy of the puzzle. Your game in the main window is not affected.

**Related Features**
- [Sidebar: Macros Panel](sidebar.md#macros-panel) — run saved macros on your real game
- [Keyboard Shortcuts](keyboard-shortcuts.md#default-shortcuts--tools)

---

## Saved Macros Library

**Purpose:** Create, save, and organize your macros.

**Prerequisites:** The Macro Studio is open.

**Usage**
- The list shows all **Global** macros and the macros bound to the current puzzle (**Puzzle-bound**). Click a macro to load its name and script into the editor.
- **New Macro** (**+** button) — start a new macro; the editor is filled with an example script.
- **Syntax Help** (help button) — show or hide the syntax reference.
- **Macro Name** — the name of the macro in the editor. An asterisk (**Macro Name \***) means the loaded macro has unsaved changes.
- **Save Macro** (button next to the name) — save the name and script. It is enabled as soon as a name is entered.
- **Bind to current puzzle** (checkbox) — save the macro for this puzzle only; uncheck it to save a global macro that appears for every puzzle.
- Each macro in the list has a play button (**Execute**) and a **Macro Actions** menu with **Execute**, **Copy Script**, **Duplicate**, **Bind to current puzzle** / **Global**, and **Delete Macro**.

**Result:** Saved macros appear in the library here and in the sidebar's Macros panel.

**Notes:**
- **Duplicate** adds a copy named "… (Copy)".
- **Delete Macro** moves the macro to the [Trash](history-and-trash.md#trash), where you can restore it.
- Saving while a deleted macro was loaded creates a new macro instead of changing the deleted one.

**Related Features**
- [Sidebar: Macros Panel](sidebar.md#macros-panel)
- [Trash](history-and-trash.md#trash)

---

## Script Editor and Execution

**Purpose:** Write a script and run it step by step on the sandbox board.

**Prerequisites:** The Macro Studio is open.

**Usage**
- Type the script into the **SML Script** field.
- **Execute** — run the script on the sandbox board, one instruction at a time.
- While it runs: **Pause** or **Stop**.
- While it is paused: **Resume**, **Step** (run one more instruction), or **Stop**.
- **Reset** — stop any running script and put the sandbox board back to the puzzle's start position.
- The status line shows **Idle**, **Running (steps)**, **Paused**, **Paused at Breakpoint**, **Finished**, or **Error: …** with the reason.

**Result:** The sandbox board shows every move the script makes; the moves are listed below the board.

**Notes:**
- A script with a syntax error doesn't start; the error message tells you what is wrong ("Failed to parse macro script" if no details are available).
- When an action fails while running — for example a push that isn't possible — the script stops with an error such as "Action "…" failed at line N."
- Scripts are protected against endless runs: there is a maximum step count and a maximum depth for sub-macro calls.
- Executing again continues from the board's current position. Use **Reset** first if you want to start from the beginning.
- **Execute** is disabled while you are recording moves on the sandbox board.

**Related Features**
- [SML Syntax Reference](#sml-syntax-reference)
- [Sandbox Board](#sandbox-board)

---

## Sandbox Board

**Purpose:** Try out moves and watch scripts run without touching your real game.

**Prerequisites:** The Macro Studio is open.

**Usage**
- Click the board, then play on it like on the main board — arrow keys, clicks, and dragging boxes work the same way. Board input is disabled while a script is running.
- **Generated LURD Moves** below the board lists the moves made so far, with their **Length** and the number of moves and pushes.
- **Copy LURD** — copy these moves to the clipboard.
- **Record** — start recording your own moves on the sandbox board. Click again (**Recording…**) to stop: the recorded moves are appended to the script in the editor as a LURD string.

**Result:** The sandbox board and the move list update with every move.

**Notes:**
- While recording, the move list and counters show only the moves made since recording started. If you undo past the start of the recording, the recording starts over from there.
- The sandbox uses your current skin and background.

**Related Features**
- [Script Editor and Execution](#script-editor-and-execution)
- [Main Window > Moving the Player and Pushing Boxes](main-window.md#moving-the-player-and-pushing-boxes)

---

## SML Syntax Reference

**Purpose:** Look up what you can write in a macro script.

**Prerequisites:** The Macro Studio is open. The built-in **SML Syntax Reference** (toggled with **Syntax Help**) always matches your installed version; the tables below summarize it.

**Usage**

Positions are written as `[row, column]`. `relative [r, c]` is relative to the player's current position; `up`, `down`, `left`, and `right` (also `above` and `below`) are short for a one-step relative position.

**Movement**

| Command | Effect |
|---|---|
| `"LURD"` | Raw direction moves, e.g. `"uulDDr"` |
| `walk(right)` | Walk one step in a direction (up, down, left, right) |
| `walkTo([r, c])` | Walk to a position (absolute or relative) |
| `pushTo([r, c])` | Push a box to the target: the box between the player and the target, or else a box next to the player |
| `pushTo(source, target)` | Push the box at `source` to `target`, e.g. `pushTo([3, 4], [3, 8])` |
| `pushNearestBoxTo([r, c])` | Push the nearest box that can reach the target |
| `undo(n)` | Undo `n` moves |

**Position stack**

| Command | Effect |
|---|---|
| `pushPosition()` | Remember the player's current position |
| `popPosition()` | Walk the player back to the last remembered position |

**Control flow**

| Command | Effect |
|---|---|
| `repeat(n) { ... }` | Run the block `n` times |
| `repeat(*) { ... }` / `repeatUntilFailure { ... }` | Repeat until an action in the block is blocked |
| `while(condition) { ... }` | Repeat while the condition holds |
| `if(condition) { ... }` | Run the block if the condition holds; supports `else` and `else if` |
| `break` / `continue` | Leave the loop / continue with the next iteration |

**Conditions and values**

| Expression | True when … |
|---|---|
| `isBox(position)` | a box is at the position |
| `isGoal(position)` | the position is a goal |
| `isWall(position)` | the position is a wall |
| `isClear(position)` | the position is empty (no box, no wall) |
| `isReachable(position)` | the player can walk to the position |
| `isDeadlock(position)` | a box at the position would be deadlocked |
| `isSolved()` | all boxes are on goals |

Combine conditions with `&&` (and), `||` (or), and `!` (not). The position can also be written without parentheses, e.g. `isBox relative [0, 1]`. `boxesRemaining` is the number of boxes not yet on a goal and can be used wherever a number is expected, e.g. `repeat(boxesRemaining) { ... }`.

**Custom macros and debugging**

| Command | Effect |
|---|---|
| `macro name(params) { ... }` | Define a reusable macro with parameters |
| `name(args)` | Call a macro defined in the script |
| `breakpoint()` | Pause the run here (status: **Paused at Breakpoint**) |
| `// comment` | A comment until the end of the line |

Example:

```
macro moveBox(fromRow, fromCol, toRow, toCol) {
    pushTo([fromRow, fromCol], [toRow, toCol])
}

moveBox(3, 4, 3, 8)

pushPosition()
repeatUntilFailure {
    if(isBox relative [0, 1] && !isWall relative [0, 2]) {
        pushTo(relative [0, 2])
    }
}
popPosition()
```

**Result:** —

**Notes:**
- Sub-macros can only be defined at the top level of a script, and their names cannot collide with built-in commands. Calling one with the wrong number of arguments stops the run with an error.
- The position stack holds up to 32 positions.
- `popPosition()` only moves the player; boxes pushed in between stay where they are. To take pushes back, use `undo(n)` or **Reset**.

**Related Features**
- [Script Editor and Execution](#script-editor-and-execution)

---

## Related Features

- [Sidebar: Macros Panel](sidebar.md#macros-panel) — run saved macros during regular play, and record macros from your moves
- [Menu: Moves](menus.md#moves-menu) — paste move sequences into your game
- [Keyboard Shortcuts](keyboard-shortcuts.md) — the Macro Studio shortcut
