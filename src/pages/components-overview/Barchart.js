import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

function Barchart({ data, xKey, yKey, width, height, margin }) {
    const chartRef = useRef();

    useEffect(() => {
      // Create the SVG container
      const svg = d3
        .select(chartRef.current)
        .append("svg")
        .attr("width", width)
        .attr("height", height);
  
      // Create the scales
      const x = d3
        .scaleBand()
        .domain(data.map((d) => d[xKey]))
        .range([margin.left, width - margin.right])
        .padding(0.1);
  
      const y = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d[yKey])])
        .nice()
        .range([height - margin.bottom, margin.top]);
  
      // Create the bars
      svg
        .selectAll(".bar")
        .data(data)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", (d) => x(d[xKey]))
        .attr("y", (d) => y(d[yKey]))
        .attr("width", x.bandwidth())
        .attr("height", (d) => height - margin.bottom - y(d[yKey]));
  
      // Create the x-axis
      svg
        .append("g")
        .attr("class", "x-axis")
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x));
  
      // Create the y-axis
      svg
        .append("g")
        .attr("class", "y-axis")
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(y));
    }, [data, xKey, yKey, width, height, margin]);
  
    return <div ref={chartRef}></div>;
}

export default Barchart;