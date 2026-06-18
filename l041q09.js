//9) Desenvolver um programa que pergunte um número e exiba a informação de que ele é positivo, negativo ou
//nulo.

let num;

console.log("Escolha um número aleatório.");
num = 0;
console.log(`O número escolhido foi ${num}`);

if (num > 0) {
    console.log(`O número escolhido é POSITIVO.`)
} else if (num < 0) {
    console.log("O número escolhio é NEGATIVO")
}
else {
    console.log("O número escolhido é NULO")
}

console.log("TESTE ENCERRADO.")