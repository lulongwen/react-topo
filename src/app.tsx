/**
 * 运行时配置
 * https://umijs.org/docs/api/runtime-config#dva
 */
// import { pathToRegexp } from 'path-to-regexp';
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';

import { DEFAULT_NAME } from '@/constants';
import Settings from '../config/defaultSettings';

dayjs.locale('zh-cn');

const purePath = [
  '/designer',
  '/publish',
  '/knowledge/create',
  '/knowledge/editor',
]

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: DEFAULT_NAME };
}

export const layout = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [collapsed, setCollapsed] = useState(false);
  // console.log('initialState', props, window.location.pathname);
  return {
    ...Settings,
    pure: !!purePath.find(path => location.pathname.includes(path)),
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
      type: 'group',
    },
    avatarProps: {
      src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
      size: 'small',
      title: 'lulongwen',
    },
    breakpoint: false,
    // 关闭默认的折叠按钮
    collapsedButtonRender: false,
    collapsed,
    onCollapse: (flag: boolean) => setCollapsed(flag),
    headerContentRender: () => {
      return (
        <div className="header-render" onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
      );
    },
    menuFooterRender: (props: any) => {
      if (props?.collapsed) return undefined;
      return (
        <p
          style={{
            textAlign: 'center',
            paddingBlockStart: 12,
          }}
        >
          Power by {DEFAULT_NAME}
        </p>
      );
    },
    bgLayoutImgList: [
      {
        src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
        left: 85,
        bottom: 100,
        height: '303px',
      },
      {
        src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
        bottom: -68,
        right: -45,
        height: '303px',
      },
      {
        src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
        bottom: 0,
        left: 0,
        width: '331px',
      },
    ],
    // dva: {
    //   hmr: true,
    // },
  };
};

// export function onRouteChange({ location, clientRoutes, routes, action, basename }: any) {
//   console.log(800, location, clientRoutes, routes, action, basename);
// }
