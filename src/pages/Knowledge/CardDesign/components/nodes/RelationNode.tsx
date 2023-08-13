import React from "react";
import { Handle, Position } from "reactflow";
import { Dropdown, Button } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import type { MenuProps } from 'antd';

const RelationNode = (props: any) => {
  const { id, isConnectable = true } = props;

  const onClick: MenuProps['onClick'] = ({ key }) => {
    console.log(`Click on item ${key}`);
  };

  const items: MenuProps['items'] = [
    {
      key: 'edit',
      label: '编辑',
    },
    {
      key: 'delete',
      danger: true,
      label: '删除',
    },
  ];

  return (
    <section className="relation-node">
      <header className="relation-node-title">
        asdf
      </header>
      <div className="relation-node-action">
        <Dropdown
          menu={{ items, onClick }}
          trigger={["click"]}
        >
          <Button
            type='link'
            size="small"
            icon={<MoreOutlined />}
          />
        </Dropdown>
      </div>

      <Handle
        // target 一个入口
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />

      <Handle
        // source 一个出口
        type="source"
        position={Position.Bottom}
        isConnectable={isConnectable}
      />
    </section>
  );
};

export default React.memo(RelationNode);
