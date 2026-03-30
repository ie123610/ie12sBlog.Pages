const fs = require('fs-extra');
const path = require('path');

// 配置信息 (因为是独立运行，需要手动指定这些原本由 Docusaurus 提供的配置)
const CONFIG = {
  siteUrl: 'https://ie12blog.36102025.xyz', // 替换为你的真实域名
  siteTitle: 'ie12sBlog',
  siteTagline: 'ie12的博客-网络教程与技术研究',
  outDir: path.resolve(__dirname, '../static'), // RSS 输出目录 
  jsonPath: path.resolve(__dirname, '../cust-plugins/timeline-data.json')
};

async function generateRSS() {
  console.log('--- [RSS Generator Start] ---');

  // 1. 动态导入 feed 库
  let Feed;
  try {
    const feedModule = await import('feed');
    Feed = feedModule.Feed;
  } catch (err) {
    console.error('❌ 无法加载 feed 库，请确保已安装: npm install feed');
    return;
  }

  // 2. 检查数据源
  if (!fs.existsSync(CONFIG.jsonPath)) {
    console.warn('⚠️  找不到 timeline-data.json，跳过生成。');
    return;
  }

  const timelineData = JSON.parse(fs.readFileSync(CONFIG.jsonPath, 'utf-8'));
  const cleanBaseUrl = CONFIG.siteUrl.replace(/\/+$/, '');

  // 3. 初始化 Feed
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

// 4. 填充条目
  timelineData.forEach(item => {
    // 假设 item.date 是 "2026.03.21"
    const [y, m, d] = item.date.split('.');
    
    // 补齐两位数 (例如 3 -> 03)
    const year = y;
    const month = m.padStart(2, '0');
    const day = d.padStart(2, '0');

    // --- 核心修改：构造 ISO 8601 字符串 ---
    // 强制指定 +08:00，这样无论环境时区是什么，Date 对象都会锁定在北京时间
    // 设定在 00:00:00 
    const isoDateString = `${year}-${month}-${day}T00:00:00+08:00`;
    const itemDate = new Date(isoDateString);

    // 路径处理 (与之前一致)
    let cleanItemPath = item.link.startsWith('/') ? item.link : `/${item.link}`;
    if (!cleanItemPath.endsWith('/')) {
      cleanItemPath += '/';
    }

    const encodedPath = encodeURI(cleanItemPath);
    const fullUrl = `${CONFIG.siteUrl.replace(/\/+$/, '')}${encodedPath}`;

    feed.addItem({
      title: item.title,
      id: fullUrl,
      link: fullUrl,
      date: itemDate, // 传入带时区信息的 Date 对象
      description: item.description || `发布于 ${item.date}`, 
    });
  });

  // 5. 写入文件
  try {
    // 确保输出目录存在
    if (!fs.existsSync(CONFIG.outDir)) {
      fs.ensureDirSync(CONFIG.outDir);
    }

    const rssFilePath = path.join(CONFIG.outDir, 'rss.xml');
    fs.writeFileSync(rssFilePath, feed.rss2());
    
    console.log(`✅ RSS Feed 生成成功: ${rssFilePath}`);
    console.log(`📊 共处理条目: ${timelineData.length} 个`);
  } catch (err) {
    console.error('❌ 写入 RSS 文件失败:', err);
  }

  console.log('--- [RSS Generator End] ---\n');
}

// 支持直接运行或被 require
if (require.main === module) {
  generateRSS();
} else {
  module.exports = generateRSS;
}
