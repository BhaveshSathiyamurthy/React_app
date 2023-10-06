var ctx = document.getElementById("myChart4").getContext('2d');
const data = [59, 87, 45, 33, 24, 34, -12, -59, -5, -56, -58,-12];
const colours = data.map((value) => value < 0 ? '#86B4E9' : '#334F98');
const fontFamily = "'Segoe UI', 'Helvetica'";
const labels = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
const padding = 10;
const fontSize = 14;
const barWidth = 0.66;

var myChart = new Chart(ctx, {
	type: 'horizontalBar',
	data: {
		labels: labels,
		datasets: [{
			backgroundColor: colours,
			data: data
		}],
	},
	options: {
    plugins: {
      datalabels: {
        anchor: function(context) {
          var value = context.dataset.data[context.dataIndex];
          return value > 0 ? 'end' : 'start';
        },
        align: function(context) {
          var value = context.dataset.data[context.dataIndex];
          return value <= 0 ? 'end' : 'start';
        },
        //offset: 10,
        display: function (context) {
          return context.dataset.data[context.dataIndex];
        },
        color: '#000',
        font: {
          weight: 'bold',
          size: fontSize
        },
      },
    },
    tooltips: {
      displayColors: true,
      callbacks:{
        //mode: 'x',
      },
    },
    scales: {
      xAxes: [{
        categoryPercentage: barWidth,
        stacked: true,
        gridLines: {
					drawBorder: false,
          zeroLineColor: 'rgba(0, 0, 0, 1)',
          zeroLineWidth: 1
				},
				ticks: {
					fontSize: fontSize,
					fontFamily: fontFamily,
          padding: padding
				}
      }],
      yAxes: [{
        stacked: true,
        gridLines: {
          drawBorder: false,
          display: false,
        },
        ticks: {
					fontSize: fontSize,
					fontFamily: fontFamily,
          beginAtZero: true,
					padding: padding
        },
      }]
    },
		responsive: false,
		maintainAspectRatio: true,
		legend: { 
			display: false,
		},
	},
});
var minTick = myChart.scales['x-axis-0'].ticks[0];
var minTicky = myChart.scales['y-axis-0'].ticks[0];
console.log(minTick)
function updateScale(myChart) {
    myChart.options.scales.xAxes[0] = {
        ticks: {
          suggestedMin: minTick -10,
          maxRotation: 0
        },
        gridLines: {
					drawBorder: false,
          display: false,
				},
    };
    myChart.update();
}

var ctx_2 = document.getElementById("Chart2").getContext('2d');

var myChart_2 = new Chart(ctx_2, {
	type: 'bar',
	data: {
		labels: ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10", "D11", "D12","D13","D14","D15"],
		datasets: [{
			label: 'Expired',
			backgroundColor: "#0072B2",
			data: [5, 7, 6, 7, 7,0, 0, 0, 0, 0, 0, 0,0,0,0],
		}, 
    {
			label: 'Sealable',
			backgroundColor: "#009E73",
			data: [14, 10,12 , 20, 10,10, 9, 8, 8, 8, 7, 6,4,2,0],
		},
  {
			label: 'Breakage',
			backgroundColor: "#D55E00",
			data: [60, 50, 35, 27,30, 36, 34, 33, 27, 29, 22,21,19,20,15],
		}],
	},
	options: {
    tooltips: {
      displayColors: true,
      callbacks:{
        mode: 'x',
      },
    },
    scales: {
      xAxes: [{
        categoryPercentage: 0.66,
        stacked: true,
        gridLines: {
          display: false,
        },
				ticks: {
					fontSize: 14,
					fontFamily: "'Segoe UI', 'Helvetica'",
				}
      }],
      yAxes: [{
        stacked: true,
				gridLines: {
					drawBorder: false,
					zeroLineColor: 'rgba(0, 0, 0, 1)',
          zeroLineWidth: 2
				},
        ticks: {
					fontSize: 14,
					fontFamily: "'Segoe UI', 'Helvetica'",
          beginAtZero: true,
					padding: 20,
          callback: function(value, index, values) {
            return value +'M';
          }
        },
        type: 'linear',
      }]
    },
		responsive: false,
		maintainAspectRatio: true,
		legend: { 
			display: false,
		},
	},
});
document.getElementById('chartjsLegend').innerHTML = myChart_2.generateLegend();


//chart 3

var ctx_3 = document.getElementById("Chart3").getContext('2d');
//const fontFamily = "'Segoe UI', 'Helvetica'";
//const fontSize = 14;
var dataSetOne = [12, 59, 5, 56, 58, 12, 59, 87, 45, 33, 24, 34];
var dataSetTwo = [12, 59, 5, 56, 58, 12, 59, 85, 23, 20, 19, 22];
var dataSetThree = [14, 39, 15, 36, 28, 22, 39, 65, 13, 30, 49, 32];
//const barWidth = 0.66;

var Chart3 = new Chart(ctx_3, {
	type: 'bar',
	data: {
		labels:["D1", "D2", "D3", "D4", "D5", "D6", "D7"],
		datasets: [{
			label: 'Expired',
			backgroundColor: "#0072B2",
			data: dataSetOne,
      stack:'Stack 0',
		}, {
			label: 'Sealable',
			backgroundColor: "#009E73",
			data: dataSetTwo,
      stack:'Stack 1',
		},{
			label: 'Breakage',
			backgroundColor: "#D55E00",
			data: dataSetThree,
      stack:'Stack 2',
		}],
	},
	options: {
    tooltips: {
      displayColors: true,
      callbacks:{
        mode: 'x',
      },
    },
    scales: {
      xAxes: [{
        categoryPercentage: barWidth,
        gridLines: {
          display: false,
        },
				ticks: {
					fontSize: fontSize,
					fontFamily: fontFamily,
				}
      }],
      yAxes: [{
				gridLines: {
					drawBorder: false,
					zeroLineColor: 'rgba(0, 0, 0, 1)',
          zeroLineWidth: 1
				},
        ticks: {
					fontSize: fontSize,
					fontFamily: fontFamily,
          beginAtZero: true,
					padding: 20,
          callback: function(value, index, values) {
            if(value > 0) {
              return value+"k";
              //In case of negative values, do not add dollar sign
            } if(value < 0) { 
              return value;
            }
          }
        },
        type: 'linear',
      }]
    },
		responsive: true,
		maintainAspectRatio: true,
		legend: { 
			display: false,
		},
	},
});
document.getElementById('chartjsLegends').innerHTML = Chart3.generateLegend();


//chart 4

var ctx_4 = document.getElementById("Chart4").getContext('2d');

var Chart4 = new Chart(ctx_4, {
	type: 'horizontalBar',
	data: {
		labels: ["d1","d2","d3","d4","d5","d6"],
		datasets: [{
			backgroundColor: colours,
			data: [59, 87, 45, 33, 24, 34],
		}],
	},
	options: {
    plugins: {
      datalabels: {
        anchor: function(context) {
          var value = context.dataset.data[context.dataIndex];
          return value > 0 ? 'end' : 'start';
        },
        align: function(context) {
          var value = context.dataset.data[context.dataIndex];
          return value <= 0 ? 'end' : 'start';
        },
        //offset: 10,
        display: function (context) {
          return context.dataset.data[context.dataIndex];
        },
        color: '#000',
        font: {
          weight: 'bold',
          size: fontSize
        },
      },
    },
    tooltips: {
      displayColors: true,
      callbacks:{
        //mode: 'x',
      },
    },
    scales: {
      xAxes: [{
        categoryPercentage: barWidth,
        stacked: true,
        gridLines: {
					drawBorder: false,
          zeroLineColor: 'rgba(0, 0, 0, 1)',
          zeroLineWidth: 1
				},
				ticks: {
					fontSize: fontSize,
					fontFamily: fontFamily,
          padding: padding
				}
      }],
      yAxes: [{
        stacked: true,
        gridLines: {
          drawBorder: false,
          display: false,
        },
        ticks: {
					fontSize: fontSize,
					fontFamily: fontFamily,
          beginAtZero: true,
					padding: padding
        },
      }]
    },
		responsive: false,
		maintainAspectRatio: true,
		legend: { 
			display: false,
		},
	},
});

//updateScale(myChart);

//console.log(myChart.scales['x-axis-0'])