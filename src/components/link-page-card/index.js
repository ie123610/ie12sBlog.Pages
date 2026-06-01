import React from 'react';
import { navCategories } from '@site/cust-plugins/link-page-data.js';
import styles from './styles.module.css'; // 使用上次写的 CSS

// 接收传入的 categoryName 属性
export default function Navigation({ categoryName }) {
  // 找到匹配的那一组数据
  const targetCategory = navCategories.find(cat => cat.category === categoryName);

  // 如果找不到这一组，就什么都不渲染
  if (!targetCategory) return null;

  return (
    <div className={styles.container}>
      {/* 移除了原先的 <h2> 标题渲染和最外层的 categories.map 循环 */}
      <div className={styles.grid}>
        {targetCategory.links.map((link, lIdx) => (
          <a 
            key={lIdx} 
            href={link.url} 
            target="_blank" 
            rel="noopener nofollow" 
            className={styles.card}
          >
            <div className={styles.cardHeader}>
              <div className={styles.iconContainer}>
                {link.iconPath && link.iconPath.startsWith('/') ? (
                  <>
                    {/* 🌟 浅色模式图标：如果配置了暗色图标，则加 showInLight 类名控制隐藏，否则正常显示 */}
                    <img 
                      src={link.iconPath} 
                      alt={`${link.name} 图标`} 
                      className={`${styles.imgIcon} ${link.iconPathDark ? styles.showInLight : ''}`}
                      loading="lazy" 
                    />
                    {/* 🌟 深色模式图标：只有在数据源配置了 iconPathDark 时才渲染 */}
                    {link.iconPathDark && (
                      <img 
                        src={link.iconPathDark} 
                        alt={`${link.name} 暗色图标`} 
                        className={`${styles.imgIcon} ${styles.showInDark}`}
                        loading="lazy" 
                      />
                    )}
                  </>
                ) : (
                  <span className={styles.emojiIcon}>{link.iconPath || '🔗'}</span>
                )}
              </div>
              <strong className={styles.name}>{link.name}</strong>
            </div>
            <p className={styles.desc}>{link.desc}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
