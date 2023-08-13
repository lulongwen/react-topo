/**
 * User: lulongwen
 * Date: 2021/4/2 下午10:57
 * Description:
 * Update: 2022-04-12 22:35:57
 */

import * as AllIcon from '@ant-design/icons';
import { createElement, memo } from 'react';
import classnames from 'classnames';

// Icon.propTypes = {
//   type: string.isRequired,
//   className: string,
//   rotate: number,
//   style: object
// };

function Icon({ type, className, rotate, style }: any) {
  if (!type) return null;

  return createElement(
    // @ts-ignore
    AllIcon[type],
    {
      className: classnames('me-2', className),
      style,
      rotate,
    },
  );
}

export default memo(Icon);
