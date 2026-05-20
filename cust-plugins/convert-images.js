// convert-images.js
const fs = require('fs-extra');
const path = require('path');
const sharp = require('sharp');
const { glob } = require('glob');

const IMAGE_DIR = path.resolve(__dirname, '../static/images').replace(/\\/g, '/');
const DOCS_DIR = path.resolve(__dirname, '../docs').replace(/\\/g, '/');

async function processWebpImages() {
  console.log('--- [WebP Generator Start] ---');
  console.log('🚀 开始执行服务端 WebP 自动化转换...');
  console.log(`📂 当前扫描的图片目录: ${IMAGE_DIR}`);
  console.log(`📂 当前扫描的文档目录: ${DOCS_DIR}`);

  // ------------------ 1. 图片转换阶段 ------------------
  const images = await glob('**/*.{png,jpg,JPG}', { cwd: IMAGE_DIR, absolute: true });
  console.log(`📊 [图片扫描] 共找到 ${images.length} 个非webp原始图片文件。`);
  
  let convertedCount = 0;
  let skippedCount = 0;

  for (const imgPath of images) {
    const ext = path.extname(imgPath);
    const webpPath = imgPath.replace(new RegExp(`${ext}$`, 'i'), '.webp');

    if (await fs.pathExists(webpPath)) {
      const imgStat = await fs.stat(imgPath);
      const webpStat = await fs.stat(webpPath);
      if (webpStat.mtimeMs > imgStat.mtimeMs) {
        skippedCount++;
        continue; 
      }
    }

    try {
      await sharp(imgPath)
        .rotate()
        .toFile(webpPath);
      convertedCount++;
      console.log(`✅ 已转换: ${path.relative(IMAGE_DIR, imgPath)} -> .webp`);
    } catch (err) {
      console.error(`❌ 转换失败: ${imgPath}`, err);
    }
  }
  console.log(`📈 图片处理小结: 新转换 ${convertedCount} 张，跳过 ${skippedCount} 张。`);

  // ------------------ 2. 文档安全重写阶段 ------------------
  const mdFiles = await glob('**/*.{md,mdx}', { cwd: DOCS_DIR, absolute: true });
  console.log(`📊 [文档扫描] 共找到 ${mdFiles.length} 个 Markdown 文档。`);

  let rewrittenCount = 0;

  for (const mdPath of mdFiles) {
    let content = await fs.readFile(mdPath, 'utf8');
    let hasChanged = false;

    // ✨ 正则 A 升级：安全匹配标准的 Markdown 语法 ![alt](path.png)
    // 捕获组 $1: 前缀, $2: 路径, $3: 后缀, $4: 结束括号
    const mdImgRegex = /(!\[.*?\]\()([^)]+\.)(png|jpg|jpeg)(\))/gi;
    if (mdImgRegex.test(content)) {
      content = content.replace(mdImgRegex, (match, p1, p2, p3, p4) => {
        if (p2.startsWith('http') || p2.startsWith('//')) return match; // 忽略网络图片
        hasChanged = true;
        return `${p1}${p2}webp${p4}`;
      });
    }

    // ✨ 正则 B 重新设计：精准、完美兼容的 HTML <img src="path.png">
    // 捕获组 $1: src=" 的开始部分, $2: 图片路径加点, $3: 后缀, $4: 结尾引号
    const htmlImgRegex = /(\bsrc=["'])([^"']+\.)(png|jpg|jpeg)(["'])/gi;
    if (htmlImgRegex.test(content)) {
      content = content.replace(htmlImgRegex, (match, p1, p2, p3, p4) => {
        if (p2.startsWith('http') || p2.startsWith('//')) return match; // 忽略网络图片
        hasChanged = true;
        return `${p1}${p2}webp${p4}`;
      });
    }

    if (hasChanged) {
      await fs.writeFile(mdPath, content, 'utf8');
      rewrittenCount++;
      console.log(`📝 已安全修复并重写: ${path.relative(DOCS_DIR, mdPath)}`);
    }
  }
  console.log(`📈  共安全重写了 ${rewrittenCount} 个文档的图片引用。`);
  console.log('🎉 服务端 WebP 处理全部完成！');
  console.log('--- [WebP Generator End] ---');
}

if (require.main === module) {
  processWebpImages();
} else {
  module.exports = processWebpImages;
}

