function calcularIMC() {
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const resultadoIMC = document.getElementById("resultadoIMC");
  const classificacaoIMC = document.getElementById("classificacaoIMC");

  if (isNaN(peso) || isNaN(altura) || altura <= 0) {
    resultadoIMC.textContent = "Preencha os campos corretamente.";
    classificacaoIMC.textContent = "";
    return;
  }

  const imc = peso / (altura * altura);
  resultadoIMC.textContent = `Seu IMC e: ${imc.toFixed(2)}`;

  let classificacao = "";

  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
  } else if (imc < 25) {
    classificacao = "Peso normal";
  } else if (imc < 30) {
    classificacao = "Sobrepeso";
  } else if (imc < 35) {
    classificacao = "Obesidade grau 1";
  } else if (imc < 40) {
    classificacao = "Obesidade grau 2";
  } else {
    classificacao = "Obesidade grau 3";
  }

  classificacaoIMC.textContent = `Classificacao: ${classificacao}`;
}