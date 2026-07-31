// IMC DATA
const data = [
  {
    min: 0,
    max: 18.4,
    classification: "Menor que 18,5",
    info: "Magreza",
    obesity: "0",
  },
  {
    min: 18.5,
    max: 24.9,
    classification: "Entre 18,5 e 24,9",
    info: "Normal",
    obesity: "0",
  },
  {
    min: 25,
    max: 29.9,
    classification: "Entre 25,0 e 29,9",
    info: "Sobrepeso",
    obesity: "I",
  },
  {
    min: 30,
    max: 39.9,
    classification: "Entre 30,0 e 39,9",
    info: "Obesidade",
    obesity: "II",
  },
  {
    min: 40,
    max: 99,
    classification: "Maior que 40,0",
    info: "Obesidade grave",
    obesity: "III",
  },
];

// Selecting Elements
const form = document.querySelector("#imc-form");

const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");

const calcBtn = document.querySelector("#calc-btn");
const clearBtn = document.querySelector("#clear-btn");

const imcTable = document.querySelector("#imc-table");

const backBtn = document.querySelector("#back-btn");

const imcNumber = document.querySelector("#imc-number span");
const imcInfo = document.querySelector("#imc-info span");

const calcContainer = document.querySelector("#calc-container");
const resultContainer = document.querySelector("#result-container");

// Functions
// Create Table
function createTable(data) {
  data.forEach((item) => {
    // Create container row
    const div = document.createElement("div");
    div.classList.add("table-data");

    // Create and populate classification paragraph
    const classification = document.createElement("p");
    classification.innerText = item.classification;

    // Create and populate info/status paragraph
    const info = document.createElement("p");
    info.innerText = item.info;

    // Create and populate obesity degree paragraph
    const obesity = document.createElement("p");
    obesity.innerText = item.obesity;

    // Append columns to the row container
    div.appendChild(classification);
    div.appendChild(info);
    div.appendChild(obesity);

    // Append row container to the main table
    imcTable.appendChild(div);
  });
}

// Clear Inputs
function clearInputs() {
  heightInput.value = "";
  weightInput.value = "";

  imcNumber.classList = "";
  imcInfo.classList = "";
}

// Digits Validation
function validDigits(text) {
  return text.replace(/[^0-9,]/g, "");
}

// Calc IMC
function calcImc(height, weight) {
  const imc = (weight / (height * height)).toFixed(1);

  return +imc;
}

// Toggle visibility between calculator and result views
function showOrHideResults() {
  calcContainer.classList.toggle("hide");
  resultContainer.classList.toggle("hide");
}

// Initialization
createTable(data);

// Events
// Inputs Validation Listener
[heightInput, weightInput].forEach((el) => {
  el.addEventListener("input", (e) => {
    const updatedValue = validDigits(e.target.value);

    e.target.value = updatedValue;
  });
});

// Clear Inputs Listener
clearBtn.addEventListener("click", (e) => {
  e.preventDefault();

  clearInputs();
});

// Calculate BMI Listener
calcBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const height = +heightInput.value.replace(",", ".");
  const weight = +weightInput.value.replace(",", ".");

  if (!height || !weight) return;

  const imc = calcImc(height, weight);

  let info;

  data.forEach((item) => {
    if (imc >= item.min && imc <= item.max) {
      info = item.info;
    }
  });

  if (!info) return;

  // Display results in the UI
  imcNumber.innerText = imc;
  imcInfo.innerText = info;

  // Apply contextual styling depending on the result
  switch (info) {
    case "Magreza":
      imcNumber.classList.add("low");
      imcInfo.classList.add("low");
      break;

    case "Normal":
      imcNumber.classList.add("good");
      imcInfo.classList.add("good");
      break;

    case "Sobrepeso":
      imcNumber.classList.add("low");
      imcInfo.classList.add("low");
      break;

    case "Obesidade":
      imcNumber.classList.add("medium");
      imcInfo.classList.add("medium");
      break;

    case "Obesidade grave":
      imcNumber.classList.add("high");
      imcInfo.classList.add("high");
      break;
  }

  // Switch to result screen
  showOrHideResults();
});

// Back Button Listener
backBtn.addEventListener("click", () => {
  clearInputs();

  showOrHideResults();
});
