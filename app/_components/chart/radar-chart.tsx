"use client";

import {
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
  type ChartData,
  type ChartDataset,
} from "chart.js";
import { useEffect, useRef } from "react";
import { Radar } from "react-chartjs-2";

import { radarChartOptions } from "./radar-chart-options";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Legend,
  Tooltip,
);

type RadarChartProps = {
  labels: string[];
  datasets: ChartDataset<"radar">[];
  update: boolean;
};

export default function RadarChart({
  labels,
  datasets,
  update,
}: RadarChartProps) {
  const chartRef = useRef<ChartJS<"radar">>(null);

  const data: ChartData<"radar"> = {
    labels,
    datasets,
  };

  useEffect(() => {
    if (update) {
      chartRef.current?.update();
    }
  }, [update, labels, datasets]);

  return (
    <div className="h-[300px] w-full">
      <Radar ref={chartRef} data={data} options={radarChartOptions} />
    </div>
  );
}
