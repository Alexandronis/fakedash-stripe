// @ts-nocheck
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
import { useHomeData } from "../../../context/HomeDataContext";
import "./monthlyChart.scss";

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

const MonthlyGraph = () => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);
  const { data, updateMultiple } = useHomeData();

  const labels = [
    "Nov 1","Nov 2","Nov 3","Nov 4","Nov 5","Nov 6","Nov 7","Nov 8","Nov 9","Nov 10",
    "Nov 11","Nov 12","Nov 13","Nov 14","Nov 15","Nov 16","Nov 17","Nov 18","Nov 19","Nov 20",
    "Nov 21","Nov 22","Nov 23","Nov 24","Nov 25","Nov 26","Nov 27","Nov 28","Nov 29","Yesterday","Today"
  ];

  const initialData = [
    4102,4215,4359,4290,4489,4711,4533,3952,4101,3946,4317,4082,4717,4857,4757,
    4108,4407,4158,4054,4142,4006,4299,4157,4152,4624.56,3213.15,4669,4721,4439,4721,4440
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (chartRef.current) chartRef.current.destroy();

    chartRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "MonthlyLine",
            data: initialData, // raw numbers
            borderColor: "#9966FF",
            borderWidth: 3,
            tension: 0, // straight line segments
            pointRadius: 0, // hide dots by default
            pointHoverRadius: 6, // show dots on hover
            pointHoverBackgroundColor: "#9966FF",
            pointHoverBorderColor: "#9966FF",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          intersect: false,
          mode: "nearest",
        },
        plugins: {
          tooltip: {
            enabled: false,
            external: (context) => {
              const tooltipEl = document.getElementById("monthly-tooltip");
              if (!tooltipEl) return;

              const tooltipModel = context.tooltip;
              if (tooltipModel.opacity === 0) {
                tooltipEl.style.opacity = "0";
                return;
              }

              if (tooltipModel.dataPoints) {
                const dp = tooltipModel.dataPoints[0];
                tooltipEl.innerHTML = `
                  <div class="tooltip-date">${dp.label}</div>
                  <div class="tooltip-value">${dp.raw.toLocaleString(undefined, { style: 'currency', currency: 'USD' })}</div>
                `;
                const canvasPosition = context.chart.canvas.getBoundingClientRect();
                tooltipEl.style.left = canvasPosition.left + dp.element.x + "px";
                tooltipEl.style.top = canvasPosition.top + dp.element.y - 40 + "px";
                tooltipEl.style.opacity = "1";
              }
            },
          },
          dragData: {
            enabled: true,
            round: 2,
            onDragEnd: (e, datasetIndex, index, value) => {
              const ds = chartRef.current.data.datasets[datasetIndex].data.slice();
              ds[index] = value;
              updateMultiple({ monthlyChart: ds });
              chartRef.current.update("none");
            },
          },
        },
        scales: {
          y: {
            min: 0,
            max: 5101,
            position: "right", // move labels to right
            ticks: {
              stepSize: 2000,
              callback: (val) => `$${(val / 1000).toFixed(2)}k`, // round to 2 decimals
              color: "#6c7688",
            },
            grid: {
              drawTicks: false,
              drawBorder: true,
              color: "#d8dee4",
              lineWidth: 1,
            },
          },
          x: {
            ticks: {
              callback: (val, index) => {
                if (index === 11) return labels[11]; // Nov12
                if (index === 22) return labels[22]; // Nov23
                return "";
              },
              color: "#6c7688",
            },
            grid: {
              drawTicks: false,
              drawOnChartArea: false,
              drawBorder: true,
              color: "#f2f3f4",
            },
          },
        },
      },
    });

    return () => chartRef.current?.destroy();
  }, []);

  useEffect(() => {
    if (!chartRef.current || !data.monthlyChart) return;
    chartRef.current.data.datasets[0].data = data.monthlyChart.slice();
    chartRef.current.update("none");
  }, [data.monthlyChart]);

  return (
    <>
      <canvas ref={canvasRef} />
      <div id="monthly-tooltip" className="monthly-tooltip"></div>
    </>
  );
};

export default MonthlyGraph;
