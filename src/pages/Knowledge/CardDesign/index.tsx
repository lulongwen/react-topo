import React, { useState } from 'react';
import { bool, object } from 'prop-types';
import { ReactFlowProvider } from 'reactflow';
import type { ReactFlowInstance } from 'reactflow';

import styles from './style.module.less';
// 顶部工具栏
import Toolbar from './Toolbar';
// 侧边栏，展示可拖拽的节点
import Sider from './Sider';
// 画布，处理核心逻辑
import Graph from './Graph';
// 右侧节点配置
import Setting from './Setting';

ReactFlowApp.propTypes = {
  schema: object,
  view: bool,
  autofit: bool,
};

function ReactFlowApp(props) {
  const {
    schema,
    view,
    autofit
  } = props;
  console.log(28, props)

  /**
   * 保存 ReactFlow 创建后的画布实例
   * 实例会在 Graph 中设置，但会在 Graph 和 Toolbar 中使用，所以将该状态提升到 index.js 中
   */
  const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance | null>(null);

  if(view) {
    return (
      <Graph
        // 画布，处理核心拖拽逻辑
        instance={reactFlowInstance}
        setInstance={setReactFlowInstance}
        schema={schema}
        autofit={autofit}
      />
    )
  }

  return (
    <div className={styles.content}>
      <ReactFlowProvider>
        <Toolbar
          // 顶部工具栏
          instance={reactFlowInstance}
        />

        <div className={styles.main}>
          <Sider
            // 左侧边栏，展示可拖拽的节点
          />

          <Graph
            // 画布，处理核心拖拽逻辑
            instance={reactFlowInstance}
            setInstance={setReactFlowInstance}
            schema={schema}
            autofit={autofit}
          />

          <Setting
            // Node节点配置
          />
        </div>
      </ReactFlowProvider>
    </div>
  );
};

export default ReactFlowApp;
