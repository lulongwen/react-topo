import React, { useState } from "react";
import {
  getSmoothStepPath,
  getBezierPath,
  getMarkerEnd,
  useStore
} from "reactflow";
import { Popover, Button } from "antd";
import { LinkOutlined } from "@ant-design/icons";
import { isArray } from 'lodash-es'

import PopoverCard from "./PopoverCard";

const foreignObjectSize = 24;

// 查找连线关联的节点
function getRelationNodeByEdge(id, edges) {
  if (!isArray(edges)) return null;

  for (let i = 0; i < edges.length; i++) {
    const item = edges[i];
    if (item.id === id) {
      return {
        edge: id,
        source: item.source,
        target: item.target,
      };
    }
  }
}

function LinkEdge(props: any) {
  const {
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    borderRadius = 0,
    style = {},
    data,
    arrowHeadType,
    markerEndId,
  } = props;
  // 传入 PopoverCard 的参数，包含 source、target
  const [model, setModel] = useState(null);

  const edges = useStore((store) => store.edges);
  const markerEnd = getMarkerEnd(arrowHeadType, markerEndId);
  const edgePath = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
    borderRadius,
  });
  const [edgeCenterX, edgeCenterY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  // 点击连线上的按钮
  const handleVisibleChange = (v) => {
    setModel(getRelationNodeByEdge(id, edges) || {});
  };

  return (
    <>
      <path
        id={id}
        style={style}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd}
      />
      <foreignObject
        width={foreignObjectSize}
        height={foreignObjectSize}
        x={edgeCenterX - foreignObjectSize / 2}
        y={edgeCenterY - foreignObjectSize / 2}
        className="edgebutton-foreignobject"
      >
        <Popover
          placement="right"
          content={<PopoverCard {...model} />}
          trigger="click"
          overlayClassName="linkedge-overlay"
          onVisibleChange={handleVisibleChange}
        >
          <Button type="link" size="small" icon={<LinkOutlined />} />
        </Popover>
      </foreignObject>
    </>
  );
}

export default LinkEdge
