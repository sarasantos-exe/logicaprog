class Carro {
    // Construtor: inicializa os atributos
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    // Método: mostra os detalhes do carro
    exibirDetalhes() {
        console.log("DETALHES DO CARRO");
        
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Ano: ${this.ano}`);
    }
} // fim da classe

// Criando objetos fora da classe
let carro1 = new Carro("Fiat", "Argo", 2026);
let carro2 = new Carro("Volkswagen", "Polo", 2025);
let carro3 = new Carro("Toyota", "Corolla", 2024);

// Chamando o método para cada objeto
carro1.exibirDetalhes();
carro2.exibirDetalhes();
carro3.exibirDetalhes();