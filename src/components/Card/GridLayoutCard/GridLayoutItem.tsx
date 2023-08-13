/**
 * @author lulongwen
 * Date: 2022-05-07 22:27
 * Description:
 */

import { Card } from 'antd';
import moment from 'moment';
import { bool, object, string } from 'prop-types';
import { forwardRef, useMemo } from 'react';

// import {LineChart, BarChart, PieChart} from '@/components';
import DropdownMenu from '../SortableHocCard/DropdownMenu';
import Table from '../SortableHocCard/Table';

function LineChart() {
  return <div>Chart</div>;
}

const COMPONENT = {
  LINE: LineChart,
  BAR: LineChart,
  PIE: LineChart,
  TABLE: Table,
};

function GridLayoutItem(props, ref) {
  const { extra, item, theme, style, children, onEdit, onDelete, ...rest } =
    props;
  const { name, type, source } = item;
  const Component = COMPONENT[type];

  const height = useMemo(() => {
    return window.parseInt(style.height) - 60 || 200;
  }, [style.height]);

  const chartProps = useMemo(initSource, [source]);

  function initSource() {
    const _props = { xAxisData: [], dataSource: [] };
    if (!source) return _props;

    if (type === 'TABLE') {
      _props.dataSource = source;
    } else if (type === 'PIE') {
      _props.dataSource = source.map((it) => {
        return { name: it.name, value: it.metricValue };
      });
    } else if (['BAR', 'LINE'].includes(type)) {
      _props.dataSource = source.map((it) => {
        return { label: it.name, value: it.values[1] };
      });
      const { values } = source[0];
      _props.xAxisData = values[0].map((it) =>
        moment(it).format('HH:mm[\n]MM-DD'),
      );
    }
    return _props;
  }

  return (
    <Card
      {...rest}
      size="small"
      style={style}
      ref={ref}
      title={name}
      bodyStyle={{ padding: type === 'TABLE' ? 0 : 12 }}
      extra={extra && <DropdownMenu onEdit={onEdit} onDelete={onDelete} />}
    >
      {Component && <Component {...chartProps} height={height} theme={theme} />}
      {children}
    </Card>
  );
}

const GridLayoutItemRef = forwardRef(GridLayoutItem);

GridLayoutItemRef.propTypes = {
  item: object.isRequired,
  extra: bool,
  theme: string,
};

export default GridLayoutItemRef;
