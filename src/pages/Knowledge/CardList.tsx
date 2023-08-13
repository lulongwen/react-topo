import React from 'react';
import { Avatar, List, Space, Card } from 'antd';
import { Link } from '@umijs/max';
import CardDesign from './CardDesign'
import { ReactSource } from './CardDetail/mockData';

const { Item } = List;

const IconText = ({ label, value }) => (
  <Space direction='vertical' size={2}>
    <b>{value}</b>
    {label}
  </Space>
);


function CardItem({ data }) {

  return (
    <List
      itemLayout='vertical'
      dataSource={[data]}
      renderItem={(item) => (
        <Item
          key={item.title}
          actions={[
            <Link to={`${item.url}/${item.id}`} key='edit'>
              <IconText label='浏览数' value={800} />
            </Link>,
            <IconText label='提交数' value={709} key='data' />,
            <IconText label='今日新增' value={23} key='settings' />,
          ]}
        >
          <Item.Meta
            avatar={(
              <Avatar src={item.avatar} shape='square'>
                {item.title.slice(0, 1)}
              </Avatar>
            )}
            title={(
              <Link
                to={`${item.url}/${item.id}`}
                style={{ color: '#1890ff' }}
              >
                {item.title}
              </Link>
            )}
            description={item.description}
          />
          <Card bodyStyle={{height: 200}}>
            <Link to={`/knowledge/detail/${item.id}`} key='edit'>
            <CardDesign
              schema={ReactSource}
              view
              autofit
            />
            </Link>
          </Card>
        </Item>
      )}
    />
  );
}

function CardList(props) {
  const { item } = props;

  return (
    <Card
      bordered={false}
      size='small'
    >
      <CardItem data={item} />
    </Card>
  );
}

export default CardList;
