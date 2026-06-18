//Fazer um programa que pergunte o salário de um funcionário e apresente este salário com um aumento de 15%.

//Declaração de variáveis
let salario, novoSalario;

//"Entrada" simulada
console.log("Informe o salário do funcionário: ");
salario = 2300;

novoSalario = salario + (salario * 0.15);

console.log("O salário informado foi: R$ " + salario.toFixed(2))
console.log("Com um aumento de 15%, o novo salário é de: R$ " + novoSalario.toFixed(2))
console.log(`CALCULO: ${salario.toFixed(2)} + (${salario.toFixed(2)} * 0.15) = ${novoSalario.toFixed(2)}`);