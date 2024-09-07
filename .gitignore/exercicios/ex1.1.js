function processarCompra(produto, formaPagamento) {
    return "Voc\u00EA comprou o produto \"".concat(produto.nome, "\" da categoria \"").concat(produto.categoria, "\" por R$").concat(produto.preco.toFixed(2), ". Forma de pagamento: ").concat(formaPagamento, ".");
}
var produto1 = {
    nome: 'Creatina',
    preco: 79.99,
    categoria: 'Suplementos'
};
var formaPagamento = 'cartão';
console.log(processarCompra(produto1, formaPagamento));
