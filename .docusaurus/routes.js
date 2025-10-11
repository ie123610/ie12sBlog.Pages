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
    path: '/search',
    component: ComponentCreator('/search', '822'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'ef4'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '10c'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'ef7'),
            routes: [
              {
                path: '/articles/bitcomet-FAQ/堡垒防火墙反吸血',
                component: ComponentCreator('/articles/bitcomet-FAQ/堡垒防火墙反吸血', '3e1'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/补档-像素帝的bc教程',
                component: ComponentCreator('/articles/bitcomet-FAQ/补档-像素帝的bc教程', 'ff2'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/有关BC的奇谈怪论',
                component: ComponentCreator('/articles/bitcomet-FAQ/有关BC的奇谈怪论', '22d'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC播放器路径设置',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC播放器路径设置', 'f4a'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC磁力链接格式问题',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC磁力链接格式问题', '83b'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC磁力链接长度问题',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC磁力链接长度问题', 'bd5'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC磁盘提速服务',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC磁盘提速服务', 'aae'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC断网问题',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC断网问题', '76b'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC反吸血',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC反吸血', '38a'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC反吸血2',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC反吸血2', '573'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC分块校验失败问题',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC分块校验失败问题', '610'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC截图和评论',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC截图和评论', '793'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC历史遗留问题',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC历史遗留问题', 'a8e'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC绿灯常见问题',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC绿灯常见问题', '05a'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC内存占用过高',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC内存占用过高', '62d'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC配置恢复',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC配置恢复', '33f'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC下载测速',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC下载测速', '9e7'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC下载缓慢问题-重置',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC下载缓慢问题-重置', 'c5c'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC下载卡99问题',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC下载卡99问题', 'd66'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC用户列表显示问题',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC用户列表显示问题', '4f8'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC元数据获取问题',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC元数据获取问题', 'b8b'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC种子补档99问题',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC种子补档99问题', '2a6'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC种子市场',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC种子市场', '308'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC专家模式及其作用',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC专家模式及其作用', 'c24'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/win防火墙反吸血',
                component: ComponentCreator('/articles/bitcomet-FAQ/win防火墙反吸血', '869'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-port-forwarding/BC阻塞_端口转发DMZ和UPnP',
                component: ComponentCreator('/articles/bitcomet-port-forwarding/BC阻塞_端口转发DMZ和UPnP', '7e0'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-port-forwarding/BC阻塞_防火墙和nat',
                component: ComponentCreator('/articles/bitcomet-port-forwarding/BC阻塞_防火墙和nat', '235'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-port-forwarding/BC阻塞_光猫',
                component: ComponentCreator('/articles/bitcomet-port-forwarding/BC阻塞_光猫', 'f4e'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-port-forwarding/BC阻塞_交换机和路由器',
                component: ComponentCreator('/articles/bitcomet-port-forwarding/BC阻塞_交换机和路由器', '8eb'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-port-forwarding/BC阻塞_路由器',
                component: ComponentCreator('/articles/bitcomet-port-forwarding/BC阻塞_路由器', '3cb'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-port-forwarding/BC阻塞_目标与困难',
                component: ComponentCreator('/articles/bitcomet-port-forwarding/BC阻塞_目标与困难', '9c6'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-port-forwarding/BC阻塞_前言',
                component: ComponentCreator('/articles/bitcomet-port-forwarding/BC阻塞_前言', '170'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-port-forwarding/BC阻塞_特别篇',
                component: ComponentCreator('/articles/bitcomet-port-forwarding/BC阻塞_特别篇', '541'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-port-forwarding/BC阻塞_网络结构',
                component: ComponentCreator('/articles/bitcomet-port-forwarding/BC阻塞_网络结构', '52f'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-port-forwarding/BC阻塞_cs和p2p',
                component: ComponentCreator('/articles/bitcomet-port-forwarding/BC阻塞_cs和p2p', 'fed'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-port-forwarding/BC阻塞_ip和端口',
                component: ComponentCreator('/articles/bitcomet-port-forwarding/BC阻塞_ip和端口', '709'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-port-forwarding/BC阻塞_ipv6',
                component: ComponentCreator('/articles/bitcomet-port-forwarding/BC阻塞_ipv6', '37e'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-port-forwarding/BC阻塞_nat',
                component: ComponentCreator('/articles/bitcomet-port-forwarding/BC阻塞_nat', '481'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-port-forwarding/BC阻塞-win',
                component: ComponentCreator('/articles/bitcomet-port-forwarding/BC阻塞-win', 'f03'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/ipv6-transition/CF双栈代理',
                component: ComponentCreator('/articles/ipv6-transition/CF双栈代理', '3ef'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/ipv6-transition/Win端口转发',
                component: ComponentCreator('/articles/ipv6-transition/Win端口转发', 'a53'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/ipv6-transition/win防火墙拦截IPv6',
                component: ComponentCreator('/articles/ipv6-transition/win防火墙拦截IPv6', 'c76'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/lucky-STUN/邮件通知端口',
                component: ComponentCreator('/articles/lucky-STUN/邮件通知端口', '9b6'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/lucky-STUN/在dynv6和CF上更新TXT',
                component: ComponentCreator('/articles/lucky-STUN/在dynv6和CF上更新TXT', '026'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/lucky-STUN/cf-srv设置',
                component: ComponentCreator('/articles/lucky-STUN/cf-srv设置', '872'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/lucky-STUN/lucky-ddns',
                component: ComponentCreator('/articles/lucky-STUN/lucky-ddns', 'f22'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/lucky-STUN/lucky-ddns-2.15',
                component: ComponentCreator('/articles/lucky-STUN/lucky-ddns-2.15', 'e89'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/lucky-STUN/lucky-tls-自动化',
                component: ComponentCreator('/articles/lucky-STUN/lucky-tls-自动化', '007'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/lucky-STUN/lucky-vxkex兼容',
                component: ComponentCreator('/articles/lucky-STUN/lucky-vxkex兼容', '34e'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/lucky-STUN/lucky-web',
                component: ComponentCreator('/articles/lucky-STUN/lucky-web', 'a2a'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/lucky-STUN/stun-bc端口自动化',
                component: ComponentCreator('/articles/lucky-STUN/stun-bc端口自动化', '2f2'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/lucky-STUN/stun-cf重定向',
                component: ComponentCreator('/articles/lucky-STUN/stun-cf重定向', '026'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/lucky-STUN/stun-docker-upnp',
                component: ComponentCreator('/articles/lucky-STUN/stun-docker-upnp', 'eda'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/lucky-STUN/stun-mc-srv',
                component: ComponentCreator('/articles/lucky-STUN/stun-mc-srv', '9d4'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/lucky-STUN/stun-qb端口自动化',
                component: ComponentCreator('/articles/lucky-STUN/stun-qb端口自动化', '4bc'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/lucky-STUN/stun-tr修改端口',
                component: ComponentCreator('/articles/lucky-STUN/stun-tr修改端口', 'd29'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/lucky-STUN/stun-v4-v6分离',
                component: ComponentCreator('/articles/lucky-STUN/stun-v4-v6分离', '7f7'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/lucky-STUN/stun-VNT组网',
                component: ComponentCreator('/articles/lucky-STUN/stun-VNT组网', '997'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/lucky-STUN/stun-web服务-CF',
                component: ComponentCreator('/articles/lucky-STUN/stun-web服务-CF', '558'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/lucky-STUN/stun穿透-bt',
                component: ComponentCreator('/articles/lucky-STUN/stun穿透-bt', '79d'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/lucky-STUN/svcb记录隐藏端口',
                component: ComponentCreator('/articles/lucky-STUN/svcb记录隐藏端口', '147'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/lucky-STUN/uptime-upnp保活',
                component: ComponentCreator('/articles/lucky-STUN/uptime-upnp保活', '4ed'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/research-logs/爱奇艺HCDN',
                component: ComponentCreator('/articles/research-logs/爱奇艺HCDN', '286'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/research-logs/废弃方案-使用lucky端口转发固定STUN穿透端口',
                component: ComponentCreator('/articles/research-logs/废弃方案-使用lucky端口转发固定STUN穿透端口', '9ac'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/research-logs/小米路由更多IPv6获取方式',
                component: ComponentCreator('/articles/research-logs/小米路由更多IPv6获取方式', 'c9d'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/research-logs/已知bittorrent客户端生存调查/已知客户端调查-说明',
                component: ComponentCreator('/articles/research-logs/已知bittorrent客户端生存调查/已知客户端调查-说明', '801'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/research-logs/B站专栏文本复制问题',
                component: ComponentCreator('/articles/research-logs/B站专栏文本复制问题', '888'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/research-logs/BC改进建议',
                component: ComponentCreator('/articles/research-logs/BC改进建议', '137'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/research-logs/Docusaurus-最后修改时间',
                component: ComponentCreator('/articles/research-logs/Docusaurus-最后修改时间', '7b2'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/research-logs/emule的ip绑定',
                component: ComponentCreator('/articles/research-logs/emule的ip绑定', '455'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/research-logs/L2TP特性研究',
                component: ComponentCreator('/articles/research-logs/L2TP特性研究', 'c88'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/research-logs/qb匿名模式名称显示研究',
                component: ComponentCreator('/articles/research-logs/qb匿名模式名称显示研究', '497'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/research-logs/research-index',
                component: ComponentCreator('/articles/research-logs/research-index', '9a2'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/research-logs/win休眠问题',
                component: ComponentCreator('/articles/research-logs/win休眠问题', '725'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/virtual-private-network/et从记录获取端口',
                component: ComponentCreator('/articles/virtual-private-network/et从记录获取端口', 'daf'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/virtual-private-network/gost-bt-穿透',
                component: ComponentCreator('/articles/virtual-private-network/gost-bt-穿透', 'd1d'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/virtual-private-network/SE解决不支持此功能问题',
                component: ComponentCreator('/articles/virtual-private-network/SE解决不支持此功能问题', 'cf8'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/virtual-private-network/win搭建easytier公共服务器',
                component: ComponentCreator('/articles/virtual-private-network/win搭建easytier公共服务器', 'd2a'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/bitcomet-FAQ',
                component: ComponentCreator('/bitcomet-FAQ', '0ac'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/bitcomet-port-forwarding',
                component: ComponentCreator('/bitcomet-port-forwarding', '1e7'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/ipv6-transition',
                component: ComponentCreator('/ipv6-transition', '9f1'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/lucky-STUN',
                component: ComponentCreator('/lucky-STUN', 'cc3'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/research-logs',
                component: ComponentCreator('/research-logs', '00a'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/the-index',
                component: ComponentCreator('/the-index', 'b5b'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/virtual-private-network',
                component: ComponentCreator('/virtual-private-network', '9c2'),
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
