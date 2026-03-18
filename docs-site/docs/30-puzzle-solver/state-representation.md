---
id: sokoban-state-representation
title: Board & State Representation
sidebar_label: State Representation
---

A good state representation is crucial for performance. It directly affects hashing, deadlock detection, and move generation.

## Board representation

The Sokobano solver article recommends storing board tiles in a **1-dimensional array** of length `n`, where each index corresponds to one floor or wall square.

Typical setup:

- Pre-scan the level and assign an index to every non-wall tile.
- Store static information:
    - `isWall[pos]`
    - `isGoal[pos]`
    - Precomputed neighbour lists for 4 directions
- Store dynamic information:
    - Bitset / array of `hasBox[pos]`
    - Player position index

Advantages of a 1-D layout:

- Fast indexing and iteration
- Easy bitset representation (helps for hashing and deadlock tables)
- Works well with transposition table hashing

You can still keep `(x, y)` helpers for debugging, but internal search should use the compact index.

## State representation

A minimal state for search usually contains:

- **Box positions**: often as a sorted list of box indices or a fixed-size array.
- **Player information**:
    - Either exact player position
    - Or *normalized* player position (any tile in the same reachable region).

Many solvers store only the **normalized player position** to merge states that differ only by where the player is standing inside the same accessible area.

This dramatically reduces the number of distinct states.

### Normalizing the player position

1. Run a flood-fill / BFS from the real player position.
2. Collect all reachable floor positions that are not blocked by boxes.
3. Pick a canonical representative of this reachable set, e.g.:
    - the top-left reachable tile, or
    - the smallest index in the reachable set.
4. Store only that representative in the state.

When reconstructing a solution path, you still record the *real* pushes, so no information about the answer is lost.

## Player reachability computation

The solver repeatedly needs to know **all tiles the player can reach without moving boxes**.

A standard approach is:

- Use BFS in *game space* (on the board graph) from the current player position.
- Treat walls and box tiles as blocked.
- Mark reachable tiles in a boolean array or with an integer timestamp.

Optimizations:

- Instead of clearing a boolean array every time, maintain a `visitedStamp[pos]` and a global counter:
    - increment `stamp` for each BFS
    - mark a tile as visited when `visitedStamp[pos] == stamp`.

## Move and successor generation

To generate successor states (pushes):

1. Compute player reachability.
2. For each box:
    - For each of the 4 directions:
        - Let `from = boxPos - dir` and `to = boxPos + dir`.
        - Check if `from` is reachable by the player and `to` is free.
3. Each valid `(box, dir)` pair is one **push move** and leads to a new state.

Note:  
It is common to measure cost in **pushes** (not player steps) and to count only pushes as edges in the search graph. :contentReference[oaicite:7]{index=7}

## Transposition table & hashing

A **transposition table** (TT) stores states that have already been visited, to avoid re-searching them. :contentReference[oaicite:8]{index=8}

Implementation steps:

- Use a large hash table (array) with open addressing or chaining.
- Compute a hash from:
    - box positions
    - normalized player position
- Zobrist hashing is a good fit: pre-generate random 64-bit numbers for each `(piece, position)` pair and XOR the matching ones.

Memory considerations from Sokobano’s solver article:

- Millions of states may need to be stored.
- Common tricks:
    - Limit TT size and evict old entries (hybrid of tree and graph search).
    - Store states **incrementally** relative to a parent state to compress memory usage.
