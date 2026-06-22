////2) Desenvolver um programa que apresente o total da soma de n números inteiros do número 8 até n, onde n é um
//valor informado pelo usuário.

console.log("Informe um número inteiro maior que 8.")

let num = 14;
let acum = 0;

console.log(`O número escolhido foi ${num}`);

for ( let i = 8; i <= num; i++ ) {
acum = acum + i;

} console.log(acum);

console.log(`A soma dos números de 8 a ${num} é ${acum}`);