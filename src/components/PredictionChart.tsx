import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip);

interface Props {
  prediction: number;
}

const PredictionChart = ({ prediction }: Props) => {
  const data = {
    labels: ["Predicted Crime Rate"],
    datasets: [
      {
        label: "Crime Score",
        data: [prediction],
        backgroundColor: "#3b82f6", // Tailwind blue-500
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Score",
        },
      },
    },
  };

  return (
    <div className="mt-6">
      <Bar data={data} options={options} />
    </div>
  );
};

export default PredictionChart;
