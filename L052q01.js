//Desenvolver um programa que apresente todos os valores numéricos inteiros pares situados na faixa de 100 a
//200.

let cont = 100;
do {
    //while no fim, depois das chaves, mas ainda inserimos o contador dentro do bloco de código
    //como dizendo "faça isso enquanto esse teste for verdadeiro"

    if (cont % 2 === 0){
        // se o resto da divisão do contador por 2 for igual a zero, então é par
    console.log ( cont );}

    cont = cont + 1; // ou +2 pra resolver o pedido do enunciado de números pares, de maneira mais rápida.
    // // não adicionar no bloco do if

} while ( cont <= 200 );