---
title: Menu Bar
sidebar_position: 2
---

# Menu Bar

The menu bar at the top of the window provides access to all major features and settings. Each menu groups related actions for organization.

![Screenshot](...)

## Collection Menu

**Purpose:** Import, export, and navigate through puzzle collections.

**Prerequisites:** None for most items; some require a puzzle to be loaded.

**Usage**

| Item | Shortcut | Action |
|------|----------|--------|
| **Import from disk…** | <kbd>Ctrl</kbd>+<kbd>I</kbd> | Browse for a Sokoban puzzle file (`.sok`, `.slc`, etc.) and load it into the app. |
| **Import from clipboard** | <kbd>Ctrl</kbd>+<kbd>V</kbd> | Import puzzle(s) or solution(s) from text copied to your clipboard. |
| **Create puzzle from LURD…** | — | Open a dialog to paste a LURD string and create a puzzle from it. |
| **Save Single Puzzle** submenu | — | Export the current puzzle in various formats. |
| — Export to clipboard | <kbd>Ctrl</kbd>+<kbd>C</kbd> | Copy the current puzzle as text to clipboard. |
| — Export with transformations | <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>C</kbd> | Copy the puzzle with current rotations/flips applied. |
| — Export to disk… | <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>S</kbd> | Save the puzzle to a file. |
| — Export board as PNG… | — | Save a screenshot of the board as an image file. |
| **Go to puzzle…** | <kbd>Ctrl</kbd>+<kbd>G</kbd> | Jump to a specific puzzle by number in the loaded collection. |
| **Previous puzzle** | <kbd>Page Up</kbd> | Load the previous puzzle in the collection. |
| **Next puzzle** | <kbd>Page Down</kbd> | Load the next puzzle in the collection. |
| **Previous unsolved puzzle** | <kbd>Shift</kbd>+<kbd>Page Up</kbd> | Jump to the previous puzzle you haven't solved yet. |
| **Next unsolved puzzle** | <kbd>Shift</kbd>+<kbd>Page Down</kbd> | Jump to the next unsolved puzzle. |
| **Quit** | <kbd>Ctrl</kbd>+<kbd>Q</kbd> | Exit the application. |

**Result:** Puzzles are imported/exported, or you navigate to a different puzzle in the collection.

**Notes:**
- Importing a collection from disk replaces the current one.
- Exporting allows you to share puzzles with others or back them up.
- "Unsolved" means you haven't reached the win condition yet (boxes not on all goals).

**Related Features**
- [Puzzle Browser](puzzle-browser.md) — search and browse puzzles interactively
- [Main Window > Load Puzzle Collection](main-window.md#load-puzzle-collection) — toolbar button for the same action

---

## Moves Menu

**Purpose:** Control move history, optimize solutions, and manage clipboard operations.

**Prerequisites:** A puzzle is loaded.

**Usage**

| Item | Shortcut | Action |
|------|----------|--------|
| **Undo all** | <kbd>Home</kbd> | Reset the puzzle to its starting position. |
| **Undo** | <kbd>Delete</kbd> | Undo the last move or box push (see [Settings: Gameplay](settings.md#gameplay) for single-step vs. full-push behavior). |
| **Replay** | <kbd>R</kbd> | Replay all moves from the current position forward (same as Redo all). |
| **Redo** | <kbd>Insert</kbd> | Redo the next move after undoing. |
| **Redo all** | <kbd>End</kbd> | Replay all moves in sequence without animation. |
| **Jump to move…** | — | Open a dialog to jump to a specific move number (1–N). |
| **Jump to push…** | — | Jump to a specific box push number instead of move number. |
| **Find Next Suboptimal Push** | <kbd>N</kbd> | Jump forward to the next push in your move history that could have been done better. |
| **Reverse play (pull boxes)** | <kbd>Ctrl</kbd>+<kbd>R</kbd> | Checkbox that switches between playing the puzzle forward (pushing boxes) and backward (pulling boxes toward their starting positions). See [Reverse Play](main-window.md#reverse-play-pull-boxes). |
| **Double push mode** | <kbd>Ctrl</kbd>+<kbd>D</kbd> | Checkbox that makes the forward and backward halves of a puzzle work toward each other. See [Double Push Mode](#double-push-mode) below. |
| **Simplify board** | *(unassigned)* | Remove unnecessary walls and frozen boxes to tighten the puzzle structure (see [Settings: Gameplay > Board Simplification](settings.md#gameplay)). |
| **Copy to clipboard** | <kbd>Ctrl</kbd>+<kbd>M</kbd> | Copy your current move sequence as LURD text. |
| **Copy after current position** | *(unassigned)* | Copy only the moves from your current position onward. |
| **Copy moves range to clipboard…** | <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>M</kbd> | Open a dialog to copy a specific range of moves (e.g., moves 5–15). |
| **Copy moves of pushes range to clipboard…** | — | Copy only the moves that occur during a specific range of pushes (e.g., pushes 3–7). |
| **Paste from clipboard** | <kbd>Ctrl</kbd>+<kbd>P</kbd> | Import a LURD move sequence from clipboard and apply it to the puzzle. |

**Result:** Move history is replayed, undone, or exported/imported via clipboard.

**Notes:**
- LURD stands for Left, Up, Right, Down — the standard Sokoban move notation.
- Single-step vs. full-push undo is a setting; by default, undo undoes one full box-push sequence (all player movement + the push itself).
- "Simplify board" is a one-time operation; it modifies the puzzle structure for cleaner visualization.
- "Reverse play" and "Double push mode" stay checked while active — they're modes, not one-time actions. See [Reverse Play](main-window.md#reverse-play-pull-boxes) for what changes on the board while reverse play is on.

### Double Push Mode

**Purpose:** Solve a puzzle from both ends at once, pushing from the start and pulling from the finish until the two halves meet.

**Prerequisites:** A puzzle is loaded. The mode works together with **Reverse play**, which is how you switch between the two halves.

**Usage**
- Switch the mode on with **Moves > Double push mode** or <kbd>Ctrl</kbd>+<kbd>D</kbd>.
- Work the puzzle forward as usual, then switch sides with **Reverse play** (<kbd>Ctrl</kbd>+<kbd>R</kbd>) and pull boxes from the other end.
- Switch back and forth as often as you like.

**Result**
Each time you switch sides, the side you arrive at takes the box positions you just left behind as its new targets. The two halves therefore move toward each other instead of running as two unrelated attempts. The move and push counters show the combined total of both sides rather than only the side you are currently on.

**Notes**
- The puzzle counts as solved only once the player can actually get back to the square the other side left off at. If every box is placed but the player is walled in, the app tells you so instead of accepting the solution.
- Solutions are not auto-saved while the mode is active.

**Related Features**
- [Main Window > History Controls](main-window.md#history-controls) — toolbar buttons for undo/redo/replay
- [Main Window > Reverse Play](main-window.md#reverse-play-pull-boxes) — full documentation of playing a puzzle backward
- [Settings: Gameplay](settings.md#gameplay) — configure undo behavior and board simplification
- [Keyboard Shortcuts](keyboard-shortcuts.md) — customize all move-related keybindings

---

## View Menu

**Purpose:** Transform the board and control visual display options.

**Prerequisites:** A puzzle is loaded.

**Usage**

### Transformations Submenu

| Item | Shortcut | Action |
|------|----------|--------|
| **Rotate clockwise** | <kbd>Shift</kbd>+<kbd>→</kbd> | Rotate the entire board 90° clockwise. |
| **Rotate counter-clockwise** | <kbd>Shift</kbd>+<kbd>←</kbd> | Rotate 90° counter-clockwise. |
| **Flip horizontally** | <kbd>Shift</kbd>+<kbd>↑</kbd> | Mirror the board left-to-right. |
| **Flip vertically** | *(unassigned)* | Mirror the board top-to-bottom. |
| **Reset to original view** | — | Undo all rotations and flips. |

Transformations do **not** change the puzzle itself — only how it's displayed. Your move history remains valid after rotating.

### Display Toggles

| Item | Shortcut | Action |
|------|----------|--------|
| **Show walls** | <kbd>W</kbd> | Toggle outer wall tiles around the active board area. |
| **Show board coordinates** | <kbd>F12</kbd> | Display tile coordinates (X, Y) when you hover the mouse over the board. |
| **Show parity grid** | <kbd>P</kbd> | Overlay a checkerboard tint on alternating tiles (useful for visualizing which tiles are "even" vs. "odd" in coordinate parity). |
| **Box pathfinding priority** | <kbd>B</kbd> | Toggle between "Fewest Pushes" and "Fewest Moves" — changes how the auto-walk target is computed when you right-click a box. |

**Result:** Board display updates immediately; no effect on puzzle state or solutions.

**Notes:**
- Transformations can make certain difficult puzzles easier to visualize.
- Show parity grid is an advanced feature for analyzing puzzle structure.
- Box pathfinding is also toggleable via the toolbar button in the main window.

**Related Features**
- [Main Window > Box Pathfinding Priority Toggle](main-window.md#box-pathfinding-priority-toggle) — toolbar button for the same toggle
- [Settings: Appearance](settings.md#appearance) — configure board colors, background, and grid lines
- [Settings: Skins](settings.md#skins) — change tile graphics and animation styles

---

## Tools Menu

**Purpose:** Launch auxiliary tools and specialized features.

**Prerequisites:** A puzzle is loaded (for most items).

**Usage**

| Item | Shortcut | Action |
|------|----------|--------|
| **Optimizer** | <kbd>F5</kbd> | Open the optimizer tool to improve your current solution (fewer moves or pushes). |
| **Solver** | <kbd>F6</kbd> | Open the solver to find an automatic solution if you're stuck. |
| **LetsLogic** | *(unassigned)* | Open the LetsLogic panel to browse online puzzle databases and submit solutions. |
| **Puzzle Browser** | <kbd>F7</kbd> | Open an interactive search and filter tool for the loaded puzzle collection. |
| **Editor** | <kbd>F8</kbd> | Switch to level design mode to create or modify puzzles. |
| **Macro Studio** | <kbd>F9</kbd> | Open the macro editor to write and save custom move sequences. |
| **Image to Puzzle** | <kbd>F10</kbd> | Convert a screenshot or image into a puzzle level. |
| **Trash** | <kbd>F11</kbd> | View deleted puzzles and solutions; restore or permanently erase them. |
| **Last Played** | *(unassigned)* | Browse your play history — puzzles you've attempted recently. |
| **Export move history to APNG** | *(unassigned)* | Save your move sequence as an animated PNG file (useful for sharing solutions visually). |

**Result:** The selected tool opens in a new window or panel.

**Notes:**
- Most tools can be opened only if a puzzle is loaded (buttons are grayed out otherwise).
- Solver and Optimizer are covered in detail in their own documentation sections.
- LetsLogic requires an API key (see [Settings > LetsLogic](settings.md#letslogic)).

**Related Features**
- [Puzzle Browser](puzzle-browser.md) — dedicated documentation
- [Editor](editor.md) — level design documentation
- [Macro Studio](macro-studio.md) — macro scripting documentation
- [Image to Puzzle](image-to-puzzle.md) — image-to-level conversion documentation
- [Last Played History & Trash](history-and-trash.md) — undo deletion of puzzles/solutions, browse recent activity

---

## Settings Menu

**Purpose:** Open the settings window to configure all gameplay, display, and audio options.

**Prerequisites:** None — always available.

**Usage**
- Click **Settings…** to open the settings window.
- Keyboard shortcut: **Ctrl+,** (Ctrl + comma)

**Result:** The settings window opens, showing all categories (General, Skins, Appearance, Animations, Sound, Gameplay, Sidebar, Keybindings, LetsLogic).

**Notes:**
- Settings are saved automatically when you change them.
- You can search for a specific setting using the search field in the settings window.

**Related Features**
- [Settings](settings.md) — complete documentation of all settings categories
- [Keyboard Shortcuts](keyboard-shortcuts.md) — customize keybindings in the Controls settings category

---

## Help Menu

**Purpose:** Access help information and application details.

**Prerequisites:** None — always available.

**Usage**
- Click **Keyboard Shortcuts** to open a cheat sheet listing every shortcut currently in effect, including any you have rebound.
- Click **About SokoLogic** to open a dialog showing:
  - Application version number
  - Copyright and author information
  - License (GPLv3)
  - Links to the official website

**Result:** The chosen window opens. The About dialog is dismissed by clicking OK.

**Notes:**
- The About dialog is modal and blocks other interactions until closed.
- The shortcut cheat sheet reflects your current bindings, so it stays correct after you customize them under [Settings > Controls](keyboard-shortcuts.md#customizing-a-shortcut).

**Related Features**
- [Main Window](main-window.md) — overview of the primary UI
- All feature pages in this manual

---

## Notes on Keybindings

Most menu items show their keyboard shortcut next to the item name. These shortcuts are customizable:
- **Platform-aware shortcuts** use Ctrl on Windows/Linux and Cmd on macOS (shown as the platform-specific symbol).
- Visit [Settings > Controls](keyboard-shortcuts.md#customizing-a-shortcut) to rebind any shortcut.
- Hover over a menu item to see its full keybinding description if the text is truncated.

## Related Features

- [Main Window](main-window.md) — toolbar and board display
- [Settings](settings.md) — all configuration options
- [Keyboard Shortcuts](keyboard-shortcuts.md) — comprehensive keybinding reference
- [Puzzle Browser](puzzle-browser.md) — search and filter puzzles
- [Editor](editor.md) — create and modify levels
- [Macro Studio](macro-studio.md) — write move macros
