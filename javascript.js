const carrossel = document.querySelector('.carrossel');
const itens = document.querySelectorAll('.carrossel-item');
const btnAnterior = document.querySelector('.anterior');
const btnProximo = document.querySelector('.proximo');

let indiceAtual = 0;
let largura;
let intervalo; // Variável para o intervalo automático

// Atualiza a posição do carrossel
function atualizarCarrossel() {
    largura = carrossel.clientWidth;
    carrossel.style.transform = `translateX(-${indiceAtual * largura}px)`;
}

// Movimenta para o item anterior
function handleAnteriorClick() {
    indiceAtual = (indiceAtual + itens.length - 1) % itens.length;
    atualizarCarrossel();
    reiniciarIntervalo(); // Reinicia o intervalo automático ao clicar
}

// Movimenta para o próximo item
function handleProximoClick() {
    indiceAtual = (indiceAtual + 1) % itens.length;
    atualizarCarrossel();
    reiniciarIntervalo(); // Reinicia o intervalo automático ao clicar
}

// Inicia o carrossel automático
function iniciarRotacaoAutomatica() {
    intervalo = setInterval(() => {
        handleProximoClick();
    }, 3000); // Altere o valor 3000 para ajustar o intervalo (em milissegundos)
}

// Reinicia o intervalo automático
function reiniciarIntervalo() {
    if (intervalo) clearInterval(intervalo); // Verifica se o intervalo já está definido
    iniciarRotacaoAutomatica();
}

// Inicializa o carrossel
function init() {
    btnAnterior.addEventListener('click', handleAnteriorClick);
    btnProximo.addEventListener('click', handleProximoClick);

    // Acessibilidade: adicionando ARIA aos botões
    btnAnterior.setAttribute('aria-label', 'Ir para o item anterior');
    btnProximo.setAttribute('aria-label', 'Ir para o próximo item');

    window.addEventListener('resize', atualizarCarrossel);

    atualizarCarrossel();
    iniciarRotacaoAutomatica(); // Ativa a rotação automática
}

init();
