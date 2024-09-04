// Importação da classe Cliente
import { Cliente } from './ex3.1.1';

// Definição da classe Pedido
export class Pedido {
  constructor(public cliente: Cliente, public produto: string, public valor: number) {}

  exibirPedido(): string {
    return `Cliente: ${this.cliente.nome}, Produto: ${this.produto}, Valor: R$${this.valor.toFixed(2)}`;
  }
