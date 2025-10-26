import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
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
    component: ComponentCreator('/', '81b'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '714'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '42a'),
            routes: [
              {
                path: '/articles/bitcomet-FAQ/BC-anti-leech',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC-anti-leech', 'f06'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC-anti-leech-2',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC-anti-leech-2', '298'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC-config-recovery',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC-config-recovery', '2b3'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC-disk-boost-service',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC-disk-boost-service', 'd74'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC-download-99',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC-download-99', 'dc6'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC-download-speed-issues-2',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC-download-speed-issues-2', '9f9'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC-download-speed-test',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC-download-speed-test', '1cc'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC-expert-mode',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC-expert-mode', '2f3'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC-failed-piece',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC-failed-piece', '136'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC-get-metadata-error',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC-get-metadata-error', '75e'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC-historical-issues',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC-historical-issues', 'a1d'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC-magnet-link-form',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC-magnet-link-form', 'c98'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC-magnet-link-length',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC-magnet-link-length', '5e4'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC-OOM',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC-OOM', '27b'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC-player-path',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC-player-path', 'faa'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC-poor-internet',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC-poor-internet', 'b34'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC-port-forwarding-FAQ',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC-port-forwarding-FAQ', '56c'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC-reseed-99',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC-reseed-99', '32e'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC-rumor',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC-rumor', 'c94'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC-screenshots-and-comments',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC-screenshots-and-comments', '380'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC-torrent-market',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC-torrent-market', '557'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/BC-user-list',
                component: ComponentCreator('/articles/bitcomet-FAQ/BC-user-list', '3b0'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/fort-firewall-anti-leech',
                component: ComponentCreator('/articles/bitcomet-FAQ/fort-firewall-anti-leech', '092'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/reupload-xiang-su-di-bc-tutorial',
                component: ComponentCreator('/articles/bitcomet-FAQ/reupload-xiang-su-di-bc-tutorial', 'ed1'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-FAQ/win-firewall-anti-leech',
                component: ComponentCreator('/articles/bitcomet-FAQ/win-firewall-anti-leech', '6c2'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-port-forwarding/cs-and-p2p',
                component: ComponentCreator('/articles/bitcomet-port-forwarding/cs-and-p2p', '5b8'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-port-forwarding/firewall-and-nat',
                component: ComponentCreator('/articles/bitcomet-port-forwarding/firewall-and-nat', 'b08'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-port-forwarding/goals-and-difficulties',
                component: ComponentCreator('/articles/bitcomet-port-forwarding/goals-and-difficulties', '20a'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-port-forwarding/ip-and-port',
                component: ComponentCreator('/articles/bitcomet-port-forwarding/ip-and-port', '58f'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-port-forwarding/modem-settings',
                component: ComponentCreator('/articles/bitcomet-port-forwarding/modem-settings', '0cf'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-port-forwarding/network-structure',
                component: ComponentCreator('/articles/bitcomet-port-forwarding/network-structure', 'a88'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-port-forwarding/port-forwarding-DMZ-and-UPnP',
                component: ComponentCreator('/articles/bitcomet-port-forwarding/port-forwarding-DMZ-and-UPnP', '68b'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-port-forwarding/preface',
                component: ComponentCreator('/articles/bitcomet-port-forwarding/preface', '796'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-port-forwarding/router-settings',
                component: ComponentCreator('/articles/bitcomet-port-forwarding/router-settings', '87c'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-port-forwarding/special-episode',
                component: ComponentCreator('/articles/bitcomet-port-forwarding/special-episode', '1ad'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-port-forwarding/switches-and-routers',
                component: ComponentCreator('/articles/bitcomet-port-forwarding/switches-and-routers', '677'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-port-forwarding/what-is-ipv6',
                component: ComponentCreator('/articles/bitcomet-port-forwarding/what-is-ipv6', '52f'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-port-forwarding/what-is-nat',
                component: ComponentCreator('/articles/bitcomet-port-forwarding/what-is-nat', '50f'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/bitcomet-port-forwarding/win-settings',
                component: ComponentCreator('/articles/bitcomet-port-forwarding/win-settings', '53b'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/ipv6-transition/cf-IPv6-dual-stack-proxy',
                component: ComponentCreator('/articles/ipv6-transition/cf-IPv6-dual-stack-proxy', '135'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/ipv6-transition/win-firewall-block-IPv6',
                component: ComponentCreator('/articles/ipv6-transition/win-firewall-block-IPv6', 'da4'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/ipv6-transition/win-port-forwarding',
                component: ComponentCreator('/articles/ipv6-transition/win-port-forwarding', 'd11'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/lucky-STUN/cf-srv-record-settings',
                component: ComponentCreator('/articles/lucky-STUN/cf-srv-record-settings', 'a3b'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/lucky-STUN/email-notification-port',
                component: ComponentCreator('/articles/lucky-STUN/email-notification-port', '8d0'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/lucky-STUN/lucky-ddns',
                component: ComponentCreator('/articles/lucky-STUN/lucky-ddns', '059'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/lucky-STUN/lucky-ddns-2.15',
                component: ComponentCreator('/articles/lucky-STUN/lucky-ddns-2.15', 'fdd'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/lucky-STUN/lucky-tls-automation',
                component: ComponentCreator('/articles/lucky-STUN/lucky-tls-automation', '2de'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/lucky-STUN/lucky-vxkex-compatible',
                component: ComponentCreator('/articles/lucky-STUN/lucky-vxkex-compatible', '047'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/lucky-STUN/lucky-web',
                component: ComponentCreator('/articles/lucky-STUN/lucky-web', '00b'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/lucky-STUN/stun-bc-port-automation',
                component: ComponentCreator('/articles/lucky-STUN/stun-bc-port-automation', 'cba'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/lucky-STUN/stun-bt',
                component: ComponentCreator('/articles/lucky-STUN/stun-bt', '6e4'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/lucky-STUN/stun-cf-redirection',
                component: ComponentCreator('/articles/lucky-STUN/stun-cf-redirection', '145'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/lucky-STUN/stun-docker-upnp',
                component: ComponentCreator('/articles/lucky-STUN/stun-docker-upnp', '664'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/lucky-STUN/stun-mc-srv',
                component: ComponentCreator('/articles/lucky-STUN/stun-mc-srv', 'dce'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/lucky-STUN/stun-qb-port-automation',
                component: ComponentCreator('/articles/lucky-STUN/stun-qb-port-automation', '8b7'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/lucky-STUN/stun-tr-modify-port',
                component: ComponentCreator('/articles/lucky-STUN/stun-tr-modify-port', 'a55'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/lucky-STUN/stun-v4-v6-redirect',
                component: ComponentCreator('/articles/lucky-STUN/stun-v4-v6-redirect', '16d'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/lucky-STUN/stun-VNT-networkin',
                component: ComponentCreator('/articles/lucky-STUN/stun-VNT-networkin', '683'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/lucky-STUN/stun-web-serve-CF',
                component: ComponentCreator('/articles/lucky-STUN/stun-web-serve-CF', '2e3'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/lucky-STUN/svcb-records-hidden-ports',
                component: ComponentCreator('/articles/lucky-STUN/svcb-records-hidden-ports', '598'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/lucky-STUN/update-TXT-record-on-cf-and-dynv6',
                component: ComponentCreator('/articles/lucky-STUN/update-TXT-record-on-cf-and-dynv6', '317'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/lucky-STUN/uptime-upnp-keep-alive',
                component: ComponentCreator('/articles/lucky-STUN/uptime-upnp-keep-alive', 'c3e'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/research-logs/爱奇艺HCDN',
                component: ComponentCreator('/articles/research-logs/爱奇艺HCDN', 'fee'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/research-logs/废弃方案-使用lucky端口转发固定STUN穿透端口',
                component: ComponentCreator('/articles/research-logs/废弃方案-使用lucky端口转发固定STUN穿透端口', '3c3'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/research-logs/小米路由更多IPv6获取方式',
                component: ComponentCreator('/articles/research-logs/小米路由更多IPv6获取方式', '496'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/research-logs/已知bittorrent客户端生存调查/已知客户端调查-说明',
                component: ComponentCreator('/articles/research-logs/已知bittorrent客户端生存调查/已知客户端调查-说明', 'fa7'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/research-logs/B站专栏文本复制问题',
                component: ComponentCreator('/articles/research-logs/B站专栏文本复制问题', 'f52'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/research-logs/BC改进建议',
                component: ComponentCreator('/articles/research-logs/BC改进建议', '37d'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/research-logs/Docusaurus-最后修改时间',
                component: ComponentCreator('/articles/research-logs/Docusaurus-最后修改时间', '470'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/research-logs/emule的ip绑定',
                component: ComponentCreator('/articles/research-logs/emule的ip绑定', 'e66'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/research-logs/L2TP特性研究',
                component: ComponentCreator('/articles/research-logs/L2TP特性研究', 'c45'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/research-logs/qb匿名模式名称显示研究',
                component: ComponentCreator('/articles/research-logs/qb匿名模式名称显示研究', '7f5'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/research-logs/research-index',
                component: ComponentCreator('/articles/research-logs/research-index', 'cb1'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/research-logs/win休眠问题',
                component: ComponentCreator('/articles/research-logs/win休眠问题', 'a19'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/virtual-private-network/easytier-get-port-form-dns-record',
                component: ComponentCreator('/articles/virtual-private-network/easytier-get-port-form-dns-record', '680'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/virtual-private-network/gost-bt-NAT-Penetration',
                component: ComponentCreator('/articles/virtual-private-network/gost-bt-NAT-Penetration', '8b2'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/virtual-private-network/setup-easytier-server-on-win',
                component: ComponentCreator('/articles/virtual-private-network/setup-easytier-server-on-win', 'd51'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/articles/virtual-private-network/softether-enterprise-functions-unlock',
                component: ComponentCreator('/articles/virtual-private-network/softether-enterprise-functions-unlock', '444'),
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
                component: ComponentCreator('/the-index', '4af'),
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
                component: ComponentCreator('/', 'e0f'),
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
