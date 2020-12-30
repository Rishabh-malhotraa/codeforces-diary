import React, { useRef } from "react";
import * as d3 from "d3";

//WIP
const BubbleChart = () => {
  const divRef = useRef<HTMLDivElement>(null);

  const createSvg = () => {
    return d3
      .select(divRef.current)
      .append("svg")
      .attr("width", 400)
      .attr("height", 400)
      .attr("style", "border:  thin red solid");
  };

  // const packII = (data: unknown, size: any) => {
  //   return d3.pack().size(size).padding(3);
  // };

  // const makeHierarchy = (data: unknown) => {
  //   return d3.hierarchy({ children: data }).sum((d) => 2);
  // };

  // const pack = (data) => {
  //   d3
  //     .pack()
  //     .size([width - 2, height - 2])
  //     .padding(3)(d3.hierarchy({ children: data }).sum((d) => d.value));
  // };

  const drawChart = (svg: d3.Selection<SVGSVGElement, unknown, null, undefined>) => {
    svg.append("circle").attr("r", 100);
  };

  React.useEffect(() => {
    const svg = createSvg();
    drawChart(svg);
    console.log(divRef);
  }, []);
  return (
    <>
      <h1>Bubble Chart</h1>
      <div id="d3-bubble-Chart" ref={divRef}></div>
    </>
  );
};

export default BubbleChart;
