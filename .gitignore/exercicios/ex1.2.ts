type Pessoa = {
    nome: string;
    idade: number;
};
type Empregado = {
    empresa: string;
    salario: number;
};
type PessoaEmpregada = Pessoa & Empregado;
function descreverEmpregado(pessoaEmpregada: PessoaEmpregada): string {
    return `${pessoaEmpregada.nome}, de ${pessoaEmpregada.idade} anos, trabalha na empresa ${pessoaEmpregada.empresa} e ganha R$${pessoaEmpregada.salario.toFixed(2)}.`;
}
const empregadoExemplo: PessoaEmpregada = {
    nome: 'João Silva',
    idade: 30,
    empresa: 'Tech Solutions',
    salario: 5000.00
};
console.log(descreverEmpregado(empregadoExemplo));
