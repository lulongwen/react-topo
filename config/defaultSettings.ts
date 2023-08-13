/**
 * https://umijs.org/zh-CN/plugins/plugin-layout
 * layout配置参考 https://umijs.org/docs/max/layout-menu
 */

import { ProLayoutProps } from '@ant-design/pro-components';
import pkg from '../package.json';
import { token } from './token';

interface Props {
  pwa: boolean;
  logo?: string;
}

const Settings: ProLayoutProps & Props = {
  title: pkg.title, // 网站名字
  logo: '//lulongwen.com/libs/svg/topo.svg',
  pwa: false,
  iconfontUrl: '',
  token,
  navTheme: 'light', // 浅色主题
  layout: 'mix', // side: 左侧导航 top: 顶部导航 mix: 混合式导航
  contentWidth: 'Fluid',
  fixedHeader: true,
  fixSiderbar: true,
  colorWeak: false,
  siderWidth: 192,
  // "colorPrimary": "#52c41a",
  // "primaryColor": "#52C41A",
  // "siderMenuType": "sub",
  splitMenus: false, // 切割菜单，只在 mix下有效
  // footerRender: false, // 是否显示页脚
  // headerRender: false, // 不展示顶栏
  // target: '_blank', // 新页面打开
  // menuRender: false, // 不展示菜单
  // menuHeaderRender: false, // 不展示菜单顶栏
  // access: 'canRead', // 权限配置，需要与plugin-access插件配合使用
  // hideChildrenInMenu: true,// 隐藏子菜单
  // hideInMenu: true,  // 隐藏自己和子菜单
  // hideInBreadcrumb: true, // 在面包屑中隐藏
  // flatMenu: true, // 子项往上提，仍旧展示,
};

export default Settings;
