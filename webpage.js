var data = [
  {
    x: ['Blue', 'Cyan', 'Green', 'Yellow', 'Orange', 'Red', 'Deep Red'],
    y: [23.98523985, 12.06140351, 15.12605042, 14.07657658, 15.87837838, 33.95784543, 54.57920792].map(num => parseFloat(num.toPrecision(4))),
    type: 'bar',
    marker: {
      color: ['blue', 'cyan', 'green', 'yellow', 'orange', 'red', 'darkred']
    }
  }
];
Plotly.newPlot('data', data);
