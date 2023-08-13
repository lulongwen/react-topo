/**
 * @author lulongwen
 * Date: 2023-06-11 12:43
 * Description:
 */
import React from 'react'
// import { Collapse, theme } from 'antd'
import { useControls } from 'leva'


const App: React.FC = () => {
  const { name, aNumber } = useControls({ name: 'World', aNumber: '100' })

  return (
    <div>
      Hey {name}, hello! {aNumber}
    </div>
  )
}

export default App
