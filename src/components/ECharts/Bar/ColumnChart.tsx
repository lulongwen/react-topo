/**
 * User: lulongwen
 * Date: 2021-10-24 10:09
 * Description:
 */
import React, { useMemo } from 'react';
import { array, bool, string } from 'prop-types';
import {
  TooltipComponent,
  GridComponent,
  LegendComponent,
} from 'echarts/components';
import { BarChart, BarSeriesOption } from 'echarts/charts';
import ECharts from '../ECharts';
import { baseOption } from '../utils';

function getSeries(dataSource): BarSeriesOption[] {
  return dataSource.map((item) => {
    const { label, name, value, data, type = 'bar', ...rest } = item;
    const serie: BarSeriesOption = {
      data: value ?? data,
      name: label ?? name,
      type,
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.03)'
      },
      barMaxWidth: '80%',
      // 高亮选中的图表
      emphasis: {
        focus: 'series'
      },
      ...rest
    };
    return serie;
  });
}

ColumnChart.propTypes = {
  dataSource: array.isRequired,
  xAxisData: array.isRequired,
  components: array,
  loading: bool,
  theme: string,
};
ColumnChart.defaultProps = {
  theme: 'light',
  components: [],
};

function ColumnChart({ dataSource, xAxisData, components, ...rest }) {

  const options: BarSeriesOption = useMemo(() => {
    const { length } = dataSource;
    const series = Array.isArray(dataSource) ?  getSeries(dataSource) : [];
    return baseOption({
      length,
      xAxisData,
      series,
      // legend: { itemHeight: 12 },
      xAxis: { boundaryGap: true },
      tooltip: {
        axisPointer: {
          type: 'shadow'
        }
      },
      ...rest
    });
  }, [dataSource, xAxisData])
  console.log(70, options)

  return (
    <ECharts
      {...rest}
      options={options}
      components={[
        ...components,
        BarChart,
        TooltipComponent,
        GridComponent,
        LegendComponent,
      ]}
    />
  );
}

export default ColumnChart;
