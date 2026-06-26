//Criando e Percorrendo Listas de Objetos
// Tempo estimado: 15 minutos. Realize as tarefas progressivas abaixo no seu editor:
// Crie um array com 3 produtos - Cada produto deve ter nome (string) e preco (number). Ex: Notebook, Mouse, Teclado.
// Acesse o primeiro e o último produto - Use a notação de índice para exibir o nome de cada um no
//console.
// Percorra a lista com for...of - Exiba o nome e o preço de cada produto no formato: "Produto: Notebook | Preço: R$ 3000"
// Modifique o preço do segundo produto - Altere o preço usando o índice e exiba a lista novamente para confirmar a mudança.

let produtos = [ { nome: "Notebook", preco: 4500 },
                  { nome: "Mouse", preco: 820 },
                  { nome: "Teclado", preco: 300 } ];
//Aqui produtos é um array (vetor), e cada elemento do array é um objeto. Os colchetes [] definem o array.
//Dentro dele, cada {} é um objeto com suas propriedades. Então let variável = [ {} ] significa:
//Criar uma variável que guarda um array. Esse array contém objetos. Cada objeto pode ter várias propriedades.


console.log(`Primeiro produto: ${produtos[0].nome}`);
console.log(`Último produto: ${produtos[2].nome}`);
produtos[1].preco = 900; // Modificando o preço do segundo produto (Mouse) de 820 para 900.
console.log("Lista de preços atualizada:");

for (let produto of produtos) { // Percorrendo a lista de produtos com for...of, um de uns, singular de um plural.
//Então, a cada iteração, o produto vai receber um dos objetos do array produtos.
    console.log(`Produto: ${produto.nome} | Preço: R$ ${produto.preco}`);
}