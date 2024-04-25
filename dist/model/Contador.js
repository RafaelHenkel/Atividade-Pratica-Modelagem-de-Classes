"use strict";
// 1. Crie uma classe Contador, que encapsule um valor usado para
// contagem de itens ou eventos. A classe deve oferecer métodos que
// devem:
// a) Zerar;
// b) Incrementar;
// c) Retornar o valor do contador.
Object.defineProperty(exports, "__esModule", { value: true });
class Contador {
    constructor(contador) {
        this.contador = contador;
    }
    zerar() {
        this.contador = 0;
        console.log(this.contador);
    }
    incrimentar() {
        this.contador++;
        console.log(this.contador);
    }
    retornar() {
        console.log(this.contador);
    }
}
exports.default = Contador;
