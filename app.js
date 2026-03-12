    let botaoSortear = document.querySelector('#btn-sortear');
    let botaoReiniciar = document.querySelector('#btn-reiniciar');
    
    botaoSortear.addEventListener('click', sortear);
    botaoReiniciar.addEventListener('click', reiniciar);
  
    
    function sortear(){
    // usando o '.value' para receber o valor de um elemento da página HTML via ID:
    let quantidade = parseInt(document.querySelector('#quantidade').value);
    let min = parseInt(document.querySelector('#min').value); 
    let max = parseInt(document.querySelector('#max').value);
    let intervalo = (max - min) + 1;

    console.log(`qtd: ${quantidade} min: ${min} max: ${max}  intervalo: ${intervalo}`)
    
    // verificando se todos os campos são números válidos e se a lógica das entradas é válida:
    if (isNaN(quantidade) || isNaN(min) || isNaN(max) || min > max || quantidade > intervalo) {
        alert('Regras:\n(1) Todos os campos devem conter números inteiros\n(2) O primeiro número sempre deve ser menor que o último\n(3) A quantidade NÃO PODE ser maior que o intervalo selecionado');
        return; // Sai da função se a validação falhar
    }

    let sorteados = [];
    let numero;

    // preenchendo a lista de Números Sorteados:
    for (let i = 0; i < quantidade; i++) {
        numero = gerarNumeroAleatorio(min, max);
        
        // verificando se o número gerado já foi sorteado, caso sim, gera outro número até encontrar um que não tenha sido sorteado:
        while (sorteados.includes(numero)) {
            numero = gerarNumeroAleatorio(min, max);
        }

        sorteados.push(numero);
    }

    console.log(`Números Sorteados: ${sorteados}`);


    // usando o 'innerHTML = ' para mostrar um valor na página HTML ou manipular uma tag pelo JS:
    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados.join(', ')}</label>`

    //habilitando o botão Reiniciar
    alterarStatusBotao(botaoReiniciar, botaoSortear);
}


function gerarNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min +1 ) + min);
}


function alterarStatusBotao(botaoReiniciar, botaoSortear){
    
    //inicio do sorteio: botão reiniciar desabilitado e botão sortear habilitado
    if (botaoReiniciar.classList.contains('container__botao-desabilitado')) {
        
        botaoReiniciar.classList.replace('container__botao-desabilitado', 'container__botao');
        botaoReiniciar.disabled = false;

        botaoSortear.classList.replace('container__botao', 'container__botao-desabilitado');
        botaoSortear.disabled = true;

    } else { //caso sorteio já tenha ocorrido: botão reiniciar habilitado e botão sortear desabilitado
        
        botaoReiniciar.classList.replace('container__botao', 'container__botao-desabilitado');
        botaoReiniciar.disabled = true;
        botaoSortear.classList.replace('container__botao-desabilitado', 'container__botao');
        botaoSortear.disabled = false;
    }
}


function reiniciar(){
    let listaInputs = document.querySelectorAll('input');
    listaInputs.forEach(input => {input.value = ''});
    document.querySelector('#resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';

    //desabilitando o botão Sortear
    alterarStatusBotao(botaoReiniciar, botaoSortear);
}
