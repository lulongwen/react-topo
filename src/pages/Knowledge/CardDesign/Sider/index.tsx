import React, { memo } from 'react';
import cls from 'classnames';
import { useStore } from 'reactflow';
import { isArray } from 'lodash-es';
import { Tag } from 'antd';
import styles from './style.module.less';

// 预设节点
const allowedNodes = [
  {
    nodeId: 1,
    name: '知识卡片',
    className: 'input-node',
    type: 'cardNode', // 自定义节点
    // data 会作为 props 传给节点
    data: {
      title: '默认标题',
      size: 'small',
      theme: 'primary',
      source: {
        type: 'Button',
        className: 'mb-2',
        block: true,
        options: [
          {label: '项目设计', value: '1'},
        ],
      },
    },
    isConnectable: true,
    position: { x: 460, y: 60 },
  },
  // {
  //   nodeId: 2,
  //   name: '关联节点',
  //   className: "relation-node",
  //   type: 'relation', // 自定义节点类型
  // },
  // {
  //   nodeId: 3,
  //   name: '输出节点',
  //   className: "output-node",
  //   type: 'default',
  // },
];

const FlowSider: React.FC = () => {
  /**
   * 通过 useStore 获取画布上的节点 nodes
   * https://reactflow.dev/docs/api/react-flow-instance/#getnodes
   */
  const nodes = useStore((store) => {
    // console.log('side', store);
    return store.getNodes();
  });

  // console.log('side', nodes);

  /**
   * 拖拽添加节点
   * Sider 中触发节点的 onDragStart 事件，并传递参数
   * 然后在 Graph 中通过 ReactFlow onDrop 来接收拖拽的节点
   * @param e {React.DragEvent<HTMLDivElement>}
   * @param nodeType {string}
   */
  function onDragStart(e: React.DragEvent<HTMLDivElement>, item) {
    // 被拖拽的节点类型, 值必须是是个字符串
    e.dataTransfer.setData('application/reactflow', JSON.stringify(item));
    e.dataTransfer.effectAllowed = 'move';
  }

  return (
    <aside className={styles.sider}>
      <div className={styles.nodes}>
        {allowedNodes.map((item) => (
          <div
            key={item.nodeId}
            className={cls(styles['sider-node'], styles[item.className])}
            onDragStart={(e) => onDragStart(e, item)}
            draggable
          >
            {item.name}
          </div>
        ))}
      </div>

      <div className={styles.print}>
        节点数量：<Tag color={'processing'}>{nodes?.length}</Tag>

        {/* 遍历节点，显示历史记录 */}
        <ul className='list-none'>
          {
            isArray(nodes) && nodes.map((x) => (
              <li key={x.id} className={styles['print-item']}>
                <span>{x.data.label}</span>
                <span className={styles['print-item-tips']}>({x.type})</span>
              </li>
            ))
          }
        </ul>
      </div>
    </aside>
  );
};

export default memo(FlowSider);
