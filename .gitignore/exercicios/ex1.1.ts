interface Produto {
    nome: string;
    preco: number;
    categoria: string;
}

type FormaPagamento = 'dinheiro' | 'cartão' | 'pix';
function processarCompra(produto: Produto, formaPagamento: FormaPagamento): string {
    return `Você comprou o produto "${produto.nome}" da categoria "${produto.categoria}" por R$${produto.preco.toFixed(2)}. Forma de pagamento: ${formaPagamento}.`;
}

const produto1: Produto = {
    nome: 'Creatina',
    preco: 79.99,
    categoria: 'Suplementos'
};

const formaPagamento: FormaPagamento = 'cartão';

console.log(processarCompra(produto1, formaPagamento));
