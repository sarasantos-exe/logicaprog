//7) Desenvolver um programa que pergunte um valor inteiro positivo ou negativo, e exiba como resposta o módulo
//deste valor, ou seja, o número lido como sendo positivo.

let num, modulo;

console.log("Escolha um número inteiro positivo ou negativo:");
num = -9;

if (num < 0) {
    modulo = -num
} else {
    (modulo = num)
}

console.log(`O módulo do valor escolhido é ${modulo}`)