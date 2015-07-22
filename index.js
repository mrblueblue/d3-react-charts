import React from 'react';
import BarChart from './components/BarChart';

const data = [
  {x: 'a', y: 20}, 
  {x: 'b', y: 14}, 
  {x: 'c', y: 12}, 
  {x: 'd', y: 19}, 
  {x: 'e', y: 18}, 
  {x: 'f', y: 15}, 
  {x: 'g', y: 10}, 
  {x: 'h', y: 14}
];

React.render(
  <BarChart data={data} width={500} height={500} />,
  document.getElementById('app')
);
