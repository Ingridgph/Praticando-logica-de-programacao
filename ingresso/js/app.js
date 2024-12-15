
 function comprar(){
    let tipoIngresso = document.getElementById('tipo-ingresso');
    let qtd= parseInt(document.getElementById('qtd').value);
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    while(qtd<0){
        alert('Número inválido, digite um valor novamente:')
        qtd=0;
        
    }
    if(tipoIngresso.value=="inferior"){
        
        if(qtd>qtdInferior){
            alert("Quantidade requisitada é superior ao que temos diponível.")}
        else{
         qtdInferior=qtdInferior-qtd;
         document.getElementById('qtd-inferior').textContent=qtdInferior;
    }
    }
    else if(tipoIngresso.value=="pista"){
        if(qtd>qtdPista){
            alert("Quantidade requisitada é superior ao que temos diponível.")}
        else{
            qtdPista=qtdPista-qtd;
            document.getElementById('qtd-pista').textContent=qtdPista;
    }}
    else{
        if(qtd>qtdSuperior){
            alert("Quantidade requisitada é superior ao que temos diponível.")}
        else{
            qtdSuperior=qtdSuperior-qtd;
            document.getElementById('qtd-superior').textContent=qtdSuperior;
    }}
    
 }
    