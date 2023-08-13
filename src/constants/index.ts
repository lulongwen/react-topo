/**
 * User: lulongwen
 * Date: 2021/3/13 下午11:44
 * Update: 2022-01-13 09:15:05
 * Description: 枚举类都以 ENUM_ 开头
 */

export const DEFAULT_NAME = 'lulongwen';

export const ENUM_VALUE = [
  { label: '字符串', value: 'STRING' },
  { label: 'JSON', value: 'JSON' },
];

// 日志编码
export const ENUM_ENCODING = [
  { label: 'UTF-8', value: 1 },
  { label: 'UTF-16', value: 2 },
  { label: 'UTF-32', value: 3 },
  { label: 'GB2312', value: 4 },
  { label: 'GBK', value: 5 },
  { label: 'BIG5', value: 6 },
  { label: 'ASCII', value: 7 },
];

// 状态
export const ENUM_STATUS = [
  { label: '在线', value: 1, color: 'green' }, // 绿
  { label: '故障', value: 2, color: 'orange' }, // 橙
  { label: '预警', value: 3, color: 'yellow' }, // 黄
  { label: '离线', value: 4, color: 'default' }, // 灰点
  { label: '未激活', value: 5, color: 'purple' }, // 紫点
];

// 是否生效
export const ENUM_EFFECTIVE = {
  true: {
    text: '是',
    status: 'Processing',
  },
  false: {
    text: '否',
    status: 'Default',
  },
};
