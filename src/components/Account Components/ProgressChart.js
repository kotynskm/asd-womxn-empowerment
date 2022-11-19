import React from 'react'
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const labels = ["November 16", "November 17", "November 18", "November 19", "November 20"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Activities Completed",
      backgroundColor: "#FFFEFE",
      borderColor: "#FFFEFE",
      data: [1, 0, 2, 1, 3],
    },
  ],
};

const ProgressChart = () => {
  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default ProgressChart; 