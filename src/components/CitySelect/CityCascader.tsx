/**
 * @author lulongwen
 * Date: 2023-02-19 16:48:11
 * Description: CityCascader 省市区选择
 */

import React, { useState, useEffect, useMemo } from 'react';
import { Cascader } from 'antd';
import type { IProps, IOption } from './typings';

// 省份、城市、区县、乡镇 四级联动数据
import pcasCode from './pcas-code.json';

export const CityCascader: React.FC<IProps> = (props) => {
  const {
    value,
    onChange,
    mode = 'code',
    size,
  } = props;

  const [state, setState] = useState<string[]>([]);

  // 0 省级，直辖市
  const [provinceSource] = useState<IOption[]>(pcasCode);

  useEffect(() => {
    if (Array.isArray(value)) setState(value);
  }, [value]);

  // 传值模式 name | code
  const isCode = useMemo(() => mode === 'code', [mode]);

  function handleChange(keys: string[], selectedOptions: IOption[]) {
    const source = isCode ? keys : selectedOptions.map((it: IOption) => it.name);
    setState(source);
    onChange(source);
  }

  return (
    <Cascader
      showSearch
      options={provinceSource}
      value={state}
      // @ts-ignore
      onChange={handleChange}
      fieldNames={{ label: 'name', value: 'code' }}
      placeholder='请选择省市区'
      size={size}
    />
  );
};
