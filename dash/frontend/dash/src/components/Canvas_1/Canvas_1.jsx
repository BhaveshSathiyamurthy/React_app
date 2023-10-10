import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "./style.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function PyBarChart() {
  var Cname, Qdata, Vdata;
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  useEffect(() => {
    axios
      .get("http://localhost:8080/dashdb")
      .then((response) => {
        const datapoints = response.data;

        Cname = datapoints.map(function (index) {
          return index.company;
        });

        Qdata = datapoints.map(function (index) {
          return index.quantity * -1;
        });
        Vdata = datapoints.map(function (index) {
          return index.value;
        });

        const data = {
          labels: Cname,
          datasets: [
            {
              label: "Quantity",
              backgroundColor: "#0072B2",
              data: Qdata,
            },
            {
              label: "Value",
              backgroundColor: "#D55E00",
              data: Vdata,
            },
          ],
        };

        setChartData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div
      style={{
        width: "80vw",
        height: "40vh",
      }}
      className="stacked-bar-chart"
    >

      {chartData && (
        <Bar
          data={chartData}
          options={{
            indexAxis: "y",
            maintainAspectRatio: false,
            scales: {
              x: {
                stacked: true,
                ticks: {
                  callback: function (value, index, values) {
                    return Math.abs(value);
                  },
                },
              },
              y: {
                stacked: true,
              },
            },
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                callbacks: {
                  label: function (context) {
                    return `${context.dataset.label} ${Math.abs(context.raw)}`;
                    // let label = context.dataset.label || "";

                    // if (label) {
                    //   label += ": ";
                    // }
                    // if (context.parsed.y !== null) {
                    //   label += new Intl.NumberFormat("en-US", {
                    //     style: "currency",
                    //     currency: "USD",
                    //   }).format(context.parsed.y);
                    // }
                    // return label;
                    // var label =
                    //   Vdata.datasets[tooltipItem.datasetIndex].label || "";

                    // if (label) {
                    //   label += ": ";
                    // }
                    // label += Math.abs(tooltipItem.xLabel);
                    // return label;
                  },
                },
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default PyBarChart;
