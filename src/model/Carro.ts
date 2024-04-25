// 6. Implemente uma classe chamada Carro com as seguintes
// propriedades:
// a. Um veículo tem um certo consumo de combustível (medidos
// em km / litro) e uma certa quantidade de combustível no
// tanque.
// b. O consumo é especificado no construtor e o nível de
// combustível inicial é 0.
// c. Forneça um método andar() que simula o ato de dirigir o
// veículo por uma certa distância, reduzindo o nível de
// combustível no tanque de gasolina.
// d. Forneça um método obterGasolina(), que retorna o nível atual
// de combustível e forneça um método adicionarGasolina(),
// para abastecer o tanque.
// Exemplo:
// meuFusca = new Carro(15)
// meuFusca.adicionarGasolina(20)
// meuFusca.andar(100)
// meuFusca.obterGasolina()

class Carro {
  quantidadeCombustivelCarro: number;
  consumoCombustivelCarro: number;
  constructor(quantidadeCombustivelCarro: number, consumoCombustivelCarro = 0) {
    this.quantidadeCombustivelCarro = quantidadeCombustivelCarro;
    this.consumoCombustivelCarro = consumoCombustivelCarro;
  }
  andar(distancia: number) {
    if (this.quantidadeCombustivelCarro < distancia / this.consumoCombustivelCarro) {
      return console.log(`Não há combustivel suficente para esta distancia.`);
    }
    this.quantidadeCombustivelCarro -= distancia / this.consumoCombustivelCarro;
  }
  obterGasolina() {
    console.log(this.quantidadeCombustivelCarro);
  }
  adicionarGasolina(quantidadeGasolinaAbastecer: number) {
    this.quantidadeCombustivelCarro += quantidadeGasolinaAbastecer;
    console.log(`Nova quantidade de combustivel do carro ${this.quantidadeCombustivelCarro}`);
  }
}

export default Carro;
