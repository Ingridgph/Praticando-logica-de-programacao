function adicionar(){
    
    //recuperar produtos/quantidade/preço
    let produto = document.getElementById('produto').value;
    //split é o separador sendo o - e o R$ o separando
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = parseFloat(produto.split('R$')[1]);
    let quantidade=document.getElementById('quantidade').value;
    let preco=parseFloat(valorUnitario*quantidade);
    let valorTotal = 0;
    if(quantidade>0){
    valorTotal +=preco;
    //pegue o elemento pelo id
    let listaProdutos=document.getElementById('lista-produtos');
    //cria uma string da section
    let novoItem=`
    <section class="carrinho__produtos__produto">
      <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
    </section>`;
    //na variavel lista produto dentro do html e some com o novo intem
    listaProdutos.innerHTML += novoItem;

    //pegue o elemento pelo id
    let valorTotalTexto=document.getElementById('valor-total');
    valorTotalTexto.innerHTML=`R$${valorTotal}`;}
    else{
        alert('A quantidade não pode ser igual ou menor que 0');
    }
}

function limpar(){
    let quantidade=document.getElementById('quantidade');
    quantidade.value=0;
    let listaProdutos=document.getElementById('lista-produtos');
    
    listaProdutos.innerHTML ='';
    let valorTotal = 0;
    let valorTotalTexto=document.getElementById('valor-total');
    valorTotalTexto.innerHTML=`R$${valorTotal}`;
    
}