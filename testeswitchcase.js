//TESTE COM QUESTÃO GERADA PELO COPILOT

//Imagine que você está criando um programa para um restaurante.
//O cliente digita um número para escolher o prato:
//1 → Pizza
//2 → Hambúrguer
//3 → Salada
//Se o cliente digitar qualquer outro número, o programa deve responder: "Opção inválida. Escolha entre 1, 2 ou 3."
//Sua tarefa: escreva um código em JavaScript usando switch case que faça essa verificação e mostre a mensagem correta.

let opcao;

console.log("Escolha uma opção de acordo com o número informado. Tecle 1 para pizza. 2 para hambúrguer e 3 para cachorro-quente.");

opcao = 0;
console.log(`O número escolhido foi ${opcao}`);

switch (opcao) {
    case 1: console.log("1. Pizza");
    break;

    case 2: console.log("2. Hambúrguer");
    break;

    case 3: console.log("3. Cachorro-quente");
    break;

    default: console.log("Opção inválida, escolha 1, 2 ou 3.");

}

console.log("Atendimento finalizado, por favor nos avalie!");