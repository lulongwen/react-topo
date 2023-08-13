/**
 * @author lulongwen
 * Date: 2023-02-17 21:38
 * Description: CitySelect 省市区选择
 */

import React, { useState, useEffect, useMemo } from 'react';
import { Row, Col, Select } from 'antd';
import type { RowProps } from 'antd';
import type { IProps, IOption } from './typings';
import {
  levels,
  selectAttrs,
  oneOf,
  show,
  getOptions,
} from './uitls';

// 省份、城市、区县、乡镇 四级联动数据
import pcasCode from './pcas-code.json'

export const CitySelect: React.FC<IProps & {
  gutter?: RowProps['gutter']
}> = (props) => {
  const {
    value,
    onChange,
    gutter = 8,
    level = 3,
    mode = 'code',
  } = props;

  const [state, setState] = useState<string[]>([]);

  // 0 省级，直辖市
  const [provinceSource] = useState<IOption[]>(pcasCode);

  // 1 地级，城市，市辖区
  const [citySource, setCitySource] = useState<IOption[]>([]);

  // 2 县级，县城，街道
  const [countySource, setCountySource] = useState<IOption[]>([]);

  // 3 乡镇
  const [townSource, setTownSource] = useState<IOption[]>([]);

  useEffect(update, [value]);

  function update() {
    if (!Array.isArray(value)) return;
    const obj = getOptions(provinceSource, value, mode);

    setState(value);
    setCitySource(obj.citySource);
    setCountySource(obj.countySource);
    setTownSource(obj.townSource);
  }

  // 列宽
  const span = useMemo(() => {
    return oneOf(levels, level) ? 24 / (level + 1) : 8;
  }, [level]);

  // 传值模式 name | code
  const isCode = useMemo(() => mode === 'code', [mode]);

  return (
    <Row gutter={gutter}>
      {
        // 0 省级，直辖市
        show(0, level) && (
          <Col span={span}>
            <Select
              {...selectAttrs(0)}
              value={state[0]}
              // @ts-ignore
              onChange={(code: string, { children = [], name }: IOption) => {
                const key = isCode ? code : name
                const _state = [key];
                setState(_state);
                setCitySource(children);
                setCountySource([]); // 清空后面的表单
                setTownSource([]);
                if (onChange) onChange(_state);
              }}
              options={provinceSource}
            />
          </Col>
        )
      }

      {
        // 1 地级，城市，市辖区
        show(1, level) && (
          <Col span={span}>
            <Select
              {...selectAttrs(1)}
              value={state[1]}
              // @ts-ignore
              onChange={(code: string, { children = [], name }: IOption) => {
                const key = isCode ? code : name
                setState(prevState => {
                  const _state = [prevState[0], key];
                  if (onChange) onChange(_state);
                  return _state;
                });
                setCountySource(children);
                setTownSource([]);
              }}
              options={citySource}
            />
          </Col>
        )
      }

      {
        // 2 县级，县城，街道
        show(2, level) && (
          <Col span={span}>
            <Select
              {...selectAttrs(2)}
              value={state[2]}
              // @ts-ignore
              onChange={(code: string, { children = [], name }: IOption) => {
                const key = isCode ? code : name
                setState(prevState => {
                  const _state = [prevState[0], prevState[1], key];
                  if (onChange) onChange(_state);
                  return _state;
                });
                setTownSource(children);
              }}
              options={countySource}
            />
          </Col>
        )
      }

      {
        // 3 乡镇
        show(3, level) && (
          <Col span={span}>
            <Select
              {...selectAttrs(3)}
              value={state[3]}
              // @ts-ignore
              onChange={(code: string, { name }: IOption) => {
                const key = isCode ? code : name
                setState(prevState => {
                  const _state = [...prevState];
                  _state[3] = key;
                  if (onChange) onChange(_state);
                  return _state;
                });
              }}
              options={townSource}
            />
          </Col>
        )
      }
    </Row>
  );
};
