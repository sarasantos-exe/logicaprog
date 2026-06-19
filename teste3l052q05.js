//Desenvolva um programa que apresente todos os números ímpares divisíveis por 3 que sejam menores ou iguais a 333.

let cont = 1;


do {
    if (cont % 3 === 0 && cont % 2 !== 0) // === é igualdade estrita, !== é diferença estrita.
    {
        console.log(`${cont} é um número ímpar divisível por 3.`);
    }
    cont++
} while (cont <= 333);




        