## D3 React Charts

A Bar Chart is created with functional composition and a React Bar component. 

First, we take a SVG element and compose a D3 Chart out of it. 

We then use this chart to compose a Bar Chart. Specifically, we map data to Bar components.

    // rough sketch of functional composition!
    composeSVG(composeChart(Bars));
