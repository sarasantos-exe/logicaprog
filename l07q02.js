//2) Desenvolver um programa que pergunte cinco elementos de um vetor a. No final, apresente a soma de todos os
//elementos deste vetor.

console.log("Escolha cinco elementos para o vetor a:");
let a = []; // vetor vazio para armazenar os elementos
a = [3, 12, 7, 5, 9]; // preenchendo o vetor com 5 elementos
console.log(`O vetor a é: [${a}]`);

let soma = 0;
for (let i = 0; i < a.length; i++) {
    soma = soma + a[i]; // somando cada elemento do vetor. i é apenas o índice (posição) dentro do vetor a.
//a[i] significa: “pegue o elemento que está na posição i do vetor a. ex.: a[0] = 3, a[1] = 12, a[2] = 7, a[3] = 5, a[4] = 9
}
console.log(`A soma de todos os elementos do vetor é: ${soma}`);