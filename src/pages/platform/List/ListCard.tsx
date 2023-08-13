/**
 * @author lulongwen
 * Date: 2022-04-10 20:23
 * Description:
 */

import type { MenuProps } from 'antd';
import { Avatar, Card, Dropdown, List, Tooltip } from 'antd';
import React from 'react';
// import {Link} from 'react-router-dom'
import {
  DeleteOutlined,
  EditOutlined,
  EllipsisOutlined,
  EyeOutlined,
  ShareAltOutlined,
  StarFilled,
} from '@ant-design/icons';
import numeral from 'numeral';
import type { ListItemDataType } from './data.d';
import styles from './index.module.less';

const { Item } = List;
const items: MenuProps['items'] = [
  {
    key: 'delete',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        <DeleteOutlined />
        删除
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.taobao.com/"
      >
        2nd menu item
      </a>
    ),
  },
];

const CardInfo: React.FC<{
  owner: string;
  activeUser: React.ReactNode;
  newUser: React.ReactNode;
}> = (props) => {
  const { owner, activeUser, newUser } = props;
  return (
    <div className={styles['card-info']}>
      <div>
        <p>{owner}</p>
        <p>
          <StarFilled style={{ color: '#f90' }} /> {activeUser}
        </p>
      </div>
      <div>
        <p>下载次数</p>
        <p>{newUser}</p>
      </div>
    </div>
  );
};

const ListCard: React.FC<Record<string, any>> = (props) => {
  const { dataSource } = props;

  return (
    <List<ListItemDataType>
      rowKey="id"
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 4,
        xxl: 4,
      }}
      loading={false}
      dataSource={dataSource}
      renderItem={(item) => (
        <Item key={item.id}>
          <Card
            hoverable
            bodyStyle={{ paddingBottom: 16 }}
            actions={[
              <Tooltip key="download" title="预览">
                <EyeOutlined />
              </Tooltip>,
              <Tooltip key="edit" title="编辑">
                <EditOutlined />
              </Tooltip>,
              <Tooltip title="分享" key="share">
                <ShareAltOutlined />
              </Tooltip>,
              <Dropdown key="ellipsis" menu={{ items }}>
                <EllipsisOutlined />
              </Dropdown>,
            ]}
          >
            <Card.Meta
              avatar={<Avatar size="small" src={item.avatar} />}
              title={item.title}
            />
            <CardInfo
              owner={item.owner}
              activeUser={item.activeUser}
              newUser={numeral(item.newUser).format('0,0')}
            />
          </Card>
        </Item>
      )}
    />
  );
};

export default ListCard;
