---
id: sokoban-deadlocks-and-pruning
title: Deadlocks & Pruning
sidebar_label: Deadlocks & Pruning
---

Deadlocks are the main reason Sokoban is hard. Efficient solvers invest a lot of logic into detecting and avoiding them.

A **deadlock** is a state from which no solution exists, even though boxes might still move. :contentReference[oaicite:24]{index=24}

## Basic deadlock types

### Simple deadlocks (dead squares)

A **dead square** is a board tile such that any box pushed onto it can never reach a goal.

Classic examples: boxes in corners or against walls where all goals are elsewhere.

- These squares can be precomputed by *reverse* reachability:
    - Place a single box on each goal and try to pull it backwards through the level.
    - Any floor tile that is never reached by pulling is a dead square. :contentReference[oaicite:25]{index=25}

During search:

- Treat any push that moves a box onto a dead square as **illegal** and skip it entirely. :contentReference[oaicite:26]{index=26}

### Freeze deadlocks

A **frozen box** is a box that has become permanently immovable and is **not on a goal**. A state containing such a box is a **freeze deadlock**. :contentReference[oaicite:27]{index=27}

Typical patterns:

- A box stuck between walls or other boxes so that it can’t move in any direction.
- Chains of boxes that all block each other (“recursive freeze deadlocks”).

Detection has to be done **dynamically** after each push:

1. After pushing a box, inspect its row and column.
2. If it is blocked on both sides in one direction, and at least one of the blocking lines contains no reachable goal, the box is frozen.
3. If any non-goal box is frozen, the state is a deadlock and can be discarded.

### Dead-and-frozen-box deadlocks

Sometimes a box frozen on a goal can still cause a deadlock because it blocks access to other goals. These need more global patterns, but the idea is similar: identify static structures where one “correct” box placement makes other goals unreachable. :contentReference[oaicite:29]{index=29}

## Corrals and zones

A **corral** is an area of the board surrounded by walls and boxes that the player cannot enter.

- Inside a corral, boxes can only be moved by pushes from the boundary.
- Corrals can be used for **PI-corral pruning**, which detects regions where every possible move worsens the situation and can be cut off from the search. :contentReference[oaicite:31]{index=31}

More generally, solvers may partition the board into **zones** separated by box “barriers” and reason about connectivity and reachability between them. :contentReference[oaicite:32]{index=32}

## Deadlock tables and pattern-based pruning

Some approaches pre-compute large **deadlock tables** via retrograde analysis: they search backward from solved positions and record which box configurations are solvable. All other patterns in that area are treated as deadlocks.

Trade-offs:

- Greatly reduces nodes during actual solving.
- Requires heavy precomputation time and memory.
- Usually specific to a particular level or room layout.

Junghanns’ Rolling Stone work shows how such deadlock tables, combined with IDA\*, can significantly prune the state space, but also discusses their limitations and open problems. :contentReference[oaicite:34]{index=34}

## Practical deadlock implementation strategy

For a first solver implementation:

1. **Pre-compute simple dead squares** via pull-based analysis.
2. Implement **freeze deadlock detection** that runs after every push.
3. Store any detected deadlock states in a **deadlock table**, so repeating patterns can be recognized in O(1). :contentReference[oaicite:35]{index=35}
4. Only after these basics work well, consider:
    - Corral / zone analysis
    - Pattern-based deadlock tables
    - More complex goal-room reasoning

Even basic deadlock pruning has a huge impact on performance and is much easier to implement than advanced techniques.
