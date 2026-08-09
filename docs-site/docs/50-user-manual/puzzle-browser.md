---
title: Puzzle Browser
sidebar_position: 4
---

# Puzzle Browser

The Puzzle Browser is an interactive grid view for browsing, searching, and filtering puzzles in the loaded collection. It's useful for finding specific puzzles, visualizing multiple levels at once, and filtering by completion status.

![Screenshot](...)

## Purpose

Quickly locate and load puzzles from a large collection without stepping through them one at a time via next/previous puzzle buttons.

## Prerequisites

A puzzle collection is loaded (via [Menu: Collection > Import from disk](menus.md#collection-menu) or the Load button in the toolbar).

## Usage

### Opening the Browser

- Click **Menu > Tools > Puzzle Browser**, or press <kbd>F7</kbd>.
- The browser opens in a new window showing a grid of puzzle thumbnails.

### Search

- **Search field** (top of the window) — type to filter puzzles by:
  - **Puzzle title** — name of the level (case-insensitive substring match)
  - **Author name** — creator of the puzzle (case-insensitive substring match)
  - **Puzzle number** — type a number to jump to that puzzle by ID (e.g., type `42` to find puzzle #42)
  - **Strict number search** — prefix with `#` (e.g., `#123`) to search only by puzzle number

- **Search results update in real time** as you type; the grid refreshes to show only matching puzzles.

### Filtering

- **Filter buttons** below the search field:
  - **All** — show every puzzle in the collection (default)
  - **Solved** — show only puzzles you have solved (have solutions saved)
  - **Unsolved** — show only puzzles without a solution yet

The filter applies on top of the search query.

### Grid Display

- **Puzzle thumbnails** — each tile shows a small preview of the puzzle's board rendered with the active skin.
- **Puzzle metadata** below each thumbnail:
  - Puzzle number (e.g., `#42`)
  - Puzzle title
  - A check mark (✓) if the puzzle is solved
  - Author name (on hover or in expanded view)

- **Highlighting:**
  - The currently active puzzle (the one you're playing) is highlighted.
  - Solved puzzles may be shown with a different visual treatment (e.g., a check mark overlay).

### Navigation

- **Click a puzzle tile** to load it and close the browser.
- **Keyboard navigation:**
  - **Enter** (while the search field is focused) — load the first puzzle matching the current search/filter
  - **Page Up / Page Down** — scroll by one page; hold **Ctrl** for a larger jump (10 pages)
  - **Home / End** — jump to the first/last puzzle
  - **Escape** — context-sensitive: closes the advanced search panel if open, otherwise clears the search field if it has text, otherwise closes the browser

### Zoom Control

- **Zoom slider** (bottom or side of the window) — adjust the size of puzzle thumbnails:
  - Smaller tiles = more puzzles visible on screen (good for large collections)
  - Larger tiles = clearer preview of puzzle layout (good for analyzing structure)
- **Zoom range** — tiles can scale from very small to large enough to see individual walls/boxes/goals clearly.

### Advanced Search

Click the **Advanced Search** button to open a dedicated panel with a much larger set of filters than the basic search field, organized into collapsible sections:

**Search Target Scope** — search either the **Current Collection** (already loaded in memory) or **Local Folders**: add one or more folders from disk, then click **Scan Folders** to index every puzzle file inside them before searching.

- **General Metadata** — Title (supports either fuzzy matching or `*`/`?` wildcards) and Author.
- **Dimensions & Structural Counts** — range filters (e.g. `12`, `10-15`, `>=12`) for Boxes, Goals, Walls, Floors, Boxes on goal, Width, and Height.
- **Solution Metrics** — range filters for Moves, Pushes, and Pushing sessions; filter by who created the solution (**User**, **Solver**, or **Optimizer**); filter by LetsLogic upload status; search for a specific LURD substring within saved solutions.
- **Patterns & Duplicates** — three mutually exclusive modes:
  - **Exact board** — paste a full board layout to find an identical match.
  - **Sub-pattern** — paste a partial pattern (space = any tile) to find it anywhere on the board.
  - **Duplicates** — find puzzles that are the same or similar to each other (or to the currently playing puzzle), using either a fast raw-board comparison, a thorough normalized comparison, or a percentage-based similarity comparison that lets you choose which layers (boxes/goals/walls) count toward the match and set a minimum match threshold.
  - An additional toggle lets duplicate/pattern searches also match rotated or mirrored orientations of the board.

**Result:** The grid updates to show only puzzles matching the search/filter criteria. For duplicate searches, results are grouped by duplicate group instead of shown as a flat list.

## Notes

- **Performance:** The browser uses incremental search and lazy rendering to handle large collections (thousands of puzzles) smoothly.
- **Cache:** Puzzle board thumbnails are cached in memory for fast redraw when scrolling; the cache has a configurable capacity to balance memory usage.
- **No editing in browser:** To edit a puzzle, load it and switch to [Editor](editor.md) mode.
- **Solved status:** A puzzle is marked as "solved" if it has at least one saved solution; you can clear this by deleting all solutions in the [Solutions panel](sidebar.md#solutions-panel).
- **Keyboard-friendly search:** Typing in the auto-focused search field and pressing Enter is the fastest way to jump straight to a specific puzzle without touching the mouse. Selecting an arbitrary tile from the grid, however, requires a click.

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| **Escape** | Close the advanced search panel, then clear the search field, then close the browser (in that order, one step at a time) |
| **Enter** | While the search field is focused, load the first matching puzzle |
| **Page Up / Page Down** | Scroll by one page |
| **Ctrl+Page Up / Ctrl+Page Down** | Scroll by a larger jump (10 pages) |
| **Home** | Jump to first puzzle |
| **End** | Jump to last puzzle |

The search field is focused automatically when the browser opens, so you can start typing immediately without clicking into it.

## Related Features

- [Main Window > Load Puzzle Collection](main-window.md#load-puzzle-collection) — import puzzles into the browser
- [Puzzle Navigation](main-window.md#puzzle-navigation) — step through puzzles one at a time
- [Menu: Collection > Go to Puzzle](menus.md#collection-menu) — jump to a specific puzzle by number (simpler than the browser)
- [Editor](editor.md) — edit or create new puzzles
- [Sidebar: Solutions Panel](sidebar.md#solutions-panel) — view solutions for the active puzzle
