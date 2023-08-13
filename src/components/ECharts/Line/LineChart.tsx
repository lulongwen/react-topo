/**
 * User: lulongwen
 * Date: 2021-10-24 10:09
 * Description:
 */
import React, { useMemo } from 'react';
import { array, bool, string } from 'prop-types';
import {
  GridComponent,
  LegendComponent,
  TooltipComponent,
} from 'echarts/components';
import { LineChart, LineSeriesOption } from 'echarts/charts';
import type { EChartsCoreOption } from 'echarts/core';
import ECharts from '../ECharts';
import { baseOption } from '../utils';

function getSeries(dataSource): LineSeriesOption[] {
  return dataSource.map((item) => {
    const { label, name, value, data, type = 'line', areaChart, areaStyle, ...rest } = item;
    const serie: LineSeriesOption = {
      data: value ?? data,
      name: label ?? name,
      type,
      symbol: 'none',
      lineStyle: {
        width: 1.8,
        type: 'solid',
      },
      // 高亮选中的图表
      emphasis: {
        focus: 'series'
      },
      ...rest
      // markArea: getMarkArea(length, index)
      // smooth: true, // 圆滑的折线
    };
    if (areaStyle ?? areaChart) {
      serie.areaStyle = { ...areaStyle, opacity: 0.13 };
    }
    return serie;
  });
}

LineEChart.propTypes = {
  dataSource: array.isRequired,
  xAxisData: array.isRequired,
  components: array,
  loading: bool,
  theme: string,
};
LineEChart.defaultProps = {
  theme: 'light',
  components: [],
};

function LineEChart(props) {
  const { height, loading, components, dataSource, ...rest } = props;

  const options: EChartsCoreOption = useMemo(() => {
    const { length } = dataSource;
    const series = Array.isArray(dataSource) ?  getSeries(dataSource) : [];
    return baseOption({length, series, ...rest });
  }, [dataSource, rest]);

  console.log('line', options);

  return (
    <ECharts
      options={options}
      height={height}
      components={[
        ...components,
        LineChart,
        GridComponent,
        LegendComponent,
        TooltipComponent,
      ]}
      loading={loading}
      // renderer='svg'
    />
  );
}

export default LineEChart;
