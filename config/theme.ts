/**
 * 配置 less 变量主题 https://umijs.org/docs/api/config#theme
 * antd 定制主题 https://ant.design/docs/react/customize-theme-cn
 */

// import aliyunTheme from '@ant-design/aliyun-theme';

export default {
  // ...aliyunTheme,
  // 'root-entry-name': 'variable',
  '@primary-color': '#52c41a',
  '@font-size-sm': '13px',
  '@font-size-base': '13px',
  // 'primary-color': 'rgb(75, 12, 255)',
  'root-entry-name': 'default',
  // 修改标题字体大小
  '@page-header-heading-title': '24px',
  // '@height-base': '24px', // 会影响到 button
  '@descriptions-title-margin-bottom': '8px',
  '@layout-footer-padding': '0',
};
