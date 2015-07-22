import React, { Component } from 'react';
import composeSVG from './composeSVG';
import d3 from 'd3';

export default function composeChart(Component) {

  class Chart extends Component {

    constructor(props){
      super(props);
    }

    render(){
      let { data, width, height } = this.props

      data = data.map((d) => d.y);

      let yScale = d3.scale.linear()
        .domain([0, d3.max(data)])
        .range([0, height]);

      let xScale = d3.scale.ordinal()
        .domain(d3.range(data.length))
        .rangeRoundBands([0, width], 0.05);

      let children = data.map( (point, i) => {
        let props = {
          key: i,
          height: yScale(point),
          y: height - yScale(point),
          width: xScale.rangeBand(),
          x: xScale(i)
        }

        return <Component {...props} />
      });

      return <g>{children}</g>;
    }

  }

  return composeSVG(Chart);
}
