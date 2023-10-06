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
        offset: 4,
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
        mode: 'x',
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
//updateScale(myChart);

//console.log(myChart.scales['x-axis-0'])