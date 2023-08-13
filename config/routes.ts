/**
 * @author lulongwen
 * Date: 2022-09-22 22:44:38
 * Update: 2022-09-27 22:59:04
 * Description: 注册页面所有的路由
 * https://umijs.org/docs/guides/routes
 */

export default [
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    name: '欢迎页',
    path: '/welcome',
    component: './Welcome',
    icon: 'HomeOutlined',
    //   target: '_blank', // 新页面打开
    //   headerRender: false, // 不展示顶栏
    //   footerRender: false, // 不展示页脚
    //   menuRender: false, // 不展示菜单
    //   menuHeaderRender: false, // 不展示菜单顶栏
  },
  {
    name: '组件测试',
    path: '/home',
    component: './Home',
    icon: 'HomeOutlined',
  },
  {
    name: '拓扑图',
    path: '/topology',
    routes: [
      { path: '/topology', redirect: 'list' },
      {
        name: '自定义拓扑',
        path: 'list',
        icon: 'ShareAltOutlined',
        component: './List',
      },
      {
        path: 'designer',
        component: './Designer',
      },
      {
        path: 'designer/:id',
        component: './Designer',
      }
    ],
  },
  {
    name: '知识卡片',
    path: '/knowledge',
    icon: 'CreditCardOutlined',
    routes: [
      { path: '/knowledge', redirect: 'list' },
      {
        path: 'list',
        component: './Knowledge',
      },
      {
        path: 'create',
        component: './Knowledge/CardDesign',
        target: '_blank', // 新页面打开
        headerRender: false, // 不展示顶栏
        footerRender: false, // 不展示页脚
        menuRender: false, // 不展示菜单
        menuHeaderRender: false, // 不展示菜单顶栏
      },
      {
        path: 'editor/:id',
        component: './Knowledge/CardEditor',
        target: '_blank', // 新页面打开
        headerRender: false, // 不展示顶栏
        footerRender: false, // 不展示页脚
        menuRender: false, // 不展示菜单
        menuHeaderRender: false, // 不展示菜单顶栏
      },
      {
        path: 'detail/:id',
        component: './Knowledge/CardDetail',
      },
    ],
  },
  {
    name: '网络拓扑',
    path: '/network',
    icon: 'GatewayOutlined',
    component: './Network',
  },
  {
    name: 'ER 图',
    path: '/er',
    icon: 'CreditCardOutlined',
    component: './ER',
  },
  {
    name: '组织架构图',
    path: '/tree',
    icon: 'ApartmentOutlined',
    component: './Tree',
  },
  {
    name: '流程图',
    path: '/flowchart',
    icon: 'NodeIndexOutlined',
    component: './Flowchart',
  },
  {
    name: '思维导图',
    path: '/mindmap',
    icon: 'PartitionOutlined',
    component: './Mindmap',
  },
  {
    name: '泳道图',
    path: '/swimlane',
    icon: 'ProjectOutlined',
    component: './Swimlane',
  },
  // {
  //   name: '权限演示',
  //   path: '/access',
  //   component: './Access',
  // },
  {
    name: '组件平台',
    path: '/platform',
    // component: './FormSpace',
    routes: [
      { path: '/platform', redirect: 'list' },
      { path: '/platform/detail', redirect: 'list' },
      {
        name: '组件列表',
        path: 'list',
        icon: 'AppstoreAddOutlined',
        component: './platform/List',
      },
      {
        path: 'detail/:id',
        icon: 'smile',
        component: './platform/Detail',
      },
    ],
  },
];
