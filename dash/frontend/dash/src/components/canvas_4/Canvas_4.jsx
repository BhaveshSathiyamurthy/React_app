import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "./style.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

function HozBarChart() {
  var Cname, Claims;
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

        Claims = datapoints.map(function (index) {
          return index.Claim;
        });

        console.log(Claims);
        const data = {
          labels: Cname,
          datasets: [
            {
              label: "Claims",
              backgroundColor: "#0072B2",
              data: Claims,
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
                stacked: false,
              },
              y: {
                stacked: false,
              },
            },
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default HozBarChart;
