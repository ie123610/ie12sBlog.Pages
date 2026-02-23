// imageAspectRatio.js
import probe from 'probe-image-size';
import path from 'path';
import fs from 'fs';
import { visit } from 'unist-util-visit';

const imgAspectRatioPlugin = () => {
  const isDev = process.env.NODE_ENV === 'development';

  return (tree, file) => {
    let stats = { success: 0, fail: 0 };

    visit(tree, ['element', 'mdxJsxFlowElement', 'mdxJsxTextElement'], (node) => {
      const isImg = node.tagName === 'img' || node.name === 'img';
      if (!isImg) return;

      let src = '';
      let hasWidthDefined = false;

      // 1. 获取 src 并检查是否已定义 width
      if (node.type === 'element') {
        src = node.properties?.src;
        hasWidthDefined = !!node.properties?.width;
      } else {
        const srcAttr = node.attributes?.find(a => a.name === 'src');
        src = srcAttr?.value;
        hasWidthDefined = node.attributes?.some(a => a.name === 'width');
      }

      if (!src || src.startsWith('http') || src.startsWith('data:')) return;

      let imgPath = '';
      if (src.startsWith('/')) {
        imgPath = path.join(process.cwd(), 'static', src);
      } else {
        const currentDir = path.dirname(file.history[0]);
        imgPath = path.resolve(currentDir, src);
      }

      if (fs.existsSync(imgPath)) {
        try {
          const buffer = fs.readFileSync(imgPath);
          const dimensions = probe.sync(buffer);
          
          if (dimensions && dimensions.width && dimensions.height) {
            const ratio = `${dimensions.width} / ${dimensions.height}`;

            if (node.type === 'element') {
              // --- 情况 A: 标准 Markdown 图片 ---
              node.properties = node.properties || {};
              
              // 如果没有定义 width，直接注入原始宽高作为 HTML 属性
              if (!hasWidthDefined) {
                node.properties.width = dimensions.width;
                node.properties.height = dimensions.height;
              }

              const styleValue = `aspect-ratio: ${ratio}; height: auto !important;`;
              node.properties.style = `${styleValue} ${node.properties.style || ''}`.trim();
              
              const currentClass = node.properties.className || [];
              node.properties.className = Array.isArray(currentClass) ? [...currentClass, 'ratio-img'] : [currentClass, 'ratio-img'];
            } else {
              // --- 情况 B: MDX/JSX 图片 ---
              node.attributes = node.attributes || [];
              
              // 如果没有定义 width，注入 width 和 height 属性
              if (!hasWidthDefined) {
                node.attributes.push({ type: 'mdxJsxAttribute', name: 'width', value: String(dimensions.width) });
                node.attributes.push({ type: 'mdxJsxAttribute', name: 'height', value: String(dimensions.height) });
              }

              const styleIdx = node.attributes.findIndex(a => a.name === 'style');
              const styleObject = {
                type: 'mdxJsxAttributeValueExpression',
                value: `({ aspectRatio: "${ratio}", height: "auto" })`,
                data: {
                  estree: {
                    type: 'Program',
                    body: [{
                      type: 'ExpressionStatement',
                      expression: {
                        type: 'ObjectExpression',
                        properties: [
                          {
                            type: 'Property',
                            key: { type: 'Identifier', name: 'aspectRatio' },
                            value: { type: 'Literal', value: ratio },
                            kind: 'init'
                          },
                          {
                            type: 'Property',
                            key: { type: 'Identifier', name: 'height' },
                            value: { type: 'Literal', value: 'auto' },
                            kind: 'init'
                          }
                        ]
                      }
                    }]
                  }
                }
              };

              if (styleIdx > -1) {
                node.attributes[styleIdx].value = styleObject;
              } else {
                node.attributes.push({ type: 'mdxJsxAttribute', name: 'style', value: styleObject });
              }

              node.attributes.push({ type: 'mdxJsxAttribute', name: 'className', value: 'ratio-img' });
            }

            stats.success++;
            if (isDev) console.log(`✅ [Ratio] 注入成功: ${src}`);
          }
        } catch (err) {
          stats.fail++;
          console.warn(`❌ [Ratio] 解析失败: ${src} | 错误: ${err.message}`);
        }
      }
    });

    if (!isDev && stats.success > 0) {
      const fileName = file.path.split(path.sep).pop();
      console.log(`[Ratio] 已完成: ${fileName} (处理: ${stats.success})`);
    }
  };
};

export default imgAspectRatioPlugin;
