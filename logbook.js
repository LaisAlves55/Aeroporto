// SISTEMA DE LOGBOOK (PERSISTÊNCIA) 
/* 
=========================================================
RELATÓRIO DE AUDITORIA (SERIALIZAÇÃO E RE-HIDRATAÇÃO)
Auditora: Laís Alves de Oliveira  

1. Por que o formato JSON (JSON.stringify) não consegue salvar "métodos" (funções) de uma classe, salvando apenas os "atributos" (dados textuais)?
R:O JSON armazena apenas os dados e propriedades do objeto. Funções e métodos não são armazenados nesse formato, pois JSON é um formato de representação de dados, não de código.

2. O que o JavaScript perde na memória quando converte um Objeto para JSON? (Explique o que é o Prototype).
R:Ele perde sua ligação com o Prototype da classe Voo. O Prototype é uma estrutura do JavaScript que permite que objetos tenham acesso a métodos e propriedades definidos em sua classe ou cadeia de protótipos.

3. Defina o que é "Re-hidratar um Objeto". Como nós consertamos o código do Júnior aplicando essa técnica?
R: Re-hidratar um objeto é pegar os dados simples recuperados de uma fonte, como JSON, e usar para recriar um objeto completo da sua classe original. O new Voo(...) utilizado cria uma nova instância da classe Voo, fazendo com que ela volte a ter acesso ao protótipo e ao método decolar() resolvendo o erro.
=========================================================
*/

class Voo {
    constructor(codigo, origem) {
        this.codigo = codigo;
        this.origem = origem;
        this.status = "No Solo";
    }

    decolar() {
        this.status = "Em Voo";
        console.log(`🛫 O voo ${this.codigo} acabou de decolar de ${this.origem}!`);
    }
}

console.log("=== SALVANDO O VOO NO DISCO ===");
let vooOriginal = new Voo("G3-777", "Curitiba");
console.log("Teste antes de salvar:");
vooOriginal.decolar(); 
localStorage.setItem("meuLogbook", JSON.stringify(vooOriginal));
console.log("Voo salvo com sucesso no LocalStorage!");


console.log("\n=== LENDO O VOO NO DIA SEGUINTE ===");
let dadosDoDisco = localStorage.getItem("meuLogbook");
let vooRecuperado = JSON.parse(dadosDoDisco);

console.log("Dados recuperados do disco:", vooRecuperado);
console.log("Código recuperado:", vooRecuperado.codigo); 

console.log("Tentando decolar o voo recuperado...");
let vooHidratado = new Voo(
    vooRecuperado.codigo,
    vooRecuperado.origem
);

vooHidratado.status = vooRecuperado.status;

vooHidratado.decolar();