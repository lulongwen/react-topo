import React from 'react';
// import {} from 'prop-types';
import { Row, Col, Button } from 'antd';
import { Link } from '@umijs/max';
import { PageContainer } from '@ant-design/pro-components';
import CardList from "./CardList";

const dataSource = [
  {
    id: 2,
    url: '/knowledge/editor',
    title: 'React 核心知识点',
    avatar: 'https://www.svgrepo.com/show/303157/react-logo.svg',
    description: '2023-08-06 20:54:23',
    content: 'react 知识点大纲快速开发查阅',
  },
  {
    id: 3,
    url: '/knowledge/editor',
    title: '思维导图',
    avatar: 'https://joeschmoe.io/api/v1/random',
    description: '编辑于 2023-02-28 22:06',
    content: '领取办公用品',
  },
  {
    id: 6,
    url: '/knowledge/editor',
    title: '组织架构图',
    avatar: 'https://joeschmoe.io/api/v1/random',
    description:
      'for background applications, UED Team.',
    content:
      'We supply a series of design principles, efficiently.',
  }
];

// Knowledge.propTypes = {};

function Knowledge() {

  return (
    <PageContainer
      title='知识卡片'
      className='pageContainer'
      extra={[
        <Link to='/knowledge/create' key='create'>
          <Button type='primary'>新建卡片</Button>
        </Link>,
      ]}
    >
      <Row gutter={[24, 24]} className='mb-6'>
        {
          dataSource.map((it, i) => (
            <Col span={8} key={i}>
              <CardList item={it} />
            </Col>
          ))
        }
      </Row>
    </PageContainer>
  );
}

export default Knowledge;
