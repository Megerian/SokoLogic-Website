import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { Box, Cpu, FileText } from 'lucide-react';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="SokoLogic – Sokoban Game & Knowledge Base"
      description="Open source Sokoban game, puzzle solver, and comprehensive Sokoban knowledge base with documentation, strategies, and formats."
    >
      {/* ================= HERO SECTION ================= */}
      <header className="hero hero--primary heroBanner">
        <div className="container flex flex-col md:flex-row items-center justify-between">
          <div className="text--left md:w-1/2">
            <Heading as="h1" className="hero__title">
              SokoLogic
            </Heading>
            <p className="hero__subtitle">
              Knowledge & documentation hub for Sokoban puzzle generation, solving algorithms, and formats.
            </p>
            <div className="my-3">
              <Link
                className="button button--secondary button--lg mr-2"
                to={useBaseUrl('docs/puzzle-generators/intro')}
              >
                🧭 Get Started
              </Link>
              <Link
                className="button button--link button--lg"
                to="https://github.com/Megerian/SokoLogic"
              >
                ⭐ View on GitHub
              </Link>
            </div>
          </div>

          <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center">
            <img
              src={useBaseUrl('img/sokoban-puzzle-solving-example.gif')}
              alt="Sokoban Example"
              className="rounded-lg shadow-md max-h-72"
            />
          </div>
        </div>
      </header>

      {/* ================= FEATURE GRID ================= */}
      <main className="my-12 container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border rounded-2xl p-5 shadow-sm hover:shadow-md transition">
            <Box size={32} strokeWidth={1.5} className="mb-2 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Puzzle Generators</h3>
            <p className="mb-3">
              Learn how Sokoban puzzles are generated — algorithms, randomization, and reproducibility techniques.
            </p>
            <Link
              className="button button--primary button--sm"
              to={useBaseUrl('docs/puzzle-generators/intro')}
            >
              Explore Generators
            </Link>
          </div>

          <div className="border rounded-2xl p-5 shadow-sm hover:shadow-md transition">
            <Cpu size={32} strokeWidth={1.5} className="mb-2 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Puzzle Solver</h3>
            <p className="mb-3">
              Explore Sokoban solving strategies and algorithms, including search techniques and optimizations.
            </p>
            <Link
              className="button button--primary button--sm"
              to={useBaseUrl('docs/puzzle-solver/solver-basics')}
            >
              Explore Solver
            </Link>
          </div>

          <div className="border rounded-2xl p-5 shadow-sm hover:shadow-md transition">
            <FileText size={32} strokeWidth={1.5} className="mb-2 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Sokoban Format & Details</h3>
            <p className="mb-3">
              Learn about Sokoban file formats, puzzle structure, and historical context.
            </p>
            <Link
              className="button button--primary button--sm"
              to={useBaseUrl('docs/Sokoban/puzzle-format')}
            >
              Explore Format
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}