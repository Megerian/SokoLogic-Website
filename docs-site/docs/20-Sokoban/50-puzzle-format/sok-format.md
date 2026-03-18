---
title: The .sok Format
sidebar_position: 10
---

## Overview

The **`.sok` file format** is a plain-text format used to store Sokoban puzzles, snapshots, and solutions.  
It is designed to be easy for humans to read and edit, while still being structured enough for programs to parse and process.

---

## File Structure

A `.sok` file typically contains:

- **File notes** at the top (free text, comments, metadata)
- One or more **puzzles**, each with:
    - an optional title and notes
    - a **board definition**
    - optional **snapshots** or **solutions**

Example content:
```
Collection: DemoSet
Author: Jane Doe

Demo Puzzle 01
#######
#     #
#@ $ .#
#######

Solution
rrRR
 ```

Lines beginning with `::` are comments intended for humans and can be ignored by a strict parser.

---

## Comments and Metadata

- Lines starting with `::` are **comment lines**.
- Additional notes before or after a puzzle may contain simple key/value pairs such as:

  Author: Jane Doe
  Collection: Demo Set
  Title: Demo Level 01

These are commonly used, but not formally enforced by the format itself.

---

## Board Definition

A Sokoban board is defined as a block of text lines. Each character represents a tile or object.

### Legend

| Symbol | Meaning              |
|--------|----------------------|
| `#`    | Wall                 |
| `@`    | Player               |
| `+`    | Player on goal       |
| `$`    | Box                  |
| `*`    | Box on goal          |
| `.`    | Goal square          |
| ` `    | Floor / empty space  |

Some tools also accept alternative letters (e.g. `p`/`P` or `b`/`B`) as equivalents for player/box variants.

### Layout Conventions

Common conventions used by many programs:

- All rows in a board block should have the **same width** (shorter rows are padded with spaces).
- The outer area is usually surrounded by walls (`#`), so the player cannot walk outside the room.
- Completely empty rows inside the room are often written with at least one placeholder character instead of a blank line, to avoid ambiguity when parsing.

---

## Moves, Snapshots and Solutions

`.sok` files can also store **snapshots** (intermediate states) and **solutions** (complete sequences of moves).

### Move Encoding

A common convention for moves is:

- `u` / `U` – up (uppercase often used when pushing a box)
- `d` / `D` – down
- `l` / `L` – left
- `r` / `R` – right
- `*` – marker for the current position in a move history (often used in snapshots)

A **solution** is simply a move sequence that leads from the initial puzzle state to a solved state.

### Snapshots

A snapshot represents a **saved game state**, not necessarily solved. It usually consists of:

- A short description or title
- A move sequence indicating how to reach that state from the initial position

Some tools also support a *reverse mode*, where the board starts solved and moves are treated as pulling boxes away from goals. Snapshots in reverse mode often begin with a leading jump-like sequence to mark the starting point.

---

## Implementation Notes

The `.sok` format is intentionally flexible and does **not** enforce a rigid grammar like XML or JSON.  
This makes it easy to write and share, but a bit more challenging to parse correctly and robustly.

Historically, some implementations supported **run-length encoding (RLE)** inside `.sok`-like formats, but this is rarely used today and has been dropped from many reference implementations to keep things simple.

---

## Example .sok File

    :: Simple demo puzzle
    Collection: DemoSet
    Author: Jane Doe

    Demo Level 01
    #######
    #     #
    #@ $ .#
    #######

    Solution/Moves
    rurDDllU

- The `::` line is a comment.
- `Collection:` and `Author:` are free-form metadata.
- The block of `#`, spaces, `@`, `$` and `.` is the **board**.
- `Solution/Moves` introduces a simple move sequence that solves this tiny level.

---

## Usage Tips

- Keep `.sok` files **UTF-8 encoded** if you include non-ASCII comments or metadata.
- Be consistent with metadata keys like `Collection:`, `Author:` and `Title:`.
- When writing tools that read `.sok`, make sure to:
    - skip comment lines starting with `::`
    - tolerate small variations in spacing and metadata
    - clearly distinguish between boards, notes and move sequences

This page is intended as a practical overview; for more historical and low-level details, see the Sokoban community documentation and original `.sok` format descriptions.
