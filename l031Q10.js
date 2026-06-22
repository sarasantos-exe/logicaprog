//10) Fazer um algoritmo que efetue o cálculo do valor de uma prestação em atraso, utilizando a fórmula
// prestação = valor + (valor x (taxa : 100) x tempo em dias).

let vprest, tdias, taxa, tprest; // valorprestação, tempoemdias, taxa, totalprestação;

console.log("Informe o valor da típico da prestação.");
vprest = 550;
console.log("Prestação típica informada:" + vprest);

console.log("Informe a quantidade de dias em atraso.");
tdias = 22;
console.log("Dias em atraso informados:" + tdias);

console.log("Informe a taxa de juros.");
taxa = 5;
console.log(`A taxa de juros informada é de ${taxa}%.`);

tprest = vprest + (vprest * (taxa / 100) * tdias);

console.log(`O valor da prestação em atraso é de R$ ${tprest.toFixed(2)}`);