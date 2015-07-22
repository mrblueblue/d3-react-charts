import React, { Component } from 'react';

export default class Bar extends Component {
  render(){
    let { height, width, x, y } = this.props
    return (
      <rect className="bar"
            height={height} 
            y={y} 
            width={width}
            x={x}
      > 
      </rect>
    );
  }
}
