//1) Crie 2 vetores chamados nome e profissao, cada um com 5 elementos. Pergunte ao usuário o nome e a profissão
//de 5 pessoas e preencha estes vetores. Ao final exiba um relatório apontando o nome e a profissão de cada uma
//das 5 pessoas cadastradas.

let nome = ["Alice", "Bob", "Charlie", "Diana", "Ethan"];
let profissao = ["Engenheira", "Médico", "Professor", "Advogada", "Designer"];

console.log("Relatório de Pessoas Cadastradas:");
for (let i = 0; i < nome.length; i++) {
    console.log(`Nome: ${nome[i]} - Profissão: ${profissao[i]}`);
}
