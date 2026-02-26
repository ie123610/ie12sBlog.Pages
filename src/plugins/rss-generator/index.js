const fs = require('fs');
const path = require('path');

module.exports = function rssGeneratorPlugin(context) {
  return {
    name: 'rss-generator-plugin',

    async postBuild({ siteConfig, outDir }) {
      // 1. 动态导入 feed (解决 ERR_PACKAGE_PATH_NOT_EXPORTED)
      const { Feed } = await import('feed');

      const jsonPath = path.join(__dirname, '../timeline-generator/timeline-data.json');

      if (!fs.existsSync(jsonPath)) {
        console.warn('\n[RSS Plugin] ⚠️ 找不到 timeline-data.json，跳过生成。');
        return;
      }

      const timelineData = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
      const siteUrl = siteConfig.url;

      // 2. 初始化 Feed
      const feed = new Feed({
        title: siteConfig.title || "文档更新",
        description: siteConfig.tagline || "最新文档条目订阅",
        id: siteUrl,
        link: siteUrl,
        language: "zh",
        copyright: `CC BY-SA 4.0`,
        generator: "Docusaurus Custom RSS Plugin",
        // 解决 W3C "Missing atom:link with rel="self"" 警告
        feedLinks: {
          rss: `${siteUrl.replace(/\/+$/, '')}/rss.xml`,
        },
      });

      // 3. 填充条目
      timelineData.forEach(item => {
        const [y, m, d] = item.date.split('.');

        // 去掉 siteUrl 可能存在的末尾斜杠
        const cleanBaseUrl = siteUrl.replace(/\/+$/, '');
        
        // 确保路径以 / 开头，且末尾有且只有一个 /
        let cleanItemPath = item.link.startsWith('/') ? item.link : `/${item.link}`;
        if (!cleanItemPath.endsWith('/')) {
          cleanItemPath += '/';
        }

        // --- 核心修改：处理中文字符 (解决 IRI found where URL expected 错误) ---
        // encodeURI 会对中文字符进行转义，但保留 / : 等 URL 结构符号
        const encodedPath = encodeURI(cleanItemPath);
        const fullUrl = `${cleanBaseUrl}${encodedPath}`;

        feed.addItem({
          title: item.title,
          id: fullUrl,
          link: fullUrl,
          date: new Date(parseInt(y), parseInt(m) - 1, parseInt(d)),
          description: `发布于 ${item.date}`,
        });
      });

      // 4. 写入文件
      const rssFilePath = path.join(outDir, 'rss.xml');
      fs.writeFileSync(rssFilePath, feed.rss2());
      
      console.log(`\n[RSS Plugin] ✅ RSS Feed 已成功生成并完成 URL 编码: ${rssFilePath}`);
    },
  };
};
