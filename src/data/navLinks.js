// src/data/navLinks.js

export const navCategories = [
  {
    category: "常用工具",
    links: [
      { 
        name: "GitHub", 
        url: "https://github.com", 
        desc: "代码托管平台", 
        iconPath: "/img-icons/github.png" // 👈 改为 static 文件夹内的路径
      },
      { 
        name: "Google", 
        url: "https://google.com", 
        desc: "谷歌搜索", 
        iconPath: "/img-icons/google.svg"  // 👈 支持 SVG，完美适配黑夜模式
      }
    ]
  },
  {
    category: "媒体与娱乐",
    links: [
      { 
        name: "Plex", 
        url: "http://192.168.1.100:32400", 
        desc: "家庭影音中心", 
        iconPath: "/img-icons/plex.png" // 👈 纯图片引用
      },
      // 如果你想保留个别 Emoji，也支持，我们会在渲染时做逻辑判断
      { 
        name: "默认服务", 
        url: "#", 
        desc: "未提供图标的服务", 
        iconPath: "🛠️" // 👈 后面逻辑会处理这种情况
      }
    ]
  }
];
