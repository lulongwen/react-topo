/**
 * @author lulongwen
 * Date: 2023-02-24 21:39
 * Description:
 */
import React, { useState, useEffect, useMemo } from 'react';
import { Select } from 'antd';
import { useRequest, clearCache } from 'ahooks';
import { findIndex, isFunction, isObject, isEmpty, isArray } from 'lodash-es';
import type { SelectProps, SelectValue, OptionProps } from 'antd/es/select';
import type { CustomTagProps } from 'rc-select/lib/BaseSelect';
import tagRender from './tagRender';
import { PLACEHOLDER } from '../../utils'

type IProps = {
  service: any; // string | () => Promise<any>
  serviceOption?: any;
  render?: (data: any[]) => any[];
}

const SelectRemote: React.FC<SelectProps & IProps> = (props) => {
  const {
    service,
    serviceOption = {},
    value,
    onChange,
    render,
    ...rest
  } = props;
  const [selected, setSelected] = useState<SelectValue>(value);

  const { data, loading, run, cancel } = useRequest(service, {
    manual: true,
    retryCount: 3,
    loadingDelay: 300, // 请求很快时，不显示loading；避免 loading变化导致的抖动
    debounceWait: 500,
    ...serviceOption,
  });

  useEffect(() => {
    run();
    return () => {
      cancel();
      if (!serviceOption.cacheKey) return;
      clearCache(serviceOption.cacheKey);
    };
  }, []);

  useEffect(() => {
    setSelected(value);
  }, [value]);

  /**
   * options [{label: string, value: string}]
   * value 必填项
   * label可以没有，没有label的话，就显示 value 代替 label
   */
  const options = useMemo(() => {
    const source = isArray(data) ? data : [];
    return isFunction(render) ? render(source) : source;
  }, [data, render]);

  function handleChange(val: SelectValue, option: OptionProps | any) {
    setSelected(val);
    if (isFunction(onChange)) onChange(val, option);
  }

  /**
   * 自定义 mode='tags'
   * @param props {CustomTagProps}
   */
  function handleTagRender(props: CustomTagProps) {
    if (!rest.mode || isEmpty(selected)) return null;

    // @ts-ignore
    const index = findIndex(selected, (it: SelectValue) => {
      // @ts-ignore
      return (isObject(it) ? it.value : it) === props.value;
    });
    console.log('index', index);
    return tagRender(props, index);
  }

  return (
    <Select
      placeholder={PLACEHOLDER.select}
      showSearch
      optionFilterProp='label'
      {...rest}
      loading={loading}
      options={options}
      value={selected}
      onChange={handleChange}
      // @ts-ignore
      tagRender={handleTagRender}
    />
  );
};

export default SelectRemote;

