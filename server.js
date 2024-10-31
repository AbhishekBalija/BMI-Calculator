// server.js
import express from 'express';
import path from 'path';

const app = express();
const PORT = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));
app.use(express.json());

// Endpoint to calculate BMI
app.post('/calculate-bmi', (req, res) => {
  const { weight, height } = req.body;
  
  // BMI formula: weight (kg) / [height (m) * height (m)]
  const bmi = weight / ((height / 100) ** 2);
  res.json({ bmi: bmi.toFixed(2) });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});