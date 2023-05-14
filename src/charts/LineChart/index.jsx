import React from "react";
import { Line } from "react-chartjs-2";

function LineChart({ label, labels, data }) {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: label,
        data: data,
      },
    ],
  };
  return <Line data={chartData} />;
}

export default LineChart;
