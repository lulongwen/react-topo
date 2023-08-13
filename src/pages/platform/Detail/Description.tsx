/**
 * @author lulongwen
 * Date: 2022-04-10 20:58
 * Description:
 */
import React, { memo } from 'react';
import { Descriptions, Tag } from 'antd';
import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime";
// import { UserOutlined } from '@ant-design/icons';

dayjs.extend(relativeTime);

const { Item } = Descriptions

const Description: React.FC = () => {

  return (
    <Descriptions
      size="small"
      column={3}
      className={'mb-2'}
    >
      <Item label="代码托管">
        <Tag color='error'>Gitee</Tag>
      </Item>
      <Item label="存储库">
        <Tag color='success'>Public</Tag>
      </Item>
      <Item label="上传用户">
        <a>421421</a>
      </Item>
      <Item label="更新时间">{dayjs('2022-03-21').fromNow()}</Item>
      <Item label="创建时间">{dayjs('2020-06-01').fromNow()}</Item>
    </Descriptions>
  );
}

export default memo(Description);
