//3) Desenvolver um programa que apresente os quadrados dos números inteiros de 15 a 200.

let cont = 15; // início da contagem

//final da constagem
while ( cont <= 200) {
    
    console.log (`${cont} elevado ao quadrado é: ${cont * cont}`);
    //também podemos criar uma segunda variável como "let pot = (cont * cont)" ou "cont **2",
    // que significa elevado ao quadrado, assim como **3 (ao cubo) ou **4 (a quarta potência)
    //ou até pot = math.pow (cont, 2) ou cont ** 2

    cont = cont + 1;

}