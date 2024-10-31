const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

const bmiForm = document.getElementById("bmi-form");
const result = document.getElementById("result");
const category = document.getElementById("category");

bmiForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const height = parseFloat(document.getElementById("height").value) / 100; // Convert cm to meters
    const weight = parseFloat(document.getElementById("weight").value);
    
    if (!height || !weight) {
        result.textContent = "Please enter valid values for height and weight.";
        category.textContent = "";
        return;
    }
    
    const bmi = weight / (height * height);
    result.textContent = `Your BMI is ${bmi.toFixed(2)}`;
    
    if (bmi < 18.5) {
        category.textContent = "Underweight";
        category.setAttribute("data-category", "Underweight");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category.textContent = "Normal weight";
        category.setAttribute("data-category", "Normal weight");
    } else if (bmi >= 25 && bmi <= 29.9) {
        category.textContent = "Overweight";
        category.setAttribute("data-category", "Overweight");
    } else {
        category.textContent = "Obese";
        category.setAttribute("data-category", "Obese");
    }
});