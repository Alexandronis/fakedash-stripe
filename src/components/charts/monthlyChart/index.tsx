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

const labels = [
  "Nov 1","Nov 2","Nov 3","Nov 4","Nov 5","Nov 6","Nov 7","Nov 8",
  "Nov 9","Nov 10","Nov 11","Nov 12","Nov 13","Nov 14","Nov 15",
  "Nov 16","Nov 17","Nov 18","Nov 19","Nov 20","Nov 21","Nov 22",
  "Nov 23","Nov 24","Nov 25","Nov 26","Nov 27","Nov 28","Nov 29",
  "Yesterday","Today"
];

const initialData = [
  4102,4215,4359,4290,4489,4711,4533,3952,4101,3946,4317,4082,
  4717,4857,4757,4108,4407,4158,4054,4142,4006,4299,4157,4152,
  4624.56,3213.15,4669,4721,4439,4721,4440
];

const MonthlyGraph = () => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  const { data, updateMultiple } = useHomeData();

  const getDynamicMax = arr =>
    Math.ceil((Math.max(...arr) + 100) / 500) * 500;

  // Chart creation ONCE ONLY
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Initial base data
    const baseData = data?.monthlyChart?.length
      ? data.monthlyChart
      : [...initialData];

    chartRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "MonthlyLine",
            data: baseData,
            borderColor: "#9966FF",
            borderWidth: 3,
            tension: 0,
            pointRadius: 0,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: "#9966FF",
            pointHoverBorderColor: "#9966FF"
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 300 },
        interaction: {
          intersect: false,
          mode: "nearest"
        },
        plugins: {
          tooltip: {
            enabled: false,
            external: function(context) {
              const tooltipEl = document.getElementById("monthly-tooltip");
              const tooltipModel = context.tooltip;
              if (!tooltipEl) return;
              if (tooltipModel.opacity === 0) {
                tooltipEl.style.opacity = "0";
                return;
              }
              if (tooltipModel.dataPoints && tooltipModel.dataPoints.length) {
                const dataPoint = tooltipModel.dataPoints[0];
                tooltipEl.innerHTML = `
                  <div class="tooltip-date">${dataPoint.label}</div>
                  <div class="tooltip-value">$${dataPoint.raw.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}</div>
                `;
                tooltipEl.style.opacity = "1";
                tooltipEl.style.left = `${dataPoint.element.x - tooltipEl.offsetWidth / 2}px`;
                tooltipEl.style.top = `${dataPoint.element.y - tooltipEl.offsetHeight - 8}px`;
              }
            }
          },
          dragData: {
            enabled: true,
            round: 2,
            onDragEnd: (e, datasetIndex, index, value) => {
              const chart = chartRef.current;
              chart.data.datasets[datasetIndex].data[index] = value;
              updateMultiple({ monthlyChart: [...chart.data.datasets[datasetIndex].data] });
              chart.options.scales.y.max = getDynamicMax(chart.data.datasets[datasetIndex].data);
              chart.update();
            }
          }
        },
        scales: {
          y: {
            min: 0,
            max: getDynamicMax(baseData),
            position: "right",
            ticks: {
              maxTicksLimit: 6,
              callback: val => `$${(val / 1000).toFixed(2)}k`,
              color: "#6c7688"
            },
            grid: { drawTicks: false, drawBorder: true, color: "#d8dee4", lineWidth: 1 },
            border: { display: false }
          },
          x: {
            display: true,
            ticks: {
              callback: (val, idx) =>
                idx === 11 ? labels[11] : idx === 22 ? labels[22] : "",
              color: "#6c7688",
              autoSkip: false,
              maxRotation: 0,
              minRotation: 0
            },
            grid: {
              drawTicks: false,
              drawOnChartArea: false,
              drawBorder: true,
              color: "#f2f3f4"
            }
          }
        }
      },
      plugins: [{
        beforeDraw: function(chart) {
          const ctx = chart.ctx;
          const xAxis = chart.scales.x;
          const yAxis = chart.scales.y;
          const yPixel = yAxis.getPixelForValue(yAxis.min);
          [11, 22].forEach(idx => {
            const xPixel = xAxis.getPixelForValue(chart.data.labels[idx]);
            ctx.save();
            ctx.beginPath();
            ctx.strokeStyle = "#6c7688";
            ctx.lineWidth = 1;
            ctx.moveTo(xPixel, xAxis.bottom - 15);
            ctx.lineTo(xPixel, yPixel);
            ctx.stroke();
            ctx.restore();
          });
        }
      }]
    });

    return () => chartRef.current?.destroy();
  }, []); // <-- empty array means chart is created ONCE!

  // Update chart only, never recreate! (on context data change)
  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) return;
    const arr = data?.monthlyChart?.length ? data.monthlyChart : initialData;
    chart.data.datasets[0].data = arr;
    chart.options.scales.y.max = getDynamicMax(arr);
    chart.update();
  }, [data.monthlyChart]); // This only updates chart DATA, not recreates the chart

  return (
    <>
      <canvas ref={canvasRef} />
      <div id="monthly-tooltip" className="monthly-tooltip"></div>
    </>
  );
};

export default MonthlyGraph;
