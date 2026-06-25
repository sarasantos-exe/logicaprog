//Criando uma função simples - Escreva uma função chamada exibirSaudacao que não receba
//parâmetros e que, ao ser executada, exiba no console a mensagem: "Olá, mundo! Estamos aprendendo
//funções.". Em seguida, escreva a linha de código necessária para chamar essa função

function apresentar(): void {
    console.log("Olá, mundo! Estamos aprendendo funções.");
}

apresentar(); // chamando a função apresentar()


//Crie uma função chamada exibirData que exiba a data atual no console usando new Date().toLocaleDateString(). Chame-a 3 vezes.

function exibirData(): void {
    console.log(new Date().toLocaleDateString());
}
exibirData(); // chamando a função exibirData()
exibirData(); // chamando a função exibirData() novamente para exibir a data atualizada
exibirData(); 