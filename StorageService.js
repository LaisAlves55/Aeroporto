export function salvarVooNoDisco(voo) {
    let frota = JSON.parse(localStorage.getItem("frota")) || [];

    frota.push(voo);

    localStorage.setItem("frota", JSON.stringify(frota));

    console.log("Voo salvo no armazenamento local.");
}

export function salvarFrota(frota) {
    localStorage.setItem("frota", JSON.stringify(frota));
}

export function buscarFrota() {
    return JSON.parse(localStorage.getItem("frota")) || [];
}