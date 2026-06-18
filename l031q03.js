//3) Fazer um programa que pergunte um valor em Dólares e apresente o equivalente em Reais. Considere U$1,00 =
//R$3,80.

//Declaração de variável
let valorDolar, valorReal;

//"Entrada" simulada
console.log("Informa o valor em dólares: ");
valorDolar = 5000.00;
valorReal = valorDolar * 3.80;

console.log("O valor informado foi: U$ " + valorDolar.toFixed(2));
console.log("Convertendo para reais, temos: R$ " + valorReal.toFixed(2));
console.log(`CALCULO: ${valorDolar.toFixed(2)} * 3.80 = ${valorReal.toFixed(2)}`);