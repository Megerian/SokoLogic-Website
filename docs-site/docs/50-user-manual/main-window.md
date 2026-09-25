---
title: Main Window & Puzzle Workspace
sidebar_position: 1
---

# Main Window & Puzzle Workspace

The main window is where you play. It shows the puzzle board in the middle, a toolbar with move counters and the most important actions at the top, a status bar at the bottom, and an optional sidebar on the left with your solutions, snapshots, and macros.

![Screenshot](...)

## Toolbar (Top Bar)

### Move Counters

**Purpose:** Displays your progress in the current puzzle.

**Prerequisites:** A puzzle is loaded.

**Usage**
- **MOVES** — total steps taken by the player, including the steps walked to reach a box
- **PUSHES** — total number of box pushes

**Result:** Updates in real time as you move, push, undo, and redo.

**Notes:** The counters show the current position in your move history, so they go down when you undo and back up when you redo.

**Related Features**
- [History Controls](#history-controls) — undo and redo
- [Status Bar](#status-bar-bottom-bar) — shows your position within the whole move history

---

### Load Puzzle Collection

**Purpose:** Open a Sokoban puzzle collection from disk.

**Prerequisites:** None — always available.

**Usage**
- Click the folder button (tooltip: **Load new puzzle collection from disk**) and choose a puzzle file, for example a `.sok` file.

**Result:** The collection replaces the current one and its first puzzle opens.

**Notes:**
- You can also drag a puzzle file from your file manager onto the board — see [Opening a File by Drag and Drop](#opening-a-file-by-drag-and-drop).
- Puzzles you played recently can be reopened from the [Last Played History](history-and-trash.md#last-played-history-browser).

**Related Features**
- [Puzzle Navigation](#puzzle-navigation) — move between puzzles in the loaded collection
- [Menu: Collection](menus.md#collection-menu) — further import and export options

---

### Open Level Editor

**Purpose:** Switch to the level editor to design or modify puzzles.

**Prerequisites:** A puzzle is loaded.

**Usage**
- Click the pencil button (tooltip: **Open puzzle editor**).

**Result:** The window switches to the level editor with the current puzzle loaded.

**Notes:** To get back, use **Play** (to test your edited puzzle) or **Cancel** in the editor — see [Leaving the Editor](editor.md#leaving-the-editor).

**Related Features**
- [Level Editor](editor.md) — full editor documentation
- [Menu: Tools](menus.md#tools-menu) — alternative way to open the editor

---

### Sidebar Toggles

**Purpose:** Show or hide the sidebar with your solutions, snapshots, and macros.

**Prerequisites:** A puzzle is loaded.

**Usage**
- **Solutions** (list icon), **Snapshots** (bookmark icon), **Macros** (code icon) — each button opens the sidebar on its tab.
- Clicking the button of the tab that is already showing hides the sidebar again.
- Default keyboard shortcuts: <kbd>S</kbd> (Solutions), <kbd>D</kbd> (Snapshots), <kbd>M</kbd> (Macros).

**Result:** The sidebar slides in on the left side of the board, or hides again.

**Notes:** The sidebar shows one tab at a time; you can also switch tabs with the tab bar at the top of the sidebar.

**Related Features**
- [Sidebar Panels](sidebar.md) — full sidebar documentation
- [Settings: Sidebar](settings.md#sidebar) — sorting, filtering, and badges
- [Keyboard Shortcuts](keyboard-shortcuts.md) — sidebar toggle keybindings

---

### Puzzle Navigation

**Purpose:** Move between puzzles in the loaded collection.

**Prerequisites:** The collection contains more than one puzzle. Otherwise both buttons are disabled, and their tooltip says "No other puzzles in this collection".

**Usage**
- **Previous puzzle** (left arrow) / **Next puzzle** (right arrow) — open the previous or next puzzle.
- Hold <kbd>Ctrl</kbd> while clicking to jump to the previous or next **unsolved** puzzle instead.

**Result:** The selected puzzle opens at its start position.

**Notes:** To jump to a specific puzzle number, use **Go to Puzzle** in the Collection menu (see [Go to Puzzle Dialog](dialogs.md#go-to-puzzle-dialog)).

**Related Features**
- [Menu: Collection](menus.md#collection-menu) — next/previous puzzle, including the "unsolved" variants
- [Puzzle Browser](puzzle-browser.md) — search and filter puzzles in a collection
- [Puzzle Bookmarks](#puzzle-bookmarks) — jump to a saved puzzle with a single key

---

### History Controls

**Purpose:** Undo, redo, and replay your moves.

**Prerequisites:** A puzzle is loaded.

**Usage**
- **Set puzzle to start position** (first page icon) — undo everything and go back to the start position
- **Undo last played movement** (back arrow) — undo one step
- **Replay all movements of move history** (play icon) — play your undone moves forward again, animated
- **Replay last undone movement** (forward arrow) — redo one step
- **Redo all movements** (last page icon) — redo all undone moves at once, without animation

How much one undo or redo step covers is set by the [Undo/Redo Step Size Toggle](#undoredo-step-size-toggle) next to these buttons.

**Result:** The board jumps to the chosen position in your move history. Nothing is lost by undoing: undone moves stay available for redo until you make a different move.

**Notes:** Buttons that cannot be used right now are disabled, and their tooltip says why (e.g. "No moves to undo" or "No undone moves to redo"). You can also undo and redo by turning the mouse wheel over the board — see [Mouse Wheel Undo/Redo](#mouse-wheel-undoredo).

**Related Features**
- [Status Bar](#status-bar-bottom-bar) — click the move indicator to jump to a specific move
- [Menu: Moves](menus.md#moves-menu) — more history and clipboard actions
- [Settings: Animations](settings.md#animations) — animation speed for undo and redo

---

### Undo/Redo Step Size Toggle

**Purpose:** Choose how much ground one undo or redo step covers.

**Prerequisites:** A puzzle is loaded.

**Usage**
- Click the toggle to cycle through its three settings:
  - **Combined** — one step covers the whole run of pushes your last action produced (default)
  - **Push** — one step covers a single push
  - **Move** — one step covers a single player movement, whether or not it pushed a box

**Result:** The chosen step size applies to the undo/redo buttons, their keyboard shortcuts, the menu items, and the mouse wheel over the board.

**Notes:** <kbd>Ctrl</kbd> (<kbd>Cmd</kbd> on macOS) + mouse wheel always undoes or redoes a single move, whatever this toggle says.

**Related Features**
- [Settings: Gameplay](settings.md#gameplay) — the same option as **Undo/redo granularity**
- [Mouse Wheel Undo/Redo](#mouse-wheel-undoredo)

---

### Instant Move Toggle

**Purpose:** Make the player jump straight to a clicked tile instead of walking there step by step.

**Prerequisites:** A puzzle is loaded.

**Usage**
- Click the main part of the **Instant** button (lightning icon) to switch instant moves on or off. The label is highlighted while it is on.
- Click the small arrow on the right side of the button, or right-click anywhere on it, to open its options menu with **Show direction changes** — while instant moves are on, the turns the player would have made are briefly shown, so the route stays readable.

**Result:** Moves triggered by clicking happen at once instead of being animated.

**Notes:** Instant moves only change how moves are shown; move and push counts and saved solutions are the same either way.

**Related Features**
- [Settings: Gameplay](settings.md#gameplay) — the same **Instant** and **Show direction changes** options
- [Settings: Animations](settings.md#animations) — animation speed when instant moves are off

---

### Box Pathfinding Priority Toggle

**Purpose:** Choose whether pushing a box to a target you pick prefers fewer pushes or fewer moves.

**Prerequisites:** A puzzle is loaded.

**Usage**
- Click the toggle to switch between **Pushes Path** (default) and **Moves Path**.
- Default keyboard shortcut: <kbd>B</kbd>.

**Result:** When you push a box to a chosen tile — by clicking the box and then the target, by dragging the box, or by using a [push target](#push-targets-and-board-highlights) — the route with the fewest pushes or the fewest moves is used.

**Notes:** This is a play preference only; it does not affect the solver.

**Related Features**
- [Settings: Gameplay](settings.md#gameplay) — the same option as **Box pathfinding priority**
- [Moving the Player and Pushing Boxes](#moving-the-player-and-pushing-boxes)

---

## Board Area

### Moving the Player and Pushing Boxes

**Purpose:** Play the puzzle with the keyboard or the mouse.

**Prerequisites:** A puzzle is loaded.

**Usage**
- **Arrow keys** — move the player one tile; walking into a box pushes it.
- **Click a free tile** — the player walks there along the shortest path.
- **Click a box, then click a tile** — the box is selected first; clicking a target tile pushes it there.
- **Drag a box** onto a target tile — the same as clicking the box and then the target, in one motion. The box is selected as soon as you start dragging.
- **Click the player** — shows or hides the tiles the player can currently reach.
- **Click a box that is part of a staircase or straight-line chain** — when those highlights are enabled, the boxes that can be pushed together are highlighted along with their possible targets; click a highlighted target to push the whole chain.

**Result:** The board updates, the move counters change, and — if enabled — each step is animated.

**Notes:**
- When [Show reachable box positions](settings.md#gameplay) is on, selecting a box highlights every tile it can still be pushed to.
- Clicking a wall or the background around the board toggles helper highlights — see [Push Targets and Board Highlights](#push-targets-and-board-highlights).
- The arrow keys always move in the direction you see on screen, even when the board is [rotated or flipped](#rotating-and-flipping-the-board).

**Related Features**
- [Box Pathfinding Priority Toggle](#box-pathfinding-priority-toggle), [Instant Move Toggle](#instant-move-toggle)
- [Settings: Gameplay](settings.md#gameplay) — reachable positions, staircase and line push highlights, go-through boxes

---

### Push Targets and Board Highlights

**Purpose:** Let the game find a box for a target tile, or highlight boxes and tiles that help you plan.

**Prerequisites:** A puzzle is loaded and you are playing forward (these features are not available in [reverse play](#reverse-play-pull-boxes)). What each click does depends on your [mouse bindings](keyboard-shortcuts.md#mouse-bindings); the defaults are described here.

**Usage**
- **Right-click a free tile** — marks it as the push target. All boxes that can be pushed there are highlighted, and the status bar says "Highlighted boxes can be pushed to the marked position. Click the position again to push the best one, or click a box to exclude it."
  - Click the marked tile again to push the best box there.
  - Click a highlighted box to exclude it; the game then picks among the remaining ones.
- **Click a wall** — highlights the boxes the player can push right now.
- **Double-click a wall** — highlights the squares you haven't visited yet and the boxes you haven't moved yet.

**Result:** The highlights appear on the board, with a matching hint in the status bar. Any other click or move hides them again.

**Notes:** If no box can reach the tile you right-clicked, the status bar shows "No box can be pushed to the selected position." The highlight colors can be changed in [Settings: Gameplay](settings.md#gameplay).

**Related Features**
- [Keyboard Shortcuts: Mouse bindings](keyboard-shortcuts.md#mouse-bindings) — choose what wall clicks, background clicks, and right-clicks do
- [Box Pathfinding Priority Toggle](#box-pathfinding-priority-toggle)

---

### Selecting Tiles

**Purpose:** Count the boxes and goals in an area of the board.

**Prerequisites:** A puzzle is loaded.

**Usage**
- Hold <kbd>Ctrl</kbd> and drag a rectangle over the board to add the covered tiles to the selection; <kbd>Ctrl</kbd>+click adds a single tile.
- Hold <kbd>Shift</kbd> and drag (or drag with the right mouse button) to remove tiles from the selection; <kbd>Shift</kbd>+click removes a single tile.

**Result:** The selected tiles are marked, and the status bar shows a summary such as "Selection Analysis -> Boxes: 3 | Boxes on Goal: 1 | Empty Goals: 2".

**Notes:** A plain drag without a modifier key never selects tiles — it moves the player or a box instead. A plain click elsewhere clears the selection.

**Related Features**
- [Moving the Player and Pushing Boxes](#moving-the-player-and-pushing-boxes)

---

### Mouse Wheel Undo/Redo

**Purpose:** Step quickly back and forth through your move history.

**Prerequisites:** A puzzle is loaded.

**Usage**

Turn the mouse wheel over the board: scrolling down undoes, scrolling up redoes. Modifier keys change how many steps one wheel notch covers:

| Keys held | Steps per notch |
|---|---|
| none | 1 step (size set by the [step size toggle](#undoredo-step-size-toggle)) |
| <kbd>Ctrl</kbd> | 1 single move, regardless of the step size toggle |
| <kbd>Shift</kbd> | 10 steps |
| <kbd>Ctrl</kbd>+<kbd>Shift</kbd> | 100 steps |
| <kbd>Alt</kbd> | 1,000 steps |
| <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Alt</kbd> | 10,000 steps |

On macOS, use <kbd>Cmd</kbd> instead of <kbd>Ctrl</kbd>.

**Result:** The board jumps without animation; the move indicator in the status bar shows where you are.

**Notes:** Holding <kbd>Z</kbd> while turning the wheel zooms instead — see [Zoom and Pan](#zoom-and-pan). The tooltip of the move indicator in the status bar lists these combinations too.

**Related Features**
- [History Controls](#history-controls), [Status Bar](#status-bar-bottom-bar)

---

### Zoom and Pan

**Purpose:** Enlarge the board or move a zoomed-in board around.

**Prerequisites:** A puzzle is loaded.

**Usage**
- <kbd>Ctrl</kbd>+<kbd>+</kbd> / <kbd>Ctrl</kbd>+<kbd>−</kbd> — zoom in and out (<kbd>Cmd</kbd> on macOS)
- <kbd>Ctrl</kbd>+<kbd>0</kbd> — reset to 100% and center the board
- Hold <kbd>Z</kbd> and turn the mouse wheel — zoom smoothly
- Hold <kbd>Z</kbd> and drag, or drag with the middle mouse button — move the view when the board is larger than the window
- The zoom controls in the [status bar](#status-bar-bottom-bar) do the same with the mouse

**Result:** The board is drawn larger or smaller; the status bar shows the current zoom level.

**Notes:** How large tiles are drawn at 100% depends on the skin and on [Settings: Skins](settings.md#skins) (maximum tile scaling, minimum tile size, fitting large puzzles into the window).

**Related Features**
- [Status Bar](#status-bar-bottom-bar), [Settings: Skins](settings.md#skins)

---

### Rotating and Flipping the Board

**Purpose:** Look at the puzzle from a different orientation.

**Prerequisites:** A puzzle is loaded.

**Usage**
- Use the **Transformations** submenu of the View menu: **Rotate clockwise**, **Rotate counter-clockwise**, **Flip horizontally**, **Flip vertically**, and **Reset to original view**.
- Default shortcuts: <kbd>Shift</kbd>+<kbd>→</kbd>, <kbd>Shift</kbd>+<kbd>←</kbd>, <kbd>Shift</kbd>+<kbd>↑</kbd>, and <kbd>Shift</kbd>+<kbd>↓</kbd> (reset).

**Result:** Only the display changes — the puzzle itself, your move history, and your solutions stay exactly the same.

**Notes:**
- The orientation belongs to the current puzzle only: when you open another puzzle, it starts in its original orientation again. It is not a setting and is not saved.
- The arrow keys move the player in the direction you see on screen.

**Related Features**
- [Menu: View](menus.md#view-menu) — the Transformations submenu
- [Keyboard Shortcuts](keyboard-shortcuts.md) — rotate/flip shortcuts

---

### Opening a File by Drag and Drop

**Purpose:** Open a puzzle file without going through a file dialog.

**Prerequisites:** None.

**Usage**
- Drag a puzzle file from your file manager onto the board. While you hover over the board, it shows "Drop to open this puzzle file".
- Release the mouse button to open it.

**Result:** The file's content is loaded the same way as pasting it from the clipboard.

**Notes:** If the file cannot be read, an error message explains why.

**Related Features**
- [Load Puzzle Collection](#load-puzzle-collection)
- [Menu: Collection](menus.md#collection-menu)

---

### Puzzle Bookmarks

**Purpose:** Jump back to favorite puzzles with a single key press, even across collections.

**Prerequisites:** To set a bookmark, the current puzzle must come from a collection file on disk.

**Usage**
- <kbd>Ctrl</kbd>+<kbd>1</kbd> … <kbd>Ctrl</kbd>+<kbd>9</kbd> (<kbd>Cmd</kbd> on macOS) — store the current puzzle in bookmark slot 1–9.
- <kbd>1</kbd> … <kbd>9</kbd> — open the puzzle stored in that slot.

**Result:** Setting a bookmark confirms with "Bookmark N set." Jumping to a bookmark loads its collection file, if needed, and opens the stored puzzle.

**Notes:**
- Bookmarks are kept between sessions. Setting a slot again replaces its previous puzzle.
- A bookmark points to the collection file and the puzzle number. If the file has been moved or deleted, or the puzzle number no longer exists in it, a message tells you so. An unsaved puzzle (e.g. one pasted from the clipboard) cannot be bookmarked.
- These keys are fixed and cannot be changed under Controls.

**Related Features**
- [Puzzle Navigation](#puzzle-navigation)
- [Last Played History](history-and-trash.md#last-played-history-browser)

---

### Deadlock Warnings

**Purpose:** Tell you as soon as the puzzle can no longer be solved from the current position.

**Prerequisites:** Deadlock detection is enabled in [Settings: Gameplay](settings.md#gameplay).

**Usage:** Nothing to do — the check runs after every push.

**Result:** When a push creates a deadlock, the deadlock sound plays, the status bar shows "Position is a deadlock!", and the boxes that form the deadlock are framed on the board (in red by default), so you can see at a glance what went wrong. If the puzzle cannot be solved even from its start position, the status bar shows "Puzzle is not solvable!" instead.

**Notes:**
- The frame stays while you walk around without pushing, since walking cannot resolve a deadlock. Undoing the push removes it, and redoing the same push shows it again. The next push replaces it.
- Which boxes are framed depends on the kind of deadlock: a single box on a dead square, a group of boxes that can no longer move, the boxes of a room they can no longer be pushed out of, or the boxes of a goal area that can no longer be filled. For the last two, this can be a large part of the boxes on the board.
- **Impossible box/goal matchings** deadlocks get no frame, because they concern the board as a whole rather than a particular group of boxes. The sound and the status bar message still tell you about them.
- You can switch the frame off or change its colors with **Mark deadlocked boxes** in [Settings: Gameplay](settings.md#gameplay).
- When **Show minimum solution length** is enabled, the status bar shows a lower bound on the total number of pushes instead while there is no deadlock.
- Which kinds of deadlocks are detected is set individually under Deadlock Detection in [Settings: Gameplay](settings.md#gameplay).

**Related Features**
- [Deadlocks (Sokoban rules)](../20-Sokoban/40-deadlocks/index.md)
- [Settings: Sound](settings.md#sound) — the deadlock sound

---

## Reverse Play (Pull Boxes)

**Purpose:** Play a puzzle backward — pulling boxes away from their goals, back toward their starting positions — instead of pushing them forward.

**Prerequisites:** A puzzle is loaded, and it must be solvable in reverse; not every puzzle can be played backward.

**Usage**
- Check **Reverse play (pull boxes)** in the Moves menu, or press <kbd>Ctrl</kbd>+<kbd>R</kbd>, to switch into reverse play.
- Switching rebuilds the board for pulling: boxes move to where the goals were, and the goals move to where the boxes started.
- The first time you switch, the status bar prompts you to click a free square to choose where the player starts pulling from. You can also drag the player there.
- When you move away from a box that is directly next to the player, the box is pulled along one tile. Hold <kbd>Ctrl</kbd> while pressing an arrow key to step away without pulling.
- With the mouse, click a box and then a target tile to pull it there.
- A highlighted tile on the board marks the position the player needs to return to for the attempt to count as solved.
- Uncheck the same menu item (or press the shortcut again) to switch back to forward play.

**Result:** As you pull boxes, they move back toward their original starting tiles. The puzzle counts as solved once every box is back on its starting tile **and** the player has returned to the highlighted target tile. If all boxes are placed but the player can't path back to that tile, the status bar shows "All boxes are placed - but the player can't get back to the start position."

**Notes:**
- Not every puzzle can be played backward. Switching on one that can't shows "This puzzle can't be played backwards." and reverse play doesn't activate.
- Switching direction keeps each direction's move history separate — nothing is lost switching back and forth, and undo/redo work normally within whichever direction is active.
- Restarting the puzzle in reverse play clears the move history and lets you choose the player's starting square again.
- A puzzle solved in reverse is recorded as an ordinary forward solution in the Solutions list, so saved solutions always read as pushes regardless of which direction you played them in.
- Snapshots, however, remember which direction they were taken in and are tagged with a badge for it — see [Sidebar Panels](sidebar.md#snapshots-panel).
- Loading a snapshot or solution automatically switches your play direction to match the one it was recorded in.
- Deadlock detection also works while pulling: simple deadlocks, immovable boxes, impossible box/goal matchings, and positions that cannot be unwound are reported with the same "Position is a deadlock!" warning, as far as they are enabled in [Settings: Gameplay](settings.md#gameplay). For simple deadlocks and immovable boxes, the boxes involved are framed as in forward play. The minimum solution length is not shown in reverse play.
- Some features work only in forward play: board simplification (shows "Not available while playing in reverse."), push targets and the wall-click highlights from [Push Targets and Board Highlights](#push-targets-and-board-highlights), and pasting a move sequence from the clipboard.

**Related Features**
- [Menu: Moves](menus.md#moves-menu) — the "Reverse play" checkbox and Double push mode
- [Sidebar Panels](sidebar.md#snapshots-panel) — snapshots are tagged with the play direction they were recorded in
- [Keyboard Shortcuts](keyboard-shortcuts.md) — change the reverse play shortcut
- [Settings: Sidebar](settings.md#sidebar) — configure the push-mode/pull-mode snapshot badge characters

---

## Status Bar (Bottom Bar)

**Purpose:** Shows status messages, your position in the move history, the zoom level, and the tile under the mouse pointer.

**Prerequisites:** A puzzle is loaded.

**Usage**
- **Status text** — shows "Ready" when nothing else is going on, otherwise hints, warnings, and results (e.g. deadlock warnings, highlight hints, selection summaries).
- **Move indicator** — "Move: 12/47" means you are at move 12 of 47 in your move history. Click it to open the [Jump to Move](dialogs.md#jump-to-move) dialog; its tooltip lists the [mouse wheel](#mouse-wheel-undoredo) combinations.
- **Zoom controls** — "Zoom: 100%" between a **−** and a **+** button. Click **−** or **+** to zoom out or in; click the percentage to reset to 100% and center the board. The tooltip lists the keyboard and mouse shortcuts for zooming.
- **Mouse coordinates** — the coordinates of the tile under the mouse pointer, shown only when **Show board coordinates** is enabled.

**Result:** The status bar updates continuously while you play.

**Notes:** When a puzzle is solved and **Highlighted status text** is enabled under Puzzle Solved Celebration in [Settings: Gameplay](settings.md#gameplay), the status text turns green and bold.

**Related Features**
- [Settings: Look & Feel](settings.md#appearance) — **Show board coordinates**
- [Zoom and Pan](#zoom-and-pan), [Mouse Wheel Undo/Redo](#mouse-wheel-undoredo)

---

## Sidebar

**Purpose:** Keep your solutions, snapshots, and macros for the current puzzle next to the board.

**Prerequisites:** The sidebar is shown (see [Sidebar Toggles](#sidebar-toggles)).

**Usage**
- Use the tab bar at the top of the sidebar to switch between **Solutions**, **Snapshots**, and **Macros**.
- Right-click the **Solutions** or **Snapshots** tab to change that list's sort order (and, for solutions, where the best solutions are pinned).

**Result:** The chosen list is shown; its entries can be loaded, renamed, copied, or deleted as described in [Sidebar Panels](sidebar.md).

**Notes:** Sorting options chosen from the tab menu are the same ones as in [Settings: Sidebar](settings.md#sidebar); both always stay in sync.

**Related Features**
- [Sidebar Panels](sidebar.md) — solutions, snapshots, and macros in detail
- [Macro Studio](macro-studio.md) — create and edit macros

---

## Related Features

- [Menus](menus.md) — complete menu reference
- [Settings](settings.md) — all gameplay, display, and audio options
- [Keyboard Shortcuts](keyboard-shortcuts.md) — default keybindings and how to customize them
- [Sidebar Panels](sidebar.md) — solutions, snapshots, and macros in detail
- [Puzzle Browser](puzzle-browser.md) — search and filter puzzles in loaded collections
- [Level Editor](editor.md) — create and modify puzzles
- [Reverse Play](#reverse-play-pull-boxes) — play a puzzle backward, pulling boxes instead of pushing them
