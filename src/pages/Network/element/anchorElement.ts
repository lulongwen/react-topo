/**
 * @author lulongwen
 * Date: 2023-03-12 14:23
 * Description:
 */

export const anchorElement = (graph: any, funcs: any, tip: any) => {
  const linkEnter = graph
    .append("circle")
    .attr("class", "topo-line-anchor")
    .attr("r", 5)
    .attr("fill", "#217EF25f")
    .on("mouseover", function (event: unknown, d: unknown) {
      tip.html(funcs.tipHtml).show(d, this);
    })
    .on("mouseout", function () {
      tip.hide(this);
    })
    .on("click", (event: unknown, d: unknown) => {
      funcs.handleLinkClick(event, d);
    });
  return linkEnter;
};
