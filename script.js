const weight = document.querySelector(".weight-input");
const height = document.querySelector(".height-input");
const calculateBtn = document.querySelector(".calculate");
const result = document.querySelector(".result");

let imc;

calculateBtn.addEventListener("click", () => {
  imc = (weight.value / (height.value * height.value)).toFixed(2);
  if (weight.value && height.value) {
    height.value = height.value.replace(",", ".");
    result.classList.remove("hidden");

    if (imc < 16) {
      result.innerText = `O seu IMC é de ${imc}. Magreza Grau III.`;
    } else if (imc >= 16 && imc <= 16.9) {
      result.innerText = `O seu IMC é de ${imc}. Magreza Grau II.`;
    } else if (imc >= 17 && imc <= 18.4) {
      result.innerText = `O seu IMC é de ${imc}. Magreza Grau I.`;
    } else if (imc >= 18.5 && imc <= 24.9) {
      result.innerText = `O seu IMC é de ${imc}. Eutrofia (Peso Normal).`;
    } else if (imc >= 25 && imc <= 29.9) {
      result.innerText = `O seu IMC é de ${imc}. Pré-Obesidade.`;
    } else if (imc >= 30 && imc <= 34.9) {
      result.innerText = `O seu IMC é de ${imc}. Obesidade Moderada (Grau I).`;
    } else if (imc >= 35 && imc <= 39.9) {
      result.innerText = `O seu IMC é de ${imc}. Obesidade Severa (Grau II).`;
    } else if (imc >= 40) {
      result.innerText = `O seu IMC é de ${imc}. Obesidade Muito Severa (Grau III).`;
    }

    console.log(imc);
  } else {
    result.classList.toggle("hidden");
    result.innerText =
      "Por favor, preencha os campos acima com peso em kg e altura em metros.";
  }
});
