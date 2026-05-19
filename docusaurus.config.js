// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';
import path from 'path';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ie12sBlog',
  tagline: 'ie12的博客',
  favicon: 'img/favicon.ico',
  url: 'https://ie12blog.36102025.xyz',
  baseUrl: '/',
  trailingSlash: true,
  organizationName: 'ie123610', // 建议改为你的用户名
  projectName: 'ie12sBlog',    // 建议改为你的项目名
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  clientModules: [
    path.resolve(__dirname, 'src/client-scripts/image-handler.js'),
  ],

  plugins: [
    [
      "@dipakparmar/docusaurus-plugin-umami",
      {
        websiteID: "5a9b4488-315d-4f1a-b5c5-1b1991bdb293", 
        analyticsDomain: "metrics.36102025.xyz", 
        scriptName: "apple.js",
        dataAutoTrack: true,
        dataDoNotTrack: false,
        dataCache: false,
        dataHostURL: "https://metrics.36102025.xyz",
        dataDomains: "ie12blog.36102025.xyz", 
      },
    ],
    // 图片缩放插件
    'docusaurus-plugin-zooming',
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
          showLastUpdateTime: false,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        blog: false,
        sitemap: {
          ignorePatterns: [
            '/markdown-page/', 
            '/search/',
            '/BC改进建议/',
            '/cnblog-index/',
          ],
          changefreq: 'weekly',
          priority: 0.5,
          },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {name: 'yandex-verification', content: 'a4de8a4e31fae19b'},
        {name: 'google-site-verification', content: 'TtT1Swq11wrVYAWojVGRYbjfGxFJP6uW0kTWnjiHse8'},
        {property: 'og:type', content: 'website'},
      ],
      image: 'img/ie12-social-card.webp',
      navbar: {
        title: 'ie12sBlog',
        logo: {
          alt: 'ie12sBlog-logo',
          src: 'img/logo.webp',
        },
        items: [
          {
            html: `
              <div style="display: flex; align-items: center;">
                <img alt="rss-log" src="/img/feed-icon.svg" width="20" height="20" style="margin-right: 8px;"/>
               RSS订阅
              </div>
            `,
            href: 'pathname:///rss.xml',
            position: 'right',
          },
          {
            type: 'dropdown',
            html: `
              <div style="display: inline-flex; align-items: center; vertical-align: bottom;">
                <img alt="portal-logo" src="/img/Aperture_Science.svg" width="24" height="24" style="margin-right: 6px;"/>
                <span>传送门</span>
              </div>
            `, 
            position: 'right',
            items: [
              {
                html: `
                  <div class="navbar-portal-items">
                    <img alt="Blogs CN-图标" src="/img/blogscn_icon.png" width="24" height="24" style="margin-right: 12px;"/>
                    Blogs CN
                  </div>
                `,
                href: 'https://blogscn.fun/random.html',
              },
              {
                html: `
                  <div class="navbar-portal-items">
                    <img alt="空间穿梭-图标" src="/img/blogsclub-shuttle.svg" width="28" height="28" style="margin-right: 8px;"/>
                    空间穿梭
                  </div>
                `,
                href: 'https://blogs.quest',
              },
              {
                html: `
                  <div class="navbar-portal-items">
                    <img alt="星球穿梭-图标" src="/img/planet-shuttle-logo.svg" width="24" height="24" style="margin-right: 12px;"/>
                    星球穿梭
                  </div>
                `,
                href: 'https://www.boyouquan.com/planet-shuttle',
              },
              {
                html: `
                  <div class="navbar-portal-items">
                    <img alt="异次元之旅-图标" src="/img/planet-icon.png" width="24" height="24" style="margin-right: 12px;"/>
                    异次元之旅
                  </div>
                `,
                href: 'https://travel.moe/go.html',
              },
              {
                html: `
                  <div class="navbar-portal-items">
                    <img alt="开往-图标" src="/img/travelling.png" class="icon-light-mode" width="32" height="32" style="margin-right: 4px;"/>
                    <img alt="开往-图标-暗" src="/img/travelling-dark.png" class="icon-dark-mode" width="32" height="32" style="margin-right: 4px;"/>
                    开往
                  </div>
                `,
                href: 'https://www.travellings.cn/go.html',
              },
            ],
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
        {
      title: '站点建设',
      items: [
        { label: 'GitHub后端', href: 'https://github.com/ie123610/ie12sBlog.Pages/' },
        { html: `<a class="footer__link-item" href="/sitemap.xml">网站地图</a>` },
        { html: `<a class="footer__link-item" href="/rss.xml">RSS订阅</a>` },
        { label: 'umami', href: 'https://cloud.umami.is/share/3yaTIn7G7vwsW2vD' },
      ],
    },
    {
      title: '其他平台',
      items: [
        { label: 'B站专栏', href: 'https://space.bilibili.com/390936347/article' },
        { label: 'GitHub版博客', href: 'https://github.com/ie123610/ie12sBlog' },
        { label: '博客园', href: 'https://www.cnblogs.com/ie123610/' },
        { label: '彗星论坛', href: 'https://www.cometbbs.com/' },
      ],
    },
    {
      title: '备案',
      items: [
        { label: '萌ICP备20253610号', href: 'https://icp.gov.moe/?keyword=20253610' },
        { label: '茶ICP备2026010294号', href: 'https://icp.redcha.cn/beian/ICP-2026010294.html' },
      ],
    },
    {
      title: '传送门',
      items: [
        {html: `<a href="https://travel.moe/go.html"target="_blank"><img alt="异次元之旅-图标" src="/img/travel-moe-default-white.webp"style="width:146px;height:24px"title="异次元之旅-跃迁-我们一起去萌站成员的星球旅行吧！"></a>`},
        {html: `<a href="https://blogscn.fun/" title="BLOGS·CN" target="_blank" > <img src="/img/blogs-cn-footer.png" alt="本站已加入BLOGS·CN" style="width:138px;height:24px;"> </a>`},
        {html: `<a href="https://www.travellings.cn/go.html"target="_blank"rel="noopener"title="开往-友链接力"><img src="/img/travelling-footer.png" alt="开往-友链接力"width="120;height:30px"></a>`},
        {html: `<a href="https://blogs.quest" target="_blank" title="空间穿梭-随机访问BlogsClub成员博客"><img alt="BlogsClub-图标" src="/img/shuttle_4.png"style="width:106px;height:30px"></a>`},
        {html: `<a href="https://www.boyouquan.com/planet-shuttle" target="_blank" title="博友圈"><img alt="博友圈-图标" src="/img/planet-shuttle-dark.svg" style="width:100px;height:30px"></a>`},
        
      ],
    },
  ],
        copyright: `文章若无特殊说明则均使用 <a class="footer-copyright-link" href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank">CC BY-SA 4.0</a> 共享协议<br>Powered by <a class="footer-copyright-link" href="https://pages.cloudflare.com/">Cloudflare Pages</a> & <a class="footer-copyright-link" href="https://docusaurus.io/">Docusaurus</a>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      // 图片缩放定制配置
      zooming: {
        selector: '.ratio-img[width="60%"]',
        delay: 500,
        background: {
          light: 'rgba(101,108,133,0.8)',
          dark: 'rgba(9,10,17,0.8)'
        },
        options: {
          enableGrab: false,
          scaleBase: 0.8,
        }
      },
    }),
};

export default config;
