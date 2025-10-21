import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="SokoLogic Documentation"
      description="Documentation and knowledge about Sokoban and SokoLogic">
      <main className="container margin-vert--lg">
        <div className="hero hero--primary">
          <div className="container">
            <h1 className="hero__title">SokoLogic Documentation</h1>
            <p className="hero__subtitle">
              Edit your Markdown files with Docusaurus. All content lives in the
              <code> docs-site </code> folder and is included automatically.
            </p>
            <div className="buttons">
              <Link className="button button--secondary button--lg" to="/">
                Go to documentation
              </Link>
            </div>
          </div>
        </div>
        <section className="margin-top--lg">
          <h2>Get started</h2>
          <ol>
            <li>
              Edit or add Markdown files in the <code>docs-site</code> folder.
            </li>
            <li>
              Run locally: <code>npm install</code> and then <code>npm run start</code>.
            </li>
            <li>
              The GitHub Actions workflow builds and deploys automatically on changes to the main branch.
            </li>
          </ol>
        </section>
      </main>
    </Layout>
  );
}
