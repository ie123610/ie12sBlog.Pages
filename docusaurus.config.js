// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ie12sBlog',
  tagline: 'ie12的博客',
  favicon: 'img/Internet_Explorer_10.svg',

  future: {
    v4: true, 
  },

  url: 'https://ie12blog.36102025.xyz',
  baseUrl: '/',

  organizationName: 'facebook', 
  projectName: 'docusaurus', 

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  // 插件配置区
  plugins: [
    [
      "@dipakparmar/docusaurus-plugin-umami",
      /** @type {import('@dipakparmar/docusaurus-plugin-umami').Options} */
      ({
        // FIXME: 替换为你 Umami 仪表板生成的网站 ID
        websiteID: "5a9b4488-315d-4f1a-b5c5-1b1991bdb293", 
        // FIXME: 替换为你自建的域名或官方云地址 (不带 https://)
        // 例如: cloud.umami.is 或 analytics.mydomain.com
        analyticsDomain: "cloud.umami.is", 
        scriptName: "script.js",
        dataAutoTrack: true,
        dataDoNotTrack: false,
        dataCache: false,
        // 推荐：填写你的实际访问域名，防止本地开发数据干扰
        dataDomains: "ie12blog.36102025.xyz", 
      }),
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
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
            position: 'right',
          },
          {
            href: 'https://space.bilibili.com/390936347/article',
            label: 'B站专栏',
            position: 'right',
          },
          {
            label: '博客园',
            href: 'https://www.cnblogs.com/ie123610/',
            position: 'right',
          },
          {
            label: '彗星论坛',
            href: 'https://www.cometbbs.com/t/%E6%AF%94%E7%89%B9%E5%BD%97%E6%98%9F-%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98%E7%9A%84%E6%94%B6%E9%9B%86%E4%B8%8E%E8%A7%A3%E5%86%B3/86304',
            position: 'right',
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
        links: [],
        copyright: `<p>文章若无特殊说明则均使用 <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank">CC BY-SA 4.0</a> 共享协议<br>
Powered by <a href="https://pages.cloudflare.com/" target="_blank">Cloudflare Pages</a> &amp; <a href="https://docusaurus.io/" target="_blank">Docusaurus</a><br><a href="https://icp.gov.moe/?keyword=20253610" target="_blank">萌ICP备20253610号</a> &nbsp; <a href="https://icp.redcha.cn/beian/ICP-2026010294.html" title="茶ICP备2026010294号" target="_blank">茶ICP备2026010294号</a>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
