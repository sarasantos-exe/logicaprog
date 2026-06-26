//Lista de Compras: Você tem uma lista com os ingredientes para um bolo, incluindo o nome e a medida de cada um.
// Escreva um programa que percorra essa lista e exiba na tela o nome e a medida de cada ingrediente, um por um.

let ingredientes = [
    {nome: "Farinha de trigo", medida: "2 xícaras"},
    {nome: "Açúcar", medida: "1 xícara"},
    {nome: "Ovos", medida: "3 unidades"},
    {nome: "Leite", medida: "1 xícara"},
    {nome: "Manteiga", medida: "100g"},
    {nome: "Fermento em pó", medida: "1 colher de sopa"}
];

for (let ingrediente of ingredientes) {
    console.log(`Ingrediente: ${ingrediente.nome} | Medida: ${ingrediente.medida}`);
}
console.log("TEMPO NO FORNO: 2h em 160°.")
console.log("DESCANSO NA GELADEIRA (depois de frio): 6h.");