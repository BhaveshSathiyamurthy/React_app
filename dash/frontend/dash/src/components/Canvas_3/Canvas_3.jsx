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

function GroupBarChart() {
  var Cname, Exdata, Sldata, Bkdata;
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

        Exdata = datapoints.map(function (index) {
          return index.expired;
        });

        Sldata = datapoints.map(function (index) {
          return index.sealable;
        });
        Bkdata = datapoints.map(function (index) {
          return index.breakage;
        });

        const data = {
          labels: Cname,
          datasets: [
            {
              label: "Expired",
              backgroundColor: "#0072B2",
              data: Exdata,
            },
            {
              label: "Sealable",
              backgroundColor: "#009E73",
              data: Sldata,
            },
            {
              label: "Breakage",
              backgroundColor: "#D55E00",
              data: Bkdata,
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
            maintainAspectRatio: false,
            scales: {
              x: {
                stacked: false,
              },
              y: {
                stacked: false,
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default GroupBarChart;
