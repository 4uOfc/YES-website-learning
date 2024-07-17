// var layout = {
//   title: {
//     text:'Plot Title',
//     font: {
//       family: 'Courier New, monospace',
//       size: 24
//     },
//     xref: 'paper',
//     x: 0.05,
//   },
//   paper_bgcolor: "orange",
//   xaxis: {
//     title: {
//       text: 'x Axis Line',
//       font: {
//         family: 'Courier New, monospace',
//         size: 18,
//         color: '#7f7f7f'
//       }
//     },
//   },
//   yaxis: {
//     title: {
//       text: 'y Axis Line',
//       font: {
//         family: 'Courier New, monospace',
//         size: 18,
//         color: '#7f7f7f'
//       }
//     }
//   }
// };

// TESTER = document.getElementById("tester");
// Plotly.newPlot(
//   TESTER,
//   [
//     x: ['Blue', 'Cyan', 'Green', 'Yellow', 'Orange', 'Red', 'Deep Red'],
//     y: [23.98523985, 12.06140351, 15.12605042, 14.07657658, 15.87837838, 33.95784543, 54.57920792].map(num => parseFloat(num.toPrecision(4))),
//     type: 'bar',
//     marker: {
//       color: ['blue', 'cyan', 'green', 'yellow', 'orange', 'red', 'darkred']
//     }
//   ],
//   layout
// );
// Plotly.newPlot('data', data);

// var greenBtn = document.querySelector('button');

// greenBtn.addEventListener('click', function() {
//   greenBtn.style.background = 'red';
// })

var greenBtn = document.querySelector('button');

greenBtn.addEventListener('click', function() {
  greenBtn.style.background = 'red';
})

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
