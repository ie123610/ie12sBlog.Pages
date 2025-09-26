import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '137'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'e92'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '1d2'),
            routes: [
              {
                path: '/索引',
                component: ComponentCreator('/索引', '30a'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-常见问题/堡垒防火墙反吸血',
                component: ComponentCreator('/文章/比特彗星-常见问题/堡垒防火墙反吸血', '662'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-常见问题/补档-像素帝的bc教程',
                component: ComponentCreator('/文章/比特彗星-常见问题/补档-像素帝的bc教程', '003'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-常见问题/BC播放器路径设置',
                component: ComponentCreator('/文章/比特彗星-常见问题/BC播放器路径设置', 'd81'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-常见问题/BC磁力链接格式问题',
                component: ComponentCreator('/文章/比特彗星-常见问题/BC磁力链接格式问题', 'c33'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-常见问题/BC磁力链接长度问题',
                component: ComponentCreator('/文章/比特彗星-常见问题/BC磁力链接长度问题', 'caf'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-常见问题/BC磁盘提速服务',
                component: ComponentCreator('/文章/比特彗星-常见问题/BC磁盘提速服务', 'f8a'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-常见问题/BC断网问题',
                component: ComponentCreator('/文章/比特彗星-常见问题/BC断网问题', 'ede'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-常见问题/BC反吸血',
                component: ComponentCreator('/文章/比特彗星-常见问题/BC反吸血', 'ac1'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-常见问题/BC分块校验失败问题',
                component: ComponentCreator('/文章/比特彗星-常见问题/BC分块校验失败问题', '676'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-常见问题/BC截图和评论',
                component: ComponentCreator('/文章/比特彗星-常见问题/BC截图和评论', 'df9'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-常见问题/BC绿灯常见问题',
                component: ComponentCreator('/文章/比特彗星-常见问题/BC绿灯常见问题', 'bab'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-常见问题/BC内存占用过高',
                component: ComponentCreator('/文章/比特彗星-常见问题/BC内存占用过高', '3d7'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-常见问题/BC配置恢复',
                component: ComponentCreator('/文章/比特彗星-常见问题/BC配置恢复', 'ef9'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-常见问题/BC下载测速',
                component: ComponentCreator('/文章/比特彗星-常见问题/BC下载测速', 'b81'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-常见问题/BC下载缓慢问题-重置',
                component: ComponentCreator('/文章/比特彗星-常见问题/BC下载缓慢问题-重置', 'b61'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-常见问题/BC下载卡99问题',
                component: ComponentCreator('/文章/比特彗星-常见问题/BC下载卡99问题', '820'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-常见问题/BC用户列表显示问题',
                component: ComponentCreator('/文章/比特彗星-常见问题/BC用户列表显示问题', '0c1'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-常见问题/BC元数据获取问题',
                component: ComponentCreator('/文章/比特彗星-常见问题/BC元数据获取问题', 'cc4'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-常见问题/BC种子补档99问题',
                component: ComponentCreator('/文章/比特彗星-常见问题/BC种子补档99问题', '868'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-常见问题/BC种子市场',
                component: ComponentCreator('/文章/比特彗星-常见问题/BC种子市场', 'c28'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-常见问题/BC专家模式及其作用',
                component: ComponentCreator('/文章/比特彗星-常见问题/BC专家模式及其作用', 'b31'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-常见问题/win防火墙反吸血',
                component: ComponentCreator('/文章/比特彗星-常见问题/win防火墙反吸血', '987'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-端口阻塞解决方案/BC阻塞_端口转发DMZ和UPnP',
                component: ComponentCreator('/文章/比特彗星-端口阻塞解决方案/BC阻塞_端口转发DMZ和UPnP', '327'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-端口阻塞解决方案/BC阻塞_防火墙和nat',
                component: ComponentCreator('/文章/比特彗星-端口阻塞解决方案/BC阻塞_防火墙和nat', '730'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-端口阻塞解决方案/BC阻塞_光猫',
                component: ComponentCreator('/文章/比特彗星-端口阻塞解决方案/BC阻塞_光猫', '4d6'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-端口阻塞解决方案/BC阻塞_交换机和路由器',
                component: ComponentCreator('/文章/比特彗星-端口阻塞解决方案/BC阻塞_交换机和路由器', '20c'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-端口阻塞解决方案/BC阻塞_路由器',
                component: ComponentCreator('/文章/比特彗星-端口阻塞解决方案/BC阻塞_路由器', 'd75'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-端口阻塞解决方案/BC阻塞_目标与困难',
                component: ComponentCreator('/文章/比特彗星-端口阻塞解决方案/BC阻塞_目标与困难', 'd83'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-端口阻塞解决方案/BC阻塞_目录',
                component: ComponentCreator('/文章/比特彗星-端口阻塞解决方案/BC阻塞_目录', '6c9'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-端口阻塞解决方案/BC阻塞_前言',
                component: ComponentCreator('/文章/比特彗星-端口阻塞解决方案/BC阻塞_前言', '5e1'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-端口阻塞解决方案/BC阻塞_特别篇',
                component: ComponentCreator('/文章/比特彗星-端口阻塞解决方案/BC阻塞_特别篇', '4b2'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-端口阻塞解决方案/BC阻塞_网络结构',
                component: ComponentCreator('/文章/比特彗星-端口阻塞解决方案/BC阻塞_网络结构', 'ed6'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-端口阻塞解决方案/BC阻塞_cs和p2p',
                component: ComponentCreator('/文章/比特彗星-端口阻塞解决方案/BC阻塞_cs和p2p', 'cf4'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-端口阻塞解决方案/BC阻塞_ip和端口',
                component: ComponentCreator('/文章/比特彗星-端口阻塞解决方案/BC阻塞_ip和端口', 'f60'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-端口阻塞解决方案/BC阻塞_ipv6',
                component: ComponentCreator('/文章/比特彗星-端口阻塞解决方案/BC阻塞_ipv6', '77c'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-端口阻塞解决方案/BC阻塞_nat',
                component: ComponentCreator('/文章/比特彗星-端口阻塞解决方案/BC阻塞_nat', '47e'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-端口阻塞解决方案/BC阻塞-win',
                component: ComponentCreator('/文章/比特彗星-端口阻塞解决方案/BC阻塞-win', '60c'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/实验记录系列/废弃方案-使用lucky端口转发固定STUN穿透端口',
                component: ComponentCreator('/文章/实验记录系列/废弃方案-使用lucky端口转发固定STUN穿透端口', '53c'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/实验记录系列/实验记录索引',
                component: ComponentCreator('/文章/实验记录系列/实验记录索引', '5f5'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/实验记录系列/小米路由更多IPv6获取方式',
                component: ComponentCreator('/文章/实验记录系列/小米路由更多IPv6获取方式', 'c88'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/实验记录系列/已知bittorrent客户端生存调查/已知客户端调查-说明',
                component: ComponentCreator('/文章/实验记录系列/已知bittorrent客户端生存调查/已知客户端调查-说明', '387'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/实验记录系列/有关BC的奇谈怪论',
                component: ComponentCreator('/文章/实验记录系列/有关BC的奇谈怪论', '7fe'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/实验记录系列/B站专栏文本复制问题',
                component: ComponentCreator('/文章/实验记录系列/B站专栏文本复制问题', 'db5'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/实验记录系列/BC改进建议',
                component: ComponentCreator('/文章/实验记录系列/BC改进建议', '456'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/实验记录系列/BC历史遗留问题',
                component: ComponentCreator('/文章/实验记录系列/BC历史遗留问题', 'a9c'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/实验记录系列/emule的ip绑定',
                component: ComponentCreator('/文章/实验记录系列/emule的ip绑定', '26a'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/实验记录系列/L2TP特性研究',
                component: ComponentCreator('/文章/实验记录系列/L2TP特性研究', '72c'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/实验记录系列/qb匿名模式名称显示研究',
                component: ComponentCreator('/文章/实验记录系列/qb匿名模式名称显示研究', '89a'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/实验记录系列/win休眠问题',
                component: ComponentCreator('/文章/实验记录系列/win休眠问题', '2c7'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/虚拟专用网络系列/et从记录获取端口',
                component: ComponentCreator('/文章/虚拟专用网络系列/et从记录获取端口', '7ba'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/虚拟专用网络系列/gost-bt-穿透',
                component: ComponentCreator('/文章/虚拟专用网络系列/gost-bt-穿透', '117'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/虚拟专用网络系列/SE解决不支持此功能问题',
                component: ComponentCreator('/文章/虚拟专用网络系列/SE解决不支持此功能问题', 'e48'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/虚拟专用网络系列/win搭建easytier公共服务器',
                component: ComponentCreator('/文章/虚拟专用网络系列/win搭建easytier公共服务器', '3b1'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/IPv6过渡方案/CF双栈代理',
                component: ComponentCreator('/文章/IPv6过渡方案/CF双栈代理', '641'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/IPv6过渡方案/Win端口转发',
                component: ComponentCreator('/文章/IPv6过渡方案/Win端口转发', '104'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/IPv6过渡方案/win防火墙拦截IPv6',
                component: ComponentCreator('/文章/IPv6过渡方案/win防火墙拦截IPv6', '27e'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/lucky-STUN系列/在dynv6和CF上更新TXT',
                component: ComponentCreator('/文章/lucky-STUN系列/在dynv6和CF上更新TXT', '404'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/lucky-STUN系列/cf-srv设置',
                component: ComponentCreator('/文章/lucky-STUN系列/cf-srv设置', '319'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/lucky-STUN系列/lucky-ddns-2.15',
                component: ComponentCreator('/文章/lucky-STUN系列/lucky-ddns-2.15', 'f3d'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/lucky-STUN系列/lucky-vxkex兼容',
                component: ComponentCreator('/文章/lucky-STUN系列/lucky-vxkex兼容', '54c'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/lucky-STUN系列/stun-bc端口自动化',
                component: ComponentCreator('/文章/lucky-STUN系列/stun-bc端口自动化', '671'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/lucky-STUN系列/stun-cf重定向',
                component: ComponentCreator('/文章/lucky-STUN系列/stun-cf重定向', '844'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/lucky-STUN系列/stun-docker-upnp',
                component: ComponentCreator('/文章/lucky-STUN系列/stun-docker-upnp', 'bc4'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/lucky-STUN系列/stun-qb端口自动化',
                component: ComponentCreator('/文章/lucky-STUN系列/stun-qb端口自动化', '2ea'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/lucky-STUN系列/stun-tr修改端口',
                component: ComponentCreator('/文章/lucky-STUN系列/stun-tr修改端口', '1c4'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/lucky-STUN系列/stun-v4-v6分离',
                component: ComponentCreator('/文章/lucky-STUN系列/stun-v4-v6分离', '87e'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/lucky-STUN系列/stun-VNT组网',
                component: ComponentCreator('/文章/lucky-STUN系列/stun-VNT组网', '9da'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/lucky-STUN系列/stun-web服务-CF',
                component: ComponentCreator('/文章/lucky-STUN系列/stun-web服务-CF', 'db4'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/lucky-STUN系列/stun穿透-bt',
                component: ComponentCreator('/文章/lucky-STUN系列/stun穿透-bt', '3bc'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/lucky-STUN系列/svcb记录隐藏端口',
                component: ComponentCreator('/文章/lucky-STUN系列/svcb记录隐藏端口', '9c5'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', '062'),
                exact: true,
                sidebar: "mySidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
