function sortear(){
//document=HTML
//getElementById=pegue o elemento pelo id
//.value=o seu valor não o seu campo inteiro
    let quantidade=parseInt(document.getElementById('quantidade').value);
    let de=parseInt(document.getElementById('de').value);
    let ate=parseInt(document.getElementById('ate').value);

    let sorteados=[];
    let numero;
    let numeroEntre= ((ate-de)+1);
    let palavraNumero= quantidade>1?'Números':'Número'
    let palavraSorteado= quantidade>1?'sorteados':'sorteado'

    if(quantidade<numeroEntre){
    //i é igual a 0, enquanto i for menor que quantidade, fça mais um i
    for(let i=0; i<quantidade;i++){
        numero= obterNumeroAleatorio(de,ate);

        while(sorteados.includes(numero)){
            numero= obterNumeroAleatorio(de,ate);
        }
        //adicione numero a lista sorteados
        sorteados.push(numero);
    }
    let resultado=document.getElementById('resultado');
    resultado.innerHTML =  `<label class="texto__paragrafo">${palavraNumero} ${palavraSorteado}: ${sorteados}  </label>`
    alterarStatusBotao();
    }
    else{ 
        resultado=document.getElementById('resultado');
        resultado.innerHTML =  `<label class="texto__paragrafo">A quantidade de numeros que vc deseja é menor </label>`
        alterarStatusBotao();

    }

}

function obterNumeroAleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
            botao.classList.remove('container__botao-desabilitado');
            botao.classList.add('container__botao');
    } else {
            botao.classList.remove('container__botao');
            botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    document.getElementById('quantidade').value= '';
    document.getElementById('de').value='';
    document.getElementById('ate').value='';
    document.getElementById('resultado').innerHTML='  <label class="texto__paragrafo">Números sorteados: nenhum até agora </label>';
    alterarStatusBotao();
}