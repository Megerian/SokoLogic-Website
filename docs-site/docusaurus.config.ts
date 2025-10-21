import { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
title: 'SokoLogic – Sokoban Game & Knowledge Base',
tagline: 'Sokoban rules, strategies, and SokoLogic documentation.',

url: 'https://megerian.github.io',
baseUrl: '/SokoLogic-Website/',
trailingSlash: true,

organizationName: 'Megerian',
projectName: 'SokoLogic-Website',
deploymentBranch: 'gh-pages',

onBrokenLinks: 'throw',
markdown: {
hooks: {
onBrokenMarkdownLinks: 'warn',
},
},

favicon: '/img/favicon.png',

i18n: {
defaultLocale: 'en',
locales: ['en'],
},

presets: [
[
'classic',
{
docs: {
path: 'docs',
routeBasePath: '/docs',
sidebarPath: require.resolve('./sidebars.ts'),
          editUrl:
            'https://github.com/Megerian/SokoLogic-Website/edit/main/docs/',
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    metadata: [
      { name: 'keywords', content: 'Sokoban, logic, puzzle, docs' },
      { name: 'description', content: 'Documentation and knowledge hub for the SokoLogic Sokoban project.' },
    ],
    navbar: {
      title: 'SokoLogic',
      logo: {
        alt: 'SokoLogic Logo',
        src: '/img/favicon.png',
        href: '/', // führt zur Startseite (src/pages/index.tsx)
      },
      items: [
        { to: '/docs/intro', label: 'Documentation', position: 'left' },
        { href: 'https://github.com/Megerian/SokoLogic-Website', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Megerian/SokoLogic-Website',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SokoLogic.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  },
};

export default config;
