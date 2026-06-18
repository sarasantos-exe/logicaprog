//6) Desenvolver um programa que pergunte dois valores numéricos inteiros e apresente o valor da diferença entre o
//maior valor e o menor valor lido.

let num1, num2, dif;

console.log("Escolha dois números inteiros:");
num1 = 3;
num2 = 9;

console.log("Os valores escolhidos foram 3 e 9.");

if ( num1 > num2 ) {
    dif = num1 - num2;
} else {
    dif = num2 - num1;
}

console.log(`O valor de diferença entre os números escolhidos é: ${dif}`);