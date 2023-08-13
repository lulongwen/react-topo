/**
 * @author lulongwen
 * Date: 2023-02-23 21:37
 * Description:
 */

import React from 'react';
import { Handle, Position } from 'reactflow';
import { isArray } from 'lodash-es';
import styles from './style.module.less';

// data 会从 elements 数据源传入
const ListNode = ({ data, isConnectable = true }: any) => {
  const { title, source } = data || {};

  return (
    <div className={styles.list}>
      <div className={styles.title}>
        <b>{title}</b>
      </div>

      <ul className='list-unstyled'>
        {
          isArray(source) && source.map((x, i) => (
            <li
              className={`d-flex justify-content-between ${styles.li}`}
              key={i}
            >
              <span className='flex-1'>{x.name}</span>
              <span
                className='flex-1 d-flex justify-content-end text-secondary text-uppercase'
              >{x.type}</span>
            </li>
          ))
        }
      </ul>

      <Handle
        // 定义好 type，因为连线只能从 source 连接到 target
        type='target'
        id='lt' // 左上角的连接点
        position={Position.Left}
        isValidConnection={(connection) => connection.source === 'some-id'}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
        className='handle'
        style={{ top: 60 }}
      />
    </div>
  );
};

export default React.memo(ListNode);
