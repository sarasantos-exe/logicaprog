//1) Desenvolver um programa que pergunte um número. Se este número for maior que 20, então ele deverá exibir a
//metade deste número, senão, ele deverá exibir o número sem alterações.

//Declaração de variáveis
let num, metade;

//"Entrada" simulada
console.log("Informe um número: ");
num = -47;

if ( num > 20 ) {
metade = num / 2
console.log(`A metade de ${num} é ${metade}`)
} else {
    console.log(`O número escolhido é ${num}`)
}

console.log("FIM DO PROGRAMA");