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
    component: ComponentCreator('/', '783'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '70e'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '5bf'),
            routes: [
              {
                path: '/articles/bitcomet-FAQ/BC-anti-leech',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC-anti-leech', '988'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC-anti-leech-2',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC-anti-leech-2', '93d'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC-config-recovery',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC-config-recovery', 'a44'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC-disk-boost-service',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC-disk-boost-service', '7d8'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC-download-99',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC-download-99', 'c14'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC-download-speed-issues-2',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC-download-speed-issues-2', '06b'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC-download-speed-test',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC-download-speed-test', '328'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC-expert-mode',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC-expert-mode', '6e7'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC-failed-piece',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC-failed-piece', '5fa'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC-get-metadata-error',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC-get-metadata-error', '605'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC-historical-issues',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC-historical-issues', '3fb'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC-magnet-link-form',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC-magnet-link-form', '459'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC-magnet-link-length',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC-magnet-link-length', '63a'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC-OOM',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC-OOM', '0e5'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC-player-path',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC-player-path', 'd95'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC-poor-internet',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC-poor-internet', '339'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC-port-forwarding-FAQ',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC-port-forwarding-FAQ', '234'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC-reseed-99',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC-reseed-99', '89e'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC-rumor',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC-rumor', '3b3'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC-screenshots-and-comments',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC-screenshots-and-comments', 'd93'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC-torrent-market',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC-torrent-market', 'd9a'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC-user-list',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC-user-list', 'ef0'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/fort-firewall-anti-leech',
                component: ComponentCreator('/articles/bitcomet-FAQ/fort-firewall-anti-leech', '4bb'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/reupload-xiang-su-di-bc-tutorial',
                component: ComponentCreator('/articles/bitcomet-FAQ/reupload-xiang-su-di-bc-tutorial', '688'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/win-firewall-anti-leech',
                component: ComponentCreator('/articles/bitcomet-FAQ/win-firewall-anti-leech', 'fee'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-port-forwarding/cs-and-p2p',
                component: ComponentCreator('/articles/bitcomet-port-forwarding/cs-and-p2p', '195'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-port-forwarding/firewall-and-nat',
                component: ComponentCreator('/articles/bitcomet-port-forwarding/firewall-and-nat', 'f44'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-port-forwarding/goals-and-difficulties',
                component: ComponentCreator('/articles/bitcomet-port-forwarding/goals-and-difficulties', '218'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-port-forwarding/ip-and-port',
                component: ComponentCreator('/articles/bitcomet-port-forwarding/ip-and-port', 'ad0'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-port-forwarding/modem-settings',
                component: ComponentCreator('/articles/bitcomet-port-forwarding/modem-settings', 'ab3'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-port-forwarding/network-structure',
                component: ComponentCreator('/articles/bitcomet-port-forwarding/network-structure', 'cf2'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-port-forwarding/port-forwarding-DMZ-and-UPnP',
                component: ComponentCreator('/articles/bitcomet-port-forwarding/port-forwarding-DMZ-and-UPnP', 'df1'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-port-forwarding/preface',
                component: ComponentCreator('/articles/bitcomet-port-forwarding/preface', 'f35'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-port-forwarding/router-settings',
                component: ComponentCreator('/articles/bitcomet-port-forwarding/router-settings', '8e8'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-port-forwarding/special-episode',
                component: ComponentCreator('/articles/bitcomet-port-forwarding/special-episode', 'dd0'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-port-forwarding/switches-and-routers',
                component: ComponentCreator('/articles/bitcomet-port-forwarding/switches-and-routers', '543'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-port-forwarding/what-is-ipv6',
                component: ComponentCreator('/articles/bitcomet-port-forwarding/what-is-ipv6', '6cf'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-port-forwarding/what-is-nat',
                component: ComponentCreator('/articles/bitcomet-port-forwarding/what-is-nat', 'ac2'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-port-forwarding/win-settings',
                component: ComponentCreator('/articles/bitcomet-port-forwarding/win-settings', '7be'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/ipv6-transition/cf-IPv6-dual-stack-proxy',
                component: ComponentCreator('/articles/ipv6-transition/cf-IPv6-dual-stack-proxy', 'c26'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/ipv6-transition/win-firewall-block-IPv6',
                component: ComponentCreator('/articles/ipv6-transition/win-firewall-block-IPv6', '9bd'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/ipv6-transition/win-port-forwarding',
                component: ComponentCreator('/articles/ipv6-transition/win-port-forwarding', 'c7a'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/lucky-STUN/cf-srv-record-settings',
                component: ComponentCreator('/articles/lucky-STUN/cf-srv-record-settings', 'cf6'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/lucky-STUN/email-notification-port',
                component: ComponentCreator('/articles/lucky-STUN/email-notification-port', '3ba'),
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
                path: '/articles/lucky-STUN/lucky-tls-automation',
                component: ComponentCreator('/articles/lucky-STUN/lucky-tls-automation', '48f'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/lucky-STUN/lucky-vxkex-compatible',
                component: ComponentCreator('/articles/lucky-STUN/lucky-vxkex-compatible', '591'),
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
                path: '/articles/lucky-STUN/stun-bc-port-automation',
                component: ComponentCreator('/articles/lucky-STUN/stun-bc-port-automation', '84e'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/lucky-STUN/stun-bt',
                component: ComponentCreator('/articles/lucky-STUN/stun-bt', '461'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/lucky-STUN/stun-cf-redirection',
                component: ComponentCreator('/articles/lucky-STUN/stun-cf-redirection', '442'),
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
                path: '/articles/lucky-STUN/stun-qb-port-automation',
                component: ComponentCreator('/articles/lucky-STUN/stun-qb-port-automation', 'bb9'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/lucky-STUN/stun-tr-modify-port',
                component: ComponentCreator('/articles/lucky-STUN/stun-tr-modify-port', '659'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/lucky-STUN/stun-v4-v6-redirect',
                component: ComponentCreator('/articles/lucky-STUN/stun-v4-v6-redirect', '7a7'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/lucky-STUN/stun-VNT-networkin',
                component: ComponentCreator('/articles/lucky-STUN/stun-VNT-networkin', '255'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/lucky-STUN/stun-web-serve-CF',
                component: ComponentCreator('/articles/lucky-STUN/stun-web-serve-CF', 'ee2'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/lucky-STUN/svcb-records-hidden-ports',
                component: ComponentCreator('/articles/lucky-STUN/svcb-records-hidden-ports', 'de9'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/lucky-STUN/update-TXT-record-on-cf-and-dynv6',
                component: ComponentCreator('/articles/lucky-STUN/update-TXT-record-on-cf-and-dynv6', '66b'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/lucky-STUN/uptime-upnp-keep-alive',
                component: ComponentCreator('/articles/lucky-STUN/uptime-upnp-keep-alive', 'eff'),
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
                path: '/articles/virtual-private-network/easytier-get-port-form-dns-record',
                component: ComponentCreator('/articles/virtual-private-network/easytier-get-port-form-dns-record', 'aa3'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/virtual-private-network/gost-bt-NAT-Penetration',
                component: ComponentCreator('/articles/virtual-private-network/gost-bt-NAT-Penetration', '8e1'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/virtual-private-network/setup-easytier-server-on-win',
                component: ComponentCreator('/articles/virtual-private-network/setup-easytier-server-on-win', 'fd0'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/virtual-private-network/softether-enterprise-functions-unlock',
                component: ComponentCreator('/articles/virtual-private-network/softether-enterprise-functions-unlock', 'f26'),
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
