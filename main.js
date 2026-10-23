/* 
=========================================================
RELATÓRIO DE AUDITORIA DE CLEAN CODE E SOLID
Auditores: Laís Alves de Oliveira

1. O que significa a sigla SRP (Single Responsibility Principle) e por que aplicamos ela hoje?
R: SRP significa Princípio da Responsabilidade Única. Foi utilizado para organizar o códigos, separando as funções de cada parte do código em arquivos diferentes.

2. Se amanhã o Diretor do Aeroporto pedir para trocar a interface de "Cards" por uma "Tabela de Excel" no HTML, qual NOME DE ARQUIVO exato precisaremos alterar? Por que essa separação evita que a gente estrague o Banco de Dados sem querer?
R: Alterar o PainelView.js, que é responsável pela interface e pela exibição dos voos. Essa separação facilita porque podemos mudar os cards para uma tabela sem alterar o StorageService.js, que cuida do armazenamento dos dados, a forma como os dados são salvos continua igual.

3. Para o código funcionar separado em 4 arquivos, tivemos que usar 'export' e 'import'. O que isso tem a ver com a "Modularização (ES6 Modules)"?
R: A modularização (ES6 Modules) permite dividir o código em arquivos separados e usar export e import para compartilhar classes e funções entre eles. Importar ferramentas facilita a organização, a reutilização do código e a manutenção do sistema, por utilizar classes e funções de outros arquivos.
=========================================================
*/

import Voo from "./Voo.js";

import { salvarVooNoDisco } from "./StorageService.js";

import { renderizarTela } from "./PainelView.js";

document.getElementById("btnCadastrar").addEventListener("click", () => {
    let codigo = document.getElementById("inputCod").value;
    let destino = document.getElementById("inputDest").value;

    let novoVoo = new Voo(codigo, destino);

    salvarVooNoDisco(novoVoo);

    renderizarTela();
});

renderizarTela();
