---
title: Keyboard Shortcuts
sidebar_position: 11
---

Most frequently used actions in SokoLogic have a keyboard shortcut. Shortcuts for moves, sidebar/display toggles, view transformations, and tool windows can be customized; a handful of other shortcuts (such as arrow-key movement) are fixed and always available. The same **Controls** settings category also lets you configure what a click, double-click, or right-click does on a wall tile or the background.

![Screenshot](...)

## Customizing a shortcut

**Purpose**
Reassign the key used to trigger an action to whatever is more comfortable to reach.

**Prerequisites**
The Settings window must be open with the **Controls** category selected.

**Usage**
Click a shortcut's key field, then press the new key (optionally holding Ctrl/Cmd, Shift, and/or Alt) you want to use for that action.

**Result**
The new shortcut is applied immediately and remembered for future sessions. If the pressed key is already used by another action, the assignment is rejected and the row shows which action it's already assigned to. If the pressed key is reserved for a fixed function (see Notes below), the assignment is rejected with a message explaining that the key is reserved.

**Notes**
The category's search field also highlights matching shortcut rows by action name, making it easier to find one shortcut among many. A handful of keys are reserved for fixed application functions that are never available for reassignment here — for example the arrow keys (board movement) and a small set of Ctrl/Cmd-based shortcuts used elsewhere in the application (such as the Settings window shortcut itself).

**Related Features**
[Default shortcuts — Moves](#default-shortcuts--moves), [Mouse Bindings](#mouse-bindings), [Settings](settings.md), [Resetting settings to defaults](settings.md#resetting-settings-to-defaults)

## Default shortcuts — Moves

**Purpose**
Reference for the default shortcuts controlling undo/redo, replay, and move clipboard actions.

**Prerequisites**
None.

**Usage**
| Action | Default shortcut |
|---|---|
| Undo | Delete |
| Redo | Insert |
| Redo all | End |
| Restart puzzle | Home |
| Find Next Suboptimal Push | N |
| Simplify board | *(unassigned)* |
| Reverse play (pull boxes) | Ctrl+R |
| Double push mode | Ctrl+D |
| Replay | R |
| Copy to clipboard | Ctrl+M |
| Copy moves after current position | *(unassigned)* |
| Copy moves range to clipboard… | Ctrl+Shift+M |
| Paste moves from clipboard | Ctrl+P |

**Result**
Pressing a shortcut immediately triggers the corresponding action, exactly as if it had been chosen from the **Moves** menu.

**Notes**
"Copy moves after current position" and "Simplify board" have no default shortcut; assign one under [Customizing a shortcut](#customizing-a-shortcut) if desired. "Reverse play" and "Double push mode" stay checked while active rather than firing once — see [Double Push Mode](menus.md#double-push-mode) for what the combination does.

**Related Features**
[Customizing a shortcut](#customizing-a-shortcut), [Reverse Play](main-window.md#reverse-play-pull-boxes), [Double Push Mode](menus.md#double-push-mode)

## Default shortcuts — Sidebars & Display

**Purpose**
Reference for the default shortcuts toggling sidebar panels, on-board display helpers, and board view transformations (rotate/flip).

**Prerequisites**
None.

**Usage**
| Action | Default shortcut |
|---|---|
| Toggle Solutions side panel | S |
| Toggle Snapshots side panel | D |
| Toggle Macros side panel | M |
| Toggle frozen goal net box highlight | F |
| Show walls | W |
| Show board coordinates | F12 |
| Show parity grid | P |
| Box pathfinding priority (toggle) | B |
| Rotate clockwise | Shift+→ |
| Rotate counter-clockwise | Shift+← |
| Flip horizontally | Shift+↑ |
| Reset to original view | Shift+↓ |

**Result**
Pressing a shortcut immediately toggles the corresponding panel or display option, or — for the rotate/flip shortcuts — transforms the board view. Board transformations only change how the board is displayed; they do not alter the puzzle itself, and your move history remains valid afterward.

**Notes**
The rotate/flip shortcuts work both in play mode (View menu) and in the [Level Editor](editor.md#transformations). Flipping the board vertically is available from the View menu and the Level Editor, but currently has no assignable keyboard shortcut. "Reset to original view" undoes any rotate/flip transformations and returns the board to its original orientation.

**Related Features**
[Customizing a shortcut](#customizing-a-shortcut), [Settings — Gameplay](settings.md#gameplay), [Menu: View](menus.md#view-menu)

## Default shortcuts — Tools

**Purpose**
Reference for the default shortcuts opening tool windows and puzzle navigation.

**Prerequisites**
None.

**Usage**
| Action | Default shortcut |
|---|---|
| Optimizer | F5 |
| Solver | F6 |
| LetsLogic | *(unassigned)* |
| Puzzle Browser | F7 |
| Go to puzzle… | Ctrl+G |
| Editor | F8 |
| Macro Studio | F9 |
| Image to Puzzle | F10 |
| Trash | F11 |
| Last Played | *(unassigned)* |
| Export move history to APNG | *(unassigned)* |

**Result**
Pressing a shortcut immediately opens the corresponding tool or dialog.

**Notes**
"LetsLogic", "Last Played", and "Export move history to APNG" have no default shortcut; assign one under [Customizing a shortcut](#customizing-a-shortcut) if desired.

**Related Features**
[Customizing a shortcut](#customizing-a-shortcut)

## Fixed keys and mouse gestures

**Purpose**
Reference for the keys and mouse gestures that are built in and cannot be reassigned under **Controls**.

**Prerequisites**
A puzzle is open in the main window.

**Usage**
| Action | Keys / gesture |
|---|---|
| Move the player | Arrow keys |
| Step away without pulling (reverse play only) | Ctrl+Arrow key |
| Store the current puzzle as bookmark 1–9 | Ctrl+1 … Ctrl+9 |
| Open bookmarked puzzle 1–9 | 1 … 9 |
| Zoom in / out | Ctrl++ / Ctrl+− |
| Reset zoom to 100% and center the board | Ctrl+0 |
| Zoom smoothly | Hold Z + mouse wheel |
| Move the view (board larger than window) | Hold Z + drag, or drag with the middle mouse button |
| Undo / redo one step | Mouse wheel over the board (down = undo, up = redo) |
| Undo / redo a single move | Ctrl + mouse wheel |
| Undo / redo 10 / 100 steps | Shift + mouse wheel / Ctrl+Shift + mouse wheel |
| Undo / redo 1,000 / 10,000 steps | Alt + mouse wheel / Ctrl+Shift+Alt + mouse wheel |

On macOS, use Cmd instead of Ctrl — except for Ctrl+Arrow key in reverse play, which uses the Control key.

**Result**
The action happens immediately, as described in the linked sections of the main window page.

**Notes**
These keys are not listed under **Controls** and cannot be changed there. The arrow keys (without Shift) always move the player, even if you assign them to another action. The digit keys 1–9 open bookmarks only as long as none of your own shortcuts uses them.

**Related Features**
[Moving the Player and Pushing Boxes](main-window.md#moving-the-player-and-pushing-boxes), [Puzzle Bookmarks](main-window.md#puzzle-bookmarks), [Zoom and Pan](main-window.md#zoom-and-pan), [Mouse Wheel Undo/Redo](main-window.md#mouse-wheel-undoredo)

## Mouse Bindings

**Purpose**
Choose what a single click, a double-click, and a right-click do when you click on a wall tile or on the background area outside the puzzle's active tiles.

**Prerequisites**
The Settings window must be open with the **Controls** category selected.

**Usage**
Each of the four bindings below is a dropdown you set independently:
| Binding | Choices |
|---|---|
| Wall click — single left click on a wall tile | Do nothing, Toggle pushable boxes highlight, Toggle unmoved/unvisited highlight |
| Wall double-click — double-clicking a wall tile | Do nothing, Toggle pushable boxes highlight, Toggle unmoved/unvisited highlight |
| Background click — clicking outside the puzzle's active tiles | Do nothing, Toggle pushable boxes highlight, Toggle unmoved/unvisited highlight |
| Right click — right-clicking a free tile | Do nothing, Mark push target |

**Result**
The chosen action fires immediately whenever you use the matching click on the board — for example, right-clicking a free tile with **Mark push target** selected highlights every box that can be pushed to that tile; clicking the tile again pushes the best box, and clicking a highlighted box excludes it from the attempt.

**Notes**
Defaults: Wall click → Toggle pushable boxes highlight, Wall double-click → Toggle unmoved/unvisited highlight, Background click → Do nothing, Right click → Mark push target.

**Related Features**
[Settings — Gameplay](settings.md#gameplay), [Customizing a shortcut](#customizing-a-shortcut)
