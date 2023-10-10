import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TableComponent() {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  useEffect(() => {
    // Fetch data from an API
    axios.get('http://localhost:8080/dashdb/MG%20C&F-s%20reema') // Replace with your API endpoint
      .then((response) => {
        console.log(response);
        const datapoints = response.data;
        const Cname = datapoints.map(function (index) {
            return index.company;
          });
        console.log(datapoints);
        console.log(Cname);
      })
      axios.get('http://localhost:8080/dashdb/MG%20C&F-sai%20pharma') // Replace with your API endpoint
      .then((response) => {
        setData2(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

      console.log(data1);
  }, []);

  return (
    <div>
        
      <table>
        <thead>
          <tr>
            <th>CFA Name</th>
            <th>Name</th>
            <th>Values</th>
          </tr>
        </thead>
        {/* <tbody>
          {data1.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                <ul>
                  {item.values.map((value, index) => (
                    <li key={index}>{value}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody> */}
      </table>
    </div>
  );
}
export default TableComponent