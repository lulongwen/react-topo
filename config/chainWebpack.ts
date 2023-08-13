/**
 * @author lulongwen
 * Date: 2022-09-28 20:51
 * Description:
 * 开发时使用 chunk，cache和esbuild-loader 减少打包时间
 * esbuild-loader 不支持 typescript 的 emitDecoratorMetadata
 * 如果需要 emitDecoratorMetadata 可以将 esbuild-loader 换成 swc
 * https://swc.rs/docs/usage/swc-loader
 */

export default {
  chunks: ['vendors', 'umi'],
  // @ts-ignore development 会报错
  chainWebpack: function (config, { webpack }) {
    config.merge({
      // https://webpack.js.org/configuration/cache/
      cache: {
        type: 'filesystem',
      },
      optimization: {
        // moduleIds: 'deterministic',
        minimize: true,
        splitChunks: {
          chunks: 'async', // initial、async和all
          minSize: 30000, // 形成一个新代码块最小的体积
          minChunks: 2, // 引入两次及以上被打包
          automaticNameDelimiter: '.',
          cacheGroups: {
            vendor: {
              // 打包两个页面的公共代码
              name: 'vendors', // 分离包的名字
              test: /^.*node_modules[\\/](?!lodash|antd|moment).*$/,
              chunks: 'all',
              priority: 100, // 打包优先级
            },
            echarts: {
              name: 'echarts',
              test: /[\\/]node_modules[\\/]echarts[\\/]/,
              chunks: 'async',
              priority: 100,
            },
            commons: {
              // 其余同步加载包
              name: 'commons',
              chunks: 'all',
              minChunks: 2,
              priority: 80,
            },
          },
        },
      },
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            loader: 'esbuild-loader',
            options: {
              loader: 'tsx',
              target: 'esnext',
            },
          },
        ],
      },
    });

    //过滤掉 moment的那些不使用的国际化文件
    config
      .plugin('replace')
      .use(require('webpack').ContextReplacementPlugin)
      .tap(() => {
        return [/moment[/\\]locale$/, /zh-cn/];
      });
  },

  // prod
  // chainWebpack: function (config, { webpack }) {
  //   config.merge({
  //     optimization: {
  //       minimize: true,
  //       usedExports: true,
  //     },
  //   });
  // },
};
