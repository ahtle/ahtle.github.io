import type { ChartOptions } from "chart.js";

export const radarChartOptions: ChartOptions<"radar"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
      position: "bottom",
    },
  },
  scales: {
    r: {
      beginAtZero: true,
      min: 0,
      max: 10,
      grid: {
        color: "#fff",
      },
      angleLines: {
        color: "#fff",
      },
      pointLabels: {
        color: "#fff",
      },
      ticks: {
        display: false,
        stepSize: 1,
      },
    },
  },
};
