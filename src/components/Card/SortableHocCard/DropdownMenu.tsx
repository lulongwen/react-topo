/**
 * @author lulongwen
 * Date: 2022-04-11 08:29
 * Description:
 */

import {
  CopyOutlined,
  DeleteOutlined,
  EditOutlined,
  MoreOutlined,
} from '@ant-design/icons';
import { Dropdown, Menu, Popconfirm } from 'antd';
import { func } from 'prop-types';

const { Item } = Menu;

DropdownMenu.propTypes = {
  onDelete: func,
  onEdit: func,
  onClone: func,
};

function DropdownMenu({ onDelete, onEdit, onClone }) {
  const menu = (
    <Menu>
      <Item>
        <EditOutlined />
        编辑
      </Item>
      <Item>
        <CopyOutlined />
        克隆
      </Item>
      <Item>
        <Popconfirm
          title="图表删除后数据将无法恢复，请谨慎操作！"
          onConfirm={onDelete}
          overlayStyle={{ width: 220 }}
        >
          <DeleteOutlined />
          删除
        </Popconfirm>
      </Item>
    </Menu>
  );

  return (
    <Dropdown key="ellipsis" overlay={menu}>
      <MoreOutlined />
    </Dropdown>
  );
}

export default DropdownMenu;
