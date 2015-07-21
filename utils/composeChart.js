import React, { Component } from 'react';

export default function composeChart(Component, name) {

  class Chart extends Component {

    static propTypes = {
      margin:
      width:
      height:
      data:
    }

    constructor(props){
      super(props);
    }

    render(){
      return <g>{data.map((datum) => <Component>)}</g>;
    }

  }

  return composeSVG(Chart, name);
}
