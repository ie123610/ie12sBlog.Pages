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
    component: ComponentCreator('/', '86b'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '973'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'f0c'),
            routes: [
              {
                path: '/索引',
                component: ComponentCreator('/索引', 'd91'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-常见问题/堡垒防火墙反吸血',
                component: ComponentCreator('/文章/比特彗星-常见问题/堡垒防火墙反吸血', 'fe6'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-常见问题/补档-像素帝的bc教程',
                component: ComponentCreator('/文章/比特彗星-常见问题/补档-像素帝的bc教程', 'ba3'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-常见问题/BC播放器路径设置',
                component: ComponentCreator('/文章/比特彗星-常见问题/BC播放器路径设置', '1d9'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-常见问题/BC磁力链接格式问题',
                component: ComponentCreator('/文章/比特彗星-常见问题/BC磁力链接格式问题', 'a5a'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-常见问题/BC磁力链接长度问题',
                component: ComponentCreator('/文章/比特彗星-常见问题/BC磁力链接长度问题', 'bfa'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-常见问题/BC磁盘提速服务',
                component: ComponentCreator('/文章/比特彗星-常见问题/BC磁盘提速服务', '9bb'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-常见问题/BC断网问题',
                component: ComponentCreator('/文章/比特彗星-常见问题/BC断网问题', '43a'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-常见问题/BC反吸血',
                component: ComponentCreator('/文章/比特彗星-常见问题/BC反吸血', '3b2'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-常见问题/BC分块校验失败问题',
                component: ComponentCreator('/文章/比特彗星-常见问题/BC分块校验失败问题', 'bfc'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-常见问题/BC截图和评论',
                component: ComponentCreator('/文章/比特彗星-常见问题/BC截图和评论', '3e3'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-常见问题/BC绿灯常见问题',
                component: ComponentCreator('/文章/比特彗星-常见问题/BC绿灯常见问题', 'c15'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-常见问题/BC内存占用过高',
                component: ComponentCreator('/文章/比特彗星-常见问题/BC内存占用过高', '217'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-常见问题/BC配置恢复',
                component: ComponentCreator('/文章/比特彗星-常见问题/BC配置恢复', '390'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-常见问题/BC下载测速',
                component: ComponentCreator('/文章/比特彗星-常见问题/BC下载测速', 'cdf'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-常见问题/BC下载缓慢问题-重置',
                component: ComponentCreator('/文章/比特彗星-常见问题/BC下载缓慢问题-重置', '927'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-常见问题/BC下载卡99问题',
                component: ComponentCreator('/文章/比特彗星-常见问题/BC下载卡99问题', '43a'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-常见问题/BC用户列表显示问题',
                component: ComponentCreator('/文章/比特彗星-常见问题/BC用户列表显示问题', 'eb8'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-常见问题/BC元数据获取问题',
                component: ComponentCreator('/文章/比特彗星-常见问题/BC元数据获取问题', '853'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-常见问题/BC种子补档99问题',
                component: ComponentCreator('/文章/比特彗星-常见问题/BC种子补档99问题', '3e7'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-常见问题/BC种子市场',
                component: ComponentCreator('/文章/比特彗星-常见问题/BC种子市场', '419'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-常见问题/BC专家模式及其作用',
                component: ComponentCreator('/文章/比特彗星-常见问题/BC专家模式及其作用', 'd6a'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-常见问题/win防火墙反吸血',
                component: ComponentCreator('/文章/比特彗星-常见问题/win防火墙反吸血', '62c'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-端口阻塞解决方案/BC阻塞_端口转发DMZ和UPnP',
                component: ComponentCreator('/文章/比特彗星-端口阻塞解决方案/BC阻塞_端口转发DMZ和UPnP', '12f'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-端口阻塞解决方案/BC阻塞_防火墙和nat',
                component: ComponentCreator('/文章/比特彗星-端口阻塞解决方案/BC阻塞_防火墙和nat', 'ac6'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-端口阻塞解决方案/BC阻塞_光猫',
                component: ComponentCreator('/文章/比特彗星-端口阻塞解决方案/BC阻塞_光猫', 'dc7'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-端口阻塞解决方案/BC阻塞_交换机和路由器',
                component: ComponentCreator('/文章/比特彗星-端口阻塞解决方案/BC阻塞_交换机和路由器', '2d3'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-端口阻塞解决方案/BC阻塞_路由器',
                component: ComponentCreator('/文章/比特彗星-端口阻塞解决方案/BC阻塞_路由器', '932'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-端口阻塞解决方案/BC阻塞_目标与困难',
                component: ComponentCreator('/文章/比特彗星-端口阻塞解决方案/BC阻塞_目标与困难', 'dff'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-端口阻塞解决方案/BC阻塞_目录',
                component: ComponentCreator('/文章/比特彗星-端口阻塞解决方案/BC阻塞_目录', '060'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-端口阻塞解决方案/BC阻塞_前言',
                component: ComponentCreator('/文章/比特彗星-端口阻塞解决方案/BC阻塞_前言', '074'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-端口阻塞解决方案/BC阻塞_特别篇',
                component: ComponentCreator('/文章/比特彗星-端口阻塞解决方案/BC阻塞_特别篇', 'ad6'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-端口阻塞解决方案/BC阻塞_网络结构',
                component: ComponentCreator('/文章/比特彗星-端口阻塞解决方案/BC阻塞_网络结构', 'd38'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-端口阻塞解决方案/BC阻塞_cs和p2p',
                component: ComponentCreator('/文章/比特彗星-端口阻塞解决方案/BC阻塞_cs和p2p', 'ba5'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-端口阻塞解决方案/BC阻塞_ip和端口',
                component: ComponentCreator('/文章/比特彗星-端口阻塞解决方案/BC阻塞_ip和端口', 'aaf'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-端口阻塞解决方案/BC阻塞_ipv6',
                component: ComponentCreator('/文章/比特彗星-端口阻塞解决方案/BC阻塞_ipv6', '1d2'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-端口阻塞解决方案/BC阻塞_nat',
                component: ComponentCreator('/文章/比特彗星-端口阻塞解决方案/BC阻塞_nat', 'a5f'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/比特彗星-端口阻塞解决方案/BC阻塞-win',
                component: ComponentCreator('/文章/比特彗星-端口阻塞解决方案/BC阻塞-win', '12c'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/实验记录系列/废弃方案-使用lucky端口转发固定STUN穿透端口',
                component: ComponentCreator('/文章/实验记录系列/废弃方案-使用lucky端口转发固定STUN穿透端口', '89f'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/实验记录系列/实验记录索引',
                component: ComponentCreator('/文章/实验记录系列/实验记录索引', 'c03'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/实验记录系列/小米路由更多IPv6获取方式',
                component: ComponentCreator('/文章/实验记录系列/小米路由更多IPv6获取方式', 'a4f'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/实验记录系列/已知bittorrent客户端生存调查/已知客户端调查-说明',
                component: ComponentCreator('/文章/实验记录系列/已知bittorrent客户端生存调查/已知客户端调查-说明', 'cf2'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/实验记录系列/有关BC的奇谈怪论',
                component: ComponentCreator('/文章/实验记录系列/有关BC的奇谈怪论', '0da'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/实验记录系列/B站专栏文本复制问题',
                component: ComponentCreator('/文章/实验记录系列/B站专栏文本复制问题', '073'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/实验记录系列/BC改进建议',
                component: ComponentCreator('/文章/实验记录系列/BC改进建议', '617'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/实验记录系列/BC历史遗留问题',
                component: ComponentCreator('/文章/实验记录系列/BC历史遗留问题', '0a5'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/实验记录系列/emule的ip绑定',
                component: ComponentCreator('/文章/实验记录系列/emule的ip绑定', 'c37'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/实验记录系列/L2TP特性研究',
                component: ComponentCreator('/文章/实验记录系列/L2TP特性研究', 'd46'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/实验记录系列/qb匿名模式名称显示研究',
                component: ComponentCreator('/文章/实验记录系列/qb匿名模式名称显示研究', '903'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/实验记录系列/win休眠问题',
                component: ComponentCreator('/文章/实验记录系列/win休眠问题', 'a60'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/虚拟专用网络系列/et从记录获取端口',
                component: ComponentCreator('/文章/虚拟专用网络系列/et从记录获取端口', '45d'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/虚拟专用网络系列/gost-bt-穿透',
                component: ComponentCreator('/文章/虚拟专用网络系列/gost-bt-穿透', '074'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/虚拟专用网络系列/SE解决不支持此功能问题',
                component: ComponentCreator('/文章/虚拟专用网络系列/SE解决不支持此功能问题', '63c'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/虚拟专用网络系列/win搭建easytier公共服务器',
                component: ComponentCreator('/文章/虚拟专用网络系列/win搭建easytier公共服务器', 'a1e'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/IPv6过渡方案/CF双栈代理',
                component: ComponentCreator('/文章/IPv6过渡方案/CF双栈代理', '89e'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/IPv6过渡方案/Win端口转发',
                component: ComponentCreator('/文章/IPv6过渡方案/Win端口转发', '90b'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/IPv6过渡方案/win防火墙拦截IPv6',
                component: ComponentCreator('/文章/IPv6过渡方案/win防火墙拦截IPv6', '65a'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/lucky-STUN系列/在dynv6和CF上更新TXT',
                component: ComponentCreator('/文章/lucky-STUN系列/在dynv6和CF上更新TXT', 'f40'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/lucky-STUN系列/cf-srv设置',
                component: ComponentCreator('/文章/lucky-STUN系列/cf-srv设置', '602'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/lucky-STUN系列/lucky-ddns-2.15',
                component: ComponentCreator('/文章/lucky-STUN系列/lucky-ddns-2.15', '74c'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/lucky-STUN系列/lucky-vxkex兼容',
                component: ComponentCreator('/文章/lucky-STUN系列/lucky-vxkex兼容', 'e10'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/lucky-STUN系列/stun-bc端口自动化',
                component: ComponentCreator('/文章/lucky-STUN系列/stun-bc端口自动化', 'e76'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/lucky-STUN系列/stun-cf重定向',
                component: ComponentCreator('/文章/lucky-STUN系列/stun-cf重定向', 'ecc'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/lucky-STUN系列/stun-docker-upnp',
                component: ComponentCreator('/文章/lucky-STUN系列/stun-docker-upnp', 'd22'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/lucky-STUN系列/stun-qb端口自动化',
                component: ComponentCreator('/文章/lucky-STUN系列/stun-qb端口自动化', '57b'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/lucky-STUN系列/stun-tr修改端口',
                component: ComponentCreator('/文章/lucky-STUN系列/stun-tr修改端口', '874'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/lucky-STUN系列/stun-v4-v6分离',
                component: ComponentCreator('/文章/lucky-STUN系列/stun-v4-v6分离', '806'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/lucky-STUN系列/stun-VNT组网',
                component: ComponentCreator('/文章/lucky-STUN系列/stun-VNT组网', 'ffc'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/lucky-STUN系列/stun-web服务-CF',
                component: ComponentCreator('/文章/lucky-STUN系列/stun-web服务-CF', 'be5'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/lucky-STUN系列/stun穿透-bt',
                component: ComponentCreator('/文章/lucky-STUN系列/stun穿透-bt', '37e'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/文章/lucky-STUN系列/svcb记录隐藏端口',
                component: ComponentCreator('/文章/lucky-STUN系列/svcb记录隐藏端口', 'fb5'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', 'a40'),
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
