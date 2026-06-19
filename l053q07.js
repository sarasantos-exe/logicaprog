//7) Desenvolver um programa que apresente no final a soma dos valores pares existentes na faixa de 3 até 21.

let acum = 0;

for (let i = 3; i <= 21; i++) {
    if (i %2 === 0) {
        //para não exibir a conta, não colocar console.log(i) aqui
        acum = i + acum; // acumula o valor
    }
}

console.log(`A soma dos números pares entre 3 e 21 é: ${acum}`);