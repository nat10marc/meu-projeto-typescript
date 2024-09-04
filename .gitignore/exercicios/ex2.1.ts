class Funcionario {
    nome: string;
    cargo: string;
    salario: number;
    constructor(nome: string, cargo: string, salario: number) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }
    descricao(): string {
        return `${this.nome} trabalha como ${this.cargo} e ganha R$${this.salario.toFixed(2)}.`;
    }

}
class Gerente extends Funcionario {
    departamento: string;

    constructor(nome: string, cargo: string, salario: number, departamento: string) {
        super(nome, cargo, salario);
        this.departamento = departamento;
    }
    descricaoDetalhada(): string {
        return `${this.descricao()} Ele(a) supervisiona o departamento de ${this.departamento}.`;
    }
}
//exemplo
const funcionarioExemplo = new Funcionario('Carlos Souza', 'Desenvolvedor', 4500.00);
console.log(funcionarioExemplo.descricao());

const gerenteExemplo = new Gerente('Ana Pereira', 'Gerente de Projetos', 8000.00, 'TI');
console.log(gerenteExemplo.descricaoDetalhada());
