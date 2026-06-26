//13) Desenvolver um programa que imprima a tabuada de soma de 2 a 9.

let cont = 0;
let soma;

// Laço externo: controla qual tabuada será impressa (2, 3, 4, 5, 6, 7, 8 e 9).
for ( let i = 2; i <= 9; i++ ) {
    console.log(`
TABUADA DE SOMA DO ${i}:`); // título da tabuada

// Laço interno: controla a soma de 1 a 10.
for ( let cont = 1; cont <= 10; cont++ ) {
    let soma = i + cont; // calcula a soma
    console.log(`${i} + ${cont} = ${soma}`); // imprime o resultado da soma
} }