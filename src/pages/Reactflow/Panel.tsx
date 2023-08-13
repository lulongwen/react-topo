/**
 * @author lulongwen
 * Date: 2023-06-11 12:43
 * Description:
 */
import React from 'react'
import { Collapse, theme } from 'antd'
import { CaretRightOutlined } from '@ant-design/icons'

import type { CSSProperties } from 'react'
import type { CollapseProps } from 'antd'

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = (
  panelStyle
) => [
  {
    key: '1',
    // label: 'This is panel header 1',
    children: <p>{text}</p>,
    style: panelStyle,
  },
]

const App: React.FC = () => {
  const { token } = theme.useToken()

  const panelStyle = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: 'none',
  }

  return (
    <Collapse
      bordered={false}
      defaultActiveKey={['1']}
      expandIcon={({ isActive }) => (
        <CaretRightOutlined rotate={isActive ? 90 : 0} />
      )}
      style={{ width: 320, background: token.colorBgContainer }}
      items={getItems(panelStyle)}
      collapsible={'icon'}
    />
  )
}

export default App
