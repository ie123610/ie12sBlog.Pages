window.onload = function() {
    try {
        // 1. 使用你提供的精准选择器查找并移除临时样式
        // "rss > style:nth-child(1)" 表示根元素 rss 下的第一个 style 子元素
        const tempStyle = document.querySelector("rss > style:nth-child(1)");
        if (tempStyle) {
            tempStyle.remove();
            console.log('✅ 已移除拦截样式表');
        }

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
            z-index: 999;
            background: #3b70b3;
        `);
        
        // 3. 设置目标页面
        ifrm.setAttribute('src', '/rss-friendly-view.htm');
        
        // 4. 将 iframe 挂载到根节点
        document.documentElement.appendChild(ifrm);
        
        // 5. 隐藏 XML 渲染的残留内容
        const style = document.createElementNS('http://www.w3.org/1999/xhtml', 'style');
        style.textContent = 'channel { display: none; }'; 
        document.documentElement.appendChild(style);
        
        /**
         * 6. 恢复根节点显示但禁用滚动条
         * 关键点：使用 !important 确保完全覆盖之前脚本可能残留的任何 display: none 状态
         */
        document.documentElement.setAttribute('style', 'display: block !important; margin: 0; padding: 0; overflow: hidden; height: 100vh;');
        
        console.log('✅ 成功接管 RSS 视图并禁用滚动条');
    } catch (e) {
        document.documentElement.setAttribute('style', 'display: block !important;');
        console.error('❌ 脚本执行失败:', e);
    }
};
