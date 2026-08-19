---
title: Level Editor
sidebar_position: 9
---

# Level Editor

The Level Editor is a full-featured tool for creating and modifying Sokoban puzzles. You can place walls, boxes, goals, and the player, validate your design, and save or test your creations.

![Screenshot](...)

## Opening the Editor

**Purpose:** Create or modify Sokoban puzzle levels.

**Prerequisites:** None, but opening the editor from an existing puzzle will load that puzzle for editing.

**Usage**
- **From play mode:** Click **Menu > Tools > Editor** or press <kbd>F8</kbd>.
- **From main menu:** Click **Tools > Editor**.

**Result**
The editor opens in a new window showing a blank or loaded board, with the toolbar at top, status bar at bottom, and the tool/statistics sidebar on the left.

**Notes**
Opening the editor from an active puzzle preserves your move history — you can return to play mode without restarting.

**Related Features**
[Main Window](main-window.md), [Settings](settings.md)

---

## Workspace Overview

The editor consists of several parts:

- **Toolbar (Top)** — buttons for New, Copy, Paste, Save, Undo/Redo, the transform (rotate/flip) buttons, and the positioning-mode toggle
- **Central Board Area** — the editable puzzle board
- **Sidebar (Left)** — the tool palette, level title/author fields, board statistics, and the **Play**/**Cancel** buttons
- **Status Bar (Bottom)** — shows current tool, validation status, margin and zoom controls, board size, and mouse coordinates

---

## Tools

The editor offers six primary tools for painting tiles. Switch tools using the toolbar buttons, their number/letter key (1–5, M), or mouse wheel scroll while dragging.

### Wall Tool (1)

**Purpose:** Draw solid wall tiles.

**Usage**
- **Click & drag** to paint walls on a single tile or across a rectangular area.
- **Shift + click & drag** to draw a straight line or rectangle of walls.
- **Mouse wheel scroll** (while painting) to switch to a different tool without releasing the mouse button.

**Result:** Wall tiles appear on the board; they block player and box movement.

**Notes**
Walls are essential for defining the playable area — typically used to create an outer boundary around the level.

---

### Floor Tool (5)

**Purpose:** Clear tiles or draw empty floor tiles.

**Usage**
- **Click & drag** to paint floor tiles (empty spaces).
- **Shift + click & drag** for straight line or rectangle.

**Result:** Tiles become empty walkable spaces.

**Notes**
Painting over boxes or goals converts them to floor; painting over the player converts player to floor on that tile.

---

### Box Tool (2)

**Purpose:** Place and toggle boxes.

**Usage**
- **Click a tile** to toggle a box on/off:
  - Empty tile → Place a box ($)
  - Box on floor ($) → Convert to box on goal (*)
  - Box on goal (*) → Remove the box
  - Tile with goal (.) → Place box on goal (*)
- **Drag & paint** to place boxes across multiple tiles.

**Result:** Boxes appear on the board and can be pushed by the player during gameplay.

**Notes**
The number of boxes must equal the number of goals for a valid puzzle.

---

### Goal Tool (3)

**Purpose:** Place goal tiles where boxes must be pushed.

**Usage**
- **Click a tile** to toggle a goal on/off:
  - Empty tile → Place a goal (.)
  - Goal (.) → Convert to box on goal (*)
  - Box on floor ($) → Convert to box on goal (*)
  - Box on goal (*) → Revert to just a goal (.)
  - Player or player on goal → Convert to player on goal (+)
- **Drag & paint** to place goals across multiple tiles.

**Result:** Goal tiles appear; boxes pushed onto goals count toward solving the puzzle.

**Notes**
Every box must have a matching goal for the puzzle to be valid.

---

### Player Tool (4)

**Purpose:** Set the player's starting position.

**Usage**
- **Click a tile** to place the player at that position:
  - Empty tile → Player starts here (@)
  - Goal tile → Player starts on goal (+)
- Only one player can exist — clicking a new tile moves the player from the old position to the new one.
- When painting an area with Shift+drag, the player is placed at the tile where you release the mouse button (not automatically a corner of the painted region).

**Result:** The player appears on the board at the specified tile.

**Notes**
Every puzzle must have exactly one player. The puzzle is only valid if the player cannot leave the playable area (surrounded by walls).

---

### Marquee Selection Tool (M)

**Purpose:** Select a rectangular region of tiles for moving, copying, or modifying them.

**Usage**
- **Click & drag** to create a selection rectangle over the tiles you want to select.
- **Selected tiles are highlighted** with a visual indicator.
- Once selected, you can:
  - **Copy** the selected region (<kbd>Ctrl</kbd>+<kbd>C</kbd>)
  - **Cut** the selected region (<kbd>Ctrl</kbd>+<kbd>X</kbd>)
  - **Delete** the selection (right-click menu)
  - **Fill** the selection with a specific tile type (right-click menu)
  - **Replace** all occurrences of one tile type within the selection (right-click menu)
  - **Rotate/Mirror Selection** — right-click menu submenu that rotates or mirrors only the selected tiles in place (rotate clockwise, rotate counter-clockwise, rotate 180°, flip horizontally, flip vertically)
  - **Move** the selection (<kbd>Ctrl</kbd>+arrow keys to shift the selected region within the board)
- **Keyboard modifiers** while selecting:
  - **Shift** — add to existing selection
  - **Ctrl** — clone (copy) the selection instead of moving it
  - **Alt** — remove from existing selection

**Result:** Tiles within the selection are affected by copy, paste, delete, or fill operations.

**Notes**
The marquee tool is the only tool that doesn't paint — it only selects.

---

## Top Toolbar

| Button | Action |
|--------|--------|
| **New** | Create a new blank puzzle (opens a size/preset dialog) |
| **Copy** | Copy selected region or entire board to clipboard |
| **Paste** | Paste clipboard content onto the board |
| **Save** | Export the puzzle as a `.sok` file to disk |
| **Undo** | Revert the last edit (Max 100 undo steps) |
| **Redo** | Reapply a reverted edit |
| **Rotate clockwise / counter-clockwise, Flip horizontally / vertically** | Transform the board or, with a selection active and the modifier key held, just the selection — see [Transformations](#transformations) |
| **Positioning mode toggle** | Switch between Auto-Center and Free Positioning — see [Board Positioning Modes](#board-positioning-modes) |

The **Play** and **Cancel** buttons are not in the top toolbar — they sit at the bottom of the left sidebar (see [Sidebar](#sidebar)). Zoom, margin, and board-size controls are in the status bar at the bottom (see [Status Bar](#status-bar)).

---

## Creating a New Level

### Using Presets

1. Click **New**.
2. Choose a preset size (e.g., 10×10, 15×15) from the **Presets** list, or enter **Width** and **Height** manually.
3. Check **Create outer wall frame** to automatically draw walls around the border (recommended to simplify level design).
4. Click **Apply**.
5. A new blank board appears; start placing elements.

---

## Board Positioning Modes

The editor offers two positioning modes (toggled via the positioning button in the top toolbar):

### Auto-Center Mode (Default)

- The puzzle board always stays **centered** on screen with a uniform margin around it.
- The **+** and **−** buttons (or mouse wheel) adjust the margin uniformly on all sides.
- Good for designing compact, well-structured levels.

### Free Positioning Mode

- The board stays in place; you use **Ctrl + arrow keys** to shift it around the workspace.
- Useful for designing asymmetric levels or when you need to draw in a specific area.
- The **+** and **−** buttons adjust the left/top margin independently to create uneven spacing.

**Switching modes:**
- Click the positioning button in the top toolbar to toggle; its icon and tooltip reflect the current mode.
- When switching from free to auto-center mode, the board reflows to minimum margins with uniform centering.

---

## Editing Operations

### Undo & Redo

- **Undo:** <kbd>Ctrl</kbd>+<kbd>Z</kbd> (or the Undo button)
- **Redo:** <kbd>Ctrl</kbd>+<kbd>Y</kbd> or <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Z</kbd> (or the Redo button)
- **Max history:** 100 edits
- When you make a new edit, the redo stack clears.

### Copy, Cut, & Paste

**Copy:**
- Select a region with the **Marquee** tool and press <kbd>Ctrl</kbd>+<kbd>C</kbd>, or click the **Copy** button.
- If no selection exists, the entire board is copied.
- The clipboard content is available inside the editor and can be exported to the system clipboard (as text).

**Cut:**
- Removes the selected region and copies it to clipboard (<kbd>Ctrl</kbd>+<kbd>X</kbd>).

**Paste:**
- Paste system clipboard content or the internal clipboard onto the board (<kbd>Ctrl</kbd>+<kbd>V</kbd>).
- If pasting a full puzzle (detected by title/author metadata), it replaces the current board.
- If pasting a snippet (partial board), you place it at:
  - The first selected position (if a marquee selection is active), or
  - The current mouse position (if hovering), or
  - The top-left margin position (default).
- After pasting, the pasted region is automatically selected (marquee mode).

### Select All

- <kbd>Ctrl</kbd>+<kbd>A</kbd> selects the entire board's content area for mass operations.

### Fill, Delete, Replace

**Fill:**
- Right-click selected tiles and choose **Fill**, or use Menu > Fill selected area.
- Choose which tile type to fill with (wall, floor, box, goal).

**Delete:**
- Remove all content from selected tiles (clears boxes/goals but leaves floors).

**Replace:**
- Within a selection, replace all occurrences of one tile type with another.
- Example: replace all boxes with floors.

---

## Transformations

The toolbar's transform buttons rotate or flip the level:

| Button | Effect |
|---|---|
| **Rotate clockwise** | Rotate 90° clockwise |
| **Rotate counter-clockwise** | Rotate 90° counter-clockwise |
| **Flip horizontally** | Mirror left-to-right |
| **Flip vertically** | Mirror top-to-bottom |

**By default these transform the entire board.** If you have an active **Marquee** selection, hold <kbd>Ctrl</kbd> (<kbd>Cmd</kbd> on macOS) while clicking a transform button to rotate or flip only the selected tiles instead of the whole board.

For selection-only transforms you can also right-click the selection and choose **Rotate/Mirror Selection**, which additionally offers a **Rotate 180°** option not present in the toolbar.

---

## Board Size Dialog

**When to use:**
- Creating a new puzzle (click **New** button).
- Manually adjusting an existing puzzle's canvas size.

**Options:**
- **Width / Height** — enter custom dimensions in tiles.
- **Presets** — quick-select common sizes (5×5, 10×10, 15×15, 20×20, etc.).
- **Create outer wall frame** — automatically draw walls around the border.

**Result:**
A new board is created with the specified dimensions. If **Create outer wall frame** is checked, walls surround the outer edge, leaving the interior empty for design.

---

## Sidebar

The sidebar is docked on the **left** side of the editor window and contains, top to bottom:

- **Title / Author fields** — editable text fields for the level's metadata, saved with the puzzle.
- **Tool palette** — the six tools described under [Tools](#tools), each showing its shortcut key; click a tool to select it (an alternative to the number/letter keys or scroll-wheel switching).
- **Statistics** — real-time counts of **Walls**, **Floors**, **Boxes**, and **Goals** currently on the board.
- **Play / Cancel buttons** — at the bottom of the sidebar:
  - **Play** saves your edits and returns to play mode to test the puzzle (disabled until the puzzle passes [validation](#validation)).
  - **Cancel** discards edits and closes the editor without saving.

---

## Status Bar

The **Status Bar** at the bottom shows, left to right:

- **Current tool** name and instructions (e.g., "Draw walls (Shift: draw line/rect)").
- **Validation status** — the same icon and message described under [Validation](#validation).
- **Margin controls** (`− Margin: _ +`) — click **−**/**+** or scroll the mouse wheel over this area to adjust the margin; click the margin value to toggle between Auto-Center and Free Positioning mode.
- **Zoom controls** (`− Zoom: __% +`) — click **−**/**+** to step the zoom level, or click the percentage to reset to 100%.
- **Board size** (Size: WxH) — click to open the [Board Size Dialog](#board-size-dialog).
- **Mouse coordinates** (X: ___, Y: ___) showing the tile under the pointer.

---

## Validation

As you design, the editor validates the board in real-time. A validation panel appears with one of these messages:

| Status | Meaning | Fix |
|--------|---------|-----|
| ✓ **Valid** | The puzzle is playable. | (None needed) |
| ⚠ **Not fully enclosed** | The player can walk to the board's edge (a warning, not an error). | Surround the playable area with walls. |
| ✗ **No player** | The puzzle has no player. | Place a player (tool 4). |
| ✗ **No boxes** | No boxes are placed. | Add at least one box (tool 2). |
| ✗ **No goals** | No goal tiles exist. | Add at least one goal (tool 3). |
| ✗ **Box/goal mismatch** | The number of boxes does not match the number of goals. | Balance them (e.g., 3 boxes → 3 goals). |

---

## Testing Your Puzzle

1. Click **Play** or use Menu > Play.
2. The puzzle is automatically saved to your session and loaded in play mode.
3. Test the level:
   - Can the player reach boxes?
   - Can boxes be pushed to their goals?
   - Is the puzzle solvable?
4. If you find issues, click the **Editor** button in the toolbar (or Menu > Tools > Editor) to return and refine.
5. Your move history in play mode is preserved — you can switch back and forth without losing progress.

---

## Saving Your Work

### Save to Disk

Click **Save**:
- A file browser opens.
- Enter a filename (default: level title).
- Choose a location on disk.
- The puzzle is saved as a `.sok` file (plain text, standard Sokoban format).

### Export to Play Mode

Click **Play**:
- Your puzzle is loaded into play mode.
- You can test it, and if valid, save solutions.
- The puzzle is not automatically saved to disk — use **Save** for that.

---

## Keyboard Shortcuts (Editor)

| Key | Action |
|-----|--------|
| **1–5** | Switch to tool (1=Wall, 2=Box, 3=Goal, 4=Player, 5=Floor) |
| <kbd>M</kbd> | Switch to the Marquee selection tool |
| <kbd>Ctrl</kbd>+<kbd>Z</kbd> | Undo |
| <kbd>Ctrl</kbd>+<kbd>Y</kbd> or <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Z</kbd> | Redo |
| <kbd>Ctrl</kbd>+<kbd>C</kbd> | Copy selection (or entire board) |
| <kbd>Ctrl</kbd>+<kbd>X</kbd> | Cut selection |
| <kbd>Ctrl</kbd>+<kbd>V</kbd> | Paste |
| <kbd>Ctrl</kbd>+<kbd>A</kbd> | Select all |
| <kbd>Ctrl</kbd>+<kbd>↑</kbd>/<kbd>↓</kbd>/<kbd>←</kbd>/<kbd>→</kbd> | Shift board position (free positioning mode) |
| <kbd>+</kbd> / <kbd>−</kbd> | Increase/decrease margin |
| Scroll wheel | Switch tool (hold <kbd>Ctrl</kbd> and scroll to zoom instead) |
| <kbd>Shift</kbd>+drag | Draw straight line or rectangle with current tool |

There is no default shortcut to save the level — use the **Save** button.

---

## Notes & Tips

- **Symmetry:** Use copy/paste to mirror designs for symmetric levels.
- **Margins:** The margin space around the puzzle is part of the playable area — the player can walk there. Use walls to block unwanted access.
- **Zoom:** Use Ctrl+scroll to zoom in for precision editing, or click the zoom percentage to reset to 100%.
- **Panning:** When the board is larger than the window, hold <kbd>Z</kbd> and drag (or drag with the middle mouse button) to move the view.
- **Coordinates:** Hover over a tile to see its X,Y position in the status bar; useful for referencing puzzle layout.
- **Undo history:** Limited to 100 edits per session; plan accordingly for very large changes.
- **Testing:** Always test your puzzle in play mode before distributing it to ensure it's solvable and behaves as intended.

---

## Related Features

- [Main Window](main-window.md) — play mode and puzzle navigation
- [Settings](settings.md) — customize keybindings and editor behavior
- **Solver** — the automated solving tool can test whether your puzzle is solvable (opened via **Menu > Tools > Solver**)
- [Image to Puzzle](image-to-puzzle.md) — alternative way to create puzzles from screenshots
- [Keyboard Shortcuts](keyboard-shortcuts.md) — complete keybinding reference
