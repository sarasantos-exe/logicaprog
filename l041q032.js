//3/2) Desenvolver um programa que pergunte um número, e apresente como resposta se o referido número é par ou
//é ímpar.

let num;

console.log("Escolha um número aleatório.");
num = 9;
console.log(`O número escolhido foi ${num}`);

if (num === 0) {
    console.log("O número escolhio é NULO!");
} else if (num % 2 === 0) {
    console.log("O número escolhido é PAR!");
} else {
    console.log("O número escolhido é ÍMPAR!");
}