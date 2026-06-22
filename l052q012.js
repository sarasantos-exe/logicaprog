//1/2) Desenvolver um programa que apresente todos os valores numéricos inteiros ímpares situados na faixa de 101 a
//403.

let cont = 101;

do {
    if (cont % 2 !== 0) {
        console.log(cont);
        }
        cont = cont + 1;
} while (cont <=403);