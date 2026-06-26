//Desenvolver um programa que pergunte o sexo da pessoa e dê como resposta a seguinte orientação de acordo
//com o sexo informado: “Banheiro masculino à direita” ou “Banheiro feminino à esquerda”.

console.log("Informe o sexo da pessoa (M/F) ou se necessita de banheiro especial:");
let sexo = "Banheiro adaptado"; // Exemplo de entrada, pode ser alterado para testar outro caso.
console.log(`O sexo informado foi: ${sexo}`);

switch (sexo) {
    case "M":
        console.log("Banheiro masculino à direita");
        break;
    case "F":
        console.log("Banheiro feminino à esquerda");
        break;
    default:
        console.log("O banheiro acessível está localizado no centro do prédio.");
}