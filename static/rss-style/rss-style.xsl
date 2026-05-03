<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" encoding="utf-8" indent="yes" />

  <xsl:template match="/">
    <html lang="zh-CN">
      <head>
        <meta charset="utf-8" />
        <title>ie12sBlog - Windows Internet Explorer</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="stylesheet" href="/rss-style/xp.css" />
        <link rel="stylesheet" href="/rss-style/rss-style.css" />
      </head>
      <body>
        <!-- 模拟浏览器窗口 -->
        <div class="window ie-window-frame">
          <!-- 标题栏 -->
          <div class="title-bar">
            <div class="title-bar-text">
              <div class="title-bar-icon"></div>
              <span>ie12sBlog - Windows Internet Explorer</span>
            </div>
            <div class="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize"></button>
              <button aria-label="Close"></button>
            </div>
          </div>

          <div class="ie-client-area">
            <!-- 导航区 -->
            <div class="ie8-nav-zone">
              <div class="ie8-nav-buttons" title="后退/前进"></div>
              <div class="address-bar-container">
                <div class="address-favicon"></div>
                <select class="ie8-address-select">
                  <option selected="selected">https://ie12blog.36102025.xyz/rss.xml</option>
                </select>
              </div>
              <div class="action-button-group">
                <div class="address-action-div" title="刷新"><div class="action-icon" id="ie-go-btn-icon"></div></div>
                <div class="address-action-div" title="停止"><div class="action-icon" id="ie-stop-btn-icon"></div></div>
              </div>
            </div>

            <!-- 菜单栏 -->
            <div class="ie8-menu-bar">
              <menu role="tablist" style="margin:0; padding: 2px 10px; display:flex; gap:15px; list-style:none;">
                <li style="font-size:12px; cursor:default;">文件(F)</li>
                <li style="font-size:12px; cursor:default;">编辑(E)</li>
                <li style="font-size:12px; cursor:default;">查看(V)</li>
                <li style="font-size:12px; cursor:default;">收藏夹(A)</li>
                <li style="font-size:12px; cursor:default;">工具(T)</li>
                <li style="font-size:12px; cursor:default;">帮助(H)</li>
              </menu>
            </div>

            <!-- 网页主内容 (包含嵌入式提示) -->
            <div class="web-page-content">
              <div class="rss-info-banner">
                <div class="rss-icon-small">RSS</div>
                <div>
                  这是一个RSS订阅源。 复制当前URL到RSS阅读器，即可订阅本博客的所有文章。
                </div>
              </div>

              <div class="feed-container">
                <div class="feed-header">ie12sBlog</div>
                <xsl:for-each select="/rss/channel/item">
                  <div class="entry-item">
                    <!-- 修改此处：添加 target="_blank" -->
                    <a class="entry-title" href="{link}" target="_blank">
                      <xsl:value-of select="title" />
                    </a>
                    <div style="color:#666; font-size:12px; margin-bottom:12px;">发布日期: <xsl:value-of select="pubDate" /></div>
                    <div style="line-height: 1.6; color: #333; font-size: 13px;">
                      <xsl:value-of select="description" disable-output-escaping="yes" />
                    </div>
                  </div>
                </xsl:for-each>
              </div>
            </div>

            <!-- 状态栏 -->
            <div class="status-bar">
              <p class="status-bar-field">完成</p>
              <p class="status-bar-field field-zone">Internet</p> 
              <p class="status-bar-field field-zoom">100%</p>
            </div>
          </div>
        </div>

        <!-- 窗口之外，网页最底部的信息行 -->
        <div class="global-footer-info">
          Powered by <a href="https://botoxparty.github.io/XP.css/" target="_blank">XP.css</a>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
