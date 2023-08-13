/**
 * @author lulongwen
 * Date: 2023-03-12 14:24
 * Description:
 */

export const arrowMarker = (graph: any) => {
  const defs = graph.append("defs");
  const arrow = defs
    .append("marker")
    .attr("id", "arrow")
    .attr("class", "topo-line-arrow")
    .attr("markerUnits", "strokeWidth")
    .attr("markerWidth", "6")
    .attr("markerHeight", "6")
    .attr("viewBox", "0 0 12 12")
    .attr("refX", "5")
    .attr("refY", "6")
    .attr("orient", "auto");
  const arrowPath = "M2,2 L10,6 L2,10 L6,6 L2,2";

  arrow.append("path").attr("d", arrowPath).attr("fill", "#217EF25f");
  return arrow;
};
