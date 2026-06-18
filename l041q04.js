//4) Desenvolver um programa que pergunte um valor numérico inteiro e faça a exibição desse valor caso seja
//divisível por 4 e 5. Não sendo divisível por 4 e 5, o programa deverá exibir a mensagem “Valor não é divisível por
//4 e 5”.

let num;

console.log("Escolha um valor inteiro");
num = 87

console.log(`O valor escolhido foi: ${num}`);

if ( num % 4 === 0 && num % 5 === 0) {
    console.log(`O número escolhido foi ${num}`)
} else {
    console.log("O número não é divisível por 4 e 5.")
}

console.log("TESTE ENCERRADO");
