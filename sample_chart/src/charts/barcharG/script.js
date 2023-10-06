// fetch
var Cname,Exdata,Sldata,Bkdata;
function UpdateChart(){
	async function fetchData(){
		const url = 'http://localhost:3000/bardata';
		const response = await fetch(url);
		const datapoints = await response.json();
		console.log(datapoints);
		return datapoints;
	};
	fetchData().then(datapoints =>{
		 Cname = datapoints.map(
			function(index)
			{
				return index.company;
			})

			Exdata = datapoints.map(
				function(index)
				{
					return index.expired;
				})

				Sldata = datapoints.map(
					function(index)
					{
						return index.sealable;
					})
				Bkdata = datapoints.map(
					function(index)
					{
						return index.breakage;
					})
		console.log(Cname);
		Chart3.data.labels = Cname;
		Chart3.data.datasets[0].data = Exdata;
		Chart3.data.datasets[1].data = Sldata;
		Chart3.data.datasets[2].data = Bkdata;
		Chart3.update()

	
	});
}
UpdateChart();
var ctx_3 = document.getElementById("Chart3").getContext('2d');
const fontFamily = "'Segoe UI', 'Helvetica'";
const fontSize = 14;
const barWidth = 0.66;

var Chart3 = new Chart(ctx_3, {
	type: 'bar',
	data: {
		labels:Cname,
		datasets: [{
			label: 'Expired',
			backgroundColor: "#0072B2",
			data: Exdata,
      stack:'Stack 0',
		}, {
			label: 'Sealable',
			backgroundColor: "#009E73",
			data: Sldata,
      stack:'Stack 1',
		},{
			label: 'Breakage',
			backgroundColor: "#D55E00",
			data: Bkdata,
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
