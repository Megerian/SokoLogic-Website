---
id: sokoban-advanced-techniques
title: Advanced Sokoban Techniques
sidebar_label: Advanced Techniques
---

Once you have a working solver with:

- A\* or IDA\*
- Transposition table
- Basic heuristics
- Simple and freeze deadlocks

…you can start adding more powerful domain-specific techniques.

## Macro moves: tunnels & goal rooms

### Tunnel macros

A **tunnel** is a 1-wide corridor where a box cannot step aside. If a box enters a tunnel from one end, it must eventually leave from the other end (or get stuck against a wall/goal).

Rolling Stone treats the entire sequence of pushes through a tunnel as a single **macro move**:

- As soon as a box is pushed into a tunnel, the solver automatically pushes it along the tunnel until it reaches a branching point or a stopping condition.
- All intermediate states are skipped from the search tree.

This can drastically reduce depth and branching.

### Goal-room macros

Many levels have **goal rooms**: clusters of goals with one narrow entrance.

- If a box is pushed into the entrance, it often makes sense to push it all the way to its final goal location, not stop in between.
- Goal macros do exactly that: they replace a whole sequence of “obvious” pushes into a goal room by one macro push.

Later work introduced **goal-roam macros** that allow temporarily moving boxes off goals to make room for other boxes, while still avoiding deadlocks in the goal area.

## Pattern search and relevance cuts

Junghanns’ PhD thesis introduces several general ideas for focusing single-agent search:

- **Pattern search**: searching over patterns (partial configurations) instead of full states.
- **Relevance cuts**: pruning parts of the search tree that are deemed irrelevant for reaching the goal based on domain knowledge.

In Sokoban, relevance cuts can discard branches where certain boxes clearly do not influence the path to solving the puzzle.

## Feature Space Search (FESS) and Festival

The Festival solver uses a novel algorithm called **Feature Space Search (FESS)**:

- States are projected from **domain space** (actual board positions) into a **feature space**:
    - Features include things like number of boxes on goals, connectivity of free space, quality of box placement, etc.
- FESS searches primarily in feature space, rewarding feature-level progress with more computation time in the underlying solver.
- New domain-specific concepts such as **hotspots**, **sinks**, and **connectivity features** capture global properties that are hard to express with local heuristics alone.

According to reported results, FESS is the first documented approach to solve all 90 XSokoban levels in just a few minutes on modern hardware.

## Modern improvements and learning-based methods

Recent work and theses build on the classic techniques and add:

- Better deadlock detection like improved freeze patterns and precomputed tables
- Bounded-relaxation A\* variants and dynamic weighting schemes to get faster non-optimal solutions
- Reinforcement learning and deep networks that guide search or play Sokoban directly.

For a practical project, a good roadmap is:

1. Implement a classic Rolling Stone–style solver (A\*/IDA\*, matching heuristic, deadlock pruning, macros).
2. Add PI-corral pruning and better goal-room logic.
3. Experiment with weighted A\* and feature-based heuristics inspired by FESS.

---

By combining the fundamentals from the earlier pages with the techniques outlined here, you can iteratively evolve a simple Sokoban solver into a competitive one.
