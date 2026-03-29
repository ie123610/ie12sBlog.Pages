const fs = require('fs-extra');
const path = require('path');

// --- 配置区 ---
// 源文件夹（你写文章的地方，受 Git 保护）
const srcDir = path.resolve(__dirname, '../docs-raw'); 
// 目标文件夹（Docusaurus 读取的地方，.gitignore 忽略）
const destDir = path.resolve(__dirname, '../docs');

async function syncDocs() {
  console.log('--- [Sync Task Start] ---');
  
  try {
    // 1. 检查源目录是否存在
    if (!fs.existsSync(srcDir)) {
      console.error(`❌ 错误: 找不到源目录 ${srcDir}`);
      process.exit(1);
    }

    // 2. 清理目标目录 (确保没有旧残余文件)
    if (fs.existsSync(destDir)) {
      fs.removeSync(destDir);
      console.log('🧹 已清空旧的 docs 目录');
    }

    // 3. 执行同步复制
    // filter 可以排除掉一些不需要的文件（如临时文件、隐藏文件）
    fs.copySync(srcDir, destDir, {
      filter: (src) => {
        const basename = path.basename(src);
        return !basename.startsWith('.') && !src.includes('node_modules');
      }
    });

    console.log(`✅ 成功将 content/ 同步至 docs/`);
    console.log('--- [Sync Task End] ---\n');
  } catch (err) {
    console.error('❌ 同步过程中发生错误:', err);
  }
}

// 支持直接运行或被 pre-process.js 调用
if (require.main === module) {
  syncDocs();
} else {
  module.exports = syncDocs;
}
