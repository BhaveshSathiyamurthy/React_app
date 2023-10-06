var Cname, Claims,Exdata,Sldata,Bkdata,Vdata,Qdata,Cname_filter1,Claims_filter1;
const select = document.querySelectorAll(".company-select");

window.onload = () => {

  startup();
  
} 

function startup()
{
  async function fetchData() {
    const url = "http://localhost:8080/dashdb";
    const response = await fetch(url);
    const datapoints = await response.json();
    
    return datapoints;
    
  }
  fetchData().then((datapoints) => {
     
    const idx = datapoints.map(function (index) {
      return index.company;
    });
    let str = '`<option value="0">All</option>`';
    //console.log(idx)
    
    for (let index = 0; index < idx.length; index++) 
    {
    str+=`
    <option value="${idx[index]}">${idx[index]}</option>
    `
  }

    select[0].innerHTML = str;
    select[1].innerHTML= str;
    
    Cname = datapoints.map(function (index) {
      return index.company;
    });

    Claims = datapoints.map(function (index) {
      return index.Claim;
    });

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
    Qdata = datapoints.map(function (index) {
          return index.quantity;
        });
    Vdata = datapoints.map(function (index) {
          return (index.value*-1);
        });  

    Chart4.data.labels = Cname;
    Chart4.data.datasets[0].data = Claims;
  
    myChart_2.data.labels = Cname;
    myChart_2.data.datasets[0].data = Exdata;
		myChart_2.data.datasets[1].data = Sldata;
		myChart_2.data.datasets[2].data = Bkdata;
		
    Chart3.data.labels = Cname;
		Chart3.data.datasets[0].data = Exdata;
		Chart3.data.datasets[1].data = Sldata;
		Chart3.data.datasets[2].data = Bkdata;
		
    myChart.data.labels = Cname;
    myChart.data.datasets[0].data = Qdata;
    myChart.data.datasets[1].data = Vdata;
    
    myChart.update();
    Chart3.update()
    myChart_2.update()
    Chart4.update();
  });
}


function UpdateChart(name,id) {
  

  if(name!=0){
    async function fetchData() {
      const url = `http://localhost:8080/dashdb/${name}`;
      const response = await fetch(url);
      const datapoints = await response.json();
      return datapoints;}
      
      fetchData().then((datapoints =>{
        //console.log(datapoints);
        Cname_filter1 = [datapoints[0].company];
        Claims_filter1 = [datapoints[0].Claim] ;
        Qdata_filter1 = [datapoints[0].quantity];
        Vdata_filter1 = [datapoints[0].value];

        switch (id) {
          case '1':
            //console.log("chart 4 update");
          Chart4.data.labels = Cname_filter1;
          Chart4.data.datasets[0].data = Claims_filter1;
          Chart4.update();
            break;
          case '2':
           // console.log("chart 4 update");
          myChart.data.labels = Cname_filter1;
          myChart.data.datasets[0].data = Qdata_filter1;
          myChart.data.datasets[1].data = Vdata_filter1;
          myChart.update();
            break;
          default:
            //console.log("null");
            break;
        }
               
}))
  }
else
{
  async function fetchData() {
    const url = "http://localhost:8080/dashdb";
    const response = await fetch(url);
    const datapoints = await response.json();
    
    return datapoints;
  }
  fetchData().then((datapoints =>{
    // Cname = datapoints.map(function (index) {
    //         return index.company;
    //       });
      
    // Claims = datapoints.map(function (index) {
    // return index.Claim;
    // });         
    switch (id) {
      case '1':
      //  console.log("chart 4 update");
      Chart4.data.labels = Cname;
      Chart4.data.datasets[0].data = Claims;
      Chart4.update();
        break;
      case '2':
      //  console.log("else");
      myChart.data.labels = Cname;
      myChart.data.datasets[0].data = Qdata;
      myChart.data.datasets[1].data = Vdata;
      myChart.update();
        break;
      default:
        break;
    }
  }))
  
}
  // fetchData().then((datapoints =>{
  //   if(name!=0)
  //   {
  //     console.log(name);
  //      temp = datapoints.filter(function (point) {
  //     if(point.company == name) {
  //       return point;
  //     }
     
  //   });
  //   console.log(temp);
  //   Cname = [temp[0].company];
  //   Claims = [temp[0].Claim];
  //   }
  //   else
  //   {
  //     Cname = datapoints.map(function (index) {
  //       return index.company;
  //     });
  
  //     Claims = datapoints.map(function (index) {
  //       return index.Claim;
  //     });         
  //   }
  // Chart4.data.labels = Cname;
  // Chart4.data.datasets[0].data = Claims;
  // Chart4.update();
  // }));
   
    
}

function select_ins(indx)
{
  let sel = select[indx].value;
  let sel_id = select[indx].id
  //console.log(sel_id);
  UpdateChart(sel,sel_id);
}

select[0].addEventListener('change',()=>
{
  select_ins(0)
});
select[1].addEventListener('change',()=>
{
  select_ins(1)
});


var ctx_4 = document.getElementById("Chart4").getContext("2d");
var ctx_2 = document.getElementById("Chart2").getContext('2d');
var ctx_3 = document.getElementById("Chart3").getContext('2d');
var ctx = document.getElementById("myChart4").getContext('2d');

const colours = "#0072B2";
const padding = 10;
const fontSize = 14;
const barWidth = 0.66;
const fontFamily = "'Segoe UI', 'Helvetica'";

var Chart4 = new Chart(ctx_4, {
  type: "horizontalBar",
  data: {
    labels: Cname,
    datasets: [
      {
        backgroundColor: colours,
        data: Claims,
      },
    ],
  },
  options: {
    plugins: {},
    tooltips: {
      displayColors: true,
      callbacks: {
        mode: "x",
      },
    },
    scales: {
      xAxes: [
        {
          categoryPercentage: barWidth,
          stacked: true,
          gridLines: {
            drawBorder: false,
            zeroLineColor: "rgba(0, 0, 0, 1)",
            zeroLineWidth: 1,
          },
          ticks: {
            fontSize: fontSize,
            fontFamily: fontFamily,
            padding: padding,
          },
        },
      ],
      yAxes: [
        {
          stacked: true,
          gridLines: {
            drawBorder: false,
            display: false,
          },
          ticks: {
            fontSize: fontSize,
            fontFamily: fontFamily,
            beginAtZero: true,
            padding: padding,
          },
        },
      ],
    },
    responsive: false,
    maintainAspectRatio: true,
    legend: {
      display: false,
    },
  },
});

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

var myChart = new Chart(ctx, {
	type: 'horizontalBar',
	data: {
		labels: Cname,
		datasets: [{
      label:'Quantity',
			backgroundColor:"#0072B2",
			data: Qdata,
		},
    {
      label:'Value',
      backgroundColor:"#D55E00",
      data:Vdata,
    }],
	},
	options: {
      tooltips: {
        yAlign:'top',
        titleAlign:'center',
        position:'average',
        callbacks: {
            label: function(tooltipItem, Vdata) {
              var label = Vdata.datasets[tooltipItem.datasetIndex].label || '';

                    if (label) {
                        label += ': ';
                    }
                    label += Math.abs(tooltipItem.xLabel);
                    return label;
            }
        }
    },
    scales: {
      indexAxis:'y',
      xAxes: [{
        stacked: true,
				ticks: {
					fontSize: fontSize,
					fontFamily: fontFamily,
          padding: padding,
          callback: function(value, index, values) {
            return Math.abs(value);
          }
				}
      }],
      yAxes: [{
        stacked: true,
        
        ticks: {
					fontSize: fontSize,
					fontFamily: fontFamily,
          beginAtZero: true,
					padding: padding
        },
      }]
    },
		responsive: true,
		maintainAspectRatio: true,
		legend: { 
			display: false,
		},
    
	},
});

//console.log(myChart);
document.getElementById('chartjsLegend').innerHTML = myChart.generateLegend();
 
document.getElementById('chartjsLegend').innerHTML = myChart_2.generateLegend();
document.getElementById('chartjsLegends').innerHTML = Chart3.generateLegend();