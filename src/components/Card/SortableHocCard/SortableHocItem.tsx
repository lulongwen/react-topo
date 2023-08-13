/**
 * @author lulongwen
 * Date: 2022-04-11 08:35
 * Description:
 */

import { Card } from 'antd';
import moment from 'moment';
import { bool, string } from 'prop-types';
import { useMemo } from 'react';

import { BarChart, LineChart, PieChart } from '@/components';
import DropdownMenu from './DropdownMenu';
import Table from './Table';

const height = 264;

const COMPONENT = {
  LINE: LineChart,
  BAR: BarChart,
  PIE: PieChart,
  TABLE: Table,
};

SortableHocItem.propTypes = {
  name: string,
  extra: bool,
};

function SortableHocItem({ name, type, data, extra, theme, onEdit, onDelete }) {
  const Component = COMPONENT[type];

  const chartProps = useMemo(initSource, [data]);

  function initSource() {
    const _props = { xAxisData: [], dataSource: [] };
    if (!data) return _props;

    if (type === 'TABLE') {
      _props.dataSource = data;
    } else if (type === 'PIE') {
      _props.dataSource = data.map((it) => {
        return { name: it.name, value: it.metricValue };
      });
    } else if (['BAR', 'LINE'].includes(type)) {
      _props.dataSource = data.map((it) => {
        return { label: it.name, value: it.values[1] };
      });
      const { values } = data[0];
      _props.xAxisData = values[0].map((it) =>
        moment(it).format('HH:mm[\n]MM-DD'),
      );
    }
    return _props;
  }

  return (
    <Card
      title={name}
      size={'small'}
      bodyStyle={{ height, padding: type === 'TABLE' ? 0 : 12 }}
      extra={extra && <DropdownMenu onEdit={onEdit} onDelete={onDelete} />}
    >
      {Component && (
        <Component {...chartProps} height={height - 24} theme={theme} />
      )}
    </Card>
  );
}

export default SortableHocItem;
