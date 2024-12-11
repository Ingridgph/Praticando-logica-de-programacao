let numeroAlugados=1;
function exibirJogosAlugados(){
    alert(`A quantidade de jogos alugados é de ${numeroAlugados}`)
}

function alterarStatus(id){
    let gameClicado =document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img ');
    let botao= gameClicado.querySelector('.dashboard__item__button');
    
    
    
    if (botao.classList.contains('dashboard__item__button--return')) {
        //ESSE CONFIRM É UM ALERT  DE CONFIRMAÇÃO
        if (confirm(`Você tem certeza que deseja devolver o jogo?`)) {
         botao.classList.remove('dashboard__item__button--return');
         imagem.classList.remove('dashboard__item__img--rented');
         botao.innerHTML='Alugar';
         numeroAlugados--;
    } } else {
         botao.classList.add('dashboard__item__button--return');
         imagem.classList.add('dashboard__item__img--rented');
         botao.innerHTML = 'Devolver';
         numeroAlugados++;
         
        }
        exibirJogosAlugados();
}
