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
  organizationName: 'ie123610', // 用户名
  projectName: 'ie12sBlog',    // 项目名
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
            '/search/',
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
            href: "/",
            label: "关于",
            position: "left",
          },
          {
            href: "/the-index/",
            label: "索引",
            position: "left",
          },
          {
            href: "/timeline/",
            label: "时间轴",
            position: "left",
          },
          {
            html: `
              <div style="display: flex; align-items: center;">
                <img alt="rss-log" src="/img/header/feed-icon.svg" width="20" height="20" style="margin-right: 8px;"/>
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
                <img alt="portal-logo" src="/img/header/Aperture_Science.svg" width="24" height="24" style="margin-right: 6px;"/>
                <span>传送门</span>
              </div>
            `, 
            position: 'right',
            items: [
              {
                html: `
                  <div class="navbar-portal-items">
                    <img alt="Blogs CN-图标" src="/img/header/blogscn_icon.png" width="24" height="24" style="margin-right: 12px;"/>
                    Blogs CN
                  </div>
                `,
                href: 'https://blogscn.fun/random.html',
              },
              {
                html: `
                  <div class="navbar-portal-items">
                    <img alt="空间穿梭-图标" src="/img/header/blogsclub-shuttle.svg" width="28" height="28" style="margin-right: 8px;"/>
                    空间穿梭
                  </div>
                `,
                href: 'https://blogs.quest',
              },
              {
                html: `
                  <div class="navbar-portal-items">
                    <img alt="星球穿梭-图标" src="/img/header/planet-shuttle-logo.svg" width="24" height="24" style="margin-right: 12px;"/>
                    星球穿梭
                  </div>
                `,
                href: 'https://www.boyouquan.com/planet-shuttle',
              },
              {
                html: `
                  <div class="navbar-portal-items">
                    <img alt="异次元之旅-图标" src="/img/header/planet-icon.png" width="24" height="24" style="margin-right: 12px;"/>
                    异次元之旅
                  </div>
                `,
                href: 'https://travel.moe/go.html',
              },
              {
                html: `
                  <div class="navbar-portal-items">
                    <img alt="开往-图标" src="/img/header/travelling.png" class="icon-light-mode" width="32" height="32" style="margin-right: 4px;"/>
                    <img alt="开往-图标-暗" src="/img/header/travelling-dark.png" class="icon-dark-mode" width="32" height="32" style="margin-right: 4px;"/>
                    开往
                  </div>
                `,
                href: 'https://www.travellings.cn/go.html',
              },
            ],
          },
          {
            href: "https://github.com/ie123610/ie12sBlog.Pages",
            className: "header-github-link",
            position: "right",
            "aria-label": "GitHub repository",
            title: "GitHub",
          },
        ],
      },
      footer: {
        style: 'dark',
        //links: [],
        copyright: `
		<div class="footer-img">
		
		<a href="https://www.travellings.cn/" target="_blank" rel="noopener nofollow" class="micro-badge-card">
		<div class="badge-icon-zone">
		<img src="/img/link-exchange/train.svg" alt="travelling-icon" class="badge-pixel-img" />
		</div>
		<div class="badge-text-zone">
		<span class="badge-multiline-text">开 往</span>
		</div>
		</a>
		
		<a href="https://www.blogsclub.org" target="_blank" rel="noopener nofollow" class="micro-badge-card">
		<div class="badge-icon-zone">
		<img src="/img/link-exchange/blogsclub-logo.png" alt="BlogsClub-icon" class="badge-pixel-img" />
		</div>
		<div class="badge-text-zone">
		<span class="badge-multiline-text">Blogs<br>Club</span>
		</div>
		</a>
		
		<a href="https://www.boyouquan.com/home" target="_blank" rel="noopener nofollow" class="micro-badge-card">
		<div class="badge-icon-zone">
		<img src="/img/link-exchange/boyouquan-logo.svg" alt="boyouquan-icon" class="badge-pixel-img" />
		</div>
		<div class="badge-text-zone">
		<span class="badge-multiline-text">博友圈</span>
		</div>
		</a>

		<a href="https://blogscn.fun/" target="_blank" rel="noopener nofollow" class="micro-badge-card">
		<div class="badge-icon-zone">
		<img style="background: black;" src="/img/link-exchange/blogscn_icon.png" alt="boyouquan-icon" class="badge-pixel-img" />
		</div>
		<div class="badge-text-zone">
		<span class="badge-multiline-text">BlogCN</span>
		</div>
		</a>

		<a href="https://bf.zzxworld.com/" target="_blank" rel="noopener nofollow" class="micro-badge-card">
		<div class="badge-icon-zone">
		<img src="/img/link-exchange/blogfinder.png" alt="blog-finder-icon" class="badge-pixel-img" />
		</div>
		<div class="badge-text-zone">
		<span class="badge-multiline-text">Blog <br> Finder</span>
		</div>
		</a>
		
		</div>
		
		<div class="footer-img">
		
		<a href="https://bloginc.cn/" target="_blank" rel="noopener nofollow" class="micro-badge-card">
		<div class="badge-icon-zone">
		<img src="/img/link-exchange/bloginc.svg" alt="bloginc-icon" class="badge-pixel-img" />
		</div>
		<div class="badge-text-zone">
		<span class="badge-multiline-text">博客集</span>
		</div>
		</a>
		
		<a href="https://www.blogplanet.cn/" target="_blank" rel="noopener nofollow" class="micro-badge-card">
		<div class="badge-icon-zone">
		<img src="/img/link-exchange/bkxq.png" alt="bloginc-icon" class="badge-pixel-img" />
		</div>
		<div class="badge-text-zone">
		<span style="font-size: 11px" class="badge-multiline-text">博客星球</span>
		</div>
		</a>
		
		<a href="https://www.rmbk.cc/" target="_blank" rel="noopener nofollow" class="micro-badge-card">
		<div class="badge-icon-zone">
		<img src="/img/link-exchange/rmbk.ico" style="background-color: transparent;" alt="bloginc-icon" class="badge-pixel-img" />
		</div>
		<div class="badge-text-zone">
		<span style="font-size: 11px" class="badge-multiline-text">若梦博客</span>
		</div>
		</a>
		
		<a href="https://haozhan.wang/index.php" target="_blank" rel="noopener nofollow" class="micro-badge-card">
		<div class="badge-icon-zone">
		<img src="/img/link-exchange/haozhan.ico" alt="bloginc-icon" class="badge-pixel-img" />
		</div>
		<div class="badge-text-zone">
		<span class="badge-multiline-text">好网站</span>
		</div>
		</a>
		
		<a href="https://www.zhblogs.net/" target="_blank" rel="noopener nofollow" class="micro-badge-card">
		<div class="badge-icon-zone">
		<img src="/img/link-exchange/zhblogs.svg" alt="bloginc-icon" class="badge-pixel-img" />
		</div>
		<div class="badge-text-zone">
		<span class="badge-multiline-text">集博栈</span>
		</div>
		</a>
		
		</div>
        
        <div class="footer-img">
        <a href="https://icp.gov.moe/?keyword=20253610" target="_blank" rel="noopener nofollow"><img alt="ice-moe-20253610" class="shields-img"" src="/img/footer/ice-moe-20253610.svg" ></a>
        <a href="https://icp.redcha.cn/beian/ICP-2026010294.html" target="_blank" rel="noopener nofollow"><img alt="icp-tea-202601029" class="shields-img""  src="/img/footer/icp-tea-202601029.svg" ></a>
        </div>
        
        <div class="footer-img">
        <a href="/sitemap.xml" target="_blank" title="Sitemap"><img alt="Sitemap-icon" class="shields-img"" src="/img/footer/sitemap.svg" ></a>
        <a href="https://cloud.umami.is/share/3yaTIn7G7vwsW2vD" target="_blank" title="Umami" rel="noopener nofollow"><img alt="Umami-icon" class="shields-img"" src="/img/footer/Umami.svg" ></a>
        </div>
        
        <span>文章若无特殊说明则均使用 </span><a class="footer-copyright-link" href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank" rel="noopener nofollow" >CC BY-SA 4.0</a><span> 共享协议</span>
        <br>
        <span>Powered by </span><a class="footer-copyright-link" href="https://pages.cloudflare.com/" target="_blank" rel="noopener nofollow">Cloudflare Pages</a> & <a class="footer-copyright-link" href="https://docusaurus.io/" target="_blank" rel="noopener nofollow">Docusaurus</a>
        
        `,
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
