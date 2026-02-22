const fs = require('fs');
const path = require('path');
const { globSync } = require('glob');

module.exports = function timelinePlugin(context, options) {
  return {
    name: 'timeline-generator-plugin',

    async loadContent() {
      const docsDir = path.join(context.siteDir, 'docs');
      const outputPath = path.join(__dirname, 'timeline-data.json');

      const files = globSync(`${docsDir}/**/*.{md,mdx}`);
      const timeline = [];
      const skippedFiles = [];

      files.forEach((file) => {
        const content = fs.readFileSync(file, 'utf-8');
        const fileName = path.relative(docsDir, file);

        // 1. 匹配日期逻辑：仅限前 10 行
        const linesArray = content.split('\n');
        const firstTenLines = linesArray.slice(0, 10).join('\n');
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

          // 4. 路径处理逻辑 (修复序号问题)
          // a. 统一斜杠并移除后缀
          let webPath = fileName.replace(/\\/g, '/').replace(/\.mdx?$/, '');

          // b. 剔除每一级路径开头的序号前缀 (如 "01-", "1. ", "02_")
          // Docusaurus 默认规则会移除文件名开头的数字加分隔符
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
            // 默认链接前缀为 /docs/，如果你的 routeBasePath 设为了 '/'，请改为 `/${webPath}`
            link: `/${webPath}`.replace(/\/$/, '') // 移除末尾斜杠
          });
        } else {
          skippedFiles.push(fileName);
        }
      });

      // 5. 排序：按时间倒序
      timeline.sort((a, b) => b.sortKey - a.sortKey);
      
      fs.writeFileSync(outputPath, JSON.stringify(timeline, null, 2));

      console.log('\n[Timeline Plugin] 扫描报告:');
      console.log(`✅ 成功提取: ${timeline.length} 个文件`);

      if (skippedFiles.length > 0) {
        console.log(`⚠️  未匹配日期 (已跳过): ${skippedFiles.length} 个文件`);
        // 如需调试，可取消下行注释查看跳过的文件
        skippedFiles.forEach(f => console.log(`   - ${f}`));
      }
      console.log('------------------------------------\n');
    },
  };
};
