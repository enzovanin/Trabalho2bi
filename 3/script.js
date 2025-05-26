function calcularImposto() {
  const ano = parseInt(document.getElementById("ano").value);
  const valor = parseFloat(document.getElementById("valor").value);
  const resultado = document.getElementById("resultadoImposto");

  if (isNaN(ano) || isNaN(valor) || valor <= 0) {
    resultado.textContent = "Preencha os dados corretamente.";
    return;
  }

  let taxa = 0;

  if (ano < 1990) {
    taxa = 0.01;
  } else {
    taxa = 0.015;
  }

  const imposto = valor * taxa;

  resultado.textContent = `Imposto a ser pago: R$ ${imposto.toFixed(2).replace('.', ',')}`;
}