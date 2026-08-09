---
title: Settings
sidebar_position: 10
---

# Settings

SokoLogic's settings window collects every configurable preference in one place, organized in categories on the left with adjustable options on the right.

![Screenshot](...)

## Opening Settings

**Purpose:** Access every configurable preference for the application in one dedicated window.

**Prerequisites:** None — Settings is always available, regardless of whether a puzzle is currently open.

**Usage**
Open the **Settings** menu and choose **Settings…**, or use the keyboard shortcut <kbd>Ctrl</kbd>+<kbd>,</kbd> (<kbd>Cmd</kbd>+<kbd>,</kbd> on macOS).

**Result**
The settings window opens, showing the categories list on the left and the last-selected category's controls on the right.

**Notes**
Pressing <kbd>Esc</kbd> while the settings window is focused closes it — unless the search field currently contains text, in which case <kbd>Esc</kbd> clears the search first.

**Related Features**
[Finding a setting](#finding-a-setting), [Resetting settings to defaults](#resetting-settings-to-defaults)

---

## Finding a Setting

**Purpose:** Quickly locate a specific setting without browsing through every category by hand.

**Prerequisites:** The Settings window must be open.

**Usage**
Type into the search field above the category list. Matching categories stay visible while non-matching ones are hidden; inside the currently selected category, individual controls whose name matches the search text are visually highlighted.

**Result**
The category list narrows to matches, and the active category switches automatically to the first match if the previously selected one is filtered out.

**Notes**
If no category matches the search text, the content pane shows a "No settings match" message instead of a category's controls.

**Related Features**
[Opening Settings](#opening-settings)

---

## General

**Purpose:** Configure the application's display language and startup update check.

**Prerequisites:** The Settings window must be open.

**Usage**
- **Language** — choose the interface language from the available translations.
- **Search for a new version at startup** — toggle whether SokoLogic checks its website for a newer release each time it starts.

**Result**
Changing the language re-localizes the interface immediately, without restarting the application. The update-check toggle takes effect the next time the application starts.

**Notes**
None.

**Related Features**
[Resetting settings to defaults](#resetting-settings-to-defaults)

---

## Skins

**Purpose:** Control the graphic skin used to draw the board and how player/box sprites are animated and scaled.

**Prerequisites:** The Settings window must be open.

**Usage**
- **Skins** — choose the graphic skin set used for board tiles, with a live hover preview.
- **Selection animation mode** — choose how the active player and box are animated: *None*, *Original skin animations*, *Pulsing transparency (Alpha)*, *Pulsing scale*, *Impatient wobble*, or *Automatic (Prefer skin frames)*.
- **Selected animation delay** — adjust the speed of that animation (lower values animate faster).
- **Maximum tile scaling** — set the maximum factor by which tiles may be enlarged beyond the skin's native size.
- **Minimum tile size** — set the smallest size a board is drawn at; larger levels scroll instead of shrinking further.
- **Fit large levels into the window** — show a whole level when it opens, even if that means tiles smaller than the configured minimum size.

**Result**
Changes apply immediately to the board view.

**Notes**
None.

**Related Features**
[Appearance](#appearance)

---

## Appearance

**Purpose:** Configure the board's visual styling, including theme colors, background, grid overlay, and coordinate display.

**Prerequisites:** The Settings window must be open.

**Usage**

### Dynamic Color Theme
- **Use dynamic color** — toggle between the built-in Material 3 palette and a custom theme derived from a single seed color
- When enabled:
  - **Seed color** — click the circular color picker to choose a hue and saturation; brightness is derived automatically from these inputs
  - **Palette style** — how vivid or muted the derived colors appear (different algorithmic palette generation modes)
  - **Contrast** — adjust contrast between foreground and background colors for accessibility (range: low to high contrast)

### Background & Grid
- **Use solid color** (toggle) — switch between a background image or a solid color fill
- When **Image mode** is active:
  - **Background image** — choose the texture rendered behind board tiles from the available set
  - **Import custom background** button — add your own background image from disk
- When **Color mode** is active:
  - **Background color** — click to open a color picker (supports both visual picker and text input like `#RRGGBB` or `R,G,B`)
  - **Brightness** — adjust color brightness/darkness as a percentage

### Grid & Display
- **Show walls** — toggle whether outer wall tiles are rendered around the puzzle
- **Show grid** — toggle a grid line overlay at tile boundaries; when enabled:
  - **Grid color** — click to set the grid line color (visual picker + text input)
  - **Grid opacity** — adjust grid line transparency (0 = invisible, 255 = opaque)
  - **Grid line width** — set the thickness of grid lines in points
- **Show parity grid** — overlay a checkerboard tint on alternating tiles to visualize even/odd board coordinate parity
- **Show board coordinates** — display tile coordinate tags next to the mouse pointer while it hovers over the board

**Result**
Changes apply immediately to the board view.

**Notes**
Custom background images imported via the **Import custom background** button are copied to an app-specific folder and persist across sessions.

**Related Features**
[Skins](#skins)

---

## Animations

**Purpose:** Control the timing of move and undo/redo animations.

**Prerequisites:** The Settings window must be open.

**Usage**
- **Set animation delay** — movement animation delay per tile step, in milliseconds (lower values = faster animation)
- **Set animation delay for undo/redo** — separate playback animation delay during undo and redo operations, in milliseconds

**Result**
Changes apply immediately to subsequent moves and replays.

**Notes**
Animations can be disabled entirely by setting these delays to 0 milliseconds. The **Instant mode** toggle in the toolbar or [Gameplay settings](#gameplay) provides a quick on/off switch without changing these time values.

**Related Features**
[Main Window > Instant Move Toggle](main-window.md#instant-move-toggle), [Gameplay](#gameplay)

---

## Sound

**Purpose:** Enable or disable audio effects and choose the sound file played for each gameplay event.

**Prerequisites:** The Settings window must be open.

**Usage**
- **Enable sound effects** — master switch for all audio effects.
- Assign an individual sound file for each of: **Move sound**, **Push sound**, **Push to goal sound**, **Deadlock sound**, **Restart sound**, and **New solution sound**, using the **Browse…** file picker next to each entry.

**Result**
Changes apply immediately to subsequent gameplay events.

**Notes**
Sound files chosen from within the application's built-in sound folder are stored as relative paths, so they keep working across installations; files picked from elsewhere on disk are stored as absolute paths.

**Related Features**
None.

---

## Gameplay

**Purpose:** Configure movement/pathfinding behavior, on-board hints, deadlock detection, and the puzzle-solved celebration.

**Prerequisites:** The Settings window must be open.

**Usage**

### Movement & Pathfinding
- **Box pathfinding priority** — when you click a box to walk to it and push it, choose whether the game prefers *Fewest pushes* or *Fewest moves* for that walk
- **Single step undo/redo** — step back or forward single player movements instead of full box-push sessions
- **Go-through boxes** — let auto-walk pathfinding pass through boxes when a free path exists

### On-Board Hints & Highlighting
- **Push box to right-clicked position** — right-click a free tile to mark it as a push target and highlight every box that can be pushed there; click the target again to push the best box, or click a highlighted box to exclude it from the attempt
- **Show reachable box positions** — when you click a box, highlight every goal tile it could still reach
- **Show staircase push targets** — highlight diagonal box chains and their valid staircase push destinations
- **Show line push targets** — highlight gapped straight-line box chains and their valid line push destinations
- **Show minimum solution length** — calculate and display a lower bound on the number of pushes needed to solve the puzzle
- **Show dead squares** — highlight tiles where a box could never reach a goal
- **Show frozen goal net boxes** — highlight boxes that started the puzzle already on a goal as part of a permanently frozen goal net
- **Unmoved/unvisited highlight colors** — color scheme (*Outline* or *Classic*) for the never-moved-boxes / never-visited-floors highlight, which you toggle by double-clicking a wall tile

### Deadlock Detection
- **Quick presets** — **All** (detect all deadlock types), **Fast** (detect only the most common), **None** (disable all detection)
- **Individual toggles** for each detector:
  - **Simple deadlocks** ([dead square deadlocks](../20-Sokoban/40-deadlocks/index.md#dead-square-deadlocks))
  - **Frozen goal nets** (a box that started the puzzle as part of a permanently frozen goal net gets pushed off its tile)
  - **Immovable boxes** ([freeze deadlocks](../20-Sokoban/40-deadlocks/index.md#freeze-deadlocks))
  - **Unsolvable rooms** ([corral deadlocks](../20-Sokoban/40-deadlocks/index.md#corral-deadlocks))
  - **Impossible box/goal matchings** ([bipartite deadlocks](../20-Sokoban/40-deadlocks/index.md#bipartite-deadlocks))
  - **Closed diagonal deadlocks** ([details](../20-Sokoban/40-deadlocks/index.md#closed-diagonal-deadlocks))

### Board Simplification
- **Convert unmovable boxes to walls** — when simplifying the board, replace boxes that can never move again with walls
- **Crop board to active area** — when simplifying the board, remove outer walls that aren't part of the puzzle's reachable area

### Puzzle Solved Celebration
- **Player/box pop animation**, **Goal glow effect**, **Victory sound**, **Highlighted status text**, and **Play skin animations** — each can be toggled independently to control what happens when you solve a puzzle

**Result**
Changes apply immediately; deadlock-detection changes re-evaluate the current board's deadlock highlighting right away.

**Notes**
None of these settings are marked experimental in the application; all are stable, user-facing options.

**Related Features**
[Sidebar](#sidebar), [Deadlocks (Sokoban rules)](../20-Sokoban/40-deadlocks/index.md)

---

## Sidebar

**Purpose:** Control how the Solutions and Snapshots lists in the sidebar are sorted, filtered, and displayed.

**Prerequisites:** The Settings window must be open.

**Usage**
- **Solution sort order** / **Snapshot sort order** — sort by *Moves, then pushes*, *Pushes, then moves*, or *Date*, each with an independent ascending/descending direction.
- **Best solutions position** — pin the best solutions to the *Top* or *Bottom* of the sorted list, or turn pinning *Off*.
- **Row text size** — adjust the text size used for rows in the Solutions and Snapshots lists.
- **Solution metrics** — show *All metrics* or *Moves/pushes only* for each solution.
- **Solutions list** — show *All solutions*, *Only best solutions*, or *Only best N solutions* (with an adjustable count) by default; hidden solutions can always be revealed again.
- **Show titles as a second line** — show a solution's or snapshot's title below its metrics instead of only on hover.

**Result**
Changes apply immediately to the sidebar lists.

**Notes**
None.

**Related Features**
[Sidebar Panels](sidebar.md), [Gameplay](#gameplay)

---

## Window Title

**Purpose:** Customize the text shown in the application's main window title bar.

**Prerequisites:** The Settings window must be open.

**Usage**
- **Title template** — free text for the main window's title bar; use the available placeholders below, and any other characters (separators, spacing, etc.) are used as-is
- **Available placeholders** — a reference list showing which tokens you can use:
  - `{appName}` — the application name (e.g., "SokoLogic")
  - `{collectionTitle}` — the loaded puzzle collection's name (or empty if none)
  - `{puzzleTitle}` — the current puzzle's title
  - `{puzzleNumber}` — the puzzle's number within the collection
  - `{totalPuzzles}` — total number of puzzles in the collection
  - `{boxCount}` — number of boxes on the board
  - `{goalCount}` — number of goals on the board
  - `{rowCount}` — number of board rows
  - `{columnCount}` — number of board columns
- **Preview** — live preview of what the title bar will show with the current puzzle and template

**Example templates:**
- `{appName} - {puzzleTitle}` produces "SokoLogic - My Level"
- `{puzzleNumber}/{totalPuzzles}: {puzzleTitle}` produces "42/100: My Level"
- `{collectionTitle} ({boxCount}boxes, {goalCount}goals)` produces "Classic Puzzles (5 boxes, 5 goals)"

**Result**
Changes apply immediately to the window title bar.

**Notes**
If a placeholder is not available (e.g., no collection is loaded), it is replaced with an empty string in the final title.

**Related Features**
[Main Window](main-window.md)

---

## LetsLogic

**Purpose:** Configure the connection used to submit solutions to the LetsLogic.com puzzle platform.

**Prerequisites:** The Settings window must be open. Submitting solutions additionally requires a valid LetsLogic.com account and API key.

**Usage**
- **API key** — enter the authentication key used when submitting solutions to LetsLogic.com (entered as a masked/secret field)
- **Show LetsLogic panel** — show or hide the LetsLogic sidebar panel used for browsing puzzle collections and submitting solutions

**Result**
Changes apply immediately.

**Notes**
None.

**Related Features**
None.

---

## Keyboard Shortcuts (Keybindings)

The **Keybindings** category allows you to customize keyboard shortcuts for all major actions. This is documented in detail on the [Keyboard Shortcuts](keyboard-shortcuts.md) page.

---

## Resetting Settings to Defaults

**Purpose:** Undo unwanted configuration changes by restoring factory defaults.

**Prerequisites:** The Settings window must be open.

**Usage**
Click **Reset to defaults** in the top-right of any category to reset only that category's settings, after confirming. On the **General** category, click **Reset all settings to defaults** to reset every setting in the application, after confirming.

**Result**
The affected settings immediately return to their factory defaults. This cannot be undone.

**Notes**
Resetting *all* settings also resets keybindings and the LetsLogic API key, not just the settings visible on the General page.

**Related Features**
[Opening Settings](#opening-settings)

---

## Related Features

- [Main Window](main-window.md) — global toggles and controls that affect settings
- [Keyboard Shortcuts](keyboard-shortcuts.md) — detailed keybinding documentation
- [Sidebar Panels](sidebar.md) — solutions and snapshots list behavior
- [Appearance settings](../20-Sokoban/index.md) — understanding deadlock and puzzle terminology
