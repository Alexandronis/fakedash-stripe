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

    // get pixel for tick (CategoryScale)
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
  onHoverValueChangePrimary?: (data: { value: number | null; hour: string | null }) => void;
  onHoverValueChangeSecondary?: (data: { value: number | null; hour: string | null }) => void;
}

const HourlyGraph: React.FC<HourlyGraphProps> = ({
 onHoverValueChangePrimary,
 onHoverValueChangeSecondary
}) => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (chartRef.current) chartRef.current.destroy();

    // Labels (same for both lines)
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

    const valuesPrimary = [
      0,717.5532861652297,1370.749850877256,1370.749850877256,1370.749850877256,
      2480.467529430613,2515.0595598736118,2515.0595598736118,2230.6146700512318,
      2024.3701996161817,1861.6024972472014,1801.593308213488,1889.1922499616355,
      1889.1922499616355,786.1271676300576,3158.2303305805344,3158.2303305805344,
      4564.544770051232,5267.529213744844,4254.335260115607,6370.3510294306125,
      6688.143365111076,6831.457449623853,null,null
    ];

    const valuesSecondary = [
      0,0,1268.2374005143893,1268.2374005143893,1268.2374005143893,
      1268.2374005143893,3108.8364813888456,3343.6721542146224,3343.6721542146224,
      3343.6721542146224,3343.6721542146224,5410.404624277457,3425.3658827065374,
      3425.3658827065374,3425.3658827065374,2975.3170382256685,2950.3263668246514,
      2950.3263668246514,2950.3263668246514,2950.3263668246514,3706.711713211733,
      3706.711713211733,4640.039069736763,5214.901766152278,5214.901766152278
    ];

    chartRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels,
        datasets: [
          // PRIMARY (purple)
          {
            label: "PrimaryLine",
            data: valuesPrimary,
            borderColor: "#635bff",
            borderWidth: 1,
            tension: 0,
            pointRadius: 0,
            pointHoverRadius: 4,
            pointHoverBackgroundColor: "#635bff",
            pointHoverBorderColor: "#635bff",
          },

          // SECONDARY (gray)
          {
            label: "SecondaryLine",
            data: valuesSecondary,
            borderColor: "#C0C8D2",
            borderWidth: 1,
            tension: 0,
            pointRadius: 0,
            pointHoverRadius: 4,
            pointHoverBackgroundColor: "#C0C8D2",
            pointHoverBorderColor: "#C0C8D2",
          }
        ],
      },

      options: {
        responsive: true,
        maintainAspectRatio: false,

        interaction: {
          mode: "index",
          intersect: false,
        },

        plugins: { tooltip: { enabled: false }, dragData: { enabled: false } },

        onHover(event, elements) {
          const chart = chartRef.current;
          if (!chart) return;

          const hoveredIndex = elements && elements.length ? elements[0].index : null;

          // store hover index and redraw
          // @ts-ignore
          chart._hoverIndex = hoveredIndex;
          chart.draw();

          if (hoveredIndex == null) {
            if (onHoverValueChangePrimary) onHoverValueChangePrimary({ value: null, hour: null });
            if (onHoverValueChangeSecondary) onHoverValueChangeSecondary({ value: null, hour: null });
            return;
          }

          const hour = labels[hoveredIndex];

          if (onHoverValueChangePrimary) {
            onHoverValueChangePrimary({ value: valuesPrimary[hoveredIndex], hour });
          }
          if (onHoverValueChangeSecondary) {
            onHoverValueChangeSecondary({ value: valuesSecondary[hoveredIndex], hour });
          }
        },

        scales: {
          y: {
            beginAtZero: true,
            display: false,
          },

          x: {
            // SHOW vertical grid lines uniformly
            display: true,
            offset: false,         // IMPORTANT: align ticks to pixels (no shift)
            grid: {
              display: true,
              offset: false,       // IMPORTANT
              color: "#f2f3f4",
              drawTicks: false,
              // drawBorder false keeps axis border from another coloring
              drawBorder: false,
            },

            ticks: { display: false },

            // single bottom border line
            border: { display: true, color: "#f2f3f4", width: 1 },
          },
        },
      },

      plugins: [],
    });

    return () => chartRef.current?.destroy();
  }, []);

  return <canvas ref={canvasRef} />;
};

export default HourlyGraph;
