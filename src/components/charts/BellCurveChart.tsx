import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
} from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";
import brain from "../assets/Group.png";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, annotationPlugin);

const BellCurveChart = () => {
  const data = {
    labels: Array(7).fill(""),
    datasets: [
      {
        label: "Red Segment",
        data: [10, 30, 70, null, null, null, null],
        borderColor: "#ef4444",
        borderWidth: 3,
        tension: 0.4,
        pointRadius: 0,
      },
      {
        label: "Yellow Segment",
        data: [null, null, 70, 90, 70, null, null],
        borderColor: "#f59e0b",
        borderWidth: 3,
        tension: 0.4,
        pointRadius: 0,
      },
      {
        label: "Green Segment",
        data: [null, null, null, 90, 70, 30, 10],
        borderColor: "#22c55e",
        borderWidth: 3,
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
      annotation: {
        annotations: {
          dottedLine: {
            type: "line",
            xMin: 3.5,
            xMax: 3.5,
            borderColor: "#2563eb",
            borderWidth: 2,
            borderDash: [4, 6],
          },
          arrow: {
            type: "point",
            xValue: 3.5,
            yValue: 100,
            backgroundColor: "#2563eb",
            radius: 0,
            label: {
              content: "▼",
              display: true,
              color: "#2563eb",
              font: {
                size: 16,
                weight: "bold",
              },
            },
          },
        },
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        min: 0,
        max: 100,
        display: false,
      },
    },
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center mb-4">
        <img src={brain} alt="brain" className="w-9 h-9 me-2" />
        <p className="text-gray-text">
          <span className="font-semibold">90 фоиз</span> иштирокчидан яхширок
          натижа
        </p>
      </div>

      <div className="relative w-full max-w-md h-64">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default BellCurveChart;
