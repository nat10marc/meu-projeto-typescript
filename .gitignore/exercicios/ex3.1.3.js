"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importação das classes Pedido e Cliente
var _3_1_2_1 = require("./3.1.2");
var _3_1_1_1 = require("./3.1.1");
// Criação de instâncias de Pedido e Cliente
var clienteExemplo = new _3_1_1_1.Cliente('Lucas', 'lucas@gmail.com');
var pedidoExemplo = new _3_1_2_1.Pedido(clienteExemplo, 'Notebook', 4500);
// Exibição do pedido
console.log(pedidoExemplo.exibirPedido());
