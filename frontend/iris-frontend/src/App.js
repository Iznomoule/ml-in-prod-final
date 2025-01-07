import React, { useState } from 'react';

const useLocalBackend = false; 
const apiUrl = useLocalBackend
  ? "http://127.0.0.1:8000" 
  : "https://ml-in-prod-final-backend-production.up.railway.app"; 

function App() {
  const [formData, setFormData] = useState({
    sepal_length: '',
    sepal_width: '',
    petal_length: '',
    petal_width: ''
  });
  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${apiUrl}/predict`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sepal_length: parseFloat(formData.sepal_length),
        sepal_width: parseFloat(formData.sepal_width),
        petal_length: parseFloat(formData.petal_length),
        petal_width: parseFloat(formData.petal_width)
      })
    });
    const data = await response.json();
    setPrediction(data.prediction);
  };

  const containerStyle = {
    maxWidth: '400px',
    margin: '40px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    background: '#fafafa',
    fontFamily: 'sans-serif'
  };

  const fieldStyle = {
    marginBottom: '10px'
  };

  const labelStyle = {
    display: 'inline-block',
    width: '120px',
    fontWeight: 'bold'
  };

  const inputStyle = {
    padding: '6px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '100%'
  };

  const buttonStyle = {
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer'
  };

  return (
    <div style={containerStyle}>
      <h1>Iris Prediction</h1>
      <form onSubmit={handleSubmit}>
        <div style={fieldStyle}>
          <label style={labelStyle}>Sepal Length:</label>
          <input
            name="sepal_length"
            value={formData.sepal_length}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div style={fieldStyle}>
          <label style={labelStyle}>Sepal Width:</label>
          <input
            name="sepal_width"
            value={formData.sepal_width}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div style={fieldStyle}>
          <label style={labelStyle}>Petal Length:</label>
          <input
            name="petal_length"
            value={formData.petal_length}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div style={fieldStyle}>
          <label style={labelStyle}>Petal Width:</label>
          <input
            name="petal_width"
            value={formData.petal_width}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <button type="submit" style={buttonStyle}>
          Predict
        </button>
      </form>
      {prediction !== null && (
        <h2 style={{ marginTop: '20px', color: '#007bff' }}>
          Prediction: {prediction}
        </h2>
      )}
    </div>
  );
}

export default App;
