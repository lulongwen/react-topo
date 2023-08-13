import * as antd from 'antd';
import { kebabCase } from 'lodash';

// const suffixJs = process.env.NODE_ENV === 'development' ? '.js' : '.min.js';

/**
 * 批量扩展，按组件扩展 antd/es/alert -> antd.Alert
 * 还是打包进来的组件
 * antd/es/locale/zh_CN.js
 * @ant-design/icons/lib/components/AntdIcon.js
 *
 * 如果 antd使用了 babel-plugin-import, 需要关闭 babel-plugin-import；
 * 不然的话，引入还是 antd/es/xxx, externals会匹配不到 antd
 * 因为引入的不是 antd，而是 antd/es/xxx, 要搜下 webpack的文档解决
 * https://github.com/umijs/umi/issues/4542
 * 那 externals的设置就会不一样，就要按照引入 antd单独组件的格式来设置
 *
 * 同理，lodash也存在 lodash-es的版本引入，需要处理下
 */
const externalAntd = Object.keys(antd).reduce((prev, key) => {
  // 转为中横线 fooBar -> foo-bar
  const _key: string = `antd/es/${kebabCase(key)}`;
  // @ts-ignore
  prev[_key] = `window.antd.${key}`;
  return prev;
}, {});

export default {
  externals: {
    // import react from 'react' 会替换为 const react = window.React
    react: 'React', // React 是库的全局变量，不是自定的
    'react-dom': 'ReactDOM',
    moment: 'moment',
    'moment/locale/zh-cn': 'moment.locale',
    'moment/locale/zh-tw': 'moment.locale',
    'moment/locale/pt-br': 'moment.locale',
    'moment/locale/bn-bd': 'moment.locale',
    'moment/locale/ja': 'moment.locale',
    'moment/locale/fa': 'moment.locale',
    'moment/locale/id': 'moment.locale',
    // 'moment/locale/en': 'moment.locale',
    '../moment': 'moment', // 不添加这个 moment还会打包进去

    lodash: '_',
    'lodash-es ': '_',
    'lodash/isPlainObject': '_.isPlainObject',
    'lodash/toPlainObject': '_.toPlainObject',
    'lodash/debounce': '_.debounce',
    'lodash/throttle': '_.throttle',
    'lodash/toNumber': '_.toNumber',
    'lodash/memoize': '_.memoize',
    'lodash/map': '_.map',
    'lodash/isSymbol': '_.isSymbol',
    'lodash/keys': '_.keys',
    'lodash/keysIn': '_.keysIn',
    'lodash/get': '_.get',
    'lodash/stubArray': '_.stubArray',
    'lodash/stubFalse': '_.stubFalse',
    'lodash/identity': '_.identity',
    'lodash/constant': '_.constant',
    'lodash/eq': '_.eq',
    'lodash/toString': '_.toString',
    'lodash/cloneDeep': '_.cloneDeep',
    'lodash/merge': '_.merge',
    'lodash/property': '_.property',
    'lodash/forEach': '_.forEach',
    'lodash/now': '_.now',
    'lodash/isArrayLikeObject': '_.isArrayLikeObject',
    'lodash/hasIn': '_.hasIn',
    'lodash/forOwn': '_.forOwn',
    'lodash/isString': '_.isString',
    'lodash/isLength': '_.isLength',
    'lodash/isBuffer': '_.isBuffer',
    'lodash/isArray': '_.isArray',
    'lodash/isArrayLike': '_.isArrayLike',
    'lodash/isObject': '_.isObject',
    'lodash/isObjectLike': '_.isObjectLike',
    'lodash/isFunction': '_.isFunction',
    'lodash/isTypedArray': '_.isTypedArray',
    'lodash/isSet': '_.isSet',
    'lodash/isMap': '_.isMap',
    'lodash/isArguments': '_.isArguments',
    'lodash/each': '_.each',
    'lodash.debounce': '_.debounce',
    'lodash.escape': '_.escape',
    'lodash.flattendeep': '_.flattendeep',
    'lodash.get': '_.get',
    'lodash.groupby': '_.groupby',
    'lodash.isequal': '_.isequal',
    'lodash.merge': '_.merge',
    'lodash.omit': '_.omit',
    'lodash.throttle': '_.throttle',
    'lodash.tonumber': '_.tonumber',
    'lodash.truncate': '_.truncate',
    'lodash.zip': '_.zip',
    // 代码运行在Node环境，需要在externals中添加前缀 commonjs2 或者 commonjs
    // lodash:'commonjs2 lodash'
    // 库打包为UMD格式，即：libraryTarget: 'umd'，需要配置一个对象
    // lodash: {
    //   commonjs: 'lodash',
    //   commonjs2: 'lodash',
    //   amd: '_',
    //   root: '_', // indicates global variable
    // },
    antd: 'antd',
    // 'antd/es/table': 'antd.Table',
    ...externalAntd,
    // '@ant-design/icons': {
    //   commonjs: 'icons',
    //   commonjs2: 'icons',
    //   amd: 'icons',
    //   root: 'icons', // indicates global variable
    // },
    '@ant-design/icons': 'icons',
    '@ant-design/icons/es/components/IconFont':
      'window.icons.createFromIconfontCN',
    '@ant-design/icons/lib/icons/SmileOutlined': 'icons.SmileOutlined',
    '@ant-design/icons/lib/icons/CrownOutlined': 'icons.CrownOutlined',
    '@ant-design/icons/lib/icons/TableOutlined': 'icons.TableOutlined',
    '@ant-design/icons/lib/icons/ArrowRightOutlined':
      'icons.ArrowRightOutlined',
    '@ant-design/icons/lib/icons/ArrowLeftOutlined': 'icons.ArrowLeftOutlined',
    '@ant-design/icons/SmileOutlined': 'icons.SmileOutlined',
    '@ant-design/icons/CrownOutlined': 'icons.CrownOutlined',
    '@ant-design/icons/TableOutlined': 'icons.TableOutlined',
    '@ant-design/icons/ArrowRightOutlined': 'icons.ArrowRightOutlined',
    '@ant-design/icons/ArrowLeftOutlined': 'icons.ArrowLeftOutlined',
    // '@ant-design/icons-svg/lib/asn/SmileOutlined': 'icons.SmileOutlined',
    // '@ant-design/icons-svg/lib/asn/CrownOutlined': 'icons.CrownOutlined',
    // '@ant-design/icons-svg/lib/asn/TableOutlined': 'icons.TableOutlined',
    // '@ant-design/icons-svg/lib/asn/ArrowRightOutlined': 'icons.ArrowRightOutlined',
    // '@ant-design/icons-svg/lib/asn/ArrowLeftOutlined': 'icons.ArrowLeftOutlined',
    // '@ant-design/icons': 'Icon',
    // '@ant-design/pro-form': 'ProForm',
    // '@ant-design/pro-layout': 'ProLayout'
    // xlsx: 'XLSX',
    // ramda: 'R',
  },
  styles: [
    // 'https://g.alicdn.com/code/lib/antd/4.18.5/antd.min.css',
    'https://cdn.bootcdn.net/ajax/libs/antd/4.24.2/antd.min.css',
  ],
  crossorigin: true,
  scripts: [
    // 'https://g.alicdn.com/code/lib/react/17.0.2/umd/react.development.js',
    // 'https://g.alicdn.com/code/lib/antd/4.18.5/antd-with-locales.js',
    'https://cdn.bootcdn.net/ajax/libs/react/17.0.2/umd/react.development.js',
    'https://cdn.bootcdn.net/ajax/libs/react-dom/17.0.2/umd/react-dom.development.js',
    // 'https://cdn.bootcdn.net/ajax/libs/moment.js/2.29.4/moment-with-locales.min.js',
    'https://cdn.bootcdn.net/ajax/libs/moment.js/2.29.4/moment.min.js',
    'https://cdn.bootcdn.net/ajax/libs/moment.js/2.29.4/locale/zh-cn.min.js',
    'https://cdn.bootcdn.net/ajax/libs/lodash.js/4.17.21/lodash.min.js',
    'https://cdn.bootcdn.net/ajax/libs/antd/4.24.2/antd-with-locales.js',
    'https://cdn.bootcdn.net/ajax/libs/ant-design-icons/4.7.0/index.umd.min.js',
    // 'https://cdn.bootcdn.net/ajax/libs/antd/4.24.2/antd.min.js',
  ],
};
