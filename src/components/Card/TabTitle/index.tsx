/**
 * User: lulongwen
 * Date: 2021/3/20 下午8:33
 * Description:
 */
import { Tabs } from 'antd';
import { array, string } from 'prop-types';
import { memo } from 'react';
import HoverTip from './HoverTip';

function RenderTitle({ tips, title = '' }) {
  if (Array.isArray(tips) && tips.length) {
    return <HoverTip dataSource={tips} title={title} />;
  }
  return title;
}

const { TabPane } = Tabs;

TabTitle.propTypes = {
  title: string.isRequired,
  className: string,
  tips: array,
};

function TabTitle({ children, className = '', ...rest }) {
  return (
    <Tabs className={className} tabBarExtraContent={children}>
      <TabPane tab={<RenderTitle {...rest} />} />
    </Tabs>
  );
}

export default memo(TabTitle);
