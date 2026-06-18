//3) Desenvolver um programa que pergunte um número, e apresente como resposta se o referido número é par ou
//é ímpar.

let num;

console.log("Escolha um número inteiro");
num = 11;

console.log(`O número escolhio foi: ${num}`);

if ( num % 2 === 0) {
    console.log("O número escolhido é PAR!")
} else {
    console.log("O número escolhido é ÍMPAR!")
}

console.log("TESTE ENCERRADO");