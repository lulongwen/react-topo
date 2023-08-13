/**
 * @author lulongwen
 * Date: 2022-04-10 21:45
 * Description:
 */

import { DatePicker, Radio } from 'antd';
import classnames from 'classnames';
import moment from 'dayjs';
import { useState } from 'react';
// import {SwitchCountDown} from '@/components/CountDown'

const { RangePicker } = DatePicker;
const { Group } = Radio;

// value 按照小时计算
const options = [
  { label: '30分钟', value: '0.5' },
  { label: '1小时', value: '1' },
  { label: '3小时', value: '3' },
  { label: '6小时', value: '6' },
  { label: '12小时', value: '12' },
  { label: '3天', value: '72' },
  { label: '自定义', value: '-1' },
];

const initState = [moment().subtract(0.5, 'hours'), moment()];

const style = { marginLeft: -1 };

// 大于今天的日期禁用
function disabledDate(current: any) {
  return current && current > Date.now();
}

function CustomPicker({ onChange, className }: any) {
  const [state, setState] = useState(initState);
  const [checked, setChecked] = useState('0.5');
  const [visible, setVisible] = useState(false);

  function radioChange(e: any) {
    const _value = e.target.value;
    const _visible = _value === '-1';
    setVisible(_visible);
    setChecked(_value);
    if (_visible) return; // 自定义时间按钮

    // const _state = [
    //   moment().subtract(_value, 'hours'),
    //   moment(),
    // ]
    // dateChange(_state);
  }

  function dateChange(array: []) {
    if (!array.length) return; // 清空 return
    setState(array);
    onChange(array);
  }

  // function onEnd() {
  //   const [start, end] = state;
  //   const _state = [
  //     start.add(1, 'minutes'),
  //     end.add(1, 'minutes')
  //   ]
  //   dateChange(_state);
  // }

  return (
    <div
      className={classnames('d-flex mb-3 justify-content-between', className)}
    >
      <div className="d-flex align-items-center">
        <Group
          options={options}
          onChange={radioChange}
          value={checked}
          optionType="button"
          buttonStyle="solid"
        />
        {
          // visible && (
          // <RangePicker
          //   value={state}
          //   onChange={dateChange}
          //   format={'YYYY-MM-DD HH:mm'}
          //   disabledDate={disabledDate}
          //   style={style}
          // />
          // )
        }
      </div>

      <div className="d-flex align-items-center">
        <span>自动刷新</span>
        {/*<SwitchCountDown onEnd={onEnd}/>*/}
      </div>
    </div>
  );
}

export default CustomPicker;
