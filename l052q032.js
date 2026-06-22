//3/2) Desenvolver um programa que apresente o total da soma dos oito primeiros números inteiros.

let cont = 1;
let acum = 0;

do {
    acum = acum + cont;
    cont = cont + 1;
} while (cont <= 8);
console.log(`A soma dos 8 primeiros números inteiros é ${acum}`);