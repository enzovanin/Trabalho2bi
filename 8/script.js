document.getElementById("pagamentoForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const nivel = document.getElementById("nivel").value;
  const horas = parseFloat(document.getElementById("horas").value);
  let valorHora = 0;

  switch (nivel) {
    case "1":
      valorHora = 12;
      break;
    case "2":
      valorHora = 17;
      break;
    case "3":
      valorHora = 25;
      break;
    default:
      document.getElementById("resultado").textContent = "Selecione um nivel valido.";
      return;
  }

  const salario = valorHora * horas * 4.5;
  document.getElementById("resultado").textContent = 
    `Salario mensal: R$ ${salario.toFixed(2)}`;
});