/**
 * @author lulongwen
 * Date: 2022-05-06 22:41
 * Description:
 */

import { Empty } from 'antd';
import { useMemo } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

import GridLayoutItem from './GridLayoutItem';
// import styles from './style.module.less';

const WithGridLayout = WidthProvider(Responsive);

// GridLayoutCard.propTypes = {
//   dataSource: array.isRequired,
//   gutter: array,
//   rowHeight: number,
// };
// GridLayoutCard.defaultProps = {
//   gutter: [16, 24],
//   rowHeight: 80,
// }

function GridLayoutCard({ dataSource, gutter, rowHeight }: any) {
  const layout = useMemo(() => {
    return dataSource.map((it, index) => ({
      i: String(it.id), // 组件key值，唯一的
      x: (index % 3) * 4, // 组件在x轴坐标
      y: Math.floor(index / 3), // 组件在y轴坐标
      w: 4, // 组件宽度，占多少列
      h: 3, // 组件高度 = rowHeight的倍数，3就是 rowHeight的3倍
      minW: 3, // 最小宽度
      minH: 2, // 最小高度
      // placeholder: index,
    }));
  }, [dataSource]);

  if (!dataSource?.length) {
    return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
  }

  return (
    <WithGridLayout
      layouts={{ lg: layout, md: layout, sm: layout }}
      cols={{ lg: 12, md: 12, sm: 6, xs: 4, xxs: 2 }}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      rowHeight={rowHeight}
      margin={gutter}
      containerPadding={[0, 0]}
      resizeHandles={['ne', 'se']}
      // className={styles.grid}
      // compactType="horizontal"
    >
      {dataSource.map((it) => {
        return (
          <GridLayoutItem
            extra
            key={it.id}
            item={it}
            onEdit={() => {}}
            onDelete={() => {}}
          />
        );
      })}
    </WithGridLayout>
  );
}

export default GridLayoutCard;
