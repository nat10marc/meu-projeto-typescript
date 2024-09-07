"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importação do namespace Financeiro
var ex3_3_1_1 = require("./ex3.3.1");
// Criação de instâncias e utilização das funções do namespace
var orcamentoExemplo = new ex3_3_1_1.Financeiro.Orcamento(5000, ['Notebook', 'Mouse']);
console.log(orcamentoExemplo.exibirOrcamento());
var valorComImposto = ex3_3_1_1.Financeiro.calcularImposto(5000, 0.15);
console.log("Valor com Imposto: R$".concat(valorComImposto.toFixed(2)));
var valorComDesconto = ex3_3_1_1.Financeiro.calcularDesconto(5000, 0.10);
console.log("Valor com Desconto: R$".concat(valorComDesconto.toFixed(2)));
