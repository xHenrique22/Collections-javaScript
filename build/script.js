"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
var option;
var estoque = [];
var _loop_1 = function () {
    console.clear();
    console.log('1 - Adicionar');
    console.log('2 - Deletar um item');
    console.log('3 - Alterar dados');
    console.log('4 - Listar estoque');
    console.log('5 - Sair');
    option = Number(prompt('Digite uma das opções acima:  '));
    console.clear();
    switch (option) {
        case 1:
            var nomeProduto = prompt('Digite o nome do produto: ');
            estoque.push(nomeProduto);
            break;
        case 2:
            var i_1 = 0;
            estoque.forEach(function (item) {
                console.log("N\u00FAmero do produto: ".concat(i_1));
                console.log("Nome do produto: ".concat(item, "\n"));
                i_1++;
            });
            var numero = Number(prompt('Digite o número do produto: '));
            estoque.splice(numero, 1);
            prompt('\n-- Item excluido! --\n Aperte enter para voltar ao menu.');
            break;
        case 3:
            i_1 = 0;
            estoque.forEach(function (item) {
                console.log("N\u00FAmero do produto: ".concat(i_1));
                console.log("Nome do produto: ".concat(item, "\n"));
                i_1++;
            });
            numero = Number(prompt('Digite o número do produto: '));
            estoque.splice(numero, 1);
            prompt('-- Item excluido para alteração -- \nAperte enter para prosseguir.');
            nomeProduto = prompt('Digite o nome do produto: ');
            estoque.push(nomeProduto);
            break;
        case 4:
            console.log('Itens listados abaixo:\n');
            i_1 = 0;
            estoque.forEach(function (item) {
                console.log("N\u00FAmero do produto: ".concat(i_1));
                console.log("Nome do produto: ".concat(item, "\n"));
                i_1++;
            });
            prompt('Aperte enter para voltar ao menu.');
            break;
        case 5:
            prompt('-- Aperte enter para sair --');
            break;
        default:
            prompt('Opção inválida!');
    }
};
do {
    _loop_1();
} while (option != 5);
