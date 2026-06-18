//4) Desenvolver um programa que apresente o valor da soma dos cem primeiros números inteiros (1 + 2 + 3 + 4 + ...
//+ 97 + 98 + 99 + 100)

//valor inicial, final e incremento sempre estarão no while.


let cont = 1; // valor inicial
let acum = 0; // acumulador, começa valendo ZERO em contas de soma e subtração. [[[em multiplicação e divisão, começa valendo 1.]]]

//valor final
while ( cont <= 100) {

    acum = acum + cont; // o cont sendo 1, o próximo é 2, e assim por diante. Dessa maneira, o acumulador também cresce.
    // Pois cont = 1, acum continua 0. Pois acum = 0 + 1.
    // Seguidamente, cont = 1+1, logo, cont = 2. então acum = 0 + 2, logo acum = 1 pois o contador apesar de somar +1, ainda é 1.
    // Então se o contador é 1 e o acumulador é 0 + 1, cont = 1 + 1, então cont = 2. E acum = 0 + 1, acum = 1.
    
    cont = cont + 1; // incremente, de quanto em quanto cresce
    
}

console.log(`A soma dos valores de 1 a 100 é ${acum}`)
//queremos ver apenas o valor da soma, não a soma de cada número + o próximo,
// então nesse caso o console.log fica fora do bloco de código para que não continue rodando todos as somas de todos os números.
