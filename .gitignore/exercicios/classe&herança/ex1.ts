class Funcionario {
    constructor(public nome: string, public cargo: string, public salario: number) { }


    apresentacao(): string {
        return 'Nome: ${this.nome}, cargo: ${this.cargo}, salário: ${this.salario}';

    }
}


