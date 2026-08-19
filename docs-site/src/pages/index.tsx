import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Cpu, FileText } from 'lucide-react';

export default function Home(): React.JSX.Element {
  return (
    <Layout>
      {/* ================= HERO SECTION ================= */}
      <header className="hero hero--primary heroBanner">
        <div className="container flex flex-col md:flex-row items-center justify-between">
          <div className="text--left md:w-1/2">
            <h1 className="hero__title">
              SokoLogic
            </h1>
            <p className="hero__subtitle">
              Knowledge & documentation hub for SokoLogic and Sokoban in general.
            </p>
            <div className="my-3">
              <Link
                className="button button--secondary button--lg mr-2"
                to={useBaseUrl('docs/introduction-to-SokoLogic/')}
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

        </div>
      </header>

      {/* ================= FEATURE GRID ================= */}
      <main className="my-12 container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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