// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';
import imgAspectRatioPlugin from './src/plugins/imageAspectRatio.js' // 引入独立插件
import probe from 'probe-image-size';
import path from 'path';
import fs from 'fs';
import {visit} from 'unist-util-visit';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ie12sBlog',
  tagline: 'ie12的博客',
  favicon: 'img/Internet_Explorer_10.svg',
  url: 'https://ie12blog.36102025.xyz',
  baseUrl: '/',
  trailingSlash: true,
  organizationName: 'facebook', 
  projectName: 'docusaurus', 
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  plugins: [
    [
      "@dipakparmar/docusaurus-plugin-umami",
      ({
        websiteID: "5a9b4488-315d-4f1a-b5c5-1b1991bdb293", 
        analyticsDomain: "metrics.36102025.xyz", 
        scriptName: "apple.js",
        dataAutoTrack: true,
        dataDoNotTrack: false,
        dataCache: false,
        dataHostURL: "https://metrics.36102025.xyz",
        dataDomains: "ie12blog.36102025.xyz", 
      }),
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en", "zh"],
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
          editUrl: 'https://github.com/ie123610/ie12sBlog.Pages/edit/main',
          // 放在这里
          beforeDefaultRehypePlugins: [imgAspectRatioPlugin],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        blog: false,
      }),
    ],
  ],

  themeConfig:
    ({
      metadata: [
        {name: 'yandex-verification', content: 'a4de8a4e31fae19b'},
        {name: 'google-site-verification', content: 'TtT1Swq11wrVYAWojVGRYbjfGxFJP6uW0kTWnjiHse8'},
      ],
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'ie12sBlog',
        logo: { src: 'img/logo.png' },
        items: [
          { href: 'https://github.com/ie123610/ie12sBlog.Pages/', label: 'GitHub后端', position: 'right' },
          { href: 'https://github.com/ie123610/ie12sBlog', label: 'GitHub版博客', position: 'right' },
          { href: 'https://space.bilibili.com/390936347/article', label: 'B站专栏', position: 'right' },
          { label: '博客园', href: 'https://www.cnblogs.com/ie123610/', position: 'right' },
          { label: '彗星论坛', href: 'https://www.cometbbs.com/t/%E6%AF%94%E7%89%B9%E5%BD%97%E6%98%9F-%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98%E7%9A%84%E6%94%B6%E9%9B%86%E4%B8%8E%E8%A7%A3%E5%86%B3/86304', position: 'right' },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `<p>文章若无特殊说明则均使用 <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank">CC BY-SA 4.0</a> 共享协议<br>Powered by Cloudflare Pages & Docusaurus<br>萌ICP备20253610号 &nbsp; 茶ICP备2026010294号<br><a href="/sitemap.xml" target="_blank">网站地图</a>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
