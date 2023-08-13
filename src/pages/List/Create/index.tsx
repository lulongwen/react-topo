import React from 'react';
import { ProModal } from '@/components'
import CheckCard from './CheckCard'

const FormCreate: React.FC = () => {

  // function onDoubleClick() {
  //   console.log(8, 'dbclick')
  // }

  return (
    <ProModal
      title={'选择你想要创建的场景'}
      width={720}
      buttonProps={{
        children: '新建拓扑',
        // onDoubleClick,
      }}
    >
      <CheckCard />
    </ProModal>
  )
}

export default FormCreate
