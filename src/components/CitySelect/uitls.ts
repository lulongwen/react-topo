import { IOption } from './typings'

/**
 * levels 要显示的级别，默认 3级，省县乡
 * 0 省级，直辖市
 * 1 地级，城市，市辖区
 * 2 县级，县城，街道
 * 3 乡镇
 * 4 村庄
 * 默认 3，显示 省/市/县/乡镇 四级联动
 * 设置 2，就显示 省/市/县 三级联动
 */
export const levels: number[] = [0, 1, 2, 3, 4];

export const modes: string[] = ['code', 'name', 'all'];

export const placeholders = ['省', '市', '县区', '乡镇/街道', '村'];

export function selectAttrs(index: number) {
  return {
    fieldNames: { label: 'name', value: 'code' },
    placeholder: `请选择${placeholders[index]}`,
    notFoundContent: `无匹配${placeholders[index]}`,
    showSearch: true,
    optionFilterProp: 'name',
  }
}

export function oneOf(source: any[], item: any) {
  return source.some((it: any) => it === item)
}

/**
 * 显示级别，例如 3，就显示省市区
 * @param index {number}
 * @param level {number}
 */
export function show(index: number, level: number) {
  return index <= level;
}

export function getOptions(source: any[], codes: string[], mode: 'code' | 'name') {
  const result = {
    provinceSource: source,
    citySource: [],
    countySource: [],
    townSource: [],
  }

  if (codes[0]) {
    const item = source.find((it: IOption) => it[mode] === codes[0])
    result.citySource = item.children || [];
  }

  if (codes[1]) {
    const item: any = result.citySource.find((it: IOption) => it[mode] === codes[1])
    result.countySource = item?.children || [];
  }

  if (codes[2]) {
    const item: any = result.countySource.find((it: IOption) => it[mode] === codes[2])
    result.townSource = item?.children || [];
  }
  return result;
}
