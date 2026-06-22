//Desenvolver um programa que pergunte um número de 1 A 12, e responda o mês correspondente ao número,
// ou se o número não corresponde a nenhum dos 12 meses.

console.log("Informe um número de 1 a 12.")
let num = 12;
console.log(`O número informado foi ${num}`);

switch (num) {
    case 1:
        console.log("Mês 1 - JANEIRO");
        break;
    case 2:
        console.log("Mês 2 - FEVEREIRO");
        break;
    case 3:
        console.log("Mês 3 - MARÇO");
        break;
    case 4:
        console.log("Mês 4 - ABRIL");
        break;
    case 5:
        console.log("Mês 5 - MAIO");
        break;
    case 6:
        console.log("Mês 6 - JUNHO");
        break;
    case 7:
        console.log("Mês 7 - JULHO");
        break;
    case 8:
        console.log("Mês 8 - AGOSTO");
        break;
    case 9:
        console.log("Mês 9 - SETEMBRO");
        break;
    case 10:
        console.log("Mês 10 - OUTUBRO");
        break;
    case 11:
        console.log("Mês 11 - NOVEMBRO");
        break;
    case 12:
        console.log("Mês 12 - DEZEMBRO");
        break;
    default:
        console.log("O número inserido é INVÁLIDO. Insira um número de 1 a 12.");
}