/**
 * @author lulongwen
 * Date: 2023-03-12 14:57
 * Description:
 */

export const zoom = (d3: any, graph: any, diff: number[]) =>
  d3
    .zoom()
    .scaleExtent([0.3, 10])
    .on("zoom", (d: any) => {
      graph.attr(
        "transform",
        `translate(
        ${d.transform.x + diff[0]}, 
        ${d.transform.y + diff[1]})scale(${d.transform.k})`,
      );
    });
