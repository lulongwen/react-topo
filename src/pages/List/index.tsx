import React from 'react';
import { Row, Col, Button, Divider } from 'antd';
import { Link } from '@umijs/max';
import { PageContainer } from '@ant-design/pro-components';
import { SwapOutlined } from '@ant-design/icons'
import FormCreate from './Create';
import FormList from "./FormList";

const dataSource = [
  {
    id: 2,
    url: '/designer',
    title: '员工信息登记表',
    avatar: 'https://joeschmoe.io/api/v1/random',
    description: '编辑于 2023-02-28 22:06',
    content: '员工个人信息登记表模板',
  },
  {
    id: 3,
    url: '/designer',
    title: '领取办公用品',
    avatar: 'https://joeschmoe.io/api/v1/random',
    description: '编辑于 2023-02-28 22:06',
    content: '领取办公用品',
  },
  {
    id: 6,
    url: '/designer',
    title: '周末聚会',
    avatar: 'https://joeschmoe.io/api/v1/random',
    description:
      'for background applications, UED Team.',
    content:
      'We supply a series of design principles, efficiently.',
  }
];

const Space: React.FC = () => {
  // const { name } = useModel('global');

  return (
    <PageContainer
      className='pageContainer'
      extra={[
        <Link to='/designer' key={'new'}>
          <Button type='link'>新建</Button>
        </Link>,
        <FormCreate key={'file'} />,
        <Button
          key={'sort'}
          type={'text'}
          icon={<SwapOutlined rotate={90} />}
        />
      ]}
    >
      <Row
        gutter={[24, 24]}
        className='mb-5'
      >
        {
          dataSource.map((it, i) => (
            <Col span={8} key={i}>
              <FormList
                key={i}
                item={it}
              />
            </Col>
          ))
        }
      </Row>

      <Divider orientation="left">React Flow 案例</Divider>
      <Row gutter={[24, 24]}>
        {
          dataSource.map((it, i) => (
            <Col span={8} key={i}>
              <FormList
                key={i}
                item={it}
              />
            </Col>
          ))
        }
      </Row>
    </PageContainer>
  );
};

export default Space;
