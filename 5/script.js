function calcularCredito() {
  const saldo = parseFloat(document.getElementById("saldo").value);
  const resultado = document.getElementById("resultadoCredito");

  if (isNaN(saldo) || saldo < 0) {
    resultado.innerHTML = "Digite um saldo valido.";
    return;
  }

  let percentual = 0;

  if (saldo >= 0 && saldo <= 200) {
    percentual = 0;
  } else if (saldo <= 400) {
    percentual = 0.20;
  } else if (saldo <= 600) {
    percentual = 0.30;
  } else {
    percentual = 0.40;
  }

  const credito = saldo * percentual;

  resultado.innerHTML = `
    Saldo medio: R$ ${saldo.toFixed(2).replace('.', ',')}<br>
    Percentual de credito: ${percentual * 100}%<br>
    Valor do credito: R$ ${credito.toFixed(2).replace('.', ',')}
  `;
}