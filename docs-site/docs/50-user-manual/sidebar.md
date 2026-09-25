---
title: Sidebar Panels (Solutions, Snapshots, Macros)
sidebar_position: 3
---

# Sidebar Panels

The sidebar on the left of the board holds three lists for the current puzzle: your saved **Solutions**, your **Snapshots** (saved positions), and the **Macros** you can run on the board.

![Screenshot](...)

## Overview

**Purpose:** Keep solutions, snapshots, and macros for the current puzzle next to the board.

**Prerequisites:** A puzzle is loaded.

**Usage**
- Show the sidebar with the **Solutions**, **Snapshots**, or **Macros** button in the toolbar, or with <kbd>S</kbd>, <kbd>D</kbd>, or <kbd>M</kbd>. Pressing the button or key of the tab that is already showing hides the sidebar again.
- Switch lists with the tab bar at the top of the sidebar.
- Right-click the **Solutions** or **Snapshots** tab — or the empty area below the list — to open that list's view options (see [List View Options](#list-view-options)).

**Result:** The selected list is shown next to the board.

**Notes:**
- Only one list is shown at a time.
- Moving the mouse over an entry shows a hint in the status bar, e.g. "Double-click to set as new move history · Right-click for options".

**Related Features**
- [Main Window > Sidebar Toggles](main-window.md#sidebar-toggles)
- [Settings: Sidebar](settings.md#sidebar) — text size, sorting, filters, and badges
- [Keyboard Shortcuts](keyboard-shortcuts.md) — change the toggle keys

---

## Solutions Panel

**Purpose:** Browse, load, and manage the saved solutions of the current puzzle.

**Prerequisites:** A puzzle is loaded. Without solutions, the list shows "No solutions".

**Usage**

Each entry shows the solution's metrics (all metrics, or just moves/pushes, depending on [Settings: Sidebar](settings.md#sidebar)) and, for record holders, a badge: by default **M** for the fewest moves, **P** for the fewest pushes, and **!** when one solution holds both records. A solution's title appears as a tooltip, or as a second line below the entry if you switched that on.

- **Click** — select an entry. <kbd>Ctrl</kbd>+click adds or removes entries from the selection; <kbd>Shift</kbd>+click selects a range (<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+click adds the range to the selection).
- **Double-click** — take the solution as your new move history. The board stays at the start position with the solution's moves ready to redo.
- **Right-click** — open the context menu:
  - **Take as new history** — same as double-clicking
  - **Rename** — edit the title directly in the list; press <kbd>Enter</kbd> or click the check mark to keep it, <kbd>Esc</kbd> or the cross to cancel
  - **Copy solution to clipboard**
  - **Export as animation...** — see [Export Move Animation](export.md#export-move-animation)
  - **Delete solution**

**Result:** The chosen action is applied immediately.

**Notes:**
- Solving a puzzle saves the solution automatically; the new entry is selected and scrolled into view. Solving it again with exactly the same moves selects the existing entry instead of adding a duplicate.
- **Delete solution** moves the solution to the [Trash](history-and-trash.md#trash), where you can restore it. If several solutions are selected, all of them are deleted.
- When the list is filtered to the best solutions, a **Show all solutions again (N hidden)** button below the list reveals the rest.
- With best solutions pinned to the top or bottom, a line separates them from the others.

**Related Features**
- [List View Options](#list-view-options)
- [Settings: Sidebar](settings.md#sidebar)
- [Menu: Moves](menus.md#moves-menu) — copy and paste moves

---

## Snapshots Panel

**Purpose:** Save positions you may want to come back to, and restore them later.

**Prerequisites:** A puzzle is loaded. Without snapshots, the list shows "No snapshots" with an **Add new snapshot** button.

**Usage**
- **Add new snapshot** (the **+** button above the list) — save your current move history as a snapshot.
- **Hover over a snapshot** — the board shows a live preview of that position until you move the mouse away.
- **Click**, <kbd>Ctrl</kbd>+click, <kbd>Shift</kbd>+click — select entries, as in the Solutions panel.
- **Double-click** — take the snapshot as your new move history.
- **Right-click** — **Take as new history**, **Rename**, **Copy snapshot to clipboard**, **Delete snapshot**.

Each entry shows its moves and pushes, optionally its title as a second line, and a badge for its play direction: by default nothing for forward play and **R** for [reverse play](main-window.md#reverse-play-pull-boxes). Hover over the badge to see which it is.

**Result:** The board jumps to the snapshot's position, with the moves after it still available for redo.

**Notes:**
- Snapshots are saved in the database and stay available when you come back to the puzzle later.
- A snapshot keeps your undone moves too, so after loading it you can still redo them.
- If the current moves already solve the puzzle, no snapshot is added ("Move history contains a solution.") — the solution is saved in the Solutions panel instead. Adding the same position twice shows "Duplicate snapshot already exists."
- A snapshot recorded in the other play direction shows no live preview; double-click it to load it, which also switches your play direction.
- **Delete snapshot** moves it to the [Trash](history-and-trash.md#trash); with several entries selected, all of them are deleted.

**Related Features**
- [List View Options](#list-view-options)
- [Settings: Sidebar](settings.md#sidebar) — badge characters, sorting
- [Reverse Play](main-window.md#reverse-play-pull-boxes)

---

## Macros Panel

**Purpose:** Run macros on the board, and record new ones from your own moves.

**Prerequisites:** A puzzle is loaded. The list shows all global macros plus the macros bound to the current puzzle; if there are none, it shows "No macros available for this puzzle." with an **Open Macro Studio** button.

**Usage**
- **Record** (red dot above the list) — start recording; play some moves, then click the button again (**Recording…**, stop icon) to save them as a new macro bound to this puzzle.
- **Open Macro Studio** (pencil above the list) — open the [Macro Studio](macro-studio.md).
- **Click a macro**, or its play button — run it on the board from the current position.
- The pencil next to a macro renames it in place.
- **Right-click a macro**, or click its **⋮** button, for more:
  - **Execute**
  - **Macro Name** — rename it
  - **Copy Script** — copy the macro's script to the clipboard
  - **Duplicate** — add a copy named "… (Copy)"
  - **Bind to current puzzle** / **Global** — switch whether the macro appears for this puzzle only or for all puzzles
  - **Open Macro Studio**
  - **Delete Macro**

Each entry shows the macro's name and whether it is **Global** or **Puzzle-bound**.

**Result:** The macro's moves are played on the board at your normal move animation speed.

**Notes:**
- If you undo moves while recording, the recording is discarded ("Recording discarded: moves were undone during recording").
- Switching to another puzzle stops a running macro and ends a recording.
- **Delete Macro** moves the macro to the [Trash](history-and-trash.md#trash).

**Related Features**
- [Macro Studio](macro-studio.md) — write and test macros

---

## List View Options

**Purpose:** Change how the Solutions and Snapshots lists are sorted and filtered without opening the settings.

**Prerequisites:** The sidebar is shown.

**Usage**

Right-click the **Solutions** or **Snapshots** tab, or the empty area below the list:

- **Solutions:** **Sort by moves, then pushes** / **Sort by pushes, then moves** / **Sort by date**, **Ascending** / **Descending**, **Show best solutions on top** / **Show best solutions on bottom** / **Do not pin best solutions**, **Show all solutions** / **Show only best solutions** / **Show only best N solutions**, and **Show titles below each solution**.
- **Snapshots:** the same sort options and direction, and **Show titles below each snapshot**.

**Result:** The list updates immediately.

**Notes:** These are the same options as in [Settings: Sidebar](settings.md#sidebar); changing them in either place changes both.

**Related Features**
- [Settings: Sidebar](settings.md#sidebar)

---

## Related Features

- [Main Window](main-window.md) — toolbar and sidebar toggle buttons
- [Settings: Sidebar](settings.md#sidebar) — appearance and behavior configuration
- [Keyboard Shortcuts](keyboard-shortcuts.md) — complete keybinding reference
- [Last Played History & Trash](history-and-trash.md) — restore deleted solutions, snapshots, and macros
- [Macro Studio](macro-studio.md) — detailed macro creation and editing
