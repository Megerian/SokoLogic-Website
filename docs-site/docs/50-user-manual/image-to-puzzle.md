---
title: Image to Puzzle (Screenshot Converter)
sidebar_position: 8
---

# Image to Puzzle

Turn a screenshot of a Sokoban board into a playable puzzle. A three-step wizard — **Grid**, element assignment, and **Puzzle** preview — guides you from the image to a finished puzzle you can play, save, or refine in the editor.

![Screenshot](...)

## Choosing an Image

**Purpose:** Load the screenshot you want to convert.

**Prerequisites:** None.

**Usage**
- Open **Image to Puzzle** from the Tools menu, or press <kbd>F10</kbd>. The window "Import Puzzle from Image" opens.
- Click **Choose Image…** to pick an image file, or **Paste from Clipboard** to use an image you copied (for example a screenshot taken with your system's screenshot tool).

**Result:** The image opens in the first wizard step, **Grid**.

**Notes:**
- If an image can't be opened, a message below the buttons says why: the clipboard holds no image, the file can't be read (damaged or an unsupported format), or the image has more than 64 megapixels.

**Related Features**
- [Menu: Tools](menus.md#tools-menu)

---

## Step 1: Grid

**Purpose:** Place a grid over the image so that every grid cell covers exactly one board square.

**Prerequisites:** An image has been chosen.

**Usage**
- **Auto-Detect Grid** — let SokoLogic try to find the grid automatically. **Confidence: N%** shows how sure the detection is.
- **Mark a Tile** — drag a rectangle around exactly one square in the image; the grid is derived from it. Click **Cancel Marking** to stop without marking.
- Adjust the grid by hand:
  - **Columns** and **Rows** — how many squares the board has
  - **Column width** and **Row height** — the size of one square in pixels; with **Lock** checked, both stay equal
  - **Left** and **Top** — where the grid starts in the image
  - Drag the grid with the mouse, then nudge it one pixel at a time with the arrow keys
- **Skin…** — choose the skin used to draw the Sokoban elements in the next steps.
- **Next ▶** — continue to the element assignment; **◀ Back** returns to choosing an image.

**Result:** The grid is drawn over the image. In the background, SokoLogic groups squares that look alike, ready for the next step.

**Notes:** Changing the grid (including Auto-Detect or Mark a Tile) regroups the squares, so element assignments made in step 2 are cleared and need to be done again.

**Related Features**
- [Step 2: Assign Elements](#step-2-assign-elements)

---

## Step 2: Assign Elements

**Purpose:** Tell SokoLogic which Sokoban element each kind of square in the image is.

**Prerequisites:** The grid is placed.

**Usage**
- Pick an element in the palette on the left — **Wall (#)**, **Floor ( )**, **Goal (.)**, **Box ($)**, **Box on Goal (\*)**, **Player (@)**, **Player on Goal (+)**, or **Outside (-)** — then click matching squares on the image. All squares that look the same are assigned together.
- **Eraser** — click a square to remove the assignment of its whole group.
- **Edit…** — open the board assembled so far in the [Level Editor](editor.md) to fix individual squares there.
- **Skin…** — change the skin used for the element pictures.
- The counter shows how many groups are assigned, e.g. "12 / 14 clusters assigned".
- **Next ▶** — build the puzzle and continue to the preview; **◀ Back** returns to the grid.

**Result:** Assigned squares are shown with the chosen element.

**Notes:** Squares that belong to the same group always get the same element. If two different elements look too similar in the image, fix them afterwards with **Edit…** or **Fix in Editor**.

**Related Features**
- [Level Editor](editor.md)

---

## Step 3: Puzzle Preview

**Purpose:** Check the assembled puzzle, name it, and play, save, or copy it.

**Prerequisites:** Elements are assigned.

**Usage**
- The preview shows the puzzle drawn with the chosen skin, together with the validation result: **Validation passed**, or **Validation errors detected** with a list of the problems found.
- **Title** and **Author** — optional name and author for the puzzle.
- **Save** — save the puzzle as a `.sok` file. The first time you are asked for a file name; later clicks save to the same file again.
- **Save as…** — always ask for a new file name.
- **Copy** — copy the puzzle as text to the clipboard.
- **Play** — open the puzzle in the main window and close the wizard.
- **Fix in Editor** — shown below the list of problems when validation fails: open the puzzle in the [Level Editor](editor.md) and close the wizard.
- **◀ Back** — return to the element assignment.

**Result:** The puzzle is saved, copied, or opened for playing or editing.

**Notes:**
- The validation checks for exactly one player, at least one box and one goal, as many boxes as goals, and valid characters. Errors block **Play**; a box stuck in a wall corner is reported as a warning only.
- Saving a puzzle with errors asks first: "Save invalid puzzle?".
- A puzzle opened with **Play** becomes its own single-puzzle collection.

**Related Features**
- [Level Editor](editor.md) — refine the converted puzzle
- [Exporting Puzzles & Animations](export.md)

---

## Related Features

- [Level Editor](editor.md) — full puzzle editor, recommended for refinement after import
- [Menu: Tools](menus.md#tools-menu) — where Image to Puzzle is opened
