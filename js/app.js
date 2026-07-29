// Selecting Elements
const height = document.querySelector("#height");
const weight = document.querySelector("#weight");

const CalcBtn = document.querySelector("#calc-btn");

// Funtions
const calcImc = (height, weight) => {
  // Imc Calc
  const imc = weight / (height * height);

  //   Underweight Verification
  if (imc < 18.5) {
    console.log(`Seu IMC é: ${imc.toFixed(1)}. Sua situação: Abaixo do peso.`);
  }

  //   Normal weight Verification
  if ((imc >= 18.5 && imc < 24.9)) {
    console.log(
      `Seu IMC é: ${imc.toFixed(1)}. Sua situação: Peso normal (saúdavel).`,
    );
  }

  //   Overweight Verification
  if ((imc >= 25 && imc < 29.9)) {
    console.log(
      `Seu IMC é: ${imc.toFixed(1)}. Sua situação: Sobrepeso (peso).`,
    );
  }

  //   Obesity Verification
  if (imc >= 30) {
    console.log(`Seu IMC é: ${imc.toFixed(1)}. Sua situação: Obesidade.`);
  }
};

// Events
CalcBtn.addEventListener("click", () => {
  // Get height value
  const heightValue = parseFloat(height.value).toFixed(1);

  //   Get weight value
  const weightValue = parseFloat(weight.value).toFixed(1);

  // Call of the imc calc function
  calcImc(heightValue, weightValue);
});
