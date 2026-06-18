//5) Desenvolver um programa que pergunte 4 notas escolares de um aluno e exiba mensagem informando que o
//aluno foi aprovado se a média escolar for maior ou igual a 5. Se o aluno não foi aprovado, indicar uma
//mensagem informando essa condição. Apresentar junto com a mensagem de aprovação ou reprovação o valor
//da média obtida pelo aluno.

let nota1, nota2, nota3, nota4, media;

console.log("Informe a primeira nota:");
nota1 = 2;
console.log(`A primeira nota informada é: ${nota1}`);


console.log("Informe a segunda nota:");
nota2 = 5;
console.log(`A segunda nota informada é: ${nota2}`);


console.log("Informe a terceira nota:");
nota3 = 4;
console.log(`A terceira nota informada é: ${nota3}`);


console.log("Informe a quarta nota:");
nota4 = 2.5;
console.log(`A quarta nota informada é ${nota4}`);

media = (nota1 + nota2 + nota3 + nota4) / 4
//Prestar atenção nesse ponto!!)

if ( media >= 5 ) {
    console.log(`Aluno APROVADO! Média final: ${media.toFixed(1)}`)
} else {
    console.log(`Aluno REPROVADO! Média final: ${media.toFixed(1)}`)
}