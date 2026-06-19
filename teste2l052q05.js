////Desenvolva um programa que apresente todos os números divisíveis por 12 que sejam menores ou iguais a 120.

let cont = 1;

do {
    if (cont % 12 === 0) {
        console.log (cont)
    } cont++
}
while (cont <= 120);

