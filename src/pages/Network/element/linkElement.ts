/**
 * @author lulongwen
 * Date: 2023-03-12 14:20
 * Description:
 */

export const linkElement = (graph: any) => {
  const linkEnter = graph
    .append("path")
    .attr("class", "topo-line")
    .attr("marker-end", "url(#arrow)")
    .attr("stroke", "#217EF25f");
  return linkEnter;
};


