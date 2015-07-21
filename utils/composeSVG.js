import React, { Component } from 'react';

export default function composeSVG(Component, name){

  class SVG extends Component {
    render(){
      return (
        <svg className={name}>
          <Component/>;
        </svg>
      );
    }
  }

  return SVG;
}
