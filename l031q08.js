//Fazer um programa que calcule e apresente a quantidade de litros que um automóvel gastará em uma viagem. O
//programa deve coletar as seguintes informações: Distância a percorrer na viagem, em quilômetros; qual é o
//valor do consumo médio do automóvel, em quilômetros por litro.

console.log("Qual a sua cidade de partida e a cidade de destino? Responda com PARTIDA X DESTINO.");

let part = "LIBERDADE";
let dest = "NILOPÓLIS"; // STRING precisa das aspas!!!

console.log (`${part} X ${dest}`);

console.log("Qual a distância, em km, entre a partida e o destino?");

let dist = 430; //distância em kms entre uma cidade e outra
let cons = 20; // consumo em km por litro

console.log("430km de distância.");

console.log("Qual o seu veículo?");

let car = "CARRO - TOYOTA COROLLA HYBRID"; // veículo e modelo

console.log(car); // 20km/l

console.log(`O seu ${car}, em uma viagem de ${dist} km gastará ${dist / cons} L.`);