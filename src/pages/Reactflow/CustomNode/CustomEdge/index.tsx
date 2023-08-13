/**
 * @author lulongwen
 * Date: 2023-03-05 17:42
 * Description:
 */

import React from 'react';
import {
  getBezierPath,
  // getSmoothStepPath
} from 'reactflow';
// import { isArray } from 'lodash-es';
import styles from './style.module.less';

// data 会从 elements 数据源传入
const CustomEdge = (props: any) => {
  const {
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    style = {},
    data,
    markerEnd,
  } = props;

  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <>
      <path
        id={id}
        style={style}
        className={`react-flow__edge-path ${styles.edge}`}
        d={edgePath}
        markerEnd={markerEnd}
      />
      <text>
        <textPath
          href={`#${id}`}
          style={{ fontSize: 12, stroke: '#f00' }}
          startOffset="50%"
          textAnchor="middle"
        >
          {data.text}
        </textPath>
      </text>
    </>
  );
};

export default React.memo(CustomEdge);
