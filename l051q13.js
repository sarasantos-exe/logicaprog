//13) Desenvolver um programa que imprima a tabuada de 3 a 6.

let cont = 0;
let mult;

// Laço externo: controla qual tabuada será impressa (3, 4, 5 e 6).
for ( let i = 3; i <= 6; i++ ) {
    console.log(`
        
TABUADA DO ${i}:`); // título da tabuada

// Laço interno: controla a multiplicação de 1 a 10.
for ( let cont = 1; cont <= 10; cont++ ) {
    let mult = i * cont; // calcula a multiplicação
    console.log(`${i} X ${cont} = ${mult}`); // imprime o resultado da multiplicação
} }