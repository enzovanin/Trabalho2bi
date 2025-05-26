const precos = {
  cachorro: { nome: "Cachorro Quente", preco: 11.00 },
  bauru: { nome: "Bauru", preco: 8.50 },
  misto: { nome: "Misto Quente", preco: 8.00 },
  hamburguer: { nome: "Hamburger", preco: 9.00 },
  cheese: { nome: "Cheeseburger", preco: 10.00 },
  refri: { nome: "Refrigerante", preco: 4.50 }
};

let pedido = [];

function adicionarAoPedido() {
  const produtoSelecionado = document.getElementById("produto").value;
  const quantidade = parseInt(document.getElementById("quantidade").value);

  if (isNaN(quantidade) || quantidade <= 0) {
    alert("Informe uma quantidade válida.");
    return;
  }

  const item = precos[produtoSelecionado];
  const subtotal = item.preco * quantidade;

  pedido.push({ produto: produtoSelecionado, nome: item.nome, preco: item.preco, quantidade, subtotal });

  atualizarLista();
  document.getElementById("quantidade").value = "";
}

function removerItem(index) {
  pedido.splice(index, 1);
  atualizarLista();
}

function atualizarLista() {
  const lista = document.getElementById("listaPedido");
  const totalFinal = document.getElementById("totalFinal");
  lista.innerHTML = "";
  

  let total = 0;

  pedido.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
  ${item.nome} - ${item.quantidade} x R$ ${item.preco.toFixed(2).replace('.', ',')} = 
  <strong>R$ ${item.subtotal.toFixed(2).replace('.', ',')}</strong>
  <button onclick="removerItem(${index})" class="remover" title="Remover item">🗑️</button>
`;
    lista.appendChild(li);
    total += item.subtotal;
  });

  totalFinal.textContent = `Total do pedido: R$ ${total.toFixed(2).replace('.', ',')}`;
}