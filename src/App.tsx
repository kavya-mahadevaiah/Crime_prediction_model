import { useState } from "react";
import axios from "axios";
import PredictionChart from "./components/PredictionChart";
import Spinner from "./components/Spinner"; // import the spinner

function App() {
  const [features, setFeatures] = useState<string[]>(Array(5).fill(""));
  const [prediction, setPrediction] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (index: number, value: string) => {
    const updated = [...features];
    updated[index] = value;
    setFeatures(updated);
  };

  const handleSubmit = async () => {
    setLoading(true);
    setPrediction(null); // Optional: reset previous prediction

    try {
      const numericFeatures = features.map(Number);
      const res = await axios.post("http://localhost:5000/predict", {
        features: numericFeatures,
      });
      setPrediction(res.data.prediction);
    } catch (error) {
      alert("Error calling backend");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const featureNames = [
    "Population ",
    "Unemployment Rate ",
    "Median Household Income ",
    "Education",
    "Poverty ",
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8">
          Crime Prediction App
        </h1>
        <div className="space-y-4">
          {features.map((value, idx) => (
            <div key={idx} className="mb-4">
              <label className="block text-left text-sm font-medium mb-1">
                {featureNames[idx]}
              </label>
              <input
                type="number"
                value={value}
                onChange={(e) => handleChange(idx, e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          ))}
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Predict
          </button>
          {loading && <Spinner />}
          {prediction !== null && (
            <>
              <div className="mt-4 text-center text-xl font-medium">
                🔍 Predicted Crime Rate: {prediction.toFixed(2)}
              </div>
              <PredictionChart prediction={prediction} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
