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
  
  // 1. 加载白名单 (改用 sourcePath 作为 Key)
  const timelineData = JSON.parse(fs.readFileSync(timelinePath, 'utf-8'));
  const whiteListPaths = new Set(timelineData.map(item => item.sourcePath));
  console.log(`(i) 已加载时间线记录: ${whiteListPaths.size} 条`);

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

  // 3. 遍历物理文件进行比对
  allPhysicalFiles.forEach(filePath => {
    const relativePath = path.relative(docsDir, filePath).replace(/\\/g, '/');
    
    // --- 审计 A: 是否在时间线白名单中 ---
    if (!whiteListPaths.has(relativePath)) {
      notInTimelineList.push(relativePath);
      return; 
    }

    const source = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(source);

    // --- 审计 B: 是否已有描述 ---
    if (data.description) {
      existingDescList.push(relativePath);
      return;
    }

    // --- 注入逻辑 ---
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
      data.description = collectedText.trim().slice(0, 150) + "...";
      const newContent = matter.stringify(content, data);
      fs.writeFileSync(filePath, newContent, 'utf-8');
      successList.push(relativePath);
    } else {
      contentTooShortList.push(relativePath);
    }
  });

  // --- 详细报告输出 ---

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

  //console.log('\n====================================');
  console.log(`--- [description 注入成功:${successList.length} | 已有: ${existingDescList.length} | 不在时间线内:${notInTimelineList.length}] ---\n`);
  //console.log('====================================\n');
}

if (require.main === module) {
  injectDescription();
} else {
  module.exports = injectDescription;
}
