import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

function PieChart({ chartData }) {
  return (
    <div style={{ width: 700 }}>
      <Pie data={chartData}></Pie>
    </div>
  );
}

export default PieChart;
