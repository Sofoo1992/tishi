// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const tailwindPlugin = require('./plugins/tailwind-plugin.cjs');
const gitBookPlugin = require('./plugins/gitbook.cjs');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '提示语学院',
  tagline: '提示语教程',
  url: 'https://learn.tishi.top',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: true,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  staticDirectories: ['.gitbook/assets', 'docs/.gitbook/assets', 'static'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          showLastUpdateTime: true,
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          postsPerPage: 6,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-9QBEXE7W09',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  plugins: [tailwindPlugin, gitBookPlugin],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: '学习提示语',
        logo: {
          alt: '学习提示语',
          src: 'img/logo.svg',
          href: 'https://tishi.top',
          target: '_current',
        },
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['rust'],
      },
    }),
};

module.exports = config;
