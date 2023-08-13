/**
 * @author lulongwen
 * Date: 2023-02-23 21:37
 * Description:
 */

import { useCallback } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  MarkerType, // 箭头的样式
} from 'reactflow';
// import { theme } from 'antd';

import { CardNode } from '@/components'

// 自定义节点
import ListNode from './ListNode'
// custom-edge连接线
import CustomEdge from './CustomEdge';
import TagEdge from './TagEdge';

const nodeTypes = {
  // 自定义 list类型的节点
  list: ListNode,
  card: CardNode,
}

const edgeTypes = {
  tagEdge: TagEdge,
  custom: CustomEdge,
};

// node 节点
const initialNodes = [
  // {
  //   id: 'start',
  //   data: { label: '开始' },
  //   position: { x: 0, y: 0 }
  // },
  // {
  //   id: 'way',
  //   data: { label: '路线' },
  //   position: { x: 0, y: 100 }
  // },
  // {
  //   id: "3",
  //   type: 'list', // 自定义节点
  //   // data 会作为 props 传给节点
  //   data: {
  //     label: '画图',
  //     title: '订单模型',
  //     source: [
  //       { name: '业务日期', type: 'string'},
  //       { name: '交易号', type: 'bigint'},
  //       { name: '交易支付链接', type: 'string'},
  //       { name: '交易支付日期', type: 'string'},
  //       { name: '确认收货日期', type: 'string'},
  //     ],
  //   },
  //   isConnectable: true,
  //   position: { x: 160, y: 260 },
  // },
  {
    id: "2",
    type: 'card', // 自定义节点
    // data 会作为 props 传给节点
    data: {
      title: '订单模型',
      size: 'small',
      theme: 'success',
      source: {
        type: 'Button',
        className: 'mb-2',
        block: true,
        options: [
          {label: '项目设计', value: '1'},
          {label: '环境搭建', value: '2'},
          {label: '功能开发', value: '3'},
          {label: '项目优化', value: '4'},
          {label: '部署上线', value: '5'},
        ],
      },
    },
    isConnectable: true,
    position: { x: 60, y: 60 },
  },
  {
    id: "3",
    type: 'card', // 自定义节点
    // data 会作为 props 传给节点
    data: {
      title: '订单模型',
      size: 'small',
      theme: 'info',
      source: {
        type: 'Button',
        className: 'mb-2',
        block: true,
        options: [
          {label: '项目设计', value: '1'},
          {label: '环境搭建', value: '2'},
          {label: '功能开发', value: '3'},
          {label: '项目优化', value: '4'},
          {label: '部署上线', value: '5'},
        ],
      },
    },
    isConnectable: true,
    position: { x: 260, y: 60 },
  },
  {
    id: "4",
    type: 'card', // 自定义节点
    // data 会作为 props 传给节点
    data: {
      title: '订单模型',
      size: 'small',
      theme: 'warning',
      source: {
        type: 'Button',
        className: 'mb-2',
        block: true,
        options: [
          {label: '项目设计', value: '1'},
          {label: '环境搭建', value: '2'},
          {label: '功能开发', value: '3'},
          {label: '项目优化', value: '4'},
          {label: '部署上线', value: '5'},
        ],
      },
    },
    isConnectable: true,
    position: { x: 460, y: 60 },
  },
];

// edge 连接线
const initialEdges = [
  // { id: 'e1-2', source: 'start', target: 'way' },
  {
    id: 'e1-2',
    source: 'start',
    target: 'way',
    type: 'tagEdge',
    data: {
      text: 'tag edge',
      stroke: '#f00',
      width: 60,
      height: 24,
      // antd 组件属性
      props: {
        color: 'orange',
        children: '进行中',
        onClick: (e: MouseEvent, id: string) => {
          e.stopPropagation();
          console.log(76, e, id)
        }
      }
    },
  },
  // {
  //   id: "e2-3",
  //   source: "way", // 起始节点 id
  //   target: "3", // 结束节点 id
  //   // sourceHandle: "b", // 起点 Handle id
  //   targetHandle: "lt", // 终点 Handle id
  // },
  {
    id: "e2-3",
    source: "way",
    target: "3",
    type: 'custom',
    data: { text: 'custom edge', stroke: '#f00' },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#f90'
    },
    // animated: true, // 线条动画
  },
];

function Flow() {
  // @ts-ignore
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  // @ts-ignore
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params: any) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
    >
      <MiniMap />
      <Controls />
      <Background />
    </ReactFlow>
  );
}

export default Flow

