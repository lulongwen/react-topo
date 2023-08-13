/**
 * @author lulongwen
 * Date: 2023-02-24 21:39
 * Description:
 */

import { PresetStatusColorTypes } from 'antd/es/_util/colors';
import { PresetColors } from 'antd/es/theme/interface';

/**
 * tagColors.length = 18
 *
 * PresetColors
 * ['blue', 'purple', 'cyan', 'green', 'magenta', 'pink', 'red', 'orange', 'yellow', 'volcano', 'geekblue', 'lime', 'gold',
 *
 * PresetStatusColorTypes
 * 'success', 'processing', 'error', 'default', 'warning']
 */
export const tagColors = [
  ...PresetColors,
  ...PresetStatusColorTypes,
];

export const PLACEHOLDER = {
  input: '请输入',
  select: '请选择'
}
