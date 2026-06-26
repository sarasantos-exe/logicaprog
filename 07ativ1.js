//Criando seu Primeiro Objeto
//Tempo estimado: 10 minutos. Abra seu editor de código e realize as tarefas abaixo.
//1 Crie um objeto aluno - Com as propriedades: nome (string), idade (number) e matriculado (boolean). Use seus próprios dados!
//2 Acesse e exiba cada propriedade - Use console.log para exibir cada valor separadamente usando a notação de ponto.
//3 Modifique uma propriedade - Altere o valor de idade para um número diferente e exiba o novo valor no console.

let aluno = {
    nome: "Sara",
    idade: 21, // altera a idade de 21 pra 12 e de 12 para 21.
    matriculado: true
};
//Aqui aluno é uma variável objeto. {} define um objeto. Dentro dele ficam pares chave: valor.

console.log(`Nome: ${aluno.nome}`);
console.log(`Idade: ${aluno.idade}`);
//console.log(`Matriculado: ${aluno.matriculado}`); exibe o true

if (aluno.matriculado) {
    console.log("O aluno está matriculado.");
} else {
    console.log("O aluno não está matriculado.");
}