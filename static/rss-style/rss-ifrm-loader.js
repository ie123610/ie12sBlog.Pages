// 1. 立即执行：完全隐藏原始 XML 渲染
document.documentElement.setAttribute('style', 'display: none ;');

window.onload = function() {
    try {
        // 2. 创建全屏 iframe (使用 XHTML 命名空间以确保在 XML 环境下的渲染兼容性)
        const ifrm = document.createElementNS('http://www.w3.org/1999/xhtml', 'iframe');
        
        // 设置样式使其完全覆盖原页面，并强制消除 iframe 自身的边距
        ifrm.setAttribute('style', `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            border: none;
            margin: 0;
            padding: 0;
            z-index: 999999;
            background: white;
        `);
        
        // 3. 设置目标页面
        ifrm.setAttribute('src', '/rss-friendly-view.html');
        
        // 4. 将 iframe 挂载到根节点
        document.documentElement.appendChild(ifrm);
        
        /**
         * 5. 恢复根节点显示但禁用滚动条
         * 关键点：
         * - display: block !important 恢复容器显示。
         * - overflow: hidden !important 彻底禁用原始 XML 内容产生的滚动条。
         * - margin/padding: 0 消除 XP 风格 CSS 可能引入的外边距。
         */
        document.documentElement.setAttribute('style', 'display: block ; margin: 0; padding: 0; overflow: hidden; height: 100vh;');
        
         // 6. 隐藏 XML 渲染的残留内容
         // 为了防止 CSS 渲染的 channel 等元素依然在后台占据空间，可以通过样式将其高度塌陷。
        const style = document.createElementNS('http://www.w3.org/1999/xhtml', 'style');
        style.textContent = 'channel { display: none; }'; // 隐藏 CSS 渲染出的主界面容器[cite: 2]
        document.documentElement.appendChild(style);
        
        console.log('✅ 成功接管 RSS 视图并禁用滚动条');
    } catch (e) {
        // 发生错误时恢复显示，防止页面永久空白[cite: 2]
        document.documentElement.setAttribute('style', 'display: block !important;');
        console.error('❌ 脚本执行失败:', e);
    }
};
