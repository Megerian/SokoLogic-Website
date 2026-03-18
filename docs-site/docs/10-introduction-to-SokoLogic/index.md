---
title: Introduction to SokoLogic
sidebar_position: 0
---

SokoLogic is an **open source Sokoban project** that combines a feature-rich game implementation with a growing knowledge base about Sokoban mechanics, puzzle formats, and solving algorithms.

This site serves as the **official documentation hub** for the SokoLogic project.  
It explains the rules of Sokoban, details the concepts behind SokoLogic, and explores algorithms and strategies used to analyze or solve Sokoban puzzles.

The source code of the main SokoLogic game can be found on GitHub:  
👉 **https://github.com/Megerian/SokoLogic**

---

## What is SokoLogic?

SokoLogic is a modern Sokoban engine and toolset designed to be:

- **fully open-source**
- **highly interactive**, with features such as:
    - path finding
    - auto push
    - auto solving
    - undo/redo
    - deadlock detection
- **extendable**, making it suitable for experiments and analysis

---

## What is Sokoban?

**Sokoban** is a classic puzzle video game.  
A player – represented as a warehouse keeper – pushes boxes through a grid in order to place them on target locations.

Key characteristics:

- The player can **only push**, never pull.
- Only **one box can be pushed at a time**.
- Many board positions lead to **irreversible deadlocks**.
- Even small puzzles can have extraordinarily large search spaces.  
  Sokoban is proven to be **PSPACE-complete**, making it one of the hardest classic puzzle problems.

Because of this complexity, Sokoban is widely used in:

- AI research
- planning and search algorithm studies
- heuristic evaluation research
- puzzle design and generation experiments

---

## Where to Go Next

- If you are **new to Sokoban**, start with the **Rules of the Game**.
- If you want to explore **formats and technical details**, check the **Puzzle Format** section.
- For **developers and researchers**, dive into the **Solving Algorithms** chapter.
- If you want to understand the game’s implementation, visit the GitHub repository:  
  👉 https://github.com/Megerian/SokoLogic
