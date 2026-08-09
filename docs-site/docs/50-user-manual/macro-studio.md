---
title: Macro Studio
sidebar_position: 7
---

# Macro Studio

The Macro Studio is an integrated environment for creating, editing, and testing custom move macros—reusable sequences of moves with advanced logic like loops and conditionals.

![Screenshot](...)

## Purpose

Write automation scripts (macros) to replay complex or repetitive move sequences, demonstrate puzzle solving strategies, or create interactive puzzles with state-dependent behavior.

## Prerequisites

A puzzle is loaded.

## Opening Macro Studio

- Click **Menu > Tools > Macro Studio**, or press <kbd>F9</kbd>.
- Macro Studio opens in a new window with three panels: **Library** (left), **Script Editor** (center), and **Sandbox Board** (right).

## Interface Overview

### Macro Library Panel (Left)

**Purpose:** Browse, create, and manage macros saved for the current puzzle.

**Features:**
- **Saved macros list** — shows all macros you've created for this puzzle
- **Create new macro** button — adds a new, empty macro to the list
- **Macro name** — edit the name of the selected macro
- **Scope selector** — choose whether the macro is bound to this specific puzzle or available across all puzzles:
  - **Puzzle-bound** — macro only works with this puzzle
  - **Global** — macro can be used with any puzzle (useful for utility macros)
- **Delete** — remove the selected macro
- **Copy/Paste** — duplicate macros
- **Syntax reference** — quick lookup of SML (SokoLogic Macro Language) syntax and available functions

### Script Editor Panel (Center)

**Purpose:** Write and edit macro code in SML (SokoLogic Macro Language).

**Features:**
- **Script text area** — type macro code with:
  - Syntax highlighting (keywords, strings, comments)
  - Line numbers
- **Error messages** — displayed below the editor if the script contains syntax errors
- **Execute button** — run the macro on the sandbox board (see below)
- **Stop button** — halt a running macro mid-execution
- **Clear sandbox** — reset the board to its initial state before running a macro
- **Record moves** — toggle move recording during macro execution (see "Sandbox Board")

### Sandbox Board Panel (Right)

**Purpose:** Preview how macros affect the puzzle without modifying your main game state.

**Features:**
- **Board preview** — live display of the puzzle board as the macro executes
- **Move history** — shows moves (LURD) executed by the macro
- **Zoom controls** — adjust board preview size
- **Clear board** — reset to the initial puzzle state
- **Recorded moves** — if recording is enabled, captured moves appear as text you can copy to clipboard

## Basic Workflow

1. **Create a new macro** (or open an existing one from the Library)
2. **Write SML code** in the Script Editor (see [SML Syntax Reference](#sml-syntax-reference) below)
3. **Click Execute** to run it on the Sandbox Board
4. **View results** — the board updates in real time; error messages appear if something fails
5. **Refine** — edit the script and re-execute as needed
6. **Save** — the macro is saved automatically to the puzzle database

## SML Syntax Reference

Coordinates are always written as `[row, col]`. The built-in **Syntax reference** panel in the Library sidebar always reflects the exact command set of your installed version — treat the tables below as a summary of it.

### Basic Move Commands

| Command | Example | Effect |
|---------|---------|--------|
| **LURD string** | `"uulDDr"` | Execute a raw sequence of moves (u/d/l/r for up/down/left/right, case-insensitive) |
| **Walk one step** | `walk(right)` | Move the player one tile in the given direction (up/down/left/right) |
| **Walk to** | `walkTo([5, 3])` | Walk the player to absolute board coordinates |
| **Walk to (relative)** | `walkTo(relative [2, 1])` | Walk relative to the player's current position |
| **Push to** | `pushTo([10, 10])` | Push the box at the player's side to absolute coordinates |
| **Push to (relative)** | `pushTo(relative [1, 0])` | Push relative to the box's current position |
| **Push nearest box to** | `pushNearestBoxTo([10, 10])` | Automatically find and push the nearest reachable box to the target |
| **Direction shortcuts** | `pushTo(right)`, `walkTo(up)` | `up`/`above`, `down`/`below`, `left`, `right` can be used directly instead of `relative [row, col]` |

### Position Stack

| Command | Effect |
|---------|--------|
| `pushPosition()` | Save the current board state (player + box positions) onto a stack |
| `popPosition()` | Restore the most recently saved state from the stack |

### Conditionals

| Command | Effect |
|---------|--------|
| `if(condition) { ... }` | Execute code only if the condition is true |
| `if(condition) { ... } else { ... }` | Adds a fallback branch |
| `if(condition) { ... } else if(condition) { ... }` | Chain multiple conditions |

**Available conditions:** `isBox`, `isGoal`, `isWall`, `isClear`, `isReachable`, `isDeadlock`, `isSolved` — most accept a target position, e.g. `isBox [5, 5]` or `isBox relative [0, 1]`. Combine conditions with `&&` (and), `||` (or), and `!` (not).

### Loops & Loop Control

| Command | Effect |
|---------|--------|
| `repeat(5) { ... }` | Execute the code block 5 times |
| `repeat(*) { ... }` | Shorthand for `repeatUntilFailure` |
| `repeatUntilFailure { ... }` | Repeat until a move inside the block fails (e.g., walking into a wall) |
| `while(condition) { ... }` | Repeat while the condition is true |
| `break` | Exit the current loop immediately |
| `continue` | Skip to the next iteration of the current loop |

`boxesRemaining` is a special value usable anywhere a number is expected — for example `repeat(boxesRemaining) { ... }` — that evaluates to the current count of boxes not yet on a goal.

### Debugging & History

| Command | Effect |
|---------|--------|
| `undo(n)` | Undo the last `n` moves executed by the macro |
| `breakpoint()` | Pause execution at this point when running in the Script Editor for step-by-step debugging |

### Reusable Sub-Macros

Define a named, parameterized block at the top level of your script, then call it like a function anywhere below it:

```
macro pushBoxToGoal(targetRow, targetCol) {
    pushTo([targetRow, targetCol])
}

pushBoxToGoal(5, 10)
pushBoxToGoal(7, 10)
```

Sub-macros can only be declared at the top level of a script (not nested inside a block), and their names cannot collide with a built-in command.

### Comments

```
// This is a single-line comment — SML has no block/multi-line comment syntax
```

### Example Macro

```
// Solve a simple 2-box puzzle
pushPosition()        // Save the starting state

walkTo([5, 5])         // Walk to the first box
if(isBox [5, 5]) {
    pushTo([5, 10])    // Push it to its goal
}

walkTo([7, 5])         // Walk to the second box
if(isBox [7, 5]) {
    pushTo([7, 10])    // Push it to its goal
}

if(!isSolved) {
    popPosition()      // Restore to start if something went wrong
}
```

## Using Recorded Moves

1. **Enable recording** in the Script Editor before executing a macro
2. **Run the macro** — moves are captured in the "Recorded moves" field
3. **Copy the output** — click to copy the recorded LURD sequence to clipboard
4. **Use elsewhere** — paste into [Menu: Moves > Paste from Clipboard](menus.md#moves-menu) or another macro

This is useful for converting manual solutions into reusable automation scripts.

## Notes

- **Sandbox isolation** — macros run on a copy of the puzzle board; your main game state is never affected by macro testing
- **Error recovery** — if a macro fails (e.g., tries to push a box into a wall), an error message appears; use `popPosition()` to revert
- **Macros persist** — saved macros are stored in the puzzle database and available next session
- **Puzzle-bound vs. global** — puzzle-bound macros are most common; global macros are useful for universal utility scripts
- **Performance** — complex macros with deep recursion may execute slowly; the sandbox updates in real time
- **Syntax checking** — SML is validated when you execute; typos appear as error messages, not silent failures

## Troubleshooting

### Macro doesn't execute
- Check for syntax errors in the Script Editor (red underlines or error messages)
- Verify the board state — some commands may fail if the puzzle state is unexpected
- Use `pushPosition()` / `popPosition()` to debug step-by-step

### Move fails with error message
- The macro tried an invalid action (e.g., walking into a wall)
- Use conditionals (`if(isWall ...)`) to guard dangerous moves
- Check board coordinates — use absolute coordinates or `relative` keyword carefully

### Board state is wrong after running a macro
- Use `pushPosition()` before the macro and `popPosition()` to restore
- Or click **Clear sandbox** to reset to the initial state
- Macros don't auto-restore; you manage save points explicitly

## Related Features

- [Sidebar: Macros Panel](sidebar.md#macros-panel) — play saved macros during regular gameplay
- [Menu: Moves > Paste from Clipboard](menus.md#moves-menu) — import move sequences into your main game
- [Settings: Animations](settings.md#animations) — control macro execution speed
- [Keyboard Shortcuts](keyboard-shortcuts.md) — macro studio keybindings
