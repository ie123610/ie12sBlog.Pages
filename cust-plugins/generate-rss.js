const fs = require('fs-extra');
const path = require('path');

// 配置信息
const CONFIG = {
  siteUrl: 'https://ie12blog.36102025.xyz',
  siteTitle: 'ie12sBlog',
  siteTagline: 'ie12的博客-网络教程与技术研究',
  outDir: path.resolve(__dirname, '../static'), 
  jsonPath: path.resolve(__dirname, '../cust-plugins/timeline-data.json'),
  // 路径变量定义
  jsPath: '/rss-style/rss-ifrm-loader.js', 
  cssPath: '/rss-style/css-for-xml.css' // 请确保此路径指向你的 CSS 文件
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
    const [y, m, d] = item.date.split('.').map(num => parseInt(num, 10));
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
      date: itemDate, 
      description: item.description || `发布于 ${item.date}`, 
    });
  });

  try {
    if (!fs.existsSync(CONFIG.outDir)) {
      fs.ensureDirSync(CONFIG.outDir);
    }

    const rssFilePath = path.join(CONFIG.outDir, 'rss.xml');
    
    let rssContent = feed.rss2();

    // 1. 插入 CSS 引用并精确控制换行
    // 这里匹配 '?>' 及其后的所有空白字符，替换为带单个换行的声明，确保下方 rss 节点紧跟其后
    const cssTag = `<?xml-stylesheet type="text/css" href="${CONFIG.cssPath}"?>\n`;
    rssContent = rssContent.replace(/\?>\s*/, `?>\n${cssTag}`);

    // 2. 插入 XHTML 脚本标签 (使用变量 CONFIG.jsPath)
    // 在 <channel> 标签之前插入，确保其位于 <rss> 内部
    const scriptTag = `<script src="${CONFIG.jsPath}" xmlns="http://www.w3.org/1999/xhtml"></script>\n    `;
    rssContent = rssContent.replace('<channel>', scriptTag + '<channel>');

    // --- 新增：插入用于同步拦截渲染的内联脚本 ---
    const inlineBlockingScript = `
<script xmlns="http://www.w3.org/1999/xhtml">
//<![CDATA[
    (function() {
        var head = document.getElementsByTagName('head')[0] || document.documentElement;
        var style = document.createElementNS('http://www.w3.org/1999/xhtml', 'style');
        style.textContent = 'rss, channel, item { display: none !important; }';
        head.insertBefore(style, head.firstChild);
    })();
//]]>
</script>`;
    
    // 将内联脚本插入到 <rss ...> 标签之后
    rssContent = rssContent.replace(/(<rss[^>]*>)/, `$1${inlineBlockingScript}`);

    // 3. 统一替换时区标识[cite: 1]
    rssContent = rssContent.replace(/GMT/g, '+0800');

    fs.writeFileSync(rssFilePath, rssContent);
    
    console.log(`✅ RSS Feed 生成成功: ${rssFilePath}`);
    console.log(`📊 共处理条目: ${timelineData.length} 个`);

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
