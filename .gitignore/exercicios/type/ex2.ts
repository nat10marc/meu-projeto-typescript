type Pessoa = {
    nome: string,
    idade: number
}

type Empregado = {
    empresa: string,
    salario: number
}

type PessoaEmpregado = Pessoa & Empregado;

const PessoaEmpregado1: PessoaEmpregado = {
    nome: 'natan',
    idade: 21,
    empresa: 'FIAP',
    salario: 1500
}

console.log(PessoaEmpregado1);