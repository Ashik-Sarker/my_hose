// import React from 'react';

// const DashChart = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default DashChart;

import React, { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const DashChart = () => {

    const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch(`data.json`)
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);
    return (
        <div>
            <div>
 
<div className="container dashboard   mt-4">
      
      <div className="row">

      {/* <div className="col-lg-6">
        <BarChart width={500} height={300} data={datas}>
          <XAxis dataKey="month" tick="investment" />
          <YAxis  />
          <Tooltip></Tooltip>
          <Bar dataKey="sell"   barSize={30} fill="#8884d8" label="investment" />
        </BarChart>
      </div> */}
      <div className="col-lg-6">
        <AreaChart
          width={500}
          height={300}
          data={datas}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis dataKey="sell" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="sell"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.3}
          />
          <Area
            type="investment"
            dataKey="month"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.3}
          />
        </AreaChart>
      </div>

      <div className="col-lg-6">
        <PieChart width={500} height={300}>
          <Pie
            data={datas}
            dataKey="sell"
            cx="50%"
            cy="50%"
            outerRadius={60}
            fill="#8884d8"
          />
          <Pie
            data={datas}
            dataKey="investment"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={90}
            fill="#82ca9d"
            label
          />
          <Tooltip></Tooltip>
        </PieChart>
      </div>
      </div>
    </div>
   </div>
        </div>
    );
};

export default DashChart;