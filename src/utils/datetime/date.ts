/**
 * @author lulongwen
 * Date: 2023-05-20 10:27
 * Description:
 */
import * as dayjs from 'dayjs';
import Decimal from 'decimal.js';
import { isFinite } from 'lodash-es'
import type { ConfigType, UnitTypeShort, UnitTypeLong } from 'dayjs';

// 1分钟 = 60秒 * 1000 ms毫秒
export const oneMinute: number = 60000;
export const oneHour: number = 3600000; // oneMinute * 60
export const oneDay: number = 86400000; // oneHour * 24

export const formatterMinute = 'HH:mm';
export const formatterDay = 'MM-DD';
// 格式化 echarts Axis 时间和日期换行 'HH:mm[\n]MM-DD'
export const formatterAxisDate = `${formatterMinute}[\n]${formatterDay}`;

export const formatterYear = 'YYYY';
export const formatterMonth = `${formatterYear}-MM`; // 'YYYY-MM';

export const formatterDate = `${formatterYear}-${formatterDay}`; // 'YYYY-MM-DD';
export const formatterTime = `${formatterMinute}:ss`;
export const formatterDateTime = `${formatterDate} ${formatterTime}`;
// 'YYYY/MM/DD'
export const formatterSlashDate = formatterDate.replace(/-/g, '/');

export const formatterMap = {
  date: formatterDate,
  time: formatterTime,
  datetime: formatterDateTime,
  year: formatterYear,
  month: formatterMonth,
  axisDate: formatterAxisDate,
  minute: formatterMinute,
  day: formatterDay, // 'MM-DD'
  slashDate: formatterSlashDate
}

interface FormatterTypeMap {
  default: 'datetime' | 'date' | 'time' | 'month' | 'year' | string | undefined
}

export type FormatterType = FormatterTypeMap[keyof FormatterTypeMap]

/**
 * 日期格式化
 * formatDate('2023-05-20T03:16:22.304Z', 'datetime')
 * formatDate('2023-05-20T03:16:22.304Z', '')
 * @param date
 * @param formatter
 */
export function formatDate(date: string, formatter: FormatterType = 'datetime'): string {
  if (!dayjs(date).isValid()) {
    throw new Error(`${date} Invalid date`)
  }

  const _format = formatterMap[formatter] ?? formatter;
  return dayjs(date).format(_format);
}

// 静态属性
formatDate.oneMinute = oneMinute

Object.keys(formatterMap).forEach(key => {
  formatDate[key] = formatterMap[key]
});

/**
 * 从今天开始的，第N天是几号
 * @param date { ConfigType }
 * @param n { number }
 */
export function getNDay(date: ConfigType, n: number) {
  if (!Number.isSafeInteger(n)) {
    throw new Error(`${n} must be a integer number`)
  }

  return dayjs(date).add(n, 'day')
}

// 单位 s 秒
const exchangeMap = {
  day: 24 * 60 * 60,
  hour: 60 * 60,
  minute: 60,
  second: 1,
}

export declare type ExchangeUnit = 'day' | 'hour' | 'minute' | 'second';

/**
 * 天，小时，分钟，秒互转
 * exchangeDate(2, 'month', 'day') 2个月 = 多少天
 * exchangeDate(3600, 'second', 'minute') 3600秒 = 分钟
 * @param value { integer } 排除 -Infinity，NaN类型，且必须大于 0
 * @param fromUnit { ExchangeUnit }
 * @param toUnit { ExchangeUnit }
 */
export function exchangeDate(value: number, fromUnit: ExchangeUnit, toUnit: ExchangeUnit): number {
  if (!isFinite(value) || new Decimal(value).lt(0)) {
    throw new Error(`${value} must be finite`)
  }

  const fromValue = exchangeMap[fromUnit];
  const toValue = exchangeMap[toUnit];
  if(!fromValue || !toValue) {
    throw new Error(`${fromUnit} or ${toUnit} one of 'day' | 'hour' | 'minute' | 'second' `)
  }

  // add 加法; sub 减法; mul 乘法; div 除法
  const result = new Decimal(fromValue)
    .mul(value) // 乘以 把当前时间转为秒
    .div(toValue) // 然后除以目标时间
    .toFixed(7);
  return Number(result);
}
