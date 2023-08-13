/**
 * @author lulongwen
 * Date: 2023-03-05 17:42
 * Description:
 */

import React from 'react';
import {
  getBezierPath,
} from 'reactflow';
import { Tag } from 'antd';
import classnames from 'classnames';
import { isFunction } from 'lodash-es';

// data 会从 elements 数据源传入
const TagEdge = (props: any) => {
  const {
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    style = {},
    markerEnd,
    data,
  } = props;

  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });
  // console.log(39, labelX, labelY, data);

  const { onClick, ...tagProps } = data.props;

  return (
    <>
      <path
        id={id}
        style={style}
        className='react-flow__edge-path'
        d={edgePath}
        markerEnd={markerEnd}
      />
      <foreignObject
        width={data.width}
        height={data.height}
        // 必须是动态计算的，否则会固定位置
        x={labelX - data.height / 2}
        y={labelY - data.height / 2}
        className={classnames(data.className)}
        // style={{ background: '#90f' }}
        requiredExtensions='http://www.w3.org/1999/xhtml'
      >
        <Tag
          {...tagProps}
          onClick={(e) => {
            if (!isFunction(onClick)) return;
            onClick(e, id);
          }}
        />
      </foreignObject>
    </>
  );
};

export default React.memo(TagEdge);
