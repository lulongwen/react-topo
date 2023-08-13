/**
 * User: lulongwen
 * Date: 2021-10-24 10:09
 * Description:
 */
import React, {useEffect, useState} from 'react';
import {array, bool} from 'prop-types';

import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent
} from 'echarts/components';
import {LineChart} from 'echarts/charts';
import {UniversalTransition} from 'echarts/features';

import { grid } from '../utils/util'
import ECharts from '../ECharts'

const OPTIONS = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'AsyncSelect Engine']
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      symbol: "none", // 去掉折线上面的小圆点
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      symbol: "none", // 去掉折线上面的小圆点
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      symbol: "none", // 去掉折线上面的小圆点
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: 'AsyncSelect Engine',
      type: 'line',
      stack: 'Total',
      label: {
        show: true,
        position: 'top'
      },
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      symbol: "none", // 去掉折线上面的小圆点
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ],
  grid,
};

Chart.propTypes = {
  loading: bool,
};
Chart.defaultProps = {
  loading: false,
};

function Chart({loading}) {
  const [options, setOptions] = useState({});

  useEffect(update, [loading,]);

  function update() {
    setOptions(OPTIONS)
  }

  const attrs = {
    options,
    // renderType: 'svg',
    components: [
      TitleComponent,
      ToolboxComponent,
      TooltipComponent,
      GridComponent,
      LegendComponent,
      LineChart,
      UniversalTransition
    ]
  }

  return (
    <ECharts {...attrs} />
  );
}

export default Chart;
