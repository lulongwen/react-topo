import { Divider, Tag } from 'antd';
import { useEffect } from 'react';
// import {UserOutlined} from '@ant-design/icons'
import { PageContainer } from '@ant-design/pro-components';

import { componentSource, timeSource, nodeSource } from './data';
import ListCard from './ListCard';
import Search from './Search';
import TagFilter from './TagFilter';

function CustomDashboard() {
  console.log('dashboard', 3000);

  useEffect(() => {}, []);

  function onSearch(keyword: string) {
    console.log(37, keyword);
  }

  return (
    <PageContainer header={{ title: null, breadcrumb: undefined }}>
      <Search onSearch={onSearch} />
      <TagFilter />

      <Divider orientation="left" dashed>
        Antd 技术栈
        <Tag color="success" className="ms-2">
          {componentSource.length}
        </Tag>
      </Divider>
      <ListCard dataSource={componentSource} />

      <Divider orientation="left" dashed>
        时间组件
        <Tag color="success" className="ms-2">
          {timeSource.length}
        </Tag>
      </Divider>
      <ListCard dataSource={timeSource} />

      <Divider orientation="left" dashed>
        Node 服务端
        <Tag color="success" className="ms-2">
          {nodeSource.length}
        </Tag>
      </Divider>
      <ListCard dataSource={nodeSource} />
    </PageContainer>
  );
}

export default CustomDashboard;
