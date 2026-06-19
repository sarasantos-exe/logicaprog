//3) Desenvolver um programa que apresente os resultados de uma tabuada (mult) de um número qualquer informado
//pelo usuário.

console.log("Escolha um número para ser o multiplicador.");

let num = 8;
let acum = 1;

console.log(`O número escolhido foi ${num}`);

console.log("Escolha até onde vão os números a serem multiplicados.");
console.log("O limite dos números multiplicados foi estabelecido: 14.");
console.log("TABUADA:");

for (let i = 1; i <= 14; i++) {
    acum = i * 8
    console.log( acum )
}

console.log(`FIM DA TABUADA DE ${num}`);

