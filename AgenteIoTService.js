/* 
=========================================================
RELATÓRIO DE AUDITORIA DE TEMPO REAL (EVENT LOOP E IOT)
Auditora: Laís Alves De Oliveira

1. Por que um laço infinito comum (while true) congela a aba do navegador, impedindo o usuário de clicar em qualquer botão?
R: Porque o JavaScript é Single Thread (executa uma tarefa por vez). O loop infinito ocupa a Call Stack e impede que outras ações, como cliques e atualizações da tela, sejam executadas.

2. Como o 'Event Loop' e o 'setInterval' trabalham juntos para executar a nossa varredura de voos a cada 5 segundos sem travar a tela principal?
R: O setInterval utiliza as Web APIs do navegador para contar o tempo. A cada 5 segundos, ele envia a função para a fila de tarefas, e o Event Loop permite que ela seja executada quando a Call Stack estiver livre, sem travar a tela.

3. Pensando em um sistema do mundo real (IoT), qual o perigo de deixar um setInterval rodando para sempre se fecharmos o painel do aeroporto? (Dica: pesquise sobre clearInterval e Memory Leak).
R: Ele pode continuar consumindo recursos desnecessariamente, causando desperdício de memória e processamento.
=========================================================
*/
import { buscarFrota, salvarFrota } from "./StorageService.js";

export default class AgenteIoTService {
    constructor(frota, funcaoRenderizar) {
        this.frota = frota;
        this.renderizar = funcaoRenderizar;
        this.intervalo = null;
    }

    iniciarMonitoramentoCorreto() {
        console.log("Agente IoT iniciado!");

        this.intervalo = setInterval(() => {

            this.frota = buscarFrota();

            this.frota.forEach(voo => {

                if (voo.tempoParaDecolagem > 0) {
                    voo.tempoParaDecolagem -= 1;
                } else {
                    voo.status = "Decolado";
                }

            });

            salvarFrota(this.frota);

            this.renderizar();

            console.log("Painel atualizado automaticamente!");

        }, 5000);
    }

    pararMonitoramento() {
        clearInterval(this.intervalo);
    }
}