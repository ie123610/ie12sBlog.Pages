// imageAspectRatio.js
import probe from 'probe-image-size';
import path from 'path';
import fs from 'fs';
import { visit } from 'unist-util-visit';

/**
 * 图像宽高比注入插件 (Rehype Plugin)
 * 作用：自动读取本地图片尺寸，并注入 aspect-ratio 样式，防止页面布局偏移 (CLS)
 */
const imgAspectRatioPlugin = () => {
  // 判断是否为开发环境
  const isDev = process.env.NODE_ENV === 'development';

  return (tree, file) => {
    let stats = { success: 0, fail: 0 };

    visit(tree, ['element', 'mdxJsxFlowElement', 'mdxJsxTextElement'], (node) => {
      // 1. 筛选图片节点：支持标准 HTML <img> 和 MDX 中的 JSX <img />
      const isImg = node.tagName === 'img' || node.name === 'img';
      if (!isImg) return;

      // 2. 提取图片源路径 (src)
      let src = '';
      if (node.type === 'element') {
        // 处理标准 Markdown 转换后的元素
        src = node.properties?.src;
      } else {
        // 处理手写 HTML 或 JSX 元素
        const srcAttr = node.attributes?.find(a => a.name === 'src');
        src = srcAttr?.value;
      }

      // 忽略网络图片、Base64 或空路径
      if (!src || src.startsWith('http') || src.startsWith('data:')) return;

      // 3. 计算图片在磁盘上的绝对路径
      let imgPath = '';
      if (src.startsWith('/')) {
        // 绝对路径：对应项目根目录下的 static 文件夹
        imgPath = path.join(process.cwd(), 'static', src);
      } else {
        // 相对路径：基于当前处理的 .md 文件的物理目录解析
        const currentDir = path.dirname(file.history[0]);
        imgPath = path.resolve(currentDir, src);
      }

      // 4. 读取图片尺寸并注入样式
      if (fs.existsSync(imgPath)) {
        try {
          const buffer = fs.readFileSync(imgPath);
          const dimensions = probe.sync(buffer);
          
          if (dimensions && dimensions.width && dimensions.height) {
            const ratio = `${dimensions.width} / ${dimensions.height}`;

            if (node.type === 'element') {
              /**
               * 情况 A: 普通 HTML 元素
               * 直接注入 style 字符串
               */
              node.properties = node.properties || {};
              const styleValue = `aspect-ratio: ${ratio}; height: auto !important;`;
              node.properties.style = `${styleValue} ${node.properties.style || ''}`.trim();
            } else {
              /**
               * 情况 B: MDX/JSX 元素
               * 必须构造 React 兼容的 style 对象表达式，否则页面会崩溃
               */
              node.attributes = node.attributes || [];
              const styleIdx = node.attributes.findIndex(a => a.name === 'style');

              // 模拟 React 的 style={{ aspectRatio: "...", height: "auto" }}
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

              // 注入或覆盖已有的 style 属性
              if (styleIdx > -1) {
                node.attributes[styleIdx].value = styleObject;
              } else {
                node.attributes.push({ type: 'mdxJsxAttribute', name: 'style', value: styleObject });
              }
            }
            stats.success++;
            // 只有开发环境打印每一张图的详情
            if (isDev) {
              console.log(`✅ [Ratio] 注入成功: ${src} (${ratio})`);
            }
          }
        } catch (err) {
          stats.fail++;
          // 错误信息无论什么环境都建议保留，方便排查破损图片
          console.warn(`❌ [Ratio] 解析失败: ${src} | 错误: ${err.message}`);
        }
      }
    });

    // 5. 生产环境输出简要摘要
    if (!isDev && stats.success > 0) {
      const fileName = file.path.split(path.sep).pop();
      console.log(`[Ratio] 已完成: ${fileName} (处理: ${stats.success} 失败: ${stats.fail})`);
    }
  };
};

export default imgAspectRatioPlugin;
