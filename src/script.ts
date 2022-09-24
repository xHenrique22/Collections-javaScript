import PromptSync = require('prompt-sync');
const prompt = PromptSync();

let option: number;
let estoque: string [] = [];

do{
    console.clear();
    console.log('1 - Adicionar');
    console.log('2 - Deletar um item');
    console.log('3 - Alterar dados');
    console.log('4 - Listar estoque');
    console.log('5 - Sair');


    option = Number(prompt('Digite uma das opções acima:  '));
    console.clear();


    switch(option){
        case 1:
            let nomeProduto = prompt('Digite o nome do produto: ');
            estoque.push(nomeProduto)
            break;

        case 2:
            let i=0;
            estoque.forEach((item) => {
                console.log(`Número do produto: ${i}`);
                console.log(`Nome do produto: ${item}\n`);
                i++;
            })
            let numero = Number(prompt('Digite o número do produto: '));
            estoque.splice(numero, 1);
            prompt('\n-- Item excluido! --\n Aperte enter para voltar ao menu.');
            break;
            
        case 3:
            i=0;
            estoque.forEach((item) => {
                console.log(`Número do produto: ${i}`);
                console.log(`Nome do produto: ${item}\n`);
                i++;
            })
            numero = Number(prompt('Digite o número do produto: '));
            estoque.splice(numero, 1);
            prompt('-- Item excluido para alteração -- \nAperte enter para prosseguir.');
            nomeProduto = prompt('Digite o nome do produto: ');
            estoque.push(nomeProduto)
            break;
            
        case 4:
            console.log('Itens listados abaixo:\n');
            i=0;
            estoque.forEach((item) => {
                console.log(`Número do produto: ${i}`);
                console.log(`Nome do produto: ${item}\n`);
                i++;
            })
            prompt('Aperte enter para voltar ao menu.');
            break;
            
        case 5:
            prompt('-- Aperte enter para sair --');
            break;
            
        default:
            prompt('Opção inválida!');
    }
}while(option != 5);