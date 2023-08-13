/**
 * @author lulongwen
 * Date: 2023-06-10 20:34
 * Description:
 */

import React, { useCallback, useState } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';
import { isObject } from 'lodash-es'
import 'reactflow/dist/style.css';

import { Button } from '@/pages/CustomNode';
import Fields from './Fields';
import { monitorNodes } from './mock/nodes';
import { monitorEdges } from './mock/edges';
import * as source from './dataSource';

const nodeTypes = {
  Button,
};

// Monitor.propTypes = {};

function Monitor() {
  const [nodes, setNodes, onNodesChange] = useNodesState(monitorNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(monitorEdges);
  const [sourceType, setSourceType] = useState(null);
  const [nodeFields, setNodeFields] = useState(null);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  function onNodeClick(event: React.MouseEvent, node: Node) {
    const { sourcetype } = node.data;
    const currentSource = source[sourcetype];
    console.log(35, source, sourcetype, currentSource);
    if(sourcetype === sourceType) return;
    setSourceType(sourcetype);
    setNodeFields(currentSource);
    console.log(35, source, node);
  }

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onNodeClick={onNodeClick}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
    >
      <Controls />
      {/*<MiniMap />*/}
      <Background
        variant='dots'
        gap={8}
        size={1}
      />
      <Fields
        schema={nodeFields}
      />
    </ReactFlow>
  );
}

export default Monitor;
