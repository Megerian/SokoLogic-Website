---
title: Exporting Puzzles & Animations
sidebar_position: 5.5
---

# Exporting Puzzles & Animations

SokoLogic can write the current puzzle or a whole collection to a `.sok` file — with exactly the solutions, snapshots, and extra information you choose — and can turn a solution or your own moves into an animated image.

![Screenshot](...)

## Export Dialog

**Purpose:** Save the current puzzle, or a range of puzzles from the loaded collection, as a `.sok` file with the content you choose.

**Prerequisites:** A puzzle collection is loaded.

**Usage**

Open the Collection menu, then **Export** › **Export…**. The dialog has two columns: on the left you choose the scope and a template, on the right you see a summary of what the selected template will write.

- **Scope**
  - **Current puzzle** — export only the puzzle you are playing.
  - **Whole collection** — export the loaded collection. Choose **All puzzles**, **Only solved puzzles**, or **Only unsolved puzzles**, and limit the range with **From puzzle** … **to**.
- **Template** — what each exported puzzle contains:
  - **Board only**
  - **Board + best solution** — the solution with the fewest moves
  - **Board + best solutions (moves & pushes)** — the solution with the fewest moves and the one with the fewest pushes
  - **Everything** — all solutions, all snapshots, author information (when it differs from the collection's author), and the saved game state
  - Your **saved templates**, each with a delete button (tooltip: **Delete this saved template**)
  - **Custom** — opens the [Custom Export Template](#custom-export-template) dialog
  - **Raw template (advanced)** — opens the [Raw Export Template](#raw-export-template) editor
- For **Custom** and **Raw template (advanced)**, an **Edit…** button below the summary opens the editor again.
- **Save to** — click **Browse...** to choose the target file. The suggested name is the puzzle's or collection's title.
- Click **Export** to write the file, or **Cancel** to close the dialog.

**Result:** The file is written, the dialog closes, and a notification says "Export successful." If writing fails, an error message says "Failed to export."

**Notes:**
- **Export** stays disabled until you have chosen a file, and while **From puzzle** is greater than the end of the range (the dialog then says "From puzzle" must not be greater than the end of the range.).
- With **Raw template (advanced)** selected, the scope choices are hidden: a raw template decides for itself which puzzles it covers ("Controlled by the raw template's own &lt;puzzles&gt; tag.").
- After a successful export, the dialog remembers your scope, puzzle filter, and template for next time.
- "Saved game state" is the position you left the puzzle in when you last exited it.

**Related Features**
- [Menu: Collection](menus.md#collection-menu) — the Export submenu with the quicker clipboard and PNG exports
- [The .sok Format](../20-Sokoban/50-puzzle-format/sok-format.md) — what the exported file looks like

---

## Custom Export Template

**Purpose:** Put together exactly which solutions, snapshots, and extra information an export contains, and optionally keep that combination as a named template.

**Prerequisites:** The [Export Dialog](#export-dialog) is open and you clicked **Custom** (or **Edit…** while **Custom** is selected).

**Usage**
- **Solutions**
  - **None**, **Best moves & best pushes solution**, **Ordered, limited**, or **All**
  - With **Ordered, limited**: **Order by** (**Moves**, **Pushes**, or **Original order**), **Limit (0 = unlimited)**, and the checkboxes **Exclude best-moves solution** and **Exclude best-pushes solution**
- **Snapshots**
  - **None**, **Ordered, limited**, or **All**
  - With **Ordered, limited**: **Order by** and **Limit (0 = unlimited)**
- **Author** — **None**, **Only if different** (only when the puzzle's author differs from the collection's), or **Always**
- **Saved game state** — include the position you left the puzzle in when you last exited it
- **Formatting**
  - **Floor character** — the character written for empty floor squares: **Space**, **Underscore (_)**, or **Minus (-)**
  - **LURD line width** — how many move characters are written per line
- **Save as template** — enter a **Template name** and click **Save** to keep this combination.
- **Use once** — use the combination for this export without saving it; **Cancel** discards your changes.

**Result:** After **Save**, the template appears in the Export dialog's template list, is selected, and a notification confirms "Template "…" saved." After **Use once**, **Custom** is selected with your combination.

**Notes:**
- Saving under the name of an existing template replaces it — unless that template is a raw template, in which case you are asked to choose a different name.
- Saved templates are part of your settings, so they are included when you [export or import your settings](settings.md#general).

**Related Features**
- [Export Dialog](#export-dialog)
- [Raw Export Template](#raw-export-template) — for layouts the options above can't express

---

## Raw Export Template

**Purpose:** Write the complete export template yourself, for full control over the file's layout — for example one line per puzzle with its LetsLogic ID and best solution.

**Prerequisites:** The [Export Dialog](#export-dialog) is open and you clicked **Raw template (advanced)** (or **Edit…** while it is selected).

**Usage**
- Edit the template text in the large text field. The first time you open the editor, it contains the template of the **Everything** preset as a starting point.
- **Load from file...** — load a template from a `.txt` file.
- **Field reference** — shows or hides the **Template field reference** next to the editor. It lists every placeholder and section you can use, grouped into General fields, Collection fields, Puzzle section, Solution sections, Snapshot section, and Author section, followed by examples.
- **Save as template** — enter a **Template name** and click **Save**.
- **Use once** — use the text for this export without saving it; **Cancel** discards your changes.

**Result:** The template text is used exactly as written. After **Save**, it appears as a saved template in the Export dialog's list.

**Notes:**
- A raw template decides for itself which puzzles are exported, through its `<puzzles>` section (e.g. `<puzzles from:1 to:10 only:solved>`); the scope choices of the Export dialog don't apply.
- **Save** and **Use once** stay disabled while the text is empty.
- If a template file cannot be read, an error message says "Failed to load the template file."

**Related Features**
- [Custom Export Template](#custom-export-template) — the guided alternative
- [The .sok Format](../20-Sokoban/50-puzzle-format/sok-format.md)

---

## Export Move Animation

**Purpose:** Save a solution or your current moves as an animated PNG (APNG) that plays the moves one by one — handy for sharing a solution visually.

**Prerequisites:**
- For a saved solution: right-click it in the [Solutions list](sidebar.md#solutions-panel) and choose **Export as animation...**.
- For your own moves: choose **Export move history to APNG** in the Tools menu. If you haven't made any moves yet, a notification says "There are no moves to export yet."

**Usage**
- **Tile size (px)** — size of one board square in the image (4–256); starts at the current skin's tile size.
- **Delay per move (ms)** — how long each move is shown; starts at your undo/redo animation delay.
- **Stop animation at end** — play the animation once and stay on the last frame, instead of looping.
- **Extra delay at end (ms)** — how long the final position stays visible before the animation starts over (only while **Stop animation at end** is off).
- **From move** / **To move** — export only part of the moves.
- **Save to** — click **Browse...** to choose the target file.
- Click **Export** to start.

**Result:** While the file is being created, a progress bar shows "Rendering frame … of …" and then "Finalizing file...". When it's done, a notification says "Solution animation exported."

**Notes:**
- You can cancel while the file is being created. An existing file you chose to overwrite stays untouched if you cancel or if the export fails.
- **Export** stays disabled until you have chosen a file, and while **From move** is greater than **To move**.
- The animation uses your current skin.
- **Export move history to APNG** exports the moves up to your current position in the move history; moves you have undone are not included.

**Related Features**
- [Sidebar Panels](sidebar.md#solutions-panel) — the solution context menu
- [Menu: Tools](menus.md#tools-menu) — Export move history to APNG
- [Keyboard Shortcuts](keyboard-shortcuts.md#default-shortcuts--tools) — assign a shortcut to the move history export

---

## Related Features

- [Menus](menus.md) — the Collection › Export submenu and the Tools menu
- [Dialogs & Input Fields](dialogs.md) — other dialogs
- [Settings: General](settings.md#general) — back up your settings, including saved export templates
