let totalGeral = 0;
limpar();

function adicionar() {
    //recuperar valores nome do produto, quantidade e valor
    let produtoInfo = document.getElementById('produto').value;
    let nomeProduto = produtoInfo.split(' - ')[0];
    let precoProduto = produtoInfo.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

    if (!produtoInfo) {
        alert('Por favor, selecione um produto.');
        return;
    }

    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }
    
    //calcular o preço, o nosso subtotal
    let preco = precoProduto * quantidade;
    //adicionar no carrinho
    let listaProdutos = document.getElementById('lista-produtos');
    listaProdutos.innerHTML = listaProdutos.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
  </section>`
    //atualizar o valor total
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$ 0';
}