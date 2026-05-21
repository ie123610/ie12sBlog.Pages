// src/components/Navigation/index.js

import React from 'react';
import { navCategories } from '@site/src/data/navLinks';
import styles from './styles.module.css'; // 使用上次写的 CSS

export default function Navigation() {
  return (
    <div className={styles.container}>
      {navCategories.map((cat, idx) => (
        <section key={idx} className={styles.section}>
          <h2 className={styles.categoryTitle}>{cat.category}</h2>
          <div className={styles.grid}>
            {cat.links.map((link, lIdx) => (
              <a 
                key={lIdx} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.card}
              >
                <div className={styles.cardHeader}>
                  {/* 👇 新图标渲染逻辑 */}
                  <div className={styles.iconContainer}>
                    {/* 判断 link.iconPath 是否以 '/' 开头（表示是一个图片路径） */}
                    {link.iconPath && link.iconPath.startsWith('/') ? (
                      <img 
                        src={link.iconPath} 
                        alt={`${link.name} 图标`} 
                        className={styles.imgIcon}
                        /* 确保在无 JS 时标准 HTML 属性正确渲染 */
                        loading="lazy" // 优化性能
                      />
                    ) : (
                      // 👈 如果不是图片路径，或者是 Emoji，作为后备显示出来
                      <span className={styles.emojiIcon}>{link.iconPath || '🔗'}</span>
                    )}
                  </div>
                  {/* 👆 新逻辑结束 */}
                  <strong className={styles.name}>{link.name}</strong>
                </div>
                <p className={styles.desc}>{link.desc}</p>
              </a>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
