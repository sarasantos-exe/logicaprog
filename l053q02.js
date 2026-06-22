//2) Desenvolver um programa que apresente o total da soma de n números inteiros do número 1 até n, onde n é um
//valor informado pelo usuário.

console.log("Informe um valor inteiro e positivo.");

let num = 8;
let acum = 0;

console.log(`O número escolhido foi ${num}`);

for (let i = 1; i <= 8; i++) {
    acum = acum + i;
    
} console.log( acum );

console.log(`A soma dos números inteiros de 1 a ${num} é ${acum}`);