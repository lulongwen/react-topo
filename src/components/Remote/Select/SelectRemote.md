# SelectRemote

onSelect，每次选择 option都会触发

onChange，只有在选择不同的 option时，才会触发

onSearch，搜索时触发，高频事件，需要防抖

```tsx
import React from 'react'
import { Divider, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { SelectRemote } from 'sop-antd'

function getUser() {
  return fetch('/api/user', {
    method: 'GET',
    body: data,
    headers: {},
  })
  .then(res => res.json())
  .then(res => res.data)
}

function App() {
  const handleChange = (value, option) => {
    console.log(`selected ${value}`, option)
  }

  function addItem(e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) {
    e.preventDefault();
    console.log('add')
  }

  return (
    <SelectRemote
      service={getUser}
      serviceOption={{
        cacheKey: 'CACHE_USER',
        staleTime: -1
      }}
      render={data => data.map(it => ({
        label: it.desc.defaultMsg, 
        value: it.code,
      }))}
      onChange={handleChange}
      // 不支持数组，或层级嵌套 'desc.name.title'
      fieldNames={{label: 'desc', value: 'code'}}
      mode='tags'
      allowClear
      labelInValue
      status='error'
      maxTagCount={2}
      style={{ width: 500 }}
      dropdownRender={(menu) => (
        <>
          {menu}
          <Divider style={{marginBlock: 8}} />
          <Button
            type='primary'
            icon={<PlusOutlined />}
            onClick={addItem}
          >
            新建用户
          </Button>
        </>
      )}
    />
  )
}
```



单独安装 useRequest

```bash
yarn add @ahooksjs/use-request
```

