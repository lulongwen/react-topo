/**
 * User: lulongwen
 * Date: 2021-10-24 10:09
 * Description:
 */

import React from 'react';
import { LineChart } from 'echarts/charts';
import ColumnChart from './ColumnChart';

function ColumnLineChart(props) {

  return (
    <ColumnChart
      {...props}
      components={[
        LineChart,
      ]}
    />
  );
}

export default ColumnLineChart;
