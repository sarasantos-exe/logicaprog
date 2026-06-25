//MATERIAL 08 (Modularização e Funções) - Página 06

//varíavel GLOBAL
let num;

function somar (a,b) {
    //resultado -> variável LOCAL
    let resultado = a + b;
    return resultado;    
}

//exibindo imediatamente o valor retornado pela função somar
console.log(somar(5, 3));

//guardando o valor retornado pela função somar em uma variável
num = somar(5, 3);
console.log(num);

somar(4,5); // o retorno da função se perde.

function direcionador (){
    console.log("Siga em frente! Estude sempre!");
}
//chamando a função direcionador ()
direcionador();
direcionador();

let texto = direcionador(); // o retorno da função se perde, pois direcionador() não retorna nada.
console.log(texto); //undefined, variável não recebe o retorno da função

function mensagem() {
    return "Ame mais, brigue menos!";
}

//chamando a função mensagem()
mensagem(); // o retorno da função se perde, pois não foi guardado em uma variável.
console.log(mensagem());

function tudao() {
    console.log("Início da função tudao()");
    direcionador(); // chamando a função direcionador
    let calc = somar (2,3);
    console.log("Resultado da soma: " + calc);
    let msg = mensagem(); // chamando a função mensagem
    direcionador();
    console.log(`Mensagem do dia: ${msg}`);
    console.log("Fim da função tudao()");
}

tudao(); // chamando a função tudao()

let i; // global

for (let i = 0; i < 10; i++) {
    console.log(i);
}