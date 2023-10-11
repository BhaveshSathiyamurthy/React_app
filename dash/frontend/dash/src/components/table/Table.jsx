import React, { useEffect, useState } from "react";
import axios from "axios";
import "./table.css";

function TableComponent() {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  useEffect(() => {
    // Fetch data from an API
    axios
      .get("http://localhost:8080/dashdb/MG%20C&F-s%20reema") // Replace with your API endpoint
      .then((response) => {
        console.log(response);
        const datapoints = response.data;
        const Cname = datapoints.map(function (index) {
          return index.company;
        });
        const Value = datapoints.map(function (index) {
          return index.value;
        });
        const cfa = datapoints[0].CFA_Name;
        console.log(datapoints);
        console.log(Value);
        setData1(cfa);
        setData2(Cname);
        setData3(Value);
        console.log(data2);
      });
  }, []);

  return (
    <div className="TableWrapper">
      <table>
        <thead>
          <tr>
            <th>CFA Name</th>
            <th>Name</th>
            <th>Values</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data1}</td>
            <td>
              <ul>
                {data2.map((index) => (
                  <li key={index}> {index}</li>
                ))}
              </ul>
            </td>
            <td>
              <ul>
                {data3.map((idx) => (
                  <li key={idx}>{idx}</li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default TableComponent;
