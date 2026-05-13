const fs = require('fs-extra');
const path = require('path');

const docsDir = path.resolve(__dirname, '../docs');
const timelinePath = path.resolve(__dirname, '../cust-plugins/timeline-data.json');

async function injectMetaHeader() {
  console.log('--- [Meta Header Injection Start] ---');

  // 1. 安全性检查
  if (!fs.existsSync(timelinePath)) {
    console.error('❌ 致命错误: 找不到 timeline-data.json，注入中止。');
    return;
  }

  let timelineData;
  try {
    timelineData = JSON.parse(fs.readFileSync(timelinePath, 'utf-8'));
  } catch (e) {
    console.error('❌ 致命错误: timeline-data.json 解析失败。内容格式错误。');
    return;
  }

  // 🌟 定义你需要注入的目标 Header 字符串结构
  const targetHeader = `
<head>
  <meta property="og:type" content="article" />
</head>
`.trim();

  // 2. 扫描物理磁盘上的所有 md/mdx 文件，存入一个 Set 集合用于后续对比
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
  // 将物理路径统一转化为以 / 分隔的相对路径（方便与 JSON 比对）
  const physicalFilesSet = new Set(
    allPhysicalFiles.map(fp => path.relative(docsDir, fp).replace(/\\/g, '/'))
  );

  console.log(`(i) 磁盘扫描完成: 共发现 ${physicalFilesSet.size} 个物理文档`);

  // 分类统计日志收集器
  const successList = [];
  const skippedList = [];
  const fileNotFoundList = [];
  const noSourcePathList = [];

  // 3. 第一轨：遍历时间线 JSON 进行注入操作
  timelineData.forEach((item, index) => {
    if (!item.sourcePath) {
      noSourcePathList.push(`Index [${index}] - Title: ${item.title || '未知'}`);
      return;
    }

    const relativePath = item.sourcePath;
    const filePath = path.join(docsDir, relativePath);

    // 情况 A: 登记在时间线中，但物理文件已被删除或移动
    if (!fs.existsSync(filePath)) {
      fileNotFoundList.push(relativePath);
      return;
    }

    // 🌟 从物理文件集合中移除已处理的文件（剩下的就是未在时间线登记的文件！）
    physicalFilesSet.delete(relativePath);

    let content = fs.readFileSync(filePath, 'utf-8');

    // 情况 B: 已经包含，安全跳过
    if (content.includes('property="og:type"') && content.includes('content="article"')) {
      skippedList.push(relativePath);
      return;
    }

    // 情况 C: 满足注入条件，执行物理写回
    content = content.trimEnd();
    const updatedContent = `${content}\n\n${targetHeader}\n`;
    fs.writeFileSync(filePath, updatedContent, 'utf-8');
    successList.push(relativePath);
  });

  // 4. 第二轨：对剩下的、没有在 JSON 中登记过的文件进行额外审计（即未被修改的文件）
  const unmappedFilesList = Array.from(physicalFilesSet);

  // --- 5. 详尽、全方位的分类日志审计报告展示 ---
  if (successList.length > 0) {
    console.log('\n✅ [已成功注入 Header]');
    successList.forEach(name => console.log(`   + ${name}`));
  }

  if (skippedList.length > 0) {
    console.log('\n⏩ [已存在该 Meta 标记 - 保持现状]');
    skippedList.forEach(name => console.log(`   - ${name}`));
  }

  // 🌟 核心新增审计：高亮打印哪些文件因为没在时间线里而未被修改
  if (unmappedFilesList.length > 0) {
    console.log('\n🚫 [未被修改的文件 - 不在时间线JSON中]');
    unmappedFilesList.forEach(name => console.log(`   ! ${name}`));
  }

  if (fileNotFoundList.length > 0) {
    console.log('\n⚠️  [找不到文件 - 无法注入]');
    fileNotFoundList.forEach(name => console.log(`   ? ${name}`));
  }

  if (noSourcePathList.length > 0) {
    console.log('\n🛑 [异常 JSON 条目：缺少 sourcePath 字段 - 忽略]');
    noSourcePathList.forEach(info => console.log(`   x ${info}`));
  }
 
  
  console.log(`\n ✅ 成功注入: ${successList.length} 个`);
  console.log(` ⏩ 保持现状: ${skippedList.length} 个`);
  console.log(` 🚫 不在时间线内: ${unmappedFilesList.length} 个`);
  console.log(` ⚠️  找不到文件: ${fileNotFoundList.length} 个`);
  console.log('--- [Meta Header Injection End] ---\n');
}

if (require.main === module) {
  injectMetaHeader();
} else {
  module.exports = injectMetaHeader;
}
