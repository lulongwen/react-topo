/**
 * @author lulongwen
 * Date: 2022-04-10 20:58
 * Description:
 */
import React from 'react';
import { Alert, Card, Tag, Typography, List, Select } from 'antd';
import { useParams } from 'react-router-dom';
import { PageContainer } from '@ant-design/pro-components';

import { CopyButton, Icon } from '@/components';
import Description from './Description';

const { Title, Link } = Typography;

const PlatformDetail: React.FC = () => {

  const params = useParams();
  console.log('dashboard-dd', params);

  return (
    <PageContainer
      title={'js-base64'}
      subTitle={'base64 加密 解密'}
      tags={<Tag color='blue'>3.7.5</Tag>}
      avatar={{
        shape: 'square',
        size: 22,
        src: 'https://static.npmjs.com/255a118f56f5346b97e56325a1217a16.svg',
      }}
      extra={[
        <Select
          defaultValue={'3.7.5'}
          options={[
          {label: '3.7.5', value: '3.7.5'},
          {label: '3.6.3', value: '3.6.3'},
        ]} key={1}/>
      ]}
    >
      <Description />

      <Alert
        message="Click on a version number to view a previous version's package page"
        type='info'
        showIcon
        className={'mb-3'}
      />

      <Card
        title={'项目中使用'}
      >
        <CopyButton
          value='yarn add js-base64'
        />

        <List
          dataSource={[
            {
              icon: 'GithubOutlined',
              url: 'github.com/dankogai/js-base64',
              name: 'npm 仓库',
            },
            {
              icon: 'LinkOutlined',
              url: 'github.com/dankogai/js-base64#readme',
              name: '首页',
            },
          ]}
          renderItem={(it, i) => (
            <List.Item key={i}>
              <List.Item.Meta
                title={it.name}
                description={(
                  <Link href='https://www.npmjs.com/package/js-base64' target='_blank'>
                    <Icon type={it.icon} />
                    {it.url}
                  </Link>
                )}
              />
            </List.Item>
          )}
        />
        <br />

        <Title level={5}>Version History 历史版本</Title>
      </Card>
    </PageContainer>
  );
};

export default PlatformDetail;
