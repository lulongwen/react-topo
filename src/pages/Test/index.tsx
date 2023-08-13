import React, { useCallback } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';
import { DatabaseOutlined } from '@ant-design/icons'
import 'reactflow/dist/style.css';

import { Button } from '../CustomNode';

const nodeTypes = {
  Button,
};

const initialNodes = [
  {
    id: '1',
    position: { x: 24, y: 10 },
    type: 'Button', // 自定义 node
    title: '自定义',
    data: {
      label: '开始',
      type: 'default',
      icon: <DatabaseOutlined />
    },
  },
  { id: '2', position: { x: 24, y: 200 }, data: { label: '按钮' } },
];
const initialEdges = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    animated: true, // 动画
  }
];

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
    >
      <Controls />
      <MiniMap />
      <Background variant='dots' gap={12} size={1} />
    </ReactFlow>
  );
}
