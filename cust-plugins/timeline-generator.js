const fs = require('fs');
const path = require('path');
const { globSync } = require('glob');

// 路径配置：扫描 content 目录，数据输出到 src/data
const docsDir = path.resolve(__dirname, '../docs'); 
const outputPath = path.resolve(__dirname, './timeline-data.json');

function generateTimeline() {
  console.log('--- [Timeline Generator Start] ---');

  const files = globSync(`${docsDir}/**/*.{md,mdx}`);
  const timeline = [];
  const skippedFiles = [];

  files.forEach((file) => {
    const content = fs.readFileSync(file, 'utf-8');
    const fileName = path.relative(docsDir, file);

    // 1. 匹配日期逻辑：严格保持仅限前 10 行 + 原有正则表达式
    const linesArray = content.split('\n');
    const firstTenLines = linesArray.slice(0, 10).join('\n');
    // 严格使用你原脚本中的正则：匹配日期后紧跟两个空格
    const strictDateRegex = /(\d{4})[\.\/\-](\d{1,2})[\.\/\-](\d{1,2})[ ]{2}(?:\r?\n|$)/;
    const dateMatch = firstTenLines.match(strictDateRegex);

    if (dateMatch) {
      // 2. 标题提取：屏蔽 Front Matter 和代码块，使用遍历法提取
      const contentWithoutFrontMatter = content.replace(/^---[\s\S]+?---/, '');
      const contentPureText = contentWithoutFrontMatter.replace(/```[\s\S]*?```/g, '');
      
      const cleanLines = contentPureText.split('\n');
      let title = '';

      for (let line of cleanLines) {
        const trimmedLine = line.trim();
        if (trimmedLine.startsWith('# ')) {
          title = trimmedLine.substring(2).trim();
          break; 
        }
      }

      if (!title) {
        title = path.basename(fileName, path.extname(fileName));
      }

      // 3. 日期格式化
      const year = dateMatch[1];
      const month = dateMatch[2].padStart(2, '0');
      const day = dateMatch[3].padStart(2, '0');

      // 4. 路径处理逻辑
      // [新增] 保存真实相对路径，用于后续脚本定位文件
      const sourcePath = fileName.replace(/\\/g, '/'); 

      // a. 统一斜杠并移除后缀 (用于生成 webPath)
      let webPath = fileName.replace(/\\/g, '/').replace(/\.mdx?$/, '');

      // b. 剔除序号前缀 (前端展示路径)
      webPath = webPath
        .split('/')
        .map(part => part.replace(/^(\d+[-_.\s]+)/, ''))
        .join('/');

      // c. 处理 index 文件
      if (webPath.endsWith('/index')) {
        webPath = webPath.slice(0, -6);
      } else if (webPath === 'index') {
        webPath = '';
      }

      timeline.push({
        date: `${year}.${month}.${day}`,
        sortKey: parseInt(`${year}${month}${day}`),
        title: title,
        link: `/${webPath}`.replace(/\/$/, '') || '/',
        sourcePath: sourcePath // <--- [关键] 存储真实磁盘路径，例如 "01-category/02-article.md"
      });
    } else {
      // 记录未匹配日期的文件名，用于日志输出
      skippedFiles.push(fileName);
    }
  });

  // 5. 排序：按时间倒序
  timeline.sort((a, b) => b.sortKey - a.sortKey);
  
  // 确保输出目录存在
  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(outputPath, JSON.stringify(timeline, null, 2));

  // --- 增强版日志报告 ---
  console.log(`✅ 成功提取: ${timeline.length} 个文件`);

  if (skippedFiles.length > 0) {
    console.log(`⚠️  未匹配日期 (已跳过): ${skippedFiles.length} 个文件`);
    // 输出具体的跳过名单，方便排查
    skippedFiles.forEach(f => console.log(`   - ${f}`));
  }
  
  console.log('--- [Timeline Generator End] ---\n');
}

// 导出与执行逻辑
if (require.main === module) {
  generateTimeline();
} else {
  module.exports = generateTimeline;
}
