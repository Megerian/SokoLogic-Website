---
title: Rules of the Game
---

The warehouse is represented as a grid of squares, where each square is either a **floor** or a **wall**.

Certain floor squares may hold **boxes**, while others are marked as **storage locations**.

The player, often depicted as a worker, can move one square at a time horizontally or vertically onto empty floor squares. The player cannot move through walls or boxes.

To move a box, the player must walk up to it and push it onto the square beyond.

**Important rules for moving boxes:**

- Boxes cannot be pushed onto squares occupied by walls or other boxes.
- Boxes cannot be pulled, only pushed.

The number of boxes on the grid matches the number of storage locations.

The puzzle is completed when all boxes are correctly placed on their storage locations.

### Metrics

Each movement of the player counts as a **"move"**.
Each time the player pushes a box, it counts as a **"push"**.

Some Sokoban programs track the number of moves and pushes.
The challenge often lies in solving the puzzle with the fewest moves or pushes required.

### Example

Below is an example of a Sokoban puzzle and how it progresses as the player solves it:

![Sokoban  Example](/img/sokoban/sokoban-puzzle-solving-example.gif)
