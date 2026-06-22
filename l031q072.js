////7/2) Fazer um algoritmo que pergunte 3 números e apresente a média aritmética entre estes 3 números.

let num1 = 7;
let num2 = -12;
let num3 = 14.2;
let media = 8;

console.log("Escolha 3 números livres e aleatórios.");

console.log(`O primeiro número inserido foi ${num1}`);
console.log(`O segundo número inserido foi ${num2}`);
console.log(`O terceiro número inserido foi ${num3}`);

media = (num1 + num2 + num3) / 3;

console.log(`A média dos valores inseridos é ${media.toFixed(2)}`);
console.log(`MÉDIA = (${num1} + ${num2} + ${num3}) / 3 = ${media.toFixed(2)}`);