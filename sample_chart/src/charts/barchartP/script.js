
var Cname,Vdata,Qdata;
const select = document.querySelector("#company-select");

window.onload = () => {
  console.log(select);
  startup();
  
} 

function startup()
{
  async function fetchData() {
    const url = "http://localhost:3000/bardata";
    const response = await fetch(url);
    const datapoints = await response.json();
    
    return datapoints;
    
  }
  fetchData().then((datapoints) => {
     
    const idx = datapoints.map(function (index) {
      return index.company;
    });
    let str = '`<option value="0">All</option>`';
    console.log(idx)
    
    for (let index = 0; index < idx.length; index++) 
    {
    str+=`
    <option value="${idx[index]}">${idx[index]}</option>
    `
  }

    select.innerHTML = str;
    
    Cname = datapoints.map(function (index) {
      return index.company;
    });

    Qdata = datapoints.map(function (index) {
      return index.quantity;
    });
    Vdata = datapoints.map(function (index) {
      return (index.value*-1);
    });  
    myChart.data.labels = Cname;
    myChart.data.datasets[0].data = Qdata;
    myChart.data.datasets[1].data = Vdata;
    myChart.update();
  });
  console.log(select);
}


function UpdateChart(name) {
  
  async function fetchData() {
    const url = "http://localhost:3000/bardata";
    const response = await fetch(url);
    const datapoints = await response.json();
    
    return datapoints;
    
  }
    
  fetchData().then((datapoints =>{

    if(name!=0)
    {
       temp = datapoints.filter(function (point) {
      if(point.company == name) {
        return point;
      }
     
    });
    console.log(temp);
    Cname = [temp[0].company];
    Vdata = [temp[0].value];
    Qdata = [temp[0].quantity];
    }
    else{
      Cname = datapoints.map(function (index) {
        return index.company;
      });
  
      Qdata = datapoints.map(function (index) {
        return index.quantity;
      });    
      Vdata = datapoints.map(function (index) {
        return (index.value*-1);
      });   
    }      
 console.log(Cname);
    myChart.data.labels = Cname;
    myChart.data.datasets[0].data = Qdata;
    myChart.data.datasets[1].data = Vdata;
    myChart.update();
  })); 
}

//UpdateChart();
select.addEventListener('change',()=>
{
  let sel = select.value;
  console.log(sel);
  UpdateChart(sel);
});
var ctx = document.getElementById("myChart4").getContext('2d');
const fontFamily = "'Segoe UI', 'Helvetica'";
const padding = 10;
const fontSize = 14;
const barWidth = 0.5;

console.log(Cname);

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

console.log(myChart);
document.getElementById('chartjsLegend').innerHTML = myChart.generateLegend();
 