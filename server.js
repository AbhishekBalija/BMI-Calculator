// server.js

import express from 'express';
import path from 'path';

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

app.post('/calculate-bmi', (req, res) => {
  const { weight, height } = req.body;
  const bmi = weight / ((height / 100) ** 2);

  // Determine BMI category
  let category;
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "Normal weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  res.json({ bmi: bmi.toFixed(2), category });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});