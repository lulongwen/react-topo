/**
 * @author lulongwen
 * Date: 2023-03-12 14:35
 * Description:
 */

export const simulationInit = (d3: any, nodes: any, links: any, ticked: any) => {
  const simulation = d3
    .forceSimulation(nodes)
    .force(
      "collide",
      d3.forceCollide().radius(() => 60),
    )
    .force("yPos", d3.forceY().strength(1))
    .force("xPos", d3.forceX().strength(1))
    .force("charge", d3.forceManyBody().strength(-520))
    .force(
      "link",
      d3.forceLink(links).id((d: { id: string }) => d.id),
    )
    .force("center", d3.forceCenter(window.innerWidth / 2, window.innerHeight / 2 - 20))
    .on("tick", ticked)
    .stop();
  simulationSkip(d3, simulation, ticked);
  return simulation;
};

export const simulationSkip = (d3: any, simulation: any, ticked: any) => {
  d3.timeout(() => {
    const n = Math.ceil(Math.log(simulation.alphaMin()) / Math.log(1 - simulation.alphaDecay()));
    for (let i = 0; i < n; i += 1) {
      simulation.tick();
      ticked();
    }
  });
};
