/**
 * @author lulongwen
 * Date: 2023-06-10 20:35
 * Description:
 */

export const monitorNodes = [
  {
    id: '1',
    position: { x: 24, y: 10 },
    type: 'Button', // 自定义 node
    data: {
      label: 'SLS',
      type: 'default',
      sourcetype: 'sls',
      // icon: 'DatabaseOutlined'
    },
  },
  {
    id: '2',
    position: { x: 24, y: 100 },
    type: 'Button', // 自定义 node
    data: {
      label: '日志黑名单',
      type: 'default',
      sourcetype: 'api',
      // icon: 'DatabaseOutlined'
    },
  },
  {
    id: '3',
    position: { x: 24, y: 200 },
    type: 'Button', // 自定义 node
    data: {
      label: '日志白名单',
      type: 'default',
      sourcetype: 'datahub',
      // icon: 'DatabaseOutlined'
    },
  },
  {
    id:'4',
    position: { x: 24, y: 300 },
    type: 'Button', // 自定义 node
    data: {
      label: '列值分组',
      type: 'default',
      // icon: 'DatabaseOutlined'
    },
  },
  {
    id: '5',
    position: { x: 24, y: 400 },
    type: 'Button', // 自定义 node
    data: {
      label: '统计列',
      type: 'default',
      // icon: 'DatabaseOutlined'
    },
  },
  {
    id: '6',
    position: { x: 24, y: 500 },
    type: 'Button', // 自定义 node
    data: {
      label: '自定义列',
      type: 'default',
      // icon: 'DatabaseOutlined'
    },
  },
  {
    id: '7',
    position: { x: 24, y: 600 },
    type: 'Button', // 自定义 node
    data: {
      label: '服务指标特定列',
      type: 'default',
      // icon: 'DatabaseOutlined'
    },
  },
  {
    id: '8',
    position: { x: 24, y: 700 },
    type: 'Button', // 自定义 node
    data: {
      label: '预警配置',
      type: 'default',
      // icon: 'DatabaseOutlined'
    },
  },
  {
    id: '9',
    position: { x: 24, y: 800 },
    type: 'Button', // 自定义 node
    data: {
      label: '配置脚本',
      type: 'default',
      // icon: 'DatabaseOutlined'
    },
  },
]
