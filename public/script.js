// script.js

document.getElementById('bmiForm').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
  
    // Send the data to the server
    const response = await fetch('/calculate-bmi', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ weight, height })
    });
    
    const data = await response.json();
    document.getElementById('result').innerText = `Your BMI is ${data.bmi}`;
  });