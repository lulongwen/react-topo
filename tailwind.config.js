/**
 * preflight: false 禁用 tailwind 默认样式
 * 解决css覆盖 antd Button样式
 */

module.exports = {
  content: [
    './src/pages/**/*.{jsx,ts,tsx}',
    './src/components/**/*.{jsx,ts,tsx}',
    './src/layouts/**/*.{jsx,ts,tsx}',
    // './src/layouts/**/*.tsx',
  ],
  corePlugins: {
    // 禁用 tailwind的默认样式 base.css
    preflight: false,
  }
}
