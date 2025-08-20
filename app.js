function sortear(){
    // usando o '.value' para receber o valor de um elemento da página HTML via ID:
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let min = parseInt(document.getElementById('min').value); 
    let max = parseInt(document.getElementById('max').value);
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

        while (sorteados.includes(numero)) {
            numero = gerarNumeroAleatorio(min, max);
        }

        sorteados.push(numero);
    }

    console.log(`Números Sorteados: ${sorteados}`);


    // usando o 'innerHTML = ' para enviar um valor para a página HTML ou manipular uma tag pelo JS:
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: (${sorteados})</label>`

    //habilitando o botão Reiniciar
    alterarStatusBotao();
}


function gerarNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min +1 ) + min) ;
}


function alterarStatusBotao(){
    let botaoReiniciar = document.getElementById('btn-reiniciar');
    let botaoSortear = document.getElementById('btn-sortear');

    botaoReiniciar.classList.toggle('container__botao-desabilitado');
    botaoReiniciar.classList.toggle('container__botao');

    botaoSortear.classList.toggle('container__botao-desabilitado');
    botaoSortear.classList.toggle('container__botao');
}


function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('min').value = '';
    document.getElementById('max').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';

    //desabilitando o botão Sortear
    alterarStatusBotao();
}