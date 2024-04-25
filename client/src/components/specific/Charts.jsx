import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import React from "react";
import { Doughnut, Line } from "react-chartjs-2";
import {
  lightOrange,
  lightPurple,
  orange,
  purple,
} from "../../constants/color";
import { getLastSevenDays } from "../../lib/features";

ChartJS.register(
  CategoryScale,
  Tooltip,
  LinearScale,
  LineElement,
  PointElement,
  Filler,
  ArcElement,
  Legend
);

const labels = getLastSevenDays();

const lineChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },

  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        display: false,
      },
    },
  },
};

const LineChart = ({ value = [] }) => {
  const data = {
    labels,
    datasets: [
      {
        data: value,
        label: "Revenue",
        fill: true,
        backgroundColor: lightPurple,
        borderColor: purple,
      },
    ],
  };

  return <Line data={data} options={lineChartOptions} />;
};

const doughnutChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  cutout: 120,
};

const DoughnutChart = ({ value = [], labels = [] }) => {
  const data = {
    labels,
    datasets: [
      {
        data: value,
        label: "Total Chats vs Group Chats",
        backgroundColor: [purple, orange],
        borderColor: [purple, orange],
        hoverBackgroundColor: [lightPurple, lightOrange],
        offset: 20,
      },
    ],
  };

  return (
    <Doughnut
      style={{ zIndex: 12 }}
      data={data}
      options={doughnutChartOptions}
    />
  );
};

export { DoughnutChart, LineChart };
