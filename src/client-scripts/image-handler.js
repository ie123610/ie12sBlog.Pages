// src/client-scripts/image-handler.js

if (typeof window !== 'undefined') {
  const clearBg = (img) => {
    // 检查是否是标记的图片且背景尚未透明
    if (img.classList.contains('ratio-img') && img.style.backgroundColor !== 'transparent') {
      // 如果图片已经加载完成，直接透明
      if (img.complete) {
        img.style.backgroundColor = 'transparent';
      } else {
        // 如果还没加载完，监听它的单次 load 事件
        img.addEventListener('load', () => {
          img.style.backgroundColor = 'transparent';
        }, { once: true });
      }
    }
  };

  // 1. 初始化检查：处理首屏已经存在的图片
  const init = () => {
    document.querySelectorAll('img.ratio-img').forEach(clearBg);
  };

  // 2. 监听变化：处理通过路由跳转、懒加载新出现的图片
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        // 如果新增的是图片
        if (node.tagName === 'IMG') {
          clearBg(node);
        } else if (node.querySelectorAll) {
          // 如果新增的是容器，查找其内部的所有图片
          node.querySelectorAll('img.ratio-img').forEach(clearBg);
        }
      });
    });
  });

  // 立即执行一次
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // 开始监听 body 下的所有变化
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}
