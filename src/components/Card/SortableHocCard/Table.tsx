/**
 * @author lulongwen
 * Date: 2022-04-10 23:10
 * Description:
 */

import { Table } from 'antd';
import { array, number } from 'prop-types';

const columns = [
  {
    title: '序号',
    dataIndex: 'index',
    width: 48,
    render: (_, row, index) => index + 1,
  },
  {
    title: '指标名称',
    dataIndex: 'name',
  },
  {
    title: '指标值',
    dataIndex: 'metricValue',
    sort: (a, b) => a.metricValue - b.metricValue,
    render: (val) => (val ? val.toFixed(2) : '-'),
  },
];

TableItem.propTypes = {
  dataSource: array.isRequired,
  height: number,
};

function TableItem({ dataSource }) {
  return (
    <Table
      rowKey={'id'}
      columns={columns}
      dataSource={dataSource}
      pagination={false}
      // scroll={{y: height - 40}}
    />
  );
}

export default TableItem;
