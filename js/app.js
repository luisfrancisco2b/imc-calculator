// Selecting Elements
const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const CalcBtn = document.querySelector("#calc-btn");

// Funtions
const calcImc = (height, weight) => {
  console.log(height, weight);
};

// Events
CalcBtn.addEventListener("click", () => {
  const heightValue = parseFloat(height.value).toFixed(1);
  const weightValue = parseFloat(weight.value).toFixed(1);

  calcImc(heightValue, weightValue);
});
