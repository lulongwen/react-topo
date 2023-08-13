/**
 * @author lulongwen
 * Date: 2023-04-02 11:47
 * Description:
 */
import { merge } from 'lodash-es';
import { colors } from './colors';

export const grid = {
  top: 16,
  right: 16,
  bottom: 32,
  left: 32,
  containLabel: true, // 防止标签溢出
};

export const yAxis = {
  type: 'value',
  splitLine: { // 改为虚线网格
    show: true,
    lineStyle: {
      type: 'dashed',
    },
  },
};

export function baseOption({ xAxisData, length, theme, ...rest }) {
  const options = {
    color: colors,
    grid: {
      ...grid,
      top: length > 1 ? 32 : 24,
    },
    xAxis: {
      type: 'category', // 类目轴
      // 坐标轴留白 false 就是贴边没有边距，不留白，false 柱状图溢出
      boundaryGap: false,
      // boundaryGap: [0, 0.01],
      // min: 0,
      // max: 1500,
      data: xAxisData,
      offset: 10,
      axisTick: {
        lineStyle: { color: '#c1c5ca41' },
        alignWithLabel: false, // 坐标轴刻度与标签对齐
      },
      splitLine: { show: false },
      axisLine: {
        // onZero: false, // X 轴或者 Y 轴的轴线是否在另一个轴的 0 刻度上
        lineStyle: { color: 'rgba(0,0,0,0)' }
      },
      axisLabel: {
        color: '#9da5b2',
        fontSize: 11,
        overflow: 'break',
        // showMaxLabel: true, // 强制显示最大值
      },
    },
    yAxis: [
      {
        type: 'value',
        position: 'left',
        axisLine: {
          show: false,
          onZero: false, // Y轴是否在 X轴零刻度上
        },
        axisTick: { show: false },
        // 改为虚线网格
        splitLine: { lineStyle: { color: 'rgba(193,197,202,0.25)', type: 'dashed' } },
        axisLabel: { color: '#9da5b2', fontSize: 11 },
      }
    ],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      },
      backgroundColor: 'rgba(50,50,50,.9)',
      textStyle: {
        fontSize: 12,
        color: '#ccc',
      },
      enterable: true,
      extraCssText: 'max-height: 240px; overflow: auto;',
      // appendToBody: true
    },
    legend: {
      type: 'scroll',
      show: length > 1,
      // icon: 'rect',
      // // data: legendData,
      // top: -4,
      // itemWidth: 12,
      // itemHeight: 4,
      textStyle: {
        color: theme === 'dark' ? '#fff' : '#333',
        fontSize: 12,
      },
      pageTextStyle: {
        color: theme === 'dark' ? '#fff' : '#333',
      }
    },
  };

  return merge(options, rest);
}
