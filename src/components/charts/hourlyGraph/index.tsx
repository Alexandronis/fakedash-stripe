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

// plugin: draw dashed vertical line at chart._hoverIndex (if set)
const hoverDashedLinePlugin = {
  id: "hoverDashedLine",
  afterDraw(chart) {
    // @ts-ignore
    const idx = (chart as any)._hoverIndex;
    if (idx == null) return;

    const xScale = chart.scales.x;
    if (!xScale) return;

    // get pixel for tick (safe)
    // for CategoryScale use getPixelForTick
    // @ts-ignore
    const x = (xScale as any).getPixelForTick(idx);
    if (x == null) return;

    const ctx = chart.ctx;
    ctx.save();
    ctx.setLineDash([4, 4]);
    ctx.strokeStyle = "#999999";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x, chart.chartArea.top);
    ctx.lineTo(x, chart.chartArea.bottom);
    ctx.stroke();
    ctx.restore();
  },
};

Chart.register(hoverDashedLinePlugin);

interface HourlyGraphProps {
  onHoverValueChange?: (value: number | null) => (value: (((prevState: {
    value: number | null;
    hour: string | null
  }) => { value: number | null; hour: string | null }) | { value: number | null; hour: string | null })) => void;
}

const HourlyGraph: React.FC<HourlyGraphProps> = ({ onHoverValueChange }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (chartRef.current) chartRef.current.destroy();

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
      0, 0, 1572.66, 6043.84, 2915.37, 3442.87, 3855.06, 5099.49, 3855.06,
      4380.81, 6381.11, 4349.82, 2266.44, 3938.62, 3750.42, 3938.62, 5234.4,
      3658.51, 5166.95, 3658.51, 3345.7, 4596.45, 7797.64, 4596.45, 7237.91,
    ];

    chartRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "Hourly",
            data: values,

            // Strict straight line
            tension: 0,

            // Line color → gray
            borderColor: "#c0c8d1",
            borderWidth: 1,

            // Remove fill under line
            fill: false,

            // Points hidden until hover
            pointRadius: 0,
            pointHoverRadius: 4,
            pointBorderWidth: 0,
            pointHoverBorderWidth: 2,
            pointHitRadius: 12,

            // Hover circle filled gray
            pointHoverBackgroundColor: "#c0c8d1",
            pointHoverBorderColor: "#c0c8d1",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: 'index',       // hover by vertical index, not just nearest point
          intersect: false,    // hover anywhere along the vertical line
        },
        plugins: {
          tooltip: { enabled: false },
          dragData: {
            showTooltip: false,
            onDragEnd: (_, __, index, value) => {
              console.log("Updated point:", index, value);
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            // Remove horizontal grid lines
            grid: {
              drawOnChartArea: false,
              drawBorder: false,
              display: false,
            },
            ticks: { display: false },
          },
          x: {
            grid: {
              display: true,
              color: "#f2f3f4",
              // Hide little caps/ends
              drawBorder: false,
              drawTicks: false,
            },
            ticks: { display: false },
            // Draw one bottom border line
            border: {
              display: true,
              color: "#f2f3f4",
              width: 1,
            },
          },
        },

        // onHover sets chart._hoverIndex and triggers a draw (no full update)
        onHover(event, chartElements) {
          const chart = chartRef.current;
          if (!chart) return;

          // determine hovered index (null if none)
          const hoveredIndex =
            chartElements && chartElements.length > 0
              ? chartElements[0].index
              : null;

          // @ts-ignore
          (chart as any)._hoverIndex = hoveredIndex;

          // quick redraw (no re-layout)
          chart.draw();

          // 🔥 send hovered value to parent
          // 🔥 send hovered value and hour to parent
          const hoveredValue =
            hoveredIndex != null ? chart.data.datasets[0].data[hoveredIndex] : null;
          const hoveredHour =
            hoveredIndex != null ? chart.data.labels[hoveredIndex] : null;

          if (onHoverValueChange) {
            onHoverValueChange({ value: hoveredValue, hour: hoveredHour });
          }
        },
      },

      // keep plugin listing only (hover plugin is registered globally)
      plugins: [],
    });

    return () => chartRef.current?.destroy();
  }, []);

  return <canvas ref={canvasRef} />;
};

export default HourlyGraph;
