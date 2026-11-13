export default class Voo {
    constructor(codigo, destino) {
        this.codigo = codigo;
        this.destino = destino;
        this.tempoParaDecolagem = 10;
        this.status = "Aguardando decolagem";
    }
}