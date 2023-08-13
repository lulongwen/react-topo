/**
 * umi4新特性
 * MFSU 代替 esbuild，fastRefresh 热更新
 * https://umijs.org/blog/mfsu-independent-usage#esbuild-handler
 *
 * 忽略 moment 的 locale 文件，用于减少产物尺寸
 * ignoreMomentLocale: true, 默认 true
 *
 */
import { defineConfig } from '@umijs/max';

export default defineConfig({
  plugins: [
    // https://github.com/zthxxx/react-dev-inspector
    // 'react-dev-inspector/plugins/umi/react-inspector',
  ],

  // https://github.com/zthxxx/react-dev-inspector#inspector-loader-props
  // inspectorConfig: {
  //   // exclude: [],
  //   // babelPlugins: [],
  //   // babelOptions: {},
  // },
  // chainWebpack(config, { webpack }) {
  //   config
  //     .plugin('moment-locale')
  //     .use(webpack.ContextReplacementPlugin, [/moment[\/\\]locale$/, /en|zh-cn/]);
  // },
});
