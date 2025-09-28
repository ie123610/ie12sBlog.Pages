// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ie12sBlog',
  tagline: 'ie12的博客',
  favicon: 'img/Internet_Explorer_10.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["en", "zh"],
        // ```
        docsRouteBasePath: "/",
        indexBlog: false,
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          showLastUpdateTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ie123610/ie12sBlog.Pages/edit/main',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        blog: false,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'ie12sBlog',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            href: 'https://github.com/ie123610/ie12sBlog.Pages/',
            label: 'GitHub后端',
            position: 'right',
          },
          {
            href: 'https://github.com/ie123610/ie12sBlog',
            label: 'GitHub版博客',
          },
          {
            href: 'https://space.bilibili.com/390936347/article',
            label: 'B站专栏',
          },
          {
            label: '博客园',
            href: 'https://www.cnblogs.com/ie123610/',
          },
          {
            label: '彗星论坛',
            href: 'https://www.cometbbs.com/t/%E6%AF%94%E7%89%B9%E5%BD%97%E6%98%9F-%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98%E7%9A%84%E6%94%B6%E9%9B%86%E4%B8%8E%E8%A7%A3%E5%86%B3/86304',
          },
        ],
      },
      docs: {
      sidebar: {
        hideable: true,
      },
    },
      footer: {
        style: 'dark',
        links: [
        ],
        copyright: `<p>文章若无特殊说明则均使用 <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank">CC BY-SA 4.0</a> 共享协议<br>
Powered by <a href="https://pages.cloudflare.com/" target="_blank">Cloudflare Pages</a> &amp; <a href="https://docusaurus.io/" target="_blank">Docusaurus</a><br><a href="https://icp.gov.moe/?keyword=20253610" target="_blank">萌ICP备20253610号</a`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
