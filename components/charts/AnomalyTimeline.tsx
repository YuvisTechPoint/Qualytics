"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";

const data = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  count: Math.floor(20 + Math.random() * 40 + Math.sin(i / 3) * 15),
}));

export function AnomalyTimeline({ className }: { className?: string }) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = 280;
    const height = 80;
    const margin = { top: 10, right: 10, bottom: 20, left: 10 };

    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3
      .select(svgRef.current)
      .attr("viewBox", `0 0 ${width} ${height}`);

    const x = d3
      .scaleLinear()
      .domain([1, 30])
      .range([margin.left, width - margin.right]);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.count)! + 10])
      .range([height - margin.bottom, margin.top]);

    const area = d3
      .area<(typeof data)[0]>()
      .x((d) => x(d.day))
      .y0(height - margin.bottom)
      .y1((d) => y(d.count))
      .curve(d3.curveMonotoneX);

    const line = d3
      .line<(typeof data)[0]>()
      .x((d) => x(d.day))
      .y((d) => y(d.count))
      .curve(d3.curveMonotoneX);

    svg
      .append("path")
      .datum(data)
      .attr("fill", "rgba(255,107,53,0.1)")
      .attr("d", area);

    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#FF6B35")
      .attr("stroke-width", 2)
      .attr("d", line);
  }, []);

  return <svg ref={svgRef} className={className} />;
}
