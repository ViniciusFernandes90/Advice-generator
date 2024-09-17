async function criarConcelho() {
    const url = 'https://api.adviceslip.com/advice';
    const response = await fetch(url);
    const concelhoJson = await response.json();
    return concelhoJson;
}

async function pegarConcelhoTexto() {
    const concelho = await criarConcelho();
    return concelho.slip.advice;
}

async function pegarConcelhoId() {
    const concelho = await criarConcelho();
    return concelho.slip.id;
}

let botao = document.querySelector('.botao');
let idConcelho = document.querySelector('.idConcelho');
let concelhoTexto = document.querySelector('.textoConcelho');

async function idInicial() {
    idConcelho.innerText = await pegarConcelhoId();
}

async function concelhoInicial() {
    concelhoTexto.innerText = await pegarConcelhoTexto();
}


idInicial();
concelhoInicial();


botao.addEventListener('click', async () => {
    idConcelho.innerText = await pegarConcelhoId();
    concelhoTexto.innerText = await pegarConcelhoTexto();
});
