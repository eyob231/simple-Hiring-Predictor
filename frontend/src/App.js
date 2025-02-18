import React, { useState } from 'react';

function App() {
  const [fieldOfStudy, setFieldOfStudy] = useState('0');
  const [yearsOfExperience, setYearsOfExperience] = useState(0);
  const [certifications, setCertifications] = useState(false);
  const [interviewScore, setInterviewScore] = useState(0);
  const [prediction, setPrediction] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log("Form submitted!");

    try {
      console.log("Sending request to backend...");
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          Field_of_Study: fieldOfStudy,
          Years_of_Experience: yearsOfExperience,
          Certifications: certifications ? 1 : 0,
          Interview_Score: interviewScore,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Response from backend:", data);
      setPrediction(data.probability_of_hiring);
    } catch (error) {
      console.error("Error during prediction:", error.message);
      alert("An error occurred while predicting. Please check the console for details.");
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h1>Hiring Predictor</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Field of Study:
          <select
            value={fieldOfStudy}
            onChange={(e) => setFieldOfStudy(e.target.value)}
            style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px' }}
          >
            <option value="0">Computer Science</option>
            <option value="1">Business</option>
            <option value="2">Engineering</option>
          </select>
        </label>
        <label>
          Years of Experience:
          <input
            type="number"
            value={yearsOfExperience}
            onChange={(e) => setYearsOfExperience(e.target.value)}
            style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px' }}
          />
        </label>
        <label>
          Certifications:
          <input
            type="checkbox"
            checked={certifications}
            onChange={() => setCertifications(!certifications)}
            style={{ marginRight: '10px' }}
          />
        </label>
        <label>
          Interview Score (0-100):
          <input
            type="number"
            value={interviewScore}
            onChange={(e) => setInterviewScore(e.target.value)}
            style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px' }}
          />
        </label>
        <button
          type="submit"
          style={{
            display: 'block',
            width: '100%',
            padding: '10px',
            backgroundColor: '#3c40c6',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Predict
        </button>
      </form>
      {prediction !== null && (
        <p
          style={{
            marginTop: '20px',
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#28a745',
          }}
        >
          Probability of Getting Hired: {Math.round(prediction * 100)}%
        </p>
      )}
    </div>
  );
}

export default App;