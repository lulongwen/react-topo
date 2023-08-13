/**
 * .umirc.ts 优先级高于 config/config.ts
 * https://umijs.org/docs/guides/directory-structure#umircts
 *
 * 配置文档参考
 * https://umijs.org/docs/api/config
 */

import { defineConfig } from "@umijs/max";
// import { join } from 'path';

import pkg from '../package.json';
import defaultSettings from "./defaultSettings";
import routes from "./routes";
// import externals from './externals';
// import theme from './theme';

// const { REACT_APP_ENV } = process.env;
// console.log('process.env.NODE_ENV', process.env.NODE_ENV)
// const isEnvProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  title: pkg.title, // 初始化全局页面标题，页面切换会替换掉
  base: `/${pkg.name}/`,
  // publicPath: buildPath[env], /root/
  outputPath: "build", // 修改输出目录
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  qiankun: {
    slave: {},
  },
  // hash: false, // 让 build 之后的资源包含 hash 后缀
  // history: { 默认值：{ type: 'browser' }
  //   type: 'browser', 'browser' | 'hash' | 'memory'
  // },
  // 只设置 dev 阶段的 sourcemap
  devtool: process.env.NODE_ENV === "development" ? "eval" : false,
  // 生产环境去除 console
  // terserOptions: { compress: {drop_console: isEnvProduction}},
  // ignoreMomentLocale: true,
  // devServer: {open: true, port: 80},
  // dynamicImport: false,
  // 开启 dynamicImport，打包后会按需加载
  // dynamicImport: {
  //   loading: '@/pages/Loading', // '@ant-design/pro-layout/es/PageLoading',
  // },
  // build 打包成一个文件
  extraBabelPlugins:
    process.env.NODE_ENV === "production"
      ? ["babel-plugin-dynamic-import-node"]
      : [],
  layout: {
    locale: true, // 默认开启，如无需菜单国际化可关闭
    ...defaultSettings,
  },
  // ...externals,
  routes,
  // theme,
  // proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: "/",
  },
  // openAPI: [
  //   {
  //     requestLibPath: "import { request } from 'umi'",
  //     // 或者使用在线的版本
  //     // schemaPath: "https://gw.alipayobjects.com/os/antfincdn/M%24jrzTTYJN/oneapi.json"
  //     schemaPath: join(__dirname, 'oneapi.json'),
  //     mock: false,
  //   },
  //   {
  //     requestLibPath: "import { request } from 'umi'",
  //     schemaPath: 'https://gw.alipayobjects.com/os/antfincdn/CA1dOm%2631B/openapi.json',
  //     projectName: 'swagger',
  //   },
  // ],
  npmClient: "yarn",
  // mfsu: {},
  // exportStatic: {},
  tailwindcss: {},
});
