let totalGeral = 0;
limpar();

function adicionar() {
  //recuperar valores nome do produto, quantidade e valor
  let produto = document.getElementById("produto").value;
  let nomeProduto = produto.split("-")[0];
  let valorUnitario = produto.split("R$")[1];
  let quantidade = document.getElementById("quantidade").value;
    //validações
    if (!produto || produto.trim() === '') {
        alert('Selecione um produto válido.');
        return;
    }

    if (isNaN(quantidade) || quantidade <= 0) {
      alert('Insira uma quantidade válida.');
      return;
    }

  //calcular o preço, o nosso subtotal
  let preco = quantidade * valorUnitario;

  //adicionar o produto no carrinho
  let Carrinho = document.getElementById("lista-produtos");
  Carrinho.innerHTML += `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`;
  //atualizar o valor total
  totalGeral += preco;
  let campoTotal = document.getElementById("valor-total");
  campoTotal.textContent = `R$ ${totalGeral}`;
  document.getElementById("quantidade").value = 0;
}

function limpar() {
  totalGeral = 0;
  document.getElementById("lista-produtos").innerHTML = "";
  document.getElementById("valor-total").textContent = "R$ 0";
}
