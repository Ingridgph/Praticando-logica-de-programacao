let amigos = [];

function adicionar(){
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');
    if(amigo.value==''){
        alert('Digite um nome');
        return}
    if(amigos.includes(amigo.value)){
       alert(`O amigo ${amigo.value} já foi inserido`);
       return}
       amigos.push(amigo.value);
    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    amigo.value="";
}

function sortear(){
    if(amigos.length<4){
        alert('É necessário mais de 3 amigos para fazer o sorteio');
        return
    }
    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[0] + '<br/>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[i + 1] + '<br/>';
        }
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}
function reiniciar(){
    let amigo = document.getElementById('nome-amigo');
    let sorteio = document.getElementById('lista-sorteio');
    let lista = document.getElementById('lista-amigos');
    lista.textContent="";
    sorteio.innerHTML="";
    amigo.value="";
}