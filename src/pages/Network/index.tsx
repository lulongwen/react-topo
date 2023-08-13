/**
 * @author lulongwen
 * Date: 2023-03-08 21:57
 * Description:
 */

import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';
import d3tip from 'd3-tip';
// import { message } from 'antd'
import type { Node, Call } from "@/types";

import styles from './style.module.less';
import Legend from './Legend';
// import { nodeElement, linkElement, anchorElement, arrowMarker } from "./element";
import {
  simulationInit,
  simulationSkip,
  zoom,
  initState,
  dashboardStore,
  topologyStore,
  EntityType,
  DepthList
} from './utils'

const MIN_HEIGHT = 300;
const extraHeight = 48 + 48;
// console.log('icons')

const config = {
  depth: 2,
  x: 0,
  y: 0,
  legend: [
    {name: 'service_sla', condition: '<', value: '9500'},
    {name: 'service_cpm', condition: '>', value: '1'}
  ],
  description: {
    "healthy": "Healthy",
    "unhealthy": "Success Rate < 95% and Traffic > 1 calls / min"
  },
  nodeDashboard: [
    {
      "scope": "Service",
      "dashboard": "General-Service"
    },
    {
      "scope": "ServiceInstance",
      "dashboard": "General-Instance"
    },
    {
      "scope": "Endpoint",
      "dashboard": "General-Endpoint"
    }
  ]
};

const Network: React.FC = () => {
  const simulation = useRef<any>(null);
  const svgRef = useRef<Nullable<any>>(null);
  const chartRef = useRef<Nullable<HTMLDivElement>>(null);
  const tipRef = useRef<Nullable<HTMLDivElement>>(null);
  const graph = useRef<any>(null);

  const nodeRef = useRef<any>(null);
  const linkRef = useRef<any>(null);
  const anchorRef = useRef<any>(null);
  const arrowRef = useRef<any>(null);
  // const [state, setState] = useState(initState);

  useEffect(() => {
    window.addEventListener('resize', resize);
    // 创建 svg画布
    svgRef.current = d3.select(chartRef.current)
      .append('svg')
      .attr('class', styles.svg);

    // 初始化 legend & svg
    initLegendMetrics();
    init();
    // update();
    // setNodeTools(settings.value.nodeDashboard);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  function resize() {
    const height = getViewHeight();
    svgRef.current.attr("height", height)//.attr("width", width.value);
  }

  function initLegendMetrics() {
    const ids = topologyStore.nodes.map(d => d.id);
    const names = config.legend.map(d => d.name);
    if (names.length && ids.length) {
      // graphql 查询参数
      // const param = await useQueryTopologyMetrics(names, ids);
      // const res = topologyStore.getLegendMetrics();
      // if (res.error)  message.error(res.error);
    }
  }

  function init() {
    tipRef.current = (d3tip as any)().attr("class", styles.tip).offset([-8, 0]);
    graph.current = svgRef.current.append("g").attr("class", "topo-svg-graph").attr("transform", `translate(-100, -100)`);
    graph.current.call(tipRef.current);

    nodeRef.current = graph.current.append("g").selectAll(".topo-node");
    linkRef.current = graph.current.append("g").selectAll(".topo-line");
    anchorRef.current = graph.current.append("g").selectAll(".topo-line-anchor");
    arrowRef.current = graph.current.append("g").selectAll(".topo-line-arrow");
    svgRef.current.call(zoom(d3, graph.current, [-100, -100]));
    svgRef.current.on("click", (event: PointerEvent) => {
      event.stopPropagation();
      event.preventDefault();
      // topologyStore.setNode(null);
      // topologyStore.setLink(null);
      // dashboardStore.selectWidget(config);
    });
    simulation.current = simulationInit(d3, topologyStore.nodes, topologyStore.calls, ticked);
  }

  function updateSettings(config: any) {
    // settings.value = config;
    // setNodeTools(config.nodeDashboard);
  }

  function getViewHeight() {
    const height = document.body.clientHeight - extraHeight;
    return height < MIN_HEIGHT ? MIN_HEIGHT : height;
  }

  function ticked() {
    linkRef.current.attr(
      "d",
      (d: Call | any) =>
        `M${d.source.x} ${d.source.y} Q ${(d.source.x + d.target.x) / 2} ${
          (d.target.y + d.source.y) / 2 - d.loopFactor * 90
        } ${d.target.x} ${d.target.y}`,
    );
    anchorRef.current.attr(
      "transform",
      (d: Call | any) =>
        `translate(${(d.source.x + d.target.x) / 2}, ${(d.target.y + d.source.y) / 2 - d.loopFactor * 45})`,
    );
    nodeRef.current.attr("transform", (d: Node | any) => `translate(${d.x - 22},${d.y - 22})`);
  }


  return (
    <div
      ref={chartRef}
      className={styles.topo}
    >
      <Legend {...config.description} />
    </div>
  );
};

export default Network;
