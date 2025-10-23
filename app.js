function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    
    if (quantidade > (ate - de + 1)) {
    alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número"');
    return;
  } else if (isNaN(quantidade)) {
    alert('Necessario ter Quantidade de números');
        return;
  }else if (isNaN(de)) {
    alert('Necessario ter Do número');
    return;
  } else if (isNaN(ate)) {
    alert('Necessario ter Até o número');
    return;
  }

    let sorteados = [];
    let numero;

    for (let i = 0; i <  quantidade; i++) {
        numero = obterNumAleatorio(de, ate);

    while (sorteados.includes(numero)){
        numero = obterNumAleatorio(de, ate);
    }

        sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    alterarStatusBotao();

}

function obterNumAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

// botao reiniciar
function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    
    if (botao.classList.contains('container__botao-desabilitado')) {
        // habilita o botão
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
        botao.disabled = false; // <-- habilita de verdade
    } else {
        // desabilita o botão
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
        botao.disabled = true; // <-- desabilita de verdade
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}