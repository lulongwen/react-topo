import React, { useRef, useCallback } from 'react';
import ReactFlow, {
  // useReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  Controls,
  Background,
} from 'reactflow';
import { isNil } from 'lodash-es';
// import { useDebounceFn } from 'ahooks'
import { nanoid } from '@ant-design/pro-components';

import type { DragEvent, MouseEvent, } from 'react'
import type {
  ReactFlowInstance,
  Connection,
  OnConnectStartParams
} from 'reactflow';

import {
  RelationNode,
  LinkEdge
} from '../components';

// 自定义节点
const nodeTypes = {
  relation: RelationNode,
};

// 自定义连线
const edgeTypes = {
  link: LinkEdge,
};

const fitViewOptions = {
  padding: .5,
};

/**
 * 初始化通过 onInit 回调得到 ReactFlow 实例
 * 接着处理 onDragOver 事件，更新 dropEffect，和 effectAllowed 保持一致
 * 然后在 onDrop 事件处理函数中，通过 getBoundingClientRect 获取画布容器的坐标信息
 * 但坐标信息需要通过 ReactFlow 实例提供的 project 方法处理为 ReactFlow 坐标系
 * 最后组装节点信息，更新 nodes, edges
 */

type IProps = {
  instance: ReactFlowInstance | null;
  setInstance: (obj: ReactFlowInstance) => void;
}

const FlowGraph: React.FC<IProps> = (props) => {
  const { instance, setInstance } = props;
  // 画布的 DOM 容器，用于计算节点坐标
  const graphRef = useRef<HTMLDivElement | null>(null);
  const connectingNodeId = useRef<string | null>(null);

  // node节点、edge连线
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  // const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  // const { project } = useReactFlow();

  // 画布加载完毕，保存当前 ReactFlow画布实例
  const onInit = useCallback((reactFlowInstance: ReactFlowInstance) => {
    // console.log(50, reactFlowInstance.toObject());
    setInstance(reactFlowInstance);
  }, []);

  /**
   * 拖拽完成后放置节点
   * @param e
   */
  function onDrop(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();

    // 节点类型
    const type = e.dataTransfer.getData('application/reactflow');

    if (isNil(graphRef.current) || isNil(instance) || !type) {
      return
    }

    // 获取画布 DOM容器
    const rect = graphRef.current.getBoundingClientRect();

    /**
     * 获取松开时的坐标
     * 用 project 将像素坐标转换为内部 ReactFlow 坐标系
     */
    const position = instance.project({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });

    const newNode = {
      id: nanoid(),
      type,
      position,
      draggable: true,
      data: { label: `${type} node` },
    };
    // 保存节点配置信息
    setNodes(nds => nds.concat(newNode));
    console.log('onDrop', instance.toObject());
  }

  /**
   * 正在拖动到放置目标时，高频，会一直触发
   * const { run } = useDebounceFn(onDragOver, {wait: 50});
   * @param e {React.DragEvent<HTMLDivElement>}
   */
  function onDragOver(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    // console.log('onDragOver', e)
  }

  /**
   * 画布上连线的时，触发 onConnect 事件，并提供连线信息
   * 然后通过 addEdge 来添加连线，addEdge接收两个参数 edgeParams 和 edges，最后返回全新的 edges
   * addEdge(edgeParams: Edge, edges: Edge[]): Edge[]
   * @param edgeParams { Connection }
   */
  const onConnect = useCallback((params: Connection) => {
    setEdges((eds) => addEdge(params, eds))
  }, []);

  const onConnectStart = useCallback((e, { nodeId }: OnConnectStartParams) => {
    connectingNodeId.current = nodeId;
  }, []);

  function onNodeClick(e, node) {
    console.log(135, node)
  }

  return (
    <div
      className='flex-1'
      ref={graphRef}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes} // 自定义节点和边
        edgeTypes={edgeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        onInit={onInit}
        // 拖拽
        onDragOver={onDragOver}
        onDrop={onDrop}

        // 画布上连线的时，触发 onConnect，并提供连线信息 source, target
        onConnect={onConnect}
        onConnectStart={onConnectStart}
        // onConnectEnd={onConnectEnd}

        // panOnScroll
        // fitView // 节点自适应画布，会自定缩放 zoom: 2
        fitViewOptions={fitViewOptions}
      >
        <Controls
          // position={'bottom-left'} // default
          style={{bottom: 48}}
        />
        <Background />
      </ReactFlow>
    </div>
  );
}

export default FlowGraph
