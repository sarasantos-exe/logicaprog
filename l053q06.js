//6) Desenvolver um programa que apresente o valor de uma potência de uma base qualquer elevada a um expoente
//qualquer, ou seja, de be, onde os valores de b e e são fornecidos pelo usuário, sem utilizar Math.pow().

//acum = expoente
//acum = acum * base
//b = base
//e = expoente
//for de 1 a variável

let base;
let exp;
let acum = 1;

console.log("Informe a base da potência");
base = 8
console.log("Informe o expoente da potência");
exp = 5;
console.log(`VALORES INSERIDOS: base - ${base}; expoente - ${exp}`);

for (let i = 1; i <= exp; i++) {
//não exibir o console.log( cont ), se não for a intenção de testar ou exibir a contagem
acum = acum * base
}

console.log(`${base} elevado a ${exp} = ${acum}`);
