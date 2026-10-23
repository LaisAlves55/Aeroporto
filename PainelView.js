
import { buscarFrota } from "./StorageService.js";

export function renderizarTela() {
    let tela = document.getElementById("telaPainel");
    let frota = buscarFrota();

    tela.innerHTML = "";

    frota.forEach(voo => {
        tela.innerHTML += `
            <div class="card">
                 ${voo.codigo} - ${voo.destino}
            </div>
        `;
    });
}
