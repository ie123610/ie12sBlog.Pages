const syncDocs = require('./sync-docs');
const injectImageSize = require('./inject-image-size');
const generateTimeline = require('./timeline-generator.js');
const injectDescription = require('./inject-description.js');
const generateRSS = require('./generate-rss');

async function runPipeline() {
  console.log('====================================');
  console.log('🚀 预处理任务启动...\n');

  try {
    // 步骤 1: 同步文件 (建立 docs 隔离区)
    // 这一步必须最先执行，因为它会清空并重新创建 docs 目录
    await syncDocs();

    // 步骤 2: 图片尺寸智能注入
    // 在 docs 目录中物理修改图片标签，注入 width/height/loading="lazy"
    await injectImageSize();

    // 步骤 3: 提取时间线数据
    // 扫描内容生成 src/data/timeline-data.json
    await generateTimeline();

    // 步骤 4: 描述注入
    // 扫描隔离区，补齐没有 description 的 frontmatter
    await injectDescription();

    // 生成 RSS 订阅源 (
    // 注意：这一步会读取注入后的 description 字段
    await generateRSS();

    console.log('✨ 预处理完成！');
    console.log('====================================');
  } catch (err) {
    console.error('❌ 预处理过程发生错误:');
    console.error(err);
    process.exit(1);
  }
}

runPipeline();
