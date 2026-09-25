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
Open the **Settings…** menu and choose **Settings…**, or use the keyboard shortcut <kbd>Ctrl</kbd>+<kbd>,</kbd> (<kbd>Cmd</kbd>+<kbd>,</kbd> on macOS).

**Result**
The settings window opens, with the category list on the left and the selected category's controls on the right. The categories are **General**, **Window Title**, **Skins**, **Look & Feel**, **Animations**, **Sound**, **Gameplay**, **Sidebar**, **Controls**, and **LetsLogic**.

**Notes**
Pressing <kbd>Esc</kbd> while the settings window is focused closes it — unless the search field currently contains text, in which case <kbd>Esc</kbd> clears the search first.

Some places in the app open the settings window already filtered to the setting they need — for example, the LetsLogic panel takes you straight to the **API key** field when no key is set yet.

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

**Purpose:** Configure the application's display language and startup update check, back up or transfer your settings, and reset everything to factory defaults.

**Prerequisites:** The Settings window must be open.

**Usage**
- **Language** — choose the interface language from the available translations.
- **Search for new version at startup** — toggle whether SokoLogic checks its website for a newer release each time it starts.
- **Backup**:
  - **Export Settings...** — save all current settings to a `.toml` file, e.g. as a backup or to copy them to another computer.
  - **Import Settings...** — pick a previously exported settings file and replace all current settings with its contents, after confirming.
- **Reset** — **Reset all settings to defaults** (see [Resetting settings to defaults](#resetting-settings-to-defaults)).

**Result**
Changing the language re-localizes the interface immediately, without restarting the application. The update-check toggle takes effect the next time the application starts. After an export or import, a notification confirms success or reports a failure — for example when the chosen file is not a valid SokoLogic settings file.

**Notes**
- An exported settings file never contains your LetsLogic API key, so you can share it safely. Importing a file keeps the API key you currently have.
- Importing replaces every setting, including the interface language and your keybindings, and cannot be undone. Export your current settings first if you might want them back.

**Related Features**
[Resetting settings to defaults](#resetting-settings-to-defaults), [LetsLogic](#letslogic)

---

## Skins

**Purpose:** Control the graphic skin used to draw the board and how player/box sprites are animated and scaled.

**Prerequisites:** The Settings window must be open.

**Usage**
- **Skins** — choose the graphic skin set used for board tiles, with a live hover preview.
- **Selection animation mode** — choose how the active player and box are animated: *None*, *Original skin animations*, *Pulsing transparency (Alpha)*, *Pulsing scale*, *Impatient wobble*, or *Automatic (Prefer skin frames)*.
- **Selected animation delay** — adjust the speed of that animation (lower values animate faster).
- **Maximum tile scaling** — set the maximum factor by which tiles may be enlarged beyond the skin's native size.
- **Minimum tile size** — set the smallest size a board is drawn at; larger puzzles scroll instead of shrinking further.
- **Fit large puzzles into window** — show a whole puzzle when it opens, even if that means tiles smaller than the configured minimum size.

**Result**
Changes apply immediately to the board view.

**Notes**
None.

**Related Features**
[Look & Feel](#appearance)

---

## Look & Feel {#appearance}

**Purpose:** Configure the application's color theme and the board's visual styling: background, walls, grid, and coordinate display — with a separate grid setup for the puzzle editor.

**Prerequisites:** The Settings window must be open.

**Usage**

Except for the theme's seed color, every color in this category is set the same way: a swatch shows the current color, and below it you drag in a circular color picker to choose hue and saturation, adjust **Brightness** with a slider, or type a color into the text field (e.g. `#F0F8FF` or `240,248,255`). The text field also shows the current color's value, so you can copy it.

### Dynamic Color Theme
- **Use dynamic color** — derive the entire color theme of the application from a single seed color instead of the built-in palette. When switched on:
  - **Seed color** — drag in the circular color picker to choose a hue and saturation; brightness is derived automatically
  - **Palette style** — how vivid or muted the derived colors are
  - **Contrast** — adjust the contrast between foreground and background colors for accessibility

### Look & Feel
- **Use solid color** — show a plain color behind the board tiles instead of a background image.
  - While it is off:
    - **Background image** — choose the texture rendered behind board tiles; the list contains the built-in images and any images you imported
    - **Import…** button — add your own background image (BMP, JPG, GIF, or PNG) from disk; it is selected right away
  - While it is on:
    - **Background color** — pick the color, or click one of the quick-pick swatches: **Slate**, **Charcoal**, **Navy**, or **High contrast (white)** (hover over a swatch to see its name)
- **Show walls** — render the wall tiles around the puzzle
- **Show grid** — draw grid lines at tile boundaries on the board. When switched on:
  - **Grid style** — **Overlay** (a flat line color drawn over the board) or **Blended into skin** (a two-tone border drawn into the skin's own floor and wall tiles)
  - With **Overlay**: **Grid color** and **Grid color - opacity** (0 = invisible, 255 = fully opaque)
  - With **Blended into skin**: **Grid main line color** and **Grid shadow line color**
  - **Grid line width** — thickness of the grid lines
  - **Show parity grid** — tint alternating tiles in a checkerboard pattern to visualize even/odd board coordinates, with its own **Parity grid color** and **Parity grid color - opacity**
- **Show board coordinates** — display the coordinates of the tile under the mouse pointer next to the pointer

### Editor Grid
- **Show grid in editor** — draw grid lines in the [Level Editor](editor.md), independently of the **Show grid** setting above. When switched on:
  - **Use main grid settings** — use the same grid style and colors as the board above. Switch it off to configure the editor's grid separately; the same grid controls as above (**Grid style**, colors, **Grid line width**, **Show parity grid**) then appear for the editor alone.

**Result**
Changes apply immediately to the application's colors, the board view, and the editor.

**Notes**
- Background images you import are copied into an application folder, so they stay available even if you move or delete the original file. Importing a file with the same name as an earlier import keeps both.
- **Show parity grid** is part of the grid settings and is only available while **Show grid** (or, for the editor, **Show grid in editor**) is switched on.

**Related Features**
[Skins](#skins), [Level Editor](editor.md)

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

**Purpose:** Configure movement and pathfinding behavior, on-board hints and their colors, deadlock detection, board simplification, and the puzzle-solved celebration.

**Prerequisites:** The Settings window must be open.

**Usage**

### Movement & Hints

The first group of the category carries no heading of its own and holds the everyday play options:

- **Show minimum solution length** — calculate and display a lower bound on the number of pushes needed to solve the puzzle
- **Show line push targets** — highlight gapped straight-line box chains and their valid line push destinations
- **Go-through boxes** — let auto-walk pathfinding pass through boxes when a free path exists
- **Show dead squares** — highlight tiles where a box could never reach a goal
- **Instant** — jump the player to the clicked tile in one step instead of walking there
- **Show direction changes** — while **Instant** is on, briefly show the turns the player would have made, so the route stays readable
- **Automatically optimize intermediate moves** — shorten the walking moves between two pushes without changing the pushes themselves

### Gameplay Features

- **Box pathfinding priority** — when you click a box to walk to it and push it, choose whether the game prefers **Fewest pushes** or **Fewest moves** for that walk
- **Unmoved/unvisited highlight colors** — color scheme for the never-moved-boxes / never-visited-floors highlight: **Outline (default)** or **Classic (colored)**
- **Show reachable box positions** — when you click a box, highlight every tile it could still be pushed to. Switching it on reveals **Reachable position marker colors**, either **Neutral (default)** or **Accent (colored)**, each with its own **Fill color** and **Border color**
- **Show staircase push targets** — highlight diagonal box chains and their valid staircase push destinations, with its own **Fill color** and **Border color**
- **Show frozen goal net boxes** — highlight boxes that started the puzzle already on a goal as part of a permanently frozen goal net, with its own **Fill color** and **Border color**
- **Mark deadlocked boxes** (on by default) — when a push creates a deadlock, frame the boxes that form it until the push is undone, with its own **Fill color** and **Border color**. See [Deadlock Warnings](main-window.md#deadlock-warnings)
- **Undo/redo granularity** — how much ground one undo or redo step covers:

| Setting | One step covers |
|---|---|
| **Combined movement (whole box-push run)** | The whole run of pushes your last action produced. |
| **Push** | A single push. |
| **Move** | A single player movement, whether or not it pushed a box. |

### Board Highlight Colors

Color pickers for the overlays the board draws during play:

- **Push target fill color** and **Push target border color**
- **Excluded box marker color**
- **Backward play target fill color** and **Backward play target border color** — used by [Reverse Play](main-window.md)
- **Pushable box fill color** and **Pushable box border color**

What triggers the on-board highlights (a wall click, a wall double-click, a background click, or a right click) is configured separately under [Controls > Mouse bindings](keyboard-shortcuts.md#mouse-bindings) — by default, a right click marks a push target the way "Push box to right-clicked position" used to, and a wall double-click toggles the unmoved/unvisited highlight.

### Deadlock Detection
- **Quick presets** — **All** (detect all deadlock types), **Fast** (detect only the most common), **None** (disable all detection)
- **Individual toggles** for each detector:
  - **Simple deadlocks** ([dead square deadlocks](../20-Sokoban/40-deadlocks/index.md#dead-square-deadlocks))
  - **Frozen goal nets** (a box that started the puzzle as part of a permanently frozen goal net gets pushed off its tile)
  - **Immovable boxes** ([freeze deadlocks](../20-Sokoban/40-deadlocks/index.md#freeze-deadlocks))
  - **Unsolvable rooms** ([corral deadlocks](../20-Sokoban/40-deadlocks/index.md#corral-deadlocks))
  - **Impossible box/goal matchings** ([bipartite deadlocks](../20-Sokoban/40-deadlocks/index.md#bipartite-deadlocks))
  - **Closed diagonal deadlocks** ([details](../20-Sokoban/40-deadlocks/index.md#closed-diagonal-deadlocks))
  - **Locked-up rooms** — a part of the board that boxes can no longer be pushed out of
  - **Unfillable goal areas** — a nearly full group of goals whose remaining goals no box can reach any more
  - **Positions that cannot be unwound** — positions the boxes can no longer be worked back out of

### Puzzle Solved Celebration
- **Player/box pop animation**, **Goal glow effect**, **Victory sound**, **Highlighted status text**, and **Play skin animations** — each can be toggled independently to control what happens when you solve a puzzle

### Board Simplification
- **Convert unmovable boxes to walls** — when simplifying the board, replace boxes that can never move again with walls
- **Crop board to active area** — when simplifying the board, remove outer walls that aren't part of the puzzle's reachable area

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

The category is split into one group per sidebar list, plus a shared group:

**General**
- **Row text size** — adjust the text size used for rows in the Solutions and Snapshots lists.

**Solutions**
- **Solution sort order** — sort by *Moves, then pushes*, *Pushes, then moves*, or *Date*, with an *Ascending* or *Descending* direction.
- **Best solutions position** — pin the best solutions to the *Top* or *Bottom* of the sorted list, or turn pinning *Off*.
- **Solution metrics** — show *All metrics* or *Moves/pushes only* for each solution.
- **Solutions list** — show *All solutions*, *Only best solutions*, or *Only best N solutions* by default; for the last option, set **Number of top solutions (N)**. Hidden solutions can always be revealed again.
- **Show titles as a second line** — show each solution's title below its metrics instead of only on hover.
- **Best-moves badge** / **Best-pushes badge** / **Best-overall badge** — single character shown on the solution with the fewest moves, the one with the fewest pushes, and — when one solution holds both records — on that solution. Defaults are "M", "P", and "!".

**Snapshots**
- **Snapshot sort order** — the same sort options and direction as for solutions, applied to the Snapshots list.
- **Push-mode snapshot badge** / **Pull-mode snapshot badge** — single character shown next to a snapshot marking whether it was recorded playing forward (pushing boxes) or in [reverse play](main-window.md#reverse-play-pull-boxes) (pulling boxes). Pull-mode defaults to "R"; push-mode defaults to no badge.
- **Show titles as a second line** — show each snapshot's title below its metrics instead of only on hover.

**Macros**
- There are no settings for the Macros list yet.

**Result**
Changes apply immediately to the sidebar lists.

**Notes**
- Badge fields accept a single character; if you type more, only the first one is kept. Leave a badge field empty ("None") to show no badge.
- Sorting and filtering can also be changed from the menus in the sidebar's tab headers; both places always show the same values.

**Related Features**
[Sidebar Panels](sidebar.md), [Gameplay](#gameplay), [Reverse Play](main-window.md#reverse-play-pull-boxes)

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
- **Preview** — live preview of your template, filled with sample values (collection "My Collection", puzzle 5 of 20 titled "Puzzle 5", 8 boxes and goals, 12 × 15 tiles)

**Example templates:**
- `{appName} - {puzzleTitle}` produces "SokoLogic - My Level"
- `{puzzleNumber}/{totalPuzzles}: {puzzleTitle}` produces "42/100: My Level"
- `{collectionTitle} ({boxCount}boxes, {goalCount}goals)` produces "Classic Puzzles (5 boxes, 5 goals)"

**Result**
Changes apply immediately to the window title bar.

**Notes**
- The default template is `{appName}    {collectionTitle}    {puzzleNumber} - {puzzleTitle}`; the reset icon next to **Title template** restores it.
- If a placeholder's value is empty (e.g., the collection has no title), the placeholder simply disappears from the final title. Text in braces that is not one of the listed placeholders is shown as-is.

**Related Features**
[Main Window](main-window.md)

---

## LetsLogic

**Purpose:** Configure the connection used to submit solutions to the LetsLogic.com puzzle platform.

**Prerequisites:** The Settings window must be open. Submitting solutions additionally requires a valid LetsLogic.com account and API key.

**Usage**
- **API key** — enter the authentication key used when submitting solutions to LetsLogic.com (entered as a masked/secret field)

The submission window itself is opened from the Tools menu — see [LetsLogic Submission](letslogic.md).

**Result**
Changes apply immediately.

**Notes**
Your API key is never written to an exported settings file, and importing a settings file keeps the key you currently have (see [General](#general)).

**Related Features**
[General](#general), [LetsLogic Submission](letslogic.md)

---

## Controls

The **Controls** category lets you customize keyboard shortcuts for all major actions, and configure what single-click, double-click, and right-click do on wall tiles and the background. This is documented in detail on the [Keyboard Shortcuts](keyboard-shortcuts.md) page.

---

## Resetting Settings to Defaults

**Purpose:** Undo unwanted configuration changes by restoring factory defaults.

**Prerequisites:** The Settings window must be open.

**Usage**
- **A single setting** — as soon as a setting differs from its default, a small reset icon appears next to its name. Click it (tooltip: **Reset to default**) to restore just that setting, without confirmation.
- **One category** — click **Reset to defaults** in the top-right of any category and confirm to reset all settings shown on that page.
- **Everything** — on the **General** category, click **Reset all settings to defaults** in the **Reset** group and confirm to reset every setting in the application.

**Result**
The affected settings immediately return to their factory defaults. Category and full resets cannot be undone.

**Notes**
- Resetting *all* settings also resets keybindings and the LetsLogic API key, not just the settings visible on the General page.
- To be able to go back later, save your current settings first with **Export Settings...** on the [General](#general) page.

**Related Features**
[Opening Settings](#opening-settings)

---

## Related Features

- [Main Window](main-window.md) — global toggles and controls that affect settings
- [Keyboard Shortcuts](keyboard-shortcuts.md) — detailed keybinding documentation
- [Sidebar Panels](sidebar.md) — solutions and snapshots list behavior
- [Sokoban basics](../20-Sokoban/index.md) — deadlock and puzzle terminology
