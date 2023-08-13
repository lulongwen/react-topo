/**
 * User: lulongwen
 * Date: 2021-10-24 11:39
 * Description:
 */

import React, {
  useCallback,
  useEffect,
  useRef,
  forwardRef,
  // useImperativeHandle,
} from 'react';
import {
  object, number, string, array, oneOf, bool, oneOfType, func,
} from 'prop-types';
import classnames from 'classnames';
import { isEmpty } from 'lodash-es';
import { useResizeDetector } from 'react-resize-detector';

// 引入核心模块 echarts必须要的接口
import * as echarts from 'echarts/core';
// 必须引入渲染引擎 CanvasRenderer & SVGRenderer
import { CanvasRenderer } from 'echarts/renderers';
// 全局过渡动画
import { UniversalTransition } from 'echarts/features';
import type { EChartsType, EChartsCoreOption } from 'echarts/core';

// const dpr = window.devicePixelRatio; // 设备分辨率

interface IProps {
  onRendered: (chart: ECharts) => any;
  onFinished: (chart: ECharts) => any;
  width: number | undefined;
  height: number | undefined;
  autoResize: boolean;
  theme: string | object;
  notMerge: boolean;
  lazyUpdate: boolean;
  group?: string;
}

const RefChart = forwardRef(ECharts);

// RefChart.propTypes = {
//   options: object.isRequired,
//   height: oneOfType([number, string]),
//   renderer: oneOf(['canvas', 'svg']),
//   components: array,
//   style: object,
//   loading: bool,
//   className: string,
//   onClick: func,
// };

RefChart.defaultProps = {
  height: 240,
  renderer: 'canvas',
  components: [],
  style: {},
  loading: false,
  locale: 'ZH',
  onClick: () => {
  },
};

export default RefChart;

function ECharts(props, _ref) {
  const {
    options,
    components,
    renderer,
    // loading,
    className,
    style,
    height,
    // onClick,
    theme,
    locale,
  } = props;

  // Echarts实例
  const chartInstance = useRef<EChartsType | null>(null);

  const onResize = useCallback(() => {
    console.log(66, 'back');
    chartInstance.current?.resize({ animation: { duration: 300 } });
  }, []);

  // DOM节点宽高改变
  const { ref } = useResizeDetector({
    handleHeight: false,
    refreshMode: 'debounce',
    refreshRate: 300,
    // trailing 节流之前和之后都会执行该函数
    // refreshOptions: { leading: false, trailing: false },
    onResize,
  });

  useEffect(init, []);

  useEffect(update, [options, components]);

  // 注册必须的组件
  function init() {
    // 必须在echarts.init之前使用
    echarts.use([
      // renderer === 'canvas' ? CanvasRenderer : SVGRenderer,
      CanvasRenderer,
      UniversalTransition,
      ...components,
    ]);

    return () => {
      // 销毁实例
      chartInstance.current?.dispose();
    };
  }

  function update() {
    if (isEmpty(options)) return;
    if (!ref.current) {
      return console.error('init echarts DOM Error');
    }

    chartInstance.current = initInstance(ref.current);
    console.log(115, chartInstance.current);
    chartInstance.current.clear();
    chartInstance.current.setOption(options, {
      notMerge: false, // default false
      lazyUpdate: true,
    });
  }

  // 判断echart实例是否已经存在，如果不存在，就进行初始化
  function initInstance(dom) {
    // 单例模式，从 DOM上获取 echarts实例
    const singletonInstance = echarts.getInstanceByDom(dom);
    if (singletonInstance) {
      return singletonInstance;
    }

    return echarts.init(dom, theme, {
      renderer,
      locale,
    });
  }

  if (isEmpty(options)) {
    return null;
  }
  // console.log(143, options);

  return (
    <div
      ref={ref}
      className={classnames(className)}
      style={{
        height,
        ...style,
      }}
    />
  );
}

