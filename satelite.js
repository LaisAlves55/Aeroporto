/* 
=========================================================
RELATÓRIO DE NIVELAMENTO FINAL - ASSINCRONISMO E FETCH API
Engenheira de Software: Laís Alves De Oliveira

1. O que é uma "Promise" (Promessa) no JavaScript? Quando usamos o 'fetch', o que o navegador nos devolve imediatamente enquanto a resposta não chega?
R:  Uma Promise é um objeto que representa um resultado que será recebido no futuro, podendo dar certo ou dar erro. O fetch() devolve imediatamente uma Promise pendente, enquanto espera a resposta da internet.

2. O que a palavra 'await' faz com a linha de código? Por que ela evitou o erro que estava acontecendo antes?
R: O await faz a função esperar a Promise ser concluída antes de continuar. Ele evita o erro porque garante que os dados foram recebidos antes de tentar acessá-los.

3. É possível usar a palavra 'await' dentro de uma função comum? O que precisamos colocar no início da função para ela aceitar o await?
R: Não, para usar await normalmente é preciso colocar async antes da função.
=========================================================
*/

// A URL do Satélite apontada para Assis Chateaubriand/PR
const urlSatelite = "https://api.open-meteo.com/v1/forecast?latitude=-24.41&longitude=-53.52&current_weather=true";

// DESAFIO 1: [AVISAR O JS QUE A FUNÇÃO É ASSÍNCRONA]
async function buscarClima() {
    
    console.log("1. Mandando o pedido para o espaço...");
    
    // [DESAFIO 2: MANDAR O JS ESPERAR (AWAIT) A RESPOSTA CHEGAR]
    let resposta = await fetch(urlSatelite); 
    
    // [DESAFIO 3: MANDAR O JS ESPERAR A CONVERSÃO DOS DADOS PARA JSON]
    let dados = await resposta.json(); 
    
    // Extraindo a temperatura dos dados
    let temperatura = dados.current_weather.temperature;
    
    // Mostrando na tela
    let tela = document.getElementById("telaClima");
    tela.innerHTML = `Temperatura em Assis Chateaubriand:<br> <span class="temp">${temperatura}°C</span>`;
    
    console.log("2. Dados recebidos com sucesso!");
}

// Conectando o botão à função
document.getElementById("btnClima").addEventListener("click", buscarClima);