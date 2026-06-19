//Desenvolva um programa que apresente todos os números divisíveis por 8 que sejam menores que 70.

let cont = 1;

do {
    if (cont % 8 === 0) {
        console.log (cont)
    }
    cont++

} while (cont < 70);