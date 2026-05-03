const { Xslt, XmlParser } = require('xslt-processor');
const fs = require('fs');
const path = require('path');

// 路径配置
const paths = {
    xml: path.join(__dirname, '../static/rss.xml'),
    xsl: path.join(__dirname, '../static/rss-style/rss-style.xsl'),
    output: path.join(__dirname, '../static/rss-friendly-view.html')
};

async function generateRssFriendlyView() {
    console.log('--- [RSS to HTML Start] ---');
    try {
        // 1. 读取文件
        const xmlString = fs.readFileSync(paths.xml, 'utf-8');
        const xsltString = fs.readFileSync(paths.xsl, 'utf-8');

        //console.log('--- 内容检查 ---');
        //console.log('XML 预览:', xmlString.substring(0, 100).replace(/\n/g, ' '));
        //console.log('XSL 预览:', xsltString.substring(0, 100).replace(/\n/g, ' '));

        // 2. 配置 Xslt 实例以解决布局问题
        // 这些选项是解决浏览器渲染布局混乱的关键
        const options = {
            outputMethod: 'html',      // 按照 HTML 规范输出
            selfClosingTags: false,    // 强制输出 <div></div> 而非 <div />，防止布局崩塌
            escape: false              // 禁用自动转义，保护 CSS 和 JS 逻辑
        };

        const xslt = new Xslt(options);
        const xmlParser = new XmlParser();

        // 3. 执行转换
        console.log('正在执行 XSLT 转换...');
        const outXmlString = await xslt.xsltProcess(
            xmlParser.xmlParse(xmlString),
            xmlParser.xmlParse(xsltString)
        );

        // 4. 结果处理
        if (outXmlString) {
            // 确保 HTML 声明完整，防止浏览器进入“怪异模式”导致样式失效
            const finalHtml = outXmlString.trim().toLowerCase().startsWith('<!doctype') 
                ? outXmlString 
                : `<!DOCTYPE html>\n${outXmlString}`;

            fs.writeFileSync(paths.output, finalHtml);
            console.log(`✅ 成功：生成的 HTML 大小为 ${finalHtml.length} 字节`);
        } else {
            console.warn('⚠️ 警告：转换结果为空字符串。');
        }

    } catch (error) {
        console.error('❌ 运行出错：', error.message);
        console.error(error.stack);
    }
    console.log('--- [RSS to HTML End] ---');
}

if (require.main === module) {
    // 只有直接运行此脚本时才会执行
    generateRssFriendlyView();
} else {
    // 被 require 时导出函数
    module.exports = generateRssFriendlyView;
}
