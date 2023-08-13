/**
 * @author lulongwen
 * Date: 2023-02-24 21:42
 * Description:
 */

import React from 'react';
import { Tag } from 'antd';
import type { CustomTagProps } from 'rc-select/lib/BaseSelect';

import { PresetStatusColorTypes } from 'antd/es/_util/colors';
import { PresetColors } from 'antd/es/theme/interface';

/**
 * length = 18
 * ['blue', 'purple', 'cyan', 'green', 'magenta', 'pink', 'red', 'orange', 'yellow', 'volcano', 'geekblue', 'lime', 'gold', 'success', 'processing', 'error', 'default', 'warning']
 */
const colors = [
  ...PresetColors,
  ...PresetStatusColorTypes,
];

function tagRender(props: CustomTagProps, index: number) {
  const { label, closable, onClose } = props;

  const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <Tag
      color={colors[index]}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{ marginRight: 4 }}
    >
      {label}
    </Tag>
  );
}

export default tagRender;
