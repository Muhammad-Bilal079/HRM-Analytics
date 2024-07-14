import React, { useState } from 'react';

const PredictiveData = () => {
  const [data, setData] = useState([]);
  const [turnoverRate, setTurnoverRate] = useState('');
  const [prediction, setPrediction] = useState(null);

  const fetchData = () => {
    fetch('http://localhost:5000/predictiveData')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  };

  const handleInputChange = (e) => {
    setTurnoverRate(e.target.value);
  };

  const makePrediction = () => {
    // Example prediction logic
    const parsedRate = parseFloat(turnoverRate);
    if (isNaN(parsedRate)) {
      alert('Please enter a valid number');
      return;
    }

    // Simple prediction based on the input
    const predictedScore = parsedRate * 1.1; // Example prediction logic
    setPrediction(predictedScore);
  };

  return (
    <div>
      <h2>Predictive Data</h2>
    
      <div>
        <h3>Enter Current Turnover Rate</h3>
        <input
          type="text"
          value={turnoverRate}
          onChange={handleInputChange}
          placeholder="Enter turnover rate"
        />
        <button onClick={makePrediction}>Predict</button>
        {prediction !== null && (
          <div>
            <h4>Predicted Performance Score: {prediction.toFixed(2)}</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default PredictiveData;
