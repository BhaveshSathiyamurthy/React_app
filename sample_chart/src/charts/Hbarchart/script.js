
var Cname, Claims,temp;

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

    Claims = datapoints.map(function (index) {
      return index.Claim;
    });
    Chart4.data.labels = Cname;
  Chart4.data.datasets[0].data = Claims;
  Chart4.update();
  
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
      console.log(name);
       temp = datapoints.filter(function (point) {
      if(point.company == name) {
        return point;
      }
     
    });
    console.log(temp);
    Cname = [temp[0].company];
    Claims = [temp[0].Claim];
    }
    else
    {
      Cname = datapoints.map(function (index) {
        return index.company;
      });
  
      Claims = datapoints.map(function (index) {
        return index.Claim;
      });         
    }
  Chart4.data.labels = Cname;
  Chart4.data.datasets[0].data = Claims;
  Chart4.update();
  }));
   
    
}

// const idx = datapoints.filter(function (point) {
//   if(point.company === "Nelco  Inc.") {
//     return point;
//   }
// });
select.addEventListener('change',()=>
{
  let sel = select.value;
  console.log(sel);
  UpdateChart(sel);
});
var ctx_4 = document.getElementById("Chart4").getContext("2d");
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

//updateScale(myChart);

//console.log(myChart.scales['x-axis-0'])
