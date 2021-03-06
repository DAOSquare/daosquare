import { useEffect } from 'react';
import * as d3 from 'd3';
import rawData from './data.json';

const data = {
  nodes: rawData.nodes.map(d => ({
    ...d,
    start: new Date(d.start).getTime(),
    end: new Date(d.end).getTime(),
  })),
  links: rawData.links.map(d => ({
    ...d,
    start: new Date(d.start).getTime(),
    end: new Date(d.end).getTime(),
  })),
};

function ForceDirectedGraph({ width = 600, height = 600 }) {
  useEffect(() => {
    const simulation = d3
      .forceSimulation()
      .force('charge', d3.forceManyBody())
      .force(
        'link',
        d3
          .forceLink()
          .id(d => d.id)
          .distance(50)
      )
      .force(
        'collide',
        d3.forceCollide().radius(d => 15 + (d.id % 10))
      )
      .force('x', d3.forceX())
      .force('y', d3.forceY())
      .on('tick', onTick);

    const svg = d3
      .select('svg')
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', [-width / 2, -height / 2, width, height]);

    let link = svg
      .append('g')
      .attr('stroke', '#ff98d3')
      .attr('stroke-opacity', 0.6)
      .selectAll('line');

    let node = svg
      .append('g')
      .attr('stroke', '#fff')
      .attr('stroke-width', 1.5)
      .attr('fill', '#AE8FF7')
      .selectAll('circle');

    function onTick() {
      node.attr('cx', d => d.x).attr('cy', d => d.y);
      // d3.selectAll("circle")
      //   .attr("fill", "blue")
      //   .transition()
      //   .duration(400)
      //   .ease(d3.easeBounceIn)
      //   .attr("fill", "orange");

      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y)
        .attr('stroke-width', d => (d.target.id + d.source.id) % 10);
    }

    const chart = Object.assign(svg.node(), {
      update({ nodes, links }) {
        // const old = new Map(node.data().map((d) => [d.id, d]));
        // nodes = nodes.map((d) => ({ ...d }));
        // links = links.map((d) => ({ ...d }));

        node = node
          .data(nodes, d => d.id)
          .join(enter =>
            enter.append('circle').attr('r', d => 5 + (d.id % 10))
          );
        link = link.data(links, d => [d.source, d.target]).join('line');

        simulation.nodes(nodes);
        simulation.force('link').links(links);
        simulation.alpha(1).restart().tick();
        onTick();
      },
    });

    const contains = ({ start, end }, time) =>
      start - 2000 <= time && time < end + 2000;

    function update(time) {
      const nodes = data.nodes.filter(d => contains(d, time));
      const links = data.links.filter(d => contains(d, time));
      chart.update({ nodes, links });
    }

    const times = d3
      .scaleTime()
      .domain([
        d3.min(data.nodes, d => d.start),
        d3.max(data.nodes, d => d.end),
      ])
      .ticks(100)
      .filter(time => data.nodes.some(d => contains(d, time)));

    let i = 0;

    function doUpdate() {
      if (i >= times.length) {
        i = 0;
      }
      update(times[i++]);

      setTimeout(doUpdate, 600);
    }

    doUpdate();
  }, [width, height]);

  return <svg width={width} height={height} />;
}

export default ForceDirectedGraph;
