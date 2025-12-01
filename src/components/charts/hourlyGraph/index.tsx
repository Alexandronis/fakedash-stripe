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

const defaultChartA = [
  0,
  0,
  0,
  0,
  2056.2364264654357,
  2056.2364264654357,
  2056.2364264654357,
  2178.314171252013,
  2178.314171252013,
  2178.314171252013,
  2178.314171252013,
  2879.19,
  1625.060359869742,
  785.23,
  1067.11,
  1937.9907331798343,
  3463.4129842103985,
  3463.4129842103985,
  3463.4129842103985,
  3463.4129842103985,
  null,
  null,
  null,
  null,
  null
];

const defaultChartB = [
  0,
  0,
  1143.9664640650165,
  1143.9664640650165,
  1143.9664640650165,
  2504.3733100550853,
  2504.3733100550853,
  2504.3733100550853,
  2504.3733100550853,
  3186.642631103393,
  3164.1007237399635,
  3164.1007237399635,
  2982.883939975166,
  2864.9910600248345,
  2864.9910600248345,
  2864.9910600248345,
  2661.232368896607,
  2661.232368896607,
  2661.232368896607,
  3043.664466918205,
  3043.664466918205,
  3043.664466918205,
  3043.664466918205,
  4703.908535934984,
  5264.926230262997
];

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
  const { data, updateMultiple } = useHomeData();

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

    // read initial values from context (homeData)

    const isChartANulls = data.chartA.every(value => value === null);
    const isChartBNulls = data.chartB.every(value => value === null);
    console.log(isChartANulls);

    const valuesPrimary = isChartANulls ? defaultChartA :data.chartA.slice();
    const valuesSecondary = isChartBNulls ? defaultChartB :data.chartB.slice();

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
            pointHitRadius: 10,             // <-- REQUIRED FOR DRAGGING
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
            pointHitRadius: 10,             // <-- REQUIRED FOR DRAGGING
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

        plugins: {
          tooltip: { enabled: false },
          dragData: {
            enabled: true,
            round: 2,
            showTooltip: false,
            // onDragEnd receives (e, datasetIndex, index, value)
            onDragEnd: (e, datasetIndex, index, value) => {
              try {
                const chart = chartRef.current;
                if (!chart) return;

                // clone dataset array and set new value
                const ds = chart.data.datasets[datasetIndex].data.map((v) =>
                  v === null ? null : Number(v)
                );

                ds[index] = value === null ? null : Number(value);

                if (datasetIndex === 0) {
                  updateMultiple({ chartA: ds });
                } else {
                  updateMultiple({ chartB: ds });
                }
              } catch (err) {
                // ignore
                console.error("drag onDragEnd error", err);
              }
            },
          },
        },

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
            onHoverValueChangePrimary({ value: isChartANulls ? defaultChartA[hoveredIndex] : data.chartA[hoveredIndex], hour });
          }
          if (onHoverValueChangeSecondary) {
            onHoverValueChangeSecondary({ value: isChartBNulls ? defaultChartB[hoveredIndex] : data.chartB[hoveredIndex], hour });
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
  }, []); // only mount once

  // react to context changes (chart arrays) and update chart without full re-create
  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) return;

    try {
      // update datasets in place
      if (chart.data && chart.data.datasets && chart.data.datasets.length >= 2) {
        const isChartANulls = data.chartA.every(value => value === null);
        const isChartBNulls = data.chartB.every(value => value === null);

        chart.data.datasets[0].data = isChartANulls ? defaultChartA : data.chartA.slice();
        chart.data.datasets[1].data = isChartBNulls ? defaultChartB : data.chartB.slice();
        chart.update("none");
      }
    } catch (err) {
      console.error("chart update error", err);
    }
  }, [data.chartA, data.chartB]);

  return <canvas ref={canvasRef} />;
};

export default HourlyGraph;
