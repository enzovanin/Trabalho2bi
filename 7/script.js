document.getElementById("vendaForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const preco = parseFloat(document.getElementById("preco").value);
  const condicao = document.getElementById("condicao").value;
  let total = 0;
  let mensagem = "";

  switch (condicao) {
    case "a":
      total = preco * 0.9;
      mensagem = `Total a pagar: R$ ${total.toFixed(2)} (10% de desconto)`;
      break;
    case "b":
      total = preco * 0.85;
      mensagem = `Total a pagar: R$ ${total.toFixed(2)} (15% de desconto)`;
      break;
    case "c":
      total = preco;
      mensagem = `Total a pagar: 2x de R$ ${(total / 2).toFixed(2)} (sem juros)`;
      break;
    case "d":
      total = preco * 1.10;
      mensagem = `Total a pagar: 2x de R$ ${(total / 2).toFixed(2)} (com 10% de juros)`;
      break;
    default:
      mensagem = "Selecione uma condicao valida.";
  }

  document.getElementById("resultado").textContent = mensagem;
});