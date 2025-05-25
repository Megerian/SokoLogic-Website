# Scientific Research

Sokoban has been studied using the theory of computational complexity.

The computational problem of solving Sokoban puzzles was first shown to be **NP-hard**. Further work proved it is also **PSPACE-complete**.

Sokoban puzzles are challenging for computers to solve because they require complex decision-making.

## Key Challenges

The two main factors that explain this difficulty:

- **Exponentially growing search space:**  
  In Sokoban, there are usually multiple boxes, each with numerous possible moves. This causes the number of possible states to grow exponentially, making it challenging to find a solution within a reasonable time.

- **Heuristic challenges:**  
  Given the vast search space, good heuristics are necessary for efficient problem-solving. However, it's challenging to develop a general heuristic that works well in all situations.

## A Testbed for Research

The Sokoban game provides a challenging testbed for developing and evaluating **planning techniques**.

The first documented automated solver was **Rolling Stone**, developed at the **University of Alberta**. Its core principles laid the groundwork for many newer solvers. It employed a conventional search algorithm enhanced with domain-specific knowledge.

**Festival**, utilizing its FESS algorithm, was the first automatic solver to complete all 90 puzzles in the widely used **XSokoban test suite** ([Festival results](https://sokoban-solver-statistics.sourceforge.io/statistics/OpenTestSuite/Festival%20-%20XSokoban.html)).

However, even the best automated solvers cannot solve many of the more challenging puzzles that humans can solve with time and effort.