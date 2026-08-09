---
title: Last Played History & Trash
sidebar_position: 6
---

# Last Played History & Trash

Two companion tools for managing your puzzle activity: the Last Played History browser shows which puzzles you've recently opened, and Trash lets you recover accidentally deleted items.

![Screenshot](...)

## Last Played History Browser

**Purpose:** Browse puzzles you've recently played, sorted by most-recent-first.

**Prerequisites:** You have played at least one puzzle in a loaded collection.

**Usage**

### Opening the Browser
- Click **Menu > Tools > Last Played**. There is no default keyboard shortcut, but you can assign one — see [Customizing a shortcut](keyboard-shortcuts.md#customizing-a-shortcut).
- The browser opens showing a grid of puzzle thumbnails in reverse chronological order (newest first).

### Browsing & Searching
- **Search field** (top) — type to filter by puzzle title or author name (case-insensitive substring match).
- **Puzzle thumbnails** — each shows a small preview of the board and metadata:
  - Puzzle number and title
  - Last played date/time (e.g., "2026-08-09 15:34")
  - Author name

### Loading a Puzzle
- **Click a puzzle tile** to load it into the main game window and close the browser.
- The puzzle loads to its starting position; your full move history is preserved if you were already playing it.

### Removing Entries
- **Right-click a puzzle** for options to remove it from your history (does **not** delete the puzzle itself — only removes it from the history list).

**Result:** The puzzle loads; the history browser closes (or the entry is removed).

**Notes:**
- History is recorded across all puzzle collections you've loaded (not just the currently active collection).
- The history persists across app sessions; it's stored in the database.
- Removing a puzzle from history does not delete the puzzle from any collection.
- If a puzzle file is deleted externally (from disk), it will still appear in history but will fail to load with an error message.

### Keyboard Navigation
- **Arrow keys** — move focus between tiles
- **Enter** — select the focused puzzle
- **Page Up / Page Down** — scroll
- **Home / End** — jump to newest/oldest
- **Escape** — close without changing the active puzzle

---

## Trash

**Purpose:** Recover or permanently delete puzzles, solutions, snapshots, and macros that you've deleted.

**Prerequisites:** At least one item has been deleted from your collection.

**Usage**

### Opening Trash
- Click **Menu > Tools > Trash**, or press <kbd>F11</kbd>.
- The trash window opens showing three tabs: **Solutions**, **Snapshots**, and **Macros**.

### Browsing Trash
Each tab displays a list of deleted items with details:
- **Item name/ID** — the solution's name or ID, snapshot position, or macro name
- **Puzzle** — which puzzle the item belonged to
- **Deleted at** — when it was deleted (date and time)

### Restoring Items
- **Click an item** or select it and press **Restore** (button or right-click) to recover it and return it to the puzzle.
- The restored item is placed back into the puzzle's collection as if it was never deleted.

**Result:** The deleted item is restored to full functionality.

### Permanently Deleting Items
- **Right-click an item** and select **Delete permanently** (or select and press **Delete**).
- A confirmation dialog appears — click **Confirm** to proceed (this cannot be undone).

**Result:** The item is permanently erased from the trash; it cannot be recovered.

### Clearing the Trash
- **Clear all** button (top of the window) — removes all deleted items in the current tab from trash permanently.
- A confirmation dialog appears — confirm to proceed.

**Result:** All deleted items in the selected tab are permanently erased.

**Notes**
- **Trash is tab-specific** — clearing Solutions tab does not affect Snapshots or Macros; you must clear each tab separately (or one item at a time).
- **Restore vs. Undo** — Trash is for recovering items deleted in past sessions. If you accidentally deleted something *just now*, use [Menu: Moves > Undo](menus.md#moves-menu) or the undo button in the toolbar instead.
- **Date/time stamps** — show when the item was deleted, not when it was created; useful for identifying recent accidents.
- **Deleted puzzle data** — if a puzzle is deleted and then restored, its solutions/snapshots/macros remain deleted unless you restore them individually from Trash.

### Trash Tabs

| Tab | Items | Restoration |
|-----|-------|-------------|
| **Solutions** | Deleted move sequences for solved puzzles | Restore to recover the solution |
| **Snapshots** | Deleted board positions (savepoints) | Restore to recover the snapshot |
| **Macros** | Deleted custom move macros | Restore to recover the macro |

---

## Workflow Examples

### Recovering a Deleted Solution
1. Open **Menu > Tools > Trash**
2. Click the **Solutions** tab
3. Find the solution by puzzle name or deleted date
4. Right-click and select **Restore** (or click **Restore** button if available)
5. The solution is returned to the puzzle's Solutions panel and can be loaded again

### Cleaning Up Old History
1. Open **Menu > Tools > Last Played**
2. Identify puzzles you no longer care about
3. Right-click and select **Remove from history**
4. The entry disappears; the puzzle itself remains in your collections
5. (Optionally) close the browser

### Permanently Deleting a Snapshot
1. Open **Menu > Tools > Trash**
2. Click the **Snapshots** tab
3. Find the snapshot by puzzle or deleted date
4. Right-click and select **Delete permanently** (or select and press **Delete**)
5. Confirm in the dialog
6. The snapshot is erased; it cannot be recovered

---

## Related Features

- [Sidebar: Solutions Panel](sidebar.md#solutions-panel) — where restored solutions appear
- [Sidebar: Snapshots Panel](sidebar.md#snapshots-panel) — where restored snapshots appear
- [Sidebar: Macros Panel](sidebar.md#macros-panel) — where restored macros appear
- [Menu: Tools](menus.md#tools-menu) — quick access to Last Played and Trash
- [Keyboard Shortcuts](keyboard-shortcuts.md) — customize keybindings for Last Played and Trash
