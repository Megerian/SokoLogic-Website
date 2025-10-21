---
title: Computational Complexity of Sokoban
---

Sokoban has been extensively studied in the field of computational complexity.

The computational problem of solving Sokoban puzzles was initially proven to be **NP-hard**. Subsequent research demonstrated that it is also **PSPACE-complete**.

Sokoban puzzles present unique challenges for computer algorithms due to their requirement for complex decision-making processes.

## Key Challenges

Two primary factors contribute to the difficulty of solving Sokoban puzzles:

- **Exponentially Growing Search Space:**  
  Sokoban often involves multiple boxes, each with numerous potential moves. This results in an exponential growth in the number of possible states, making it hard to find solutions within a practical timeframe.

- **Heuristic Challenges:**  
  Given the expansive search space, effective heuristics are essential for efficient problem-solving. However, designing a universal heuristic that performs well across various puzzles is extremely difficult.

## Sokoban as a Testbed for Research

Sokoban serves as a valuable testbed for developing and evaluating advanced **planning techniques**.

The first documented automated Sokoban solver was **Rolling Stone**, developed at the **University of Alberta**. This solver employed a conventional search algorithm enhanced with domain-specific optimizations, laying the foundation for future advancements.

**Festival**, with its FESS algorithm, became the first solver capable of solving all 90 puzzles in the widely used **XSokoban test suite**. You can find more details about [Festival results here](https://sokoban-solver-statistics.sourceforge.io/statistics/OpenTestSuite/Festival%20-%20XSokoban.html).

Despite these advancements, even the most sophisticated automated solvers struggle with highly complex puzzles that skilled humans can solve through perseverance and insight.
