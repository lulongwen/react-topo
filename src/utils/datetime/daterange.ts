/**
 * @author lulongwen
 * Date: 2023-05-20 10:22
 * Description:
 */
import * as dayjs from 'dayjs';
import { merge, isArray, map } from 'lodash-es';
import type { Dayjs, ConfigType, OpUnitType } from 'dayjs';
import { formatterMap } from './date';

// export declare type DateType = string | number | Date | Dayjs | undefined

/**
 * 是不是一个有效的日期格式
 * isValid https://day.js.org/docs/zh-CN/parse/is-valid
 * @param date { ConfigType }
 */
export function isValid(date: ConfigType): boolean {
  return dayjs(date).isValid();
}

/**
 * 起始时间 0:00:00 dayjs().startOf('day')
 * 结束时间 23:59:59 dayjs().endOf('day')
 * @param unit { OpUnitType }
 * @param endOfNow { boolean }
 */
export function startOfEnd(unit: OpUnitType, endOfNow: boolean = false): Dayjs[] {
  const endTime = endOfNow ? dayjs() : dayjs().endOf(unit);
  return [
    dayjs().startOf(unit),
    endTime,
  ];
}

/**
 * dayjs 转时间戳
 * 场景：向后台传参
 * @param date { ConfigType | ConfigType[] }
 */
export function toValueOf(date: ConfigType | ConfigType[]) {
  if (isArray(date)) {
    return map(date, toValueOf);
  }

  if (!isValid(date)) {
    throw new Error(`${date} Invalid date type`);
  }

  return dayjs(date).valueOf();
}

/**
 * 今天的开始和结束时间
 * @param endOfNow { boolean } 是否到当前时间
 */
export function currentDate(endOfNow: boolean = false): Dayjs[] {
  return startOfEnd('day', endOfNow);
}

/**
 * 本周的开始和结束日期
 * @param endOfNow { boolean } 是否截止到周五，默认到周日
 */
export function currentWeek(endOfNow: boolean = false): Dayjs[] {
  return startOfEnd('week', endOfNow);
}

/**
 * 本月的开始和结束日期
 */
export function currentMonth(): Dayjs[] {
  return startOfEnd('month');
}

/**
 * 今年的开始和结束日期
 */
export function currentYear(): Dayjs[] {
  return startOfEnd('year');
}

export function getRangeArray(startDate: ConfigType, endDate: ConfigType, options): string[] {
  if (!isValid(startDate) || !isValid(endDate)) {
    throw new Error(`Invalid startDate or endDate`);
  }

  const { formatter, unit } = options;
  const startTime = dayjs(startDate).startOf(unit);
  const endTime = dayjs(endDate).startOf(unit);

  if (startTime.isAfter(endTime)) {
    throw new Error(`Invalid ${startDate} gt ${endDate}`);
  }

  let index = 0;
  const result = [];
  const diff: number = endTime.diff(startTime, unit);

  while (index <= diff) {
    const _value = dayjs(startDate).add(index, unit).format(formatter);
    result.push(_value);
    index += 1;
  }
  return result;
}


export const dateRangeMap = {
  day: 'day',
  month: 'month',
  year: 'year',
};

export declare type DayOptions = {
  formatter?: string;
}

/**
 * 日期区间 ['2020-02-12', '2020-02-13']
 * @param startDate { ConfigType }
 * @param endDate  { ConfigType }
 * @param options { DayOptions }
 */
export function getDays([startDate, endDate]: ConfigType[], options: DayOptions): string[] {
  const _options = merge({
    formatter: formatterMap.date, // 'YYYY-MM-DD'
    unit: dateRangeMap.day,
  }, options);
  return getRangeArray(startDate, endDate, _options);
}

/**
 * 月份区间 ['2020-02', '2020-03']
 * @param startDate { ConfigType }
 * @param endDate  { ConfigType }
 * @param options { DayOptions }
 */
export function getMonths([startDate, endDate]: ConfigType[], options: DayOptions): string[] {
  const _options = merge({
    formatter: formatterMap.month, // 'YYYY-MM'
    unit: dateRangeMap.month,
  }, options);
  return getRangeArray(startDate, endDate, _options);
}

/**
 * 年份区间 [2020, 2021]
 * @param startDate { ConfigType }
 * @param endDate  { ConfigType }
 * @param options { DayOptions }
 */
export function getYears([startDate, endDate]: ConfigType[], options: DayOptions): number[] {
  const _options = merge({
    formatter: formatterMap.year, // 'YYYY'
    unit: dateRangeMap.year,
  }, options);
  return getRangeArray(startDate, endDate, _options).map(Number);
}
