//Desenvolver um programa que pergunte cinco elementos de um vetor a. No final, apresente a soma de todos os
//elementos que sejam ímpares.

console.log("Escolha cinco elementos para o vetor a.");

let a = []; // vetor vazio para armazenar os elementos
a = [8, 15, 22, 7, 3]; // preenchendo o vetor com 5 elementos

console.log(`O vetor a é: [${a}]`);

let somaImpares = 0;
for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 !== 0) { // Verifica se o elemento é ímpar
        somaImpares = somaImpares + a[i]; // Adiciona o elemento ímpar à soma
    
    } }
console.log(`A soma de todos os elementos ímpares do vetor é: ${somaImpares}`); // se o console.log estivesse dentro do lado,
// imprimiria na saída cada passo da soma. Então ao invés de imprimir o resultado final, imprimiria cada passo da soma.