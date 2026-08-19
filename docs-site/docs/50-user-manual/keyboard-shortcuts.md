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
| Simplify board | *(unassigned)* |
| Reverse play (pull boxes) | *(unassigned)* |
| Replay | R |
| Copy to clipboard | Ctrl+M |
| Copy moves after current position | *(unassigned)* |
| Copy moves range to clipboard… | Ctrl+Shift+M |
| Paste moves from clipboard | Ctrl+P |

**Result**
Pressing a shortcut immediately triggers the corresponding action, exactly as if it had been chosen from the **Moves** menu.

**Notes**
"Copy moves after current position" has no default shortcut; assign one under [Customizing a shortcut](#customizing-a-shortcut) if desired. "Reverse play (pull boxes)" also has no default shortcut.

**Related Features**
[Customizing a shortcut](#customizing-a-shortcut), [Reverse Play](main-window.md#reverse-play-pull-boxes)

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

**Result**
Pressing a shortcut immediately toggles the corresponding panel or display option, or — for the rotate/flip shortcuts — transforms the board view. Board transformations only change how the board is displayed; they do not alter the puzzle itself, and your move history remains valid afterward.

**Notes**
The rotate/flip shortcuts work both in play mode (View menu) and in the [Level Editor](editor.md#transformations). Flipping the board vertically is available from the View menu and the Level Editor, but currently has no assignable keyboard shortcut.

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
