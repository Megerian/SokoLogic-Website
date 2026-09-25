---
title: LetsLogic Submission
sidebar_position: 8.5
---

# LetsLogic Submission

SokoLogic can send your best solutions to [LetsLogic.com](https://letslogic.com), the online Sokoban puzzle platform — for the current puzzle or for a whole collection at once.

![Screenshot](...)

## Setting Up the API Key

**Purpose:** Connect SokoLogic to your LetsLogic account.

**Prerequisites:** A LetsLogic.com account. You get your API key there after registering.

**Usage**
- Open **LetsLogic** from the Tools menu. Without an API key, the window says "No LetsLogic API key configured yet. Register at letslogic.com to get one, then enter it below."
- Enter the key in the field and click **Save**, or click **Open Settings** to enter it under [Settings > LetsLogic](settings.md#letslogic).

**Result:** Once a key is saved, the window switches to the submission view.

**Notes:** The API key is never included when you [export your settings](settings.md#general).

**Related Features**
- [Settings: LetsLogic](settings.md#letslogic)

---

## Submitting Solutions

**Purpose:** Upload the best moves solution and the best pushes solution of your puzzles to LetsLogic.

**Prerequisites:** An API key is set, and the puzzles carry a LetsLogic ID (puzzles downloaded from LetsLogic usually do).

**Usage**
- Choose the scope: **Current puzzle** or **Entire collection**. Below it you see how many puzzles in that scope have a LetsLogic ID ("N puzzle(s) with a LetsLogic ID in this scope.").
- Click **Submit**. For a collection with more than one eligible puzzle, confirm first ("Submit collection to LetsLogic?").
- While it runs, a progress bar shows how many puzzles are done ("N / M"); click **Cancel** to stop.

**Result:** Each puzzle is listed with a separate result for **Moves:** and **Pushes:** — **Pending**, **Uploaded** (with your rank and points when LetsLogic reports them), **Already up to date**, **No local solution**, **No LetsLogic ID**, or **Error**. A summary line shows "N uploaded · N skipped · N errors".

**Notes:**
- SokoLogic remembers the best results already sent with your API key, so a solution is only uploaded if it is better than what LetsLogic already has from you. This avoids unnecessary uploads.
- **Submit** is disabled when no puzzle in the chosen scope has a LetsLogic ID.
- The scope can't be changed while a submission is running.

**Related Features**
- [Sidebar: Solutions Panel](sidebar.md#solutions-panel) — your local solutions
- [Menu: Tools](menus.md#tools-menu)
- [Keyboard Shortcuts](keyboard-shortcuts.md#default-shortcuts--tools) — assign a shortcut to open LetsLogic
