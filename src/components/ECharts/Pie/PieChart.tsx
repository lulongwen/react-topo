/**
 * User: lulongwen
 * Date: 2021-10-24 15:06
 * Description:
 */
import React, { useMemo } from 'react';
import { array } from 'prop-types';
import {
  TooltipComponent,
  LegendComponent,
} from 'echarts/components';
import { PieChart, PieSeriesOption } from 'echarts/charts';
import { LabelLayout } from 'echarts/features';
import { merge } from 'lodash-es';
import ECharts from '../ECharts';

PieEChart.propTypes = {
  dataSource: array.isRequired,
};

function PieEChart({ dataSource, theme = 'light', ...rest }) {

  const options: PieSeriesOption = useMemo(() => {
    const baseOptions = {
      series: [
        {
          // name: 'Access',
          type: 'pie',
          radius: '70%',
          center: ['50%', '60%'],
          avoidLabelOverlap: false,
          data: dataSource.map(it => ({
            name: it.name ?? it.label,
            value: it.value ?? it.data,
          })),
          // label: {
          //   show: false,
          //   position: 'center'
          // },
          // labelLine: {
          //   show: false,
          // },
          emphasis: {
            itemStyle: {
              shadowBlur: 0.5,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
      tooltip: {
        trigger: 'item',
      },
      legend: {
        type: 'scroll',
        // orient: 'vertical', // Y轴排列
        // icon: 'rect',
        // top: -4,
        // itemWidth: 12,
        // itemHeight: 12,
        textStyle: {
          color: theme === 'dark' ? '#fff' : '#333',
          fontSize: 12,
        },
        pageTextStyle: {
          color: theme === 'dark' ? '#fff' : '#333',
        }
      },
    };

    return merge(baseOptions, rest);
  }, [dataSource, theme]);

  return (
    <ECharts
      {...rest}
      options={options}
      components={[
        PieChart,
        TooltipComponent,
        LegendComponent,
        LabelLayout,
      ]}
      // renderer='svg'
    />
  );
}

export default PieEChart;
