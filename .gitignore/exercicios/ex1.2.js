function descreverEmpregado(pessoaEmpregada) {
    return "".concat(pessoaEmpregada.nome, ", de ").concat(pessoaEmpregada.idade, " anos, trabalha na empresa ").concat(pessoaEmpregada.empresa, " e ganha R$").concat(pessoaEmpregada.salario.toFixed(2), ".");
}
var empregadoExemplo = {
    nome: 'João Silva',
    idade: 30,
    empresa: 'Tech Solutions',
    salario: 5000.00
};
console.log(descreverEmpregado(empregadoExemplo));
