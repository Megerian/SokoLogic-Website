---
title: Image to Puzzle (Screenshot Converter)
sidebar_position: 8
---

# Image to Puzzle

Convert a screenshot of a Sokoban level diagram into a playable puzzle level using a 3-step wizard.

![Screenshot](...)

## Purpose

Digitize hand-drawn or photographed Sokoban level designs without manually typing the board layout in a text format or using the level editor.

## Prerequisites

- A screenshot image file (PNG, JPG, etc.) showing a Sokoban level grid clearly
- The image should show a bird's-eye view of the level with distinct tiles/cells

## Starting the Import

1. Click **Menu > Tools > Image to Puzzle**, or press <kbd>F10</kbd>
2. A file browser opens — select your screenshot image
3. The Image to Puzzle wizard opens with **Step 1: Grid**

---

## Step 1: Grid Detection

**Purpose:** Define the grid dimensions and position on your screenshot.

**Usage**

The wizard shows your screenshot with an overlaid grid:
- **Auto-Detect button** — attempt automatic grid detection (works if the image has clear, evenly-spaced lines)
- **Manual adjustment:**
  - **Drag grid lines** to align them with the actual tile boundaries in the image
  - **Resize handles** at grid corners — drag to adjust grid size and rotation
  - **Lock aspect ratio** — toggle to force/allow non-square grid cells
  - **Anchor mode** — snap grid to specific positions on the image

**Validation:**
- The grid must cover the entire playable level area
- Empty rows/columns around the level are OK but should be minimized
- Grid lines should align with the center of each tile in the screenshot

**Result:**
- Once satisfied, click **Next** to proceed to Step 2
- The grid is remembered; you can go back to refine it later

**Notes:**
- Auto-detection is a hint only — manual adjustment is often needed
- Uneven grids (irregular line spacing) won't import correctly; try to keep lines parallel
- The wizard shows clustering progress in the background as you adjust the grid

---

## Step 2: Classify Tiles

**Purpose:** Label each detected tile cluster as a Sokoban element (wall, floor, box, goal, player).

**Usage**

The wizard shows:
- **Screenshot canvas** — each detected tile cluster is highlighted with a different color
- **Element toolbar** — buttons to select the Sokoban element type:
  - **Wall** — solid tile
  - **Floor** — empty walkable space
  - **Box** — pushable object
  - **Goal** — target position for a box
  - **Player** — the player character
  - **Eraser** — mark a cluster as "ignore" (remove from the puzzle)

**Workflow:**
1. **Click an element button** (e.g., "Wall") to select it as the active tool
2. **Click clusters on the canvas** to assign that element type to each cluster
3. **Visual feedback** — assigned clusters change color to match the active skin's visual representation
4. **Cluster painting** — if multiple clusters look identical in the image, use the **Propagate** or **Paint similar** feature to classify them all at once

**Keyboard shortcuts:**
- **W** — select Wall tool
- **F** — select Floor tool
- **B** — select Box tool
- **G** — select Goal tool
- **P** — select Player tool
- **E** — select Eraser tool
- **Undo** — revert the last classification

**Result:**
- Once all clusters are classified, click **Next** to preview the level

**Notes:**
- Every cluster must be assigned an element type (no blanks allowed)
- A valid puzzle must have:
  - At least 1 player
  - At least 1 box
  - At least 1 goal
  - Equal numbers of boxes and goals
- If validation fails, the **Next** button is disabled; you'll see error messages

---

## Step 3: Preview & Save

**Purpose:** Review the generated level, add metadata, and save or play it.

**Usage**

The wizard shows:
- **Level preview** — the converted puzzle rendered with the active skin
- **Zoom controls** — adjust preview size
- **Metadata fields:**
  - **Level title** — name for the level (e.g., "My Level" or "Warehouse 5")
  - **Author name** — your name or the original puzzle's creator
- **Action buttons:**
  - **Edit in Level Editor** — jump into the full editor if you want to refine the level further
  - **Play now** — load the level into the main game immediately
  - **Save to file** — export the level as an XSB or collection file
  - **Back** — return to Step 2 to reclassify tiles

**Validation:**
- If the generated level fails validation (e.g., player trapped, unsolvable by design), error messages appear
- Use **Edit in Level Editor** to fix structural issues

**Result:**
- Clicking **Play** loads the level; the wizard closes
- Clicking **Save** opens a file browser to save the XSB or collection file
- Clicking **Edit** switches to the level editor with the generated board

**Notes:**
- Converted levels are often solvable as-is, but may need polish (e.g., removing extra space, adjusting difficulty)
- The editor is the recommended next step if you want to refine the level manually
- Metadata (title/author) is optional but helpful for organization

---

## Tips & Tricks

### Image Preparation
- **Clear grid lines** — mark the tile grid clearly in your image (pen/marker on paper, or use image editing software)
- **Good contrast** — ensure each element type is visually distinct (dark walls vs. light floors, etc.)
- **Square cells** — make grid cells as close to square as possible; irregular shapes confuse the clusterer
- **Bright background** — high contrast between elements and background aids detection

### Fixing Classification Errors
- **Back button** — return to Step 2 and reclassify individual clusters
- **Level Editor** — jump into the full editor if the puzzle is almost right but needs tweaks
- **Restart** — close the wizard and start over with a different image or grid

### Common Issues

| Problem | Solution |
|---------|----------|
| Grid doesn't align with tiles | Manually drag grid lines; use **Lock aspect ratio** if cells are non-square |
| Auto-detect fails | Skip it; manually adjust the grid by dragging lines to match the image |
| "Player trapped" error in preview | The player's starting position has no valid moves; use the editor to reposition the player or adjust walls |
| Too many/too few clusters detected | Grid lines may not align perfectly with tile boundaries; re-adjust the grid in Step 1 |
| Clusters won't classify correctly | Ensure each cluster is actually a single tile; if the grid is off, clusters blend together |

---

## Related Features

- [Level Editor](editor.md) — full-featured level design tool; recommended for refinement after import
- [Menu: Tools > Puzzle Browser](puzzle-browser.md) — view and manage imported levels
- [Menu: Collection > Save Single Puzzle](menus.md#collection-menu) — export your converted level as a file
