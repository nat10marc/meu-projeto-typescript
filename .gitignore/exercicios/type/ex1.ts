interface Produto {
    nome: string;
    preco: number;
    categoria: string;
}

type FormaPagamento = 'dinheiro' | 'cartao' | 'pix';

const produto1: Produto = {
    nome: 'produto1',
    preco: 19.9,
    categoria: 'categoria1'

}

produto(produto1): string {
    return '';
}