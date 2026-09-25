---
title: Last Played History & Trash
sidebar_position: 6
---

# Last Played History & Trash

Two companion windows: **Last Played** shows the puzzles you played recently, across all collections, and lets you reopen them with one click. **Trash** keeps deleted solutions, snapshots, and macros for a while so you can restore them.

![Screenshot](...)

## Last Played History Browser

**Purpose:** Reopen a puzzle you played recently, even from another collection.

**Prerequisites:** None. There is no default keyboard shortcut; you can assign one under [Customizing a shortcut](keyboard-shortcuts.md#customizing-a-shortcut).

**Usage**
- Open **Last Played** from the Tools menu.
- The window shows your recently played puzzles as cards with a small board preview, newest first. The header shows the number of **Entries** and, if any, the number of **Missing files**.
- **Search** — type into the field ("Search by title, collection, or #number…"). A plain search matches the puzzle title, author, collection title, or puzzle number; `#12` matches puzzle number 12 only.
- **Click a card** — open that puzzle in the main window; the history window closes.
- **Remove from history** (button on a card) — remove the entry. A notification ("Removed from history") offers **Undo**.
- **Remove missing entries** — remove all entries whose file can no longer be loaded (shown only when there are some).
- **Clear history** — remove all entries, after confirming ("Clear history?"). This cannot be undone.
- Keyboard: <kbd>Page Up</kbd> / <kbd>Page Down</kbd> scroll one page (with <kbd>Ctrl</kbd>, ten pages), <kbd>Home</kbd> / <kbd>End</kbd> jump to the newest / oldest entry. <kbd>Esc</kbd> first clears the search, then leaves the search field, then closes the window.

**Result:** The chosen puzzle opens, or the history changes as requested.

**Notes:**
- The history is kept between sessions and covers every collection you have played from.
- Removing an entry never deletes the puzzle or its collection file.
- An entry whose file was moved or deleted shows "File no longer found"; one whose puzzle number no longer exists in the file shows "Puzzle #N no longer exists in this collection"; a file that can't be read shows "Could not load this collection". Such entries can't be opened.
- With no history yet, the window shows "No puzzles played yet".

**Related Features**
- [Main Window > Puzzle Bookmarks](main-window.md#puzzle-bookmarks) — jump to favorite puzzles with a single key
- [Puzzle Browser](puzzle-browser.md) — search within collections
- [Menu: Tools](menus.md#tools-menu)

---

## Trash

**Purpose:** Restore solutions, snapshots, and macros you deleted, or delete them for good.

**Prerequisites:** None. Open it with **Trash** in the Tools menu, or press <kbd>F11</kbd>.

**Usage**
- The window has three tabs, each showing its item count: **Solutions (N)**, **Snapshots (N)**, and **Macros (N)**.
- Each entry shows the item (its title, or its metrics if it has none; for macros, the name), the puzzle it belongs to, "Deleted on …", and how long it is kept ("Auto-deletes in N day(s)" or "Auto-deletes today").
- **Restore** — put the item back where it came from. A notification confirms it, e.g. "Solution restored to "…"".
- **Delete permanently** — erase the item after confirming ("Delete permanently?").
- **Empty trash** (top of the window) — permanently delete everything in the trash — all three tabs — after confirming ("Empty trash?").

**Result:** Restored items reappear in the [sidebar](sidebar.md) of their puzzle (macros in the Macro Studio and the Macros panel). Permanently deleted items are gone for good.

**Notes:**
- Deleted items are kept for 30 days. Older items are removed automatically when SokoLogic starts.
- Items get into the trash when you delete them in the sidebar or in the Macro Studio; there is no confirmation when deleting, because you can always restore from here.
- **Delete permanently** and **Empty trash** cannot be undone.
- With nothing in a tab, it shows "Trash is empty".

**Related Features**
- [Sidebar Panels](sidebar.md) — where solutions, snapshots, and macros are deleted and where restored ones appear
- [Macro Studio](macro-studio.md)
- [Menu: Tools](menus.md#tools-menu)

---

## Related Features

- [Sidebar Panels](sidebar.md) — solutions, snapshots, and macros
- [Menu: Tools](menus.md#tools-menu) — quick access to Last Played and Trash
- [Keyboard Shortcuts](keyboard-shortcuts.md) — customize keybindings for Last Played and Trash
