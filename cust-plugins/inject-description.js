const fs = require('fs-extra');
const path = require('path');
const matter = require('gray-matter');

const docsDir = path.resolve(__dirname, '../docs');
const timelinePath = path.resolve(__dirname, '../cust-plugins/timeline-data.json');
const dateReg = /^\d{4}[\.\-\/]\d{2}[\.\-\/]\d{2}$/;

function cleanText(text) {
  return text
    .replace(/<[^>]+>/g, '')             
    .replace(/\{.*?\}/g, '')             
    .replace(/!\[.*?\]\(.*?\)/g, '')     
    .replace(/\[(.*?)\]\(.*?\)/g, '$1')   
    .replace(/`{1,3}.*?`{1,3}/g, '')     
    .replace(/[#*`>_-]/g, '')            
    .replace(/\s+/g, ' ')                
    .trim();
}

function injectDescription() {
  console.log('--- [description 注入任务开始] ---');

  if (!fs.existsSync(timelinePath)) {
    console.error('❌ 致命错误: 找不到 timeline-data.json');
    return;
  }
  
  // 1. 加载数据并建立引用映射
  const timelineData = JSON.parse(fs.readFileSync(timelinePath, 'utf-8'));
  const timelineMap = new Map();
  timelineData.forEach(item => {
    if (item.sourcePath) {
      timelineMap.set(item.sourcePath, item);
    }
  });
  
  console.log(`(i) 已加载时间线记录: ${timelineMap.size} 条`);

  // 2. 递归扫描物理磁盘
  const getAllFiles = (dir) => {
    let results = [];
    if (!fs.existsSync(dir)) return results;
    const list = fs.readdirSync(dir);
    list.forEach(file => {
      const filePath = path.join(dir, file);
      if (fs.statSync(filePath).isDirectory()) {
        results = results.concat(getAllFiles(filePath));
      } else if (/\.(md|mdx)$/.test(file)) {
        results.push(filePath);
      }
    });
    return results;
  };

  const allPhysicalFiles = getAllFiles(docsDir);
  console.log(`(i) 磁盘扫描完成: 共发现 ${allPhysicalFiles.length} 个文件`);

  const successList = [];
  const existingDescList = [];
  const notInTimelineList = [];
  const contentTooShortList = [];

  // 3. 遍历物理文件
  allPhysicalFiles.forEach(filePath => {
    const relativePath = path.relative(docsDir, filePath).replace(/\\/g, '/');
    const timelineItem = timelineMap.get(relativePath);
    
    // 情况 A: 该文件不在时间线内
    if (!timelineItem) {
      notInTimelineList.push(relativePath);
      return; 
    }

    const source = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(source);

    // 获取已有描述
    let finalDescription = data.description || "";

    // 情况 B: 如果没有描述，则执行提取
    if (!finalDescription) {
      const lines = content.split('\n');
      let collectedText = "";
      for (let line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#') || trimmed.startsWith('!') || 
            trimmed.startsWith('```') || dateReg.test(trimmed)) continue;

        const cleaned = cleanText(trimmed);
        if (cleaned.length < 5) continue;

        collectedText += cleaned + " ";
        if (collectedText.length > 160) break;
      }

      if (collectedText.trim()) {
        finalDescription = collectedText.trim().slice(0, 150) + "...";
        // 物理同步到 Markdown 的 Front Matter
        data.description = finalDescription;
        const newContent = matter.stringify(content, data);
        fs.writeFileSync(filePath, newContent, 'utf-8');
        successList.push(relativePath);
      } else {
        contentTooShortList.push(relativePath);
      }
    } else {
      existingDescList.push(relativePath);
    }

    // --- 核心逻辑：将 description 字段追加到 JSON 对象中 ---
    // 无论从文件读取的还是新提取的，都确保写进 JSON
    timelineItem.description = finalDescription || "";
  });

  // 4. 直接写回原数组（保留所有原始字段：sourcePath, sortKey, link, title, date）
  fs.writeFileSync(timelinePath, JSON.stringify(timelineData, null, 2), 'utf-8');
  console.log(`✅ JSON 数据已增强: 为 ${timelineData.length} 条记录同步了 description 字段`);

  // --- 详细日志报告 ---
  if (successList.length > 0) {
    console.log('\n✅ [已成功注入]');
    successList.forEach(name => console.log(`   + ${name}`));
  }

  if (existingDescList.length > 0) {
    console.log('\n⏩ [已有描述 - 跳过]');
    existingDescList.forEach(name => console.log(`   - ${name}`));
  }

  if (notInTimelineList.length > 0) {
    console.log('\n🚫 [不在时间线内 - 跳过]');
    notInTimelineList.forEach(name => console.log(`   ! ${name}`));
  }

  if (contentTooShortList.length > 0) {
    console.log('\n⚠️  [内容不足 - 注入失败]');
    contentTooShortList.forEach(name => console.log(`   ? ${name}`));
  }

  console.log(`--- [description 注入成功:${successList.length} | 已有: ${existingDescList.length} | 不在时间线内:${notInTimelineList.length}] ---\n`);
}

if (require.main === module) {
  injectDescription();
} else {
  module.exports = injectDescription;
}

