import React, { useEffect, useRef } from "react";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Filler,
} from "chart.js";
import dragData from "chartjs-plugin-dragdata";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Filler,
  dragData
);

const HourlyGraph = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (chartRef.current) chartRef.current.destroy();

    // your required values
    const labels = [
      "12:00 AM",
      "1:00 AM",
      "2:00 AM",
      "3:00 AM",
      "4:00 AM",
      "5:00 AM",
      "6:00 AM",
      "7:00 AM",
      "8:00 AM",
      "9:00 AM",
      "10:00 AM",
      "11:00 AM",
      "12:00 PM",
      "1:00 PM",
      "2:00 PM",
      "3:00 PM",
      "4:00 PM",
      "5:00 PM",
      "6:00 PM",
      "7:00 PM",
      "8:00 PM",
      "9:00 PM",
      "10:00 PM",
      "11:00 PM",
      "12:00 AM",
    ];
    const values = [
      0,
      0,
      1572.66,
      6043.84,
      2915.37,
      3442.87,
      3855.06,
      5099.49,
      3855.06,
      4380.81,
      6381.11,
      4349.82,
      2266.44,
      3938.62,
      3750.42,
      3938.62,
      5234.40,
      3658.51,
      5166.95,
      3658.51,
      3345.70,
      4596.45,
      7797.64,
      4596.45,
      7237.91,
    ];

    chartRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "Hourly",
            data: values,
            borderColor: "#4caf50",
            backgroundColor: "rgba(76, 175, 80, 0.15)",
            tension: 0.3,
            pointRadius: 4,
            pointHoverRadius: 6,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          tooltip: {
            callbacks: {
              label: (ctx) => `$${ctx.parsed.y.toFixed(2)}`,
            },
          },
          dragData: {
            showTooltip: true,
            onDragEnd: (e, datasetIndex, index, value) => {
              console.log("Updated point:", index, value);
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: { display: false },
            ticks: { display: false },
          },
          x: {
            grid: { display: true, color: "#e0e0e0" },
            ticks: { display: false },
          },
        },
      },
    });

    return () => chartRef.current?.destroy();
  }, []);

  return <canvas ref={canvasRef} />;
};

export default HourlyGraph;
