import React from 'react';
import { PageContainer } from '@ant-design/pro-components';
// import { Card } from 'antd';
// import { PlusOutlined } from '@ant-design/icons'

import FormPage from '../Form'
import {
  // DndKit, Panel,
  CustomNode  as Reactflow
} from '../Reactflow'

function HomePage() {

  return (
    <PageContainer>
      <FormPage />

      <div
        style={{height: 600, backgroundColor: '#fff', overflow: 'hidden'}}
      >
        {/*<DndKit>
          <Panel />
        </DndKit>*/}
        <Reactflow />
      </div>
    </PageContainer>
  );
}

export default HomePage;
