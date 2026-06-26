//6) Desenvolver um programa que pergunte dois valores numéricos inteiros e apresente o valor da diferença entre o
//maior valor e o menor valor lido.

console.log("Escolha dois números inteiros.");

let num1 = 4;
let num2 = 34;
let dif;

console.log("Os valores escolhidos foram " + num1 + " e " + num2);
if (num1 > num2) {
    dif = num1 - num2;
} else {
    dif = num2 - num1;
}
console.log("A diferença entre os valores é: " + dif);