function calcularSalario() {
  const salario = parseFloat(document.getElementById("salario").value);
  const cargo = document.getElementById("cargo").value;
  const resultado = document.getElementById("resultadoSalario");

  if (isNaN(salario) || salario <= 0) {
    resultado.innerHTML = "Digite um salario valido.";
    return;
  }

  let percentual = 0;

  switch (cargo) {
    case "101": // Gerente
      percentual = 0.10;
      break;
    case "102": // Engenheiro
      percentual = 0.20;
      break;
    case "103": // Tecnico
      percentual = 0.30;
      break;
    default:
      percentual = 0.40;
  }

  const aumento = salario * percentual;
  const novoSalario = salario + aumento;

  resultado.innerHTML = `
    Salario antigo: R$ ${salario.toFixed(2).replace('.', ',')}<br>
    Novo salario: R$ ${novoSalario.toFixed(2).replace('.', ',')}<br>
    Aumento: R$ ${aumento.toFixed(2).replace('.', ',')}
  `;
}