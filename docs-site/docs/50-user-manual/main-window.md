---
title: Main Window & Puzzle Workspace
sidebar_position: 1
---

# Main Window & Puzzle Workspace

The main window is your central hub for playing and solving Sokoban puzzles. It displays the puzzle board, move history controls, and quick access to solver and editor tools.

![Screenshot](...)

## Toolbar (Top Bar)

### Move Counters

**Purpose:** Displays your progress in the current puzzle.

**Prerequisites:** A puzzle is loaded.

**Usage**
- **Moves** — total steps taken by the player (including those to reach a box for pushing)
- **Pushes** — total number of box pushes (the primary metric in Sokoban)

**Result:** Updates in real time as you move and push boxes.

**Notes:** These counters reset when you restart the puzzle. The move/push metrics are shown in a fixed-width font for easy reading.

**Related Features**
- [History Controls](#history-controls) — undo and redo to adjust your move count
- [Settings: Gameplay](settings.md#gameplay) — configure what counts as a "push" (move priority vs. push priority)

---

### Load Puzzle Collection

**Purpose:** Import a new Sokoban puzzle collection into the app.

**Prerequisites:** None — always available.

**Usage**
- Click the folder icon to open a file browser and select a `.sok` puzzle file (or other supported Sokoban formats).
- Once loaded, the first puzzle in the collection becomes active; use the puzzle navigation buttons to browse others.

**Result:** The puzzle collection replaces the current one; active puzzle selection resets.

**Notes:**
- Valid formats include `.sok` (text format), `.slc` (binary), and most classic Sokoban collections.
- The app remembers previously loaded collections in menu history.

**Related Features**
- [Puzzle Navigation](#puzzle-navigation) — move between puzzles in the loaded collection
- [Menu: Collection](menus.md#collection-menu) — advanced collection import/merge options

---

### Open Level Editor

**Purpose:** Switch to the level editor to design or modify puzzles.

**Prerequisites:** None — available from any puzzle.

**Usage**
- Click the pencil icon to enter editor mode.
- To return to play mode, click **Play** in the editor's toolbar, or use the File menu.

**Result:** The board switches to edit mode, showing level design tools and a grid for placing walls, floors, boxes, goals, and the player.

**Notes:** Your move history is preserved when switching modes — you can edit, return to play, and continue from where you left off.

**Related Features**
- [Editor](editor.md) — comprehensive level design documentation
- [Menu: Tools > Editor](menus.md#tools-menu) — alternative way to open the editor

---

### Sidebar Toggles

**Purpose:** Show or hide the sidebar panels containing solutions, board snapshots, and macros.

**Prerequisites:** A puzzle is loaded.

**Usage**
- **Solutions** (list icon) — show saved solutions for this puzzle; click one to play it back or set it as your current move history
- **Snapshots** (bookmark icon) — show saved board positions from your play session; click one to jump to that position
- **Macros** (code icon) — show custom move macros; click one to play it

Each button toggles its corresponding sidebar panel. The sidebar can hold one panel at a time — selecting a different tab swaps the view.

**Result:** The sidebar slides in from the left, or hides if the selected panel was already visible.

**Notes:**
- The sidebar is collapsible to give the board more screen space.
- You can use keyboard shortcuts to toggle sidebars (default: <kbd>S</kbd>, <kbd>D</kbd>, <kbd>M</kbd> for Solutions, Snapshots, Macros).

**Related Features**
- [Sidebar](sidebar.md) — detailed sidebar panel documentation
- [Settings: Sidebar](settings.md#sidebar) — configure sidebar appearance and behavior
- [Keyboard Shortcuts](keyboard-shortcuts.md) — sidebar toggle keybindings

---

### Puzzle Navigation

**Purpose:** Move between puzzles in the loaded collection.

**Prerequisites:** A puzzle collection is loaded.

**Usage**
- **Previous puzzle** (left arrow) — load the previous puzzle in the collection
- **Next puzzle** (right arrow) — load the next puzzle in the collection

**Result:** The active puzzle changes; the board resets to the starting position and move history is cleared.

**Notes:**
- Some collections are large; use the "Go to Puzzle" dialog (via menu: Collection → Go to Puzzle) to jump to a specific puzzle number.
- The app remembers which puzzle you were playing in a collection across sessions.

**Related Features**
- [Menu: Collection > Next/Previous Puzzle](menus.md#collection-menu) — includes "unsolved only" variants
- [Menu: Collection > Go to Puzzle…](menus.md#collection-menu) — jump to a puzzle by number
- [Puzzle Browser](puzzle-browser.md) — search and filter puzzles in a collection

---

### History Controls

**Purpose:** Undo, redo, and restart your moves.

**Prerequisites:** A puzzle is loaded.

**Usage**
- **Restart** (first page icon) — reset the puzzle to its starting position and clear all move history
- **Undo** (back arrow) — undo the last move or box push (see [Settings: Gameplay](settings.md#gameplay) for single-step vs. full-push undo)
- **Replay** (play icon) — replay all moves from the undo position forward (same as redo all)
- **Redo** (forward arrow) — redo the next move after undoing
- **Redo all** (last page icon) — replay all moves at once without animation

These buttons enable/disable based on your position in move history. Grayed-out buttons cannot be used (e.g., redo is disabled if you haven't undone anything).

**Result:** The board updates to reflect the selected move position; animations play if enabled in settings.

**Notes:**
- Undoing a long sequence one move at a time can be slow — use Undo All to restart quickly.
- Replaying all moves shows how you solved the puzzle; useful for reviewing your strategy.

**Related Features**
- [Settings: Gameplay](settings.md#gameplay) — toggle single-step undo/redo and animation delays
- [Menu: Moves](menus.md#moves-menu) — includes jump-to-move and copy-moves-range options

---

### Instant Move Toggle

**Purpose:** Speed up movement by removing animation delays.

**Prerequisites:** Animations are enabled in settings.

**Usage**
- Click the lightning bolt icon (or press its keybinding) to activate/deactivate instant moves.
- When active, the player teleports to the target tile instead of walking frame-by-frame.
- Button appears highlighted (bold label + color) when active.

**Result:** Player and box movement animates instantly or normally, depending on the toggle.

**Notes:**
- This setting is UI-only and does not affect saved solutions or move counts.
- Useful when replaying long solutions for verification.

**Related Features**
- [Settings: Gameplay](settings.md#gameplay) — configure animation delays separately
- [Keyboard Shortcuts](keyboard-shortcuts.md) — keybinding for instant move toggle

---

### Box Pathfinding Priority Toggle

**Purpose:** Choose whether the auto-walk favors fewer box pushes or fewer player moves.

**Prerequisites:** A puzzle is loaded.

**Usage**
- Click the swap icon to toggle between **Fewest Pushes** (default) and **Fewest Moves**.
- When **Fewest Pushes** is active, right-clicking a box tries to push it using the shortest push sequence.
- When **Fewest Moves** is active, right-clicking a box tries to push it using the shortest overall player path, even if it requires more pushes.

**Result:** Right-click behavior changes to prioritize the selected metric.

**Notes:**
- This is a UI preference; it does not affect the solver or saved solutions.
- A detailed tooltip explains the difference (hover over the button).

**Related Features**
- [Settings: Gameplay > Box Pathfinding Priority](settings.md#gameplay) — persistent setting instead of per-session toggle
- [Keyboard Shortcuts](keyboard-shortcuts.md) — keybinding for pathfinding toggle

---

## Central Board Area

**Purpose:** Displays the Sokoban puzzle board and renders all gameplay.

**Prerequisites:** A puzzle is loaded.

**Usage**
- **Move the player** — use arrow keys, WASD, or click adjacent tiles to navigate
- **Push boxes** — walk into a box to push it (see [Settings: Gameplay](settings.md#gameplay) for additional box-push options like right-click targeting)
- **Zoom** — scroll with the mouse wheel (or Ctrl + ± keys) to zoom in/out; hold Z and scroll for smooth zoom; hold Z and drag to pan when the board is larger than the window
- **View transformations** — some settings allow rotating or flipping the entire board view (see [Settings: Appearance](settings.md#appearance))

**Result:** The board redraws after each action; statistics update in the toolbar; animation plays (if enabled).

**Notes:**
- The board is rendered with tiles from the active skin; skins are swappable in settings.
- A grid can be enabled in settings to show tile boundaries.
- Board coordinates can be shown when you hover the mouse (see [Settings: Gameplay](settings.md#gameplay)).
- When a puzzle is solved (all boxes on goals), a celebration effect plays (configurable in settings).

**Related Features**
- [Settings: Skins](settings.md#skins) — choose tile graphics and animation styles
- [Settings: Appearance](settings.md#appearance) — board background, grid, and color customization
- [Settings: Gameplay](settings.md#gameplay) — advanced movement and deadlock detection options
- **Solver** — the automated solving tool can find a solution if you get stuck (opened via **Menu > Tools > Solver**)

---

## Reverse Play (Pull Boxes)

**Purpose:** Play a puzzle backward — pulling boxes away from their goals, back toward their starting positions — instead of pushing them forward.

**Prerequisites:** A puzzle is loaded, and it must be solvable in reverse; not every puzzle can be played backward.

**Usage**
- Check **Reverse play (pull boxes)** in the Moves menu (or press its keyboard shortcut, once you've assigned one — it has none by default) to switch into reverse play.
- Switching rebuilds the board for pulling: boxes move to where the goals were, and the goals move to where the boxes started.
- The first time you switch, the status bar prompts you to click a free square to choose where the player starts pulling from.
- From then on, walking the player into a box from the far side pulls it one tile toward you, instead of pushing it away.
- A highlighted tile on the board marks the position the player needs to return to for the attempt to count as solved.
- Uncheck the same menu item (or press its shortcut again) to switch back to forward play.

**Result:** As you pull boxes, they move back toward their original starting tiles. The puzzle counts as solved once every box is back on its starting tile **and** the player has returned to the highlighted target tile. If all boxes are placed but the player can't path back to that tile, the status bar shows "All boxes are placed - but the player can't get back to the start position."

**Notes:**
- Not every puzzle can be played backward. Switching on one that can't shows "This puzzle can't be played backwards." and reverse play doesn't activate.
- Switching direction keeps each direction's move history separate — nothing is lost switching back and forth, and undo/redo work normally within whichever direction is active.
- A puzzle solved in reverse is recorded as an ordinary forward solution in the Solutions list, so saved solutions always read as pushes regardless of which direction you played them in.
- Snapshots, however, remember which direction they were taken in and are tagged with a badge for it — see [Snapshots List](#snapshots-list).
- Loading a snapshot or solution automatically switches your play direction to match the one it was recorded in.
- Several features are unavailable while reverse play is active and show "Not available while playing in reverse." if you try to use them: board simplification, the click-triggered actions configured under [Mouse Bindings](keyboard-shortcuts.md#mouse-bindings) (wall click/double-click, background click, right click), and pasting a move sequence from the clipboard. Deadlock detection is also turned off while reverse play is active.

**Related Features**
- [Menu: Moves](menus.md#moves-menu) — the "Reverse play" checkbox that toggles this mode
- [Snapshots List](#snapshots-list) — snapshots are tagged with the play direction they were recorded in
- [Keyboard Shortcuts](keyboard-shortcuts.md) — assign a keyboard shortcut to toggle reverse play
- [Settings: Sidebar](settings.md#sidebar) — configure the push-mode/pull-mode snapshot badge characters

---

## Status Bar (Bottom Bar)

**Purpose:** Displays status messages and zoom controls for the board.

**Prerequisites:** A puzzle is loaded.

**Usage**
- **Status text** — shows "Ready" when idle, or describes the current action (e.g., "Move (12, 5)" when the solver is running).
- **Zoom controls** — shows current zoom level as a percentage:
  - Click **−** to zoom out
  - Click **+** to zoom in
  - Click the percentage to reset to 100% (1:1 tile size) and center the board
  - A tooltip explains keyboard and mouse wheel shortcuts for zooming
- **Mouse coordinates** (when visible) — displays the current pointer position on the board as a coordinate pair (appears only if you enable board coordinates in settings)

**Result:** Zoom level changes persist for the current session; coordinates update as you move the mouse.

**Notes:**
- Status messages are temporary and often relate to solver activity, deadlock detection, or error states.
- If a puzzle is solved and "[Settings: Gameplay > Celebration > Highlighted status text](settings.md#gameplay)" is enabled, the status bar text turns green and bold.

**Related Features**
- [Settings: Gameplay > Show board coordinates](settings.md#gameplay) — toggle coordinate display
- **Solver** — the automated solving tool produces most status messages during puzzle-solving runs

---

## Sidebar Panels

The sidebar on the left contains three tabbed panels:

### Solutions List

**Purpose:** Browse and play back saved solutions for the current puzzle.

**Prerequisites:** The puzzle must have at least one solution saved.

**Usage**
- Each solution shows: its move count, push count, and solution type (best pushes ▮P, best moves ▮M, or best overall ▮!).
- Click a solution to load it into your move history and watch it play back.
- Right-click a solution for options (copy to clipboard, delete, etc.).

**Result:** The selected solution becomes your active move history; you can undo/redo or modify it.

**Notes:** Solutions are saved automatically when you reach a puzzle's win condition, or manually via Menu > Moves > Copy to Clipboard.

**Related Features**
- [Sidebar](sidebar.md) — full sidebar documentation
- [Menu: Moves](menus.md#moves-menu) — copy and paste move sequences

---

### Snapshots List

**Purpose:** Save and restore board positions from your play session.

**Prerequisites:** You have taken at least one snapshot.

**Usage**
- Click **+** to create a snapshot at the current board position and move.
- Click a saved snapshot to jump back to that exact position and move count.
- Right-click for options (add notes, delete, etc.).

**Result:** The board state jumps to the snapshot position; move history is preserved.

**Notes:** Snapshots are per-session only and are lost when you load a different puzzle. They are useful for exploring different strategies without restarting.

**Related Features**
- [Sidebar](sidebar.md) — full sidebar documentation

---

### Macros List

**Purpose:** Save and replay custom move sequences (macros).

**Prerequisites:** Macros are defined (see [Macro Studio](macro-studio.md)).

**Usage**
- Click a macro to play it starting from the current board position.
- Macros are scripted move sequences that can include loops and conditions.

**Result:** The macro's moves are executed in sequence.

**Notes:** Macros are saved to the puzzle and persist across sessions.

**Related Features**
- [Macro Studio](macro-studio.md) — create and edit macros
- [Sidebar](sidebar.md) — sidebar documentation

---

## Related Features

- [Menus](menus.md) — complete menu reference
- [Settings](settings.md) — all gameplay, display, and audio options
- [Keyboard Shortcuts](keyboard-shortcuts.md) — default keybindings and how to customize them
- [Sidebar](sidebar.md) — solutions, snapshots, and macros in detail
- [Puzzle Browser](puzzle-browser.md) — search and filter puzzles in loaded collections
- [Editor](editor.md) — create and modify puzzle levels
- [Reverse Play](#reverse-play-pull-boxes) — play a puzzle backward, pulling boxes instead of pushing them
