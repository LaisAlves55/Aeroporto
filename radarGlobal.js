/* 
=========================================================
DOCUMENTAÇÃO DE DEPLOY E ARQUITETURA - AV1
Auditores: [Nome do Aluno A] e [Nome do Aluno B]

1. Como você usou o Polimorfismo na função iniciarRadar() para exibir informações diferentes sem precisar usar um monte de IFs na hora de escrever no HTML?
R: O sistema chama o mesmo método e cada tipo de voo apresenta seu relatório de uma forma diferente, sem precisar usar if ou switch na hora de mostrar os dados porque cada classe tem sua própria versão do método gerarRelatorio(). O JavaScript olha qual é o tipo real do objeto e executa automaticamente o método daquela classe.

2. O que a IA explicou sobre o perigo de expor API Keys no código Front-end? O que são Variáveis de Ambiente?
R: Uma API Key não deve ficar no código do front-end, porque qualquer pessoa pode acessá-la pelo navegador e roubá-la. Variáveis de ambiente são espaços seguros usados para guardar informações importantes do sistema, como chaves e senhas. No Vercel e Netlify, essas chaves ficam protegidas no servidor, enquanto o front-end apenas faz a requisição ao backend, que utiliza a chave de forma segura.
=========================================================
*/

// SISTEMA RADAR GLOBAL (AV1) - CÓDIGO DO DEV JÚNIOR
//CLASSES
class Voo {
    constructor(codigo) { 
        this.codigo = codigo; 
    }

    gerarRelatorio() { 
        return `⚠️ Voo genérico [${this.codigo}]`; 
    }
}

class VooComercial extends Voo {
    constructor(codigo, passageiros) {
        super(codigo);
        this.passageiros = passageiros;
    }

    gerarRelatorio() { 
        return `✈️ Comercial [${this.codigo}] - ${this.passageiros} vidas a bordo.`; 
    }
}

class VooCarga extends Voo {
    constructor(codigo, cargaToneladas) {
        super(codigo);
        this.cargaToneladas = cargaToneladas;
    }

    gerarRelatorio() { 
        return `📦 Cargueiro [${this.codigo}] - ${this.cargaToneladas}T de carga.`; 
    }
}
// SIMULAÇÃO DE DADOS DA INTERNET
const dadosDaAPI = [
    { id: "G3-100", tipo: "comercial", qtd: 150 },
    { id: "AZ-999", tipo: "carga", qtd: 80 },
    { id: "LA-200", tipo: "comercial", qtd: 200 }
];

async function iniciarRadar() {
    console.log("Conectando ao satélite global de forma segura...");

    let painel = document.getElementById("telaPainel");

    if (!painel) {
        console.error("Elemento #telaPainel não encontrado no HTML!");
        return;
    }

    painel.innerHTML = "";

    let voosProcessados = dadosDaAPI.map(dado => {
        switch (dado.tipo) {
            case "comercial":
                return new VooComercial(dado.id, dado.qtd);

            case "carga":
                return new VooCarga(dado.id, dado.qtd);

            default:
                console.warn(`Tipo desconhecido: ${dado.tipo}. Usando classe base.`);
                return new Voo(dado.id);
        }
    });

    voosProcessados.forEach(voo => {
        let div = document.createElement("div");
        div.className = "card-voo";
        div.innerHTML = `<h3>${voo.gerarRelatorio()}</h3>`;
        painel.appendChild(div);
    });
}

iniciarRadar();
