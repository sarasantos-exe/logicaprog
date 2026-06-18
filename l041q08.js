//8) Desenvolver um programa que pergunte um número inteiro qualquer e verifique se ele está na faixa de 1 a 10.

let num;

console.log("Escolha um número inteiro.");
num = 4;
console.log(`O número escolhido foi: ${num}`);

if (num >= 1 && num <= 10) {
    console.log("Este número é válido pois está na faixa de 1 a 10.")
} else {
    console.log("Este número não é válido pois é menor que 1 e maior que 10.")
}

console.log("TESTE ENCERRADO.");