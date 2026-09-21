---
id: sokoban-search-and-heuristics
title: Search Algorithms & Heuristics
sidebar_label: Search & Heuristics
---

Once states and moves are defined, the solver needs a search algorithm and a way to prioritize promising states.

## Search algorithms for Sokoban

The state space of Sokoban is huge, so naive BFS/DFS usually fail except on trivial levels.

Common choices:

### Breadth-First Search (BFS)

- Guarantees shortest solution in number of pushes.
- Memory usage grows as `O(b^d)` and is usually prohibitive for non-toy levels.

BFS is still useful for:
- Player reachability
- Small subproblems (e.g., local planning in goal rooms)

### Depth-First Search (DFS) and IDDFS

Plain DFS is not complete in infinite graphs and has no optimality guarantee.  
**Iterative Deepening DFS (IDDFS)** combines the space benefits of DFS with the completeness of BFS, but on Sokoban it still needs good heuristics and pruning to be competitive.

### A\*

A\* is a best-first search that expands states in increasing order of `f(n) = g(n) + h(n)`:

- `g(n)` = cost so far (number of pushes from start)
- `h(n)` = heuristic estimate of remaining pushes to a solution

A\* is **optimal** if `h` is admissible (never overestimates).

On Sokoban:

- A\* is widely used, for example in JSoko and several academic solvers.
- Memory can still be a problem because all open nodes are stored.

### IDA\*

Rolling Stone uses **Iterative Deepening A\*** (IDA\*) as its main search algorithm.

- Performs depth-first searches with an `f`-cost limit.
- Increases the limit step by step.
- Uses little memory (similar to DFS) but relies heavily on an accurate heuristic.

### Weighted A\* and bounded relaxation

To get solutions faster (not necessarily optimal), many solvers use a **weighted A\*** variant:

`f(n) = g(n) + (1 + ε) * h(n)`

or more sophisticated bounded relaxations where the influence of `h` changes with search depth.

This trades optimality for speed and the ability to solve harder instances.

## Heuristics: estimating remaining pushes

A heuristic maps a state to a lower bound on the remaining number of pushes.

### Basic Manhattan distance

Simplest approach:

- Assign each box to the *closest* goal in Manhattan distance.
- Sum these distances.

This is cheap but often too optimistic and blind to obstacles and deadlocks.

### Minimum-cost matching (Hungarian algorithm)

Rolling Stone improves the lower bound by solving a **minimum perfect bipartite matching** between boxes and goals, with edge cost = distance from box to goal.

- Implemented with the Hungarian algorithm in `O(N^3)` time, where `N` is the number of boxes.
- Gives a much tighter lower bound than naive assignment.
- Can sometimes even detect impossible states if some goals cannot be matched.

### Linear conflicts and simple penalties

The matching lower bound can be augmented with small local penalties, e.g.:

- **Linear conflicts:** two boxes in a corridor both “want” to move in the same direction and block each other.
- Other structural penalties (boxes on wrong side of walls, etc.)

These remain admissible if carefully designed.

## Move ordering

Ordering successor moves is critical for depth-first style search.

Rolling Stone uses **inertia-based move ordering**:

1. Prefer pushes that move the same box that was pushed last.
2. Prefer pushes that reduce the heuristic value.
3. Fall back to others, sorted by distance to their assigned goals.

This makes the search rapidly focus on promising sequences and becomes “almost perfect” after only a fraction of the solution depth.

## Push-vs-move optimality

Solvers usually distinguish between:

- **Push-optimal** solutions: minimize number of box pushes.
- **Move-optimal** solutions: minimize player steps.

Most solvers, including Rolling Stone and many successors, focus on **push-optimality** or just “any” solution. Pushes are easier to reason about, and moves can often be reconstructed afterwards. 
