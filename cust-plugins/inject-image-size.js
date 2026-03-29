const fs = require('fs-extra');
const path = require('path');
const probe = require('probe-image-size');

const docsDir = path.resolve(__dirname, '../docs');
const staticDir = path.resolve(__dirname, '../static');

async function injectImageSize() {
  console.log('--- [Smart Image Injection Start] ---');

  const files = fs.readdirSync(docsDir, { recursive: true })
    .filter(f => /\.(md|mdx)$/.test(f));

  for (const file of files) {
    const filePath = path.join(docsDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    let hasChanged = false;

    // 匹配 ![alt](src) 或 <img ... />
    const imgRegex = /!\[(.*?)\]\((.*?)\)|<img\s+([^>]*?)src=["'](.*?)["']([^>]*?)\/?>/g;
    const matches = [...content.matchAll(imgRegex)];

    for (const m of matches) {
      const fullMatch = m[0];
      let alt = m[1] || "";
      let src = m[2] || m[4];
      const otherAttrs = (m[3] || "") + (m[5] || "");

      if (!src || src.startsWith('http') || src.startsWith('data:')) continue;

      // 路径解析
      let imgPath = src.startsWith('/') 
        ? path.join(staticDir, src) 
        : path.resolve(path.dirname(filePath), src);

      if (fs.existsSync(imgPath)) {
        try {
          const dimensions = probe.sync(fs.readFileSync(imgPath));
          if (dimensions) {
            const ratio = `${dimensions.width} / ${dimensions.height}`;
            const fileNameOnly = path.basename(src, path.extname(src));
            const finalAlt = alt || fileNameOnly; // 如果没有 alt，用文件名

            // 检查是否已经手动写了 width (支持 width="60%" 或 width: 60%)
            const hasManualWidth = /width\s*[:=]/.test(otherAttrs);

            let injectedTag = '';

            if (hasManualWidth) {
              // --- 情况 A: 已有手动宽度 (如 60%) ---
              // 注入 aspect-ratio 确保比例，但不注入物理 width/height 避免冲突
              // 提取原有的属性并合并
              injectedTag = `<img src="${src}" alt="${finalAlt}" ${otherAttrs} style={{aspectRatio: "${ratio}", height: "auto"}} loading="lazy" className="ratio-img" />`;
            } else {
              // --- 情况 B: 没有手动宽度 ---
              // 注入物理像素 width/height，此时根据你的要求，aspect-ratio 不再是必须（因为有了宽高）
              // 但为了保险，我们依然加上 loading="lazy"
              injectedTag = `<img src="${src}" alt="${finalAlt}" width="${dimensions.width}" height="${dimensions.height}" loading="lazy" className="ratio-img" />`;
            }

            // 清理可能重复的空格
            injectedTag = injectedTag.replace(/\s+/g, ' ');
            
            content = content.replace(fullMatch, injectedTag);
            hasChanged = true;
          }
        } catch (e) {
          console.warn(`⚠️ [Image] 无法解析: ${src} in ${file}`);
        }
      }
    }

    if (hasChanged) {
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`✅ [Image] 智能注入完成: ${file}`);
    }
  }
  console.log('--- [Smart Image Injection End] ---\n');
}

if (require.main === module) {
  injectImageSize();
} else {
  module.exports = injectImageSize;
}
