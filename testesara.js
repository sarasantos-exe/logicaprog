let num1, num2, num3, soma, mult, media;

console.log("Escolha 3 valores diferentes para descobrir a soma, multiplicação e média deles")

console.log('Escolha o primeiro valor: ');
num1 = 10;

console.log("Escolha o segundo valor: ");
num2 = 33%5;

console.log("Escola o terceiro valor: ");
num3 = 34;

console.log(`Os números escolhidos foram ${num1} , ${num2} e ${num3}`);
soma = num1 + num2 + num3;
mult = num1 * num2 * num3;
media = num1 + num2 + num3 / 3

console.log(`SOMA: A soma dos números escolhidos é igual a ${soma}`);
console.log(`MULT: A multiplicação dos números escolhidos é igual a ${mult}`);
console.log(`MÉDIA: A media dos números escolhidos é igual a ${media.toFixed(2)}`);