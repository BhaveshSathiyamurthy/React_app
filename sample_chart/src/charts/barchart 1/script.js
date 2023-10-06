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
		myChart_2.data.labels = Cname;
		myChart_2.data.datasets[0].data = Exdata;
		myChart_2.data.datasets[1].data = Sldata;
		myChart_2.data.datasets[2].data = Bkdata;
		myChart_2.update()

	
	});
}
UpdateChart();
var ctx_2 = document.getElementById("Chart2").getContext('2d');

var myChart_2 = new Chart(ctx_2, {
	type: 'bar',
	data: {
		labels:Cname,
		datasets: [{
			label: 'Expired',
			backgroundColor: "#0072B2",
			data: Exdata,
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