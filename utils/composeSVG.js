import React, { Component } from 'react';

export default function composeSVG(Component){
  
  class SVG extends Component {
    render(){
      let { width, height } = this.props
      return (
        <svg width={width} 
             height={height} >
          <Component {...this.props}/>;
        </svg>
      );
    }
  }

  return SVG;
}
