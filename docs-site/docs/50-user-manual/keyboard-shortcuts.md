---
title: Keyboard Shortcuts
sidebar_position: 11
---

Most frequently used actions in SokoLogic have a keyboard shortcut. Shortcuts for moves, sidebar/display toggles, and tool windows can be customized; a handful of other shortcuts (such as arrow-key movement) are fixed and always available.

![Screenshot](...)

## Customizing a shortcut

**Purpose**
Reassign the key used to trigger an action to whatever is more comfortable to reach.

**Prerequisites**
The Settings window must be open with the **Keybindings** category selected.

**Usage**
Click a shortcut's key field, then press the new key (optionally holding Ctrl/Cmd, Shift, and/or Alt) you want to use for that action.

**Result**
The new shortcut is applied immediately and remembered for future sessions. If the pressed key is already used by another action, the assignment is rejected and the row shows which action it's already assigned to. If the pressed key is reserved for a fixed function (see Notes below), the assignment is rejected with a message explaining that the key is reserved.

**Notes**
The category's search field also highlights matching shortcut rows by action name, making it easier to find one shortcut among many. A handful of keys are reserved for fixed application functions that are never available for reassignment here — for example the arrow keys (board movement) and a small set of Ctrl/Cmd-based shortcuts used elsewhere in the application (such as the Settings window shortcut itself).

**Related Features**
[Default shortcuts — Moves](#default-shortcuts--moves), [Settings](settings.md), [Resetting settings to defaults](settings.md#resetting-settings-to-defaults)

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
| Replay | R |
| Simplify board | *(unassigned)* |
| Copy to clipboard | Ctrl+M |
| Copy moves after current position | *(unassigned)* |
| Copy moves range to clipboard… | Ctrl+Shift+M |
| Paste moves from clipboard | Ctrl+P |

**Result**
Pressing a shortcut immediately triggers the corresponding action, exactly as if it had been chosen from the **Moves** menu.

**Notes**
"Copy moves after current position" has no default shortcut; assign one under [Customizing a shortcut](#customizing-a-shortcut) if desired.

**Related Features**
[Customizing a shortcut](#customizing-a-shortcut)

## Default shortcuts — Sidebars & Display

**Purpose**
Reference for the default shortcuts toggling sidebar panels and on-board display helpers.

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

**Result**
Pressing a shortcut immediately toggles the corresponding panel or display option.

**Notes**
None.

**Related Features**
[Customizing a shortcut](#customizing-a-shortcut), [Settings — Gameplay](settings.md#gameplay)

## Default shortcuts — Board Transformations

**Purpose**
Reference for the default shortcuts that rotate or flip the board view.

**Prerequisites**
None.

**Usage**
| Action | Default shortcut |
|---|---|
| Rotate clockwise | Shift+→ |
| Rotate counter-clockwise | Shift+← |
| Flip horizontally | Shift+↑ |
| Flip vertically | *(unassigned)* |

**Result**
Pressing a shortcut immediately transforms the board view. These transformations only change how the board is displayed — they do not alter the puzzle itself, and your move history remains valid afterward.

**Notes**
The same shortcuts work both in play mode (View menu) and in the [Level Editor](editor.md#transformations).

**Related Features**
[Customizing a shortcut](#customizing-a-shortcut), [Menu: View](menus.md#view-menu)

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
| Puzzle Browser | F7 |
| Go to puzzle… | Ctrl+G |
| Editor | F8 |
| Macro Studio | F9 |
| Image to Puzzle | F10 |
| Trash | F11 |
| Last Played | *(unassigned)* |

**Result**
Pressing a shortcut immediately opens the corresponding tool or dialog.

**Notes**
"Last Played" has no default shortcut; assign one under [Customizing a shortcut](#customizing-a-shortcut) if desired.

**Related Features**
[Customizing a shortcut](#customizing-a-shortcut)
