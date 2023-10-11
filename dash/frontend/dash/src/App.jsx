import { Filter_2 } from "./components/filter/filter_2";
import { Filter_1 } from "./components/filter/filter_1";
import StackedBarChart from "./components/Canvas_2/Canvas_2";
import GroupBarChart from "./components/Canvas_3/Canvas_3";
import HozBarChart from "./components/canvas_4/Canvas_4";
import Navbar from "./components/navbar/navbar";
import PyBarChart from "./components/Canvas_1/Canvas_1";
import TableComponent from "./components/table/Table";
//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <br />
      <div className="f_wraper">
        <div className="ChartCanvas">
          <h4>Stockist by Returns filtered by Medicine</h4>
          <div className="chart">
            <PyBarChart />
            <div className="Filterdiv">
              <Filter_1 />
            </div>
          </div>
        </div>

        <br />

        <div className="ChartCanvas2">
          <div className="table_bg">
            <TableComponent />
          </div>
          <div className="empty"></div>
          <div className="table_bg">
            <TableComponent />
          </div>
        </div>

        <br />
        <div className="ChartCanvas">
          <h4>CFA wise Total value for different goods type</h4>
          <StackedBarChart />
        </div>
        <br />
        <div className="ChartCanvas">
          <h4>CFA wise Count of Quantity for different goods type</h4>
          <GroupBarChart />
        </div>
        <br />
        <div className="ChartCanvas">
          <h4>CFA wise Claim Count</h4>
          <div className="chart">
            <HozBarChart />
            <div className="Filterdiv">
              <Filter_2 />
            </div>
          </div>
        </div>
        <br />
        <div className="ChartCanvas">
          <h4>CFA wise Total value for different goods type</h4>
          <StackedBarChart />
        </div>
      </div>
    </>
  );
}

export default App;
