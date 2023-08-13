// import { isString } from 'lodash';

export function noop(value: any) {
  return value;
}

/**
 * 获取 哈希值
 * RFC3986规范，先获取 query，然后 hash，hash取 #后面的
 * @param value
 */
export function getHash(value: string) {
  const include = value.includes('#');
  if (!include) return '';
  return value.split('#')[1];
}

export function randomValue() {
  // 0 - 10的随机整数
  // const ceil: number = Math.ceil(Math.random() * 10); // 0 - 10，0的概率小
  // const round = Math.round(Math.random() * 10); // 0 - 10
  // const floor = Math.floor(Math.random() * 10); // 0 - 9，0和10的概率小
}
