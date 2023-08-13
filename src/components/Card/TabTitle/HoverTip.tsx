/**
 * User: lulongwen
 * Date: 2021/3/20 下午11:47
 * Description:
 */

import { InfoCircleOutlined } from '@ant-design/icons';
import { Badge, List, Tooltip } from 'antd';
import { array, string } from 'prop-types';

const style = { padding: 4, color: '#fff' };

HoverTip.propTypes = {
  title: string,
  dataSource: array,
};

function HoverTip({ title, dataSource }) {
  return (
    <Tooltip
      placement="topRight"
      title={
        <List
          style={{ color: '#fff' }}
          size="small"
          header={`${title}说明：`}
          split={false}
          dataSource={dataSource}
          renderItem={(item) => (
            <List.Item style={style}>
              <Badge color="#fff" className="mr8" />
              {item}
            </List.Item>
          )}
        />
      }
    >
      {title} <InfoCircleOutlined className="ml8" />
    </Tooltip>
  );
}

export default HoverTip;
