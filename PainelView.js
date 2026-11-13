import { buscarFrota } from "./StorageService.js";

export function renderizarTela() {
    let tela = document.getElementById("telaPainel");
    let frota = buscarFrota();

    tela.innerHTML = "";

    frota.forEach(voo => {
        tela.innerHTML += `
            <div class="card">
                <h3>${voo.codigo} - ${voo.destino}</h3>
                <p>Tempo para decolagem: ${voo.tempoParaDecolagem}</p>
                <p>Status: ${voo.status}</p>
            </div>
        `;
    });
}