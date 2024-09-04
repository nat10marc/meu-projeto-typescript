// Importação das classes Pedido e Cliente
import { Pedido } from './3.1.2';
import { Cliente } from './3.1.1';

// Criação de instâncias de Pedido e Cliente
const clienteExemplo = new Cliente('Lucas', 'lucas@gmail.com');
const pedidoExemplo = new Pedido(clienteExemplo, 'Notebook', 4500);

// Exibição do pedido
console.log(pedidoExemplo.exibirPedido());
