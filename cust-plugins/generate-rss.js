const fs = require('fs-extra');
const path = require('path');

// 配置信息
const CONFIG = {
  siteUrl: 'https://ie12blog.36102025.xyz',
  siteTitle: 'ie12sBlog',
  siteTagline: 'ie12的博客-网络教程与技术研究',
  outDir: path.resolve(__dirname, '../static'), 
  jsonPath: path.resolve(__dirname, '../cust-plugins/timeline-data.json'),
  xslPath: '/rss-style/rss-style.xsl' 
};

async function generateRSS() {
  console.log('--- [RSS Generator Start] ---');

  let Feed;
  try {
    const feedModule = await import('feed');
    Feed = feedModule.Feed;
  } catch (err) {
    console.error('❌ 无法加载 feed library，请确保已安装: npm install feed');
    return;
  }

  if (!fs.existsSync(CONFIG.jsonPath)) {
    console.warn('⚠️  找不到 timeline-data.json，跳过生成。');
    return;
  }

  const timelineData = JSON.parse(fs.readFileSync(CONFIG.jsonPath, 'utf-8'));
  const cleanBaseUrl = CONFIG.siteUrl.replace(/\/+$/, '');

  const feed = new Feed({
    title: CONFIG.siteTitle,
    description: CONFIG.siteTagline,
    id: cleanBaseUrl,
    link: cleanBaseUrl,
    language: "zh",
    copyright: `CC BY-SA 4.0`,
    generator: "Node.js Custom RSS Generator",
    feedLinks: {
      rss: `${cleanBaseUrl}/rss.xml`,
    },
  });

  timelineData.forEach(item => {
    // --- 核心修改：使用 Date.UTC() 锁定 0 点 ---
    // 假设 item.date 格式为 "2026.04.08"
    const [y, m, d] = item.date.split('.').map(num => parseInt(num, 10));
    
    /**
     * Date.UTC 参数说明:
     * year: 四位年份
     * monthIndex: 0-11 (所以月份需要减 1)
     * day: 1-31
     * hours/minutes/seconds: 全部设为 0
     */
    const itemDate = new Date(Date.UTC(y, m - 1, d, 0, 0, 0));

    let cleanItemPath = item.link.startsWith('/') ? item.link : `/${item.link}`;
    if (!cleanItemPath.endsWith('/')) {
      cleanItemPath += '/';
    }

    const encodedPath = encodeURI(cleanItemPath);
    const fullUrl = `${cleanBaseUrl}${encodedPath}`;

    feed.addItem({
      title: item.title,
      id: fullUrl,
      link: fullUrl,
      date: itemDate, // 传入的是标准 UTC 0点对象
      description: item.description || `发布于 ${item.date}`, 
    });
  });

  try {
    if (!fs.existsSync(CONFIG.outDir)) {
      fs.ensureDirSync(CONFIG.outDir);
    }

    const rssFilePath = path.join(CONFIG.outDir, 'rss.xml');
    
    // 生成原始 RSS 字符串 (此时时间戳末尾是 GMT)
    let rssContent = feed.rss2();

    // 1. 插入 XSL 引用
    const xslTag = `<?xml-stylesheet type="text/xsl" href="${CONFIG.xslPath}"?>\n`;
    rssContent = rssContent.replace('?>', '?>\n' + xslTag);

    // 2. 统一替换时区标识
    // 此时 rssContent 中的时间是 "XX, XX XXX XXXX 00:00:00 GMT"
    // 替换后变为 "XX, XX XXX XXXX 00:00:00 +0800"[cite: 1]
    rssContent = rssContent.replace(/GMT/g, '+0800');

    fs.writeFileSync(rssFilePath, rssContent);
    
    console.log(`✅ RSS Feed 生成成功: ${rssFilePath}`);
    console.log(`📊 共处理条目: ${timelineData.length} 个`);
    console.log(`✨ 时间戳已强制同步为: 00:00:00 +0800`);
  } catch (err) {
    console.error('❌ 写入 RSS 文件失败:', err);
  }

  console.log('--- [RSS Generator End] ---\n');
}

if (require.main === module) {
  generateRSS();
} else {
  module.exports = generateRSS;
}
