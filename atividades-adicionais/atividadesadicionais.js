function atividade1(){
// Crie um programa que verifica se uma palavra ou frase é um palíndromo.
let palavraDigitada= prompt('escreva uma palavra ou frase que direi se é um palindromo:');
let palavra= palavraDigitada.replace(/[^a-zA-Z0-9]/g, "");
let palavraInversa=palavra.split('').reverse().join('').replace(/[^a-zA-Z0-9]/g, "");

if(palavra==palavraInversa){
    alert(`A palavra/frase é um palímdromo `)
}else{
alert(`A não é palavra/frase é um palímdromo `)
}

//Crie um programa com uma função que receba três números como argumentos e os retorne em ordem crescente. Exiba os números ordenados.
// Função que ordena três números em ordem crescente
function ordenarNumeros(num1, num2, num3) {
    let numeros = [num1, num2, num3];
    numeros.sort((a, b) => a - b); // Ordena os números em ordem crescente
    return numeros;
}

// Exemplo de uso
let resultado = ordenarNumeros(15, 8, 42);
console.log("Números ordenados:", resultado);
}

function atividade2(){
//Crie um formulário simples com campos de entrada e utilize JavaScript para recuperar os valores digitados nos campos usando a propriedade value. Exiba os valores no console e na tela.
 function botao(){
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let genero = document.getElementById('genero').value;
    let mensagem = document.getElementById('mensagem').value;
    alert (nome);
    alert (email);
    alert (genero);
    alert (mensagem);
}
//Tenha um elemento HTML na página (por exemplo, um parágrafo) e utilize JavaScript para modificar seu conteúdo usando a propriedade textContent.
function modificarTexto(){
    let texto = document.getElementById('meu-paragrafo');
    texto.textContent='Lindo';
}

//Faça a soma de duas variáveis numéricas e apresente no console com uma mensagem amigável em Template String.
let a =10;
let b =20;
let c=a+b;
console.log(`O número ${a}+${b}=${c}`);


//Receba, no mínimo, duas sentenças como uma string e utilize split() para quebrá-la em frases menores com base em um ponto e vírgula como delimitador.
let t = 'Eu como arroz e amo feijão.Não como chocolate';
console.log(t.split('.')[1]);
console.log(t.split('.')[0]);


//Receba uma string contendo números separados por vírgulas. Utilize split() para separar os números e exibi-los no console.
let reais = '23,50,40,10';
console.log(reais.split(',')[3]);
}

function atividade3(){
//Crie uma função que aceite uma string como parâmetro, utilize a função parseInt para converter essa string em um número inteiro e retorne o resultado.
function conversao(a){
    a = parseInt(a)
    console.log(a);
}
conversao(2);

//Escreva um programa de calculadora simples com funções separadas para adição, subtração, multiplicação e divisão.
//Utilize um bloco condicional para determinar qual função executar com base em uma variável que representa a operação desejada.
let num1= parseInt(prompt('Digite o primeiro numero:'));
let num2= parseInt(prompt('Digite o segundo numero:'));
let funcao=parseInt(prompt('Qual função você quer fazer entre as duas variáveis?\n\n' +
    '1 - Adição\n' +
    '2 - Subtração\n' +
    '3 - Divisão\n' +
    '4 - Multiplicação\n\n' +
    'Digite o número correspondente à função desejada:'));
if(funcao==1){
    let resultado=num1+num2;
    alert(`O resultado é ${resultado}`);

}
else if(funcao==2){
    let resultado=num1-num2;
    alert(`O resultado é ${resultado}`);

}
else if(funcao==3){
    let resultado=num1/num2;
    alert(`O resultado é ${resultado}`);
    
}
else if(funcao==4){
    let resultado=num1*num2;
    alert(`O resultado é ${resultado}`);
    
}
else{
    alert('digite um numero correspondente.')
}
//Implemente uma função que aceite um número como parâmetro e utilize um bloco condicional para determinar se o número é par ou ímpar.
function impapa(numero){
    resto=numero%2;
    if(resto==0){
        alert('Número é par');
    }
    else{
        alert('O número é impar');
    }
}
impapa(99);


//Crie uma função que converta a temperatura de Celsius para Fahrenheit e vice-versa. 
//Utilize uma variável para indicar a escala desejada e um bloco condicional para determinar qual conversão realizar.
function celsius(){
    let temperatura1= parseFloat(prompt('DIGITE:\n 1-Celsius para Fahrenheit\n 2-Fahrenheit para Celcius'));
    let temperatura2= parseFloat(prompt('Qual temperatura vc deseja converter?'));
        if(temperatura1==1){
            let f=temperatura2*1.8+32;
            alert(`A temperatura em ${temperatura2} em fahrenheit é ${f}`);
         }
        else if(temperatura1==2){
           let  c = 5/9 * (temperatura2 - 32);
           alert(`A temperatura em ${temperatura2} em celsius é ${c}`);
           }
        else{
         alert('Digite um número válido!')
        }
}
}

function atividade4(){
//Adicione os números 1,2,3 em uma variável chamada minhaLista e armazene os números 4, 5 e 6 separadamente em outra variável. 
//Use o método concat() para combinar as sequências de valores em uma nova lista chamadanovaLista. 
//Imprima novaLista no console.
let minhaLista = [1,2,3,4,5,6];
let suaLista = [4,5,6];
let novaLista=minhaLista.concat(suaLista);
console.log(novaLista);
//Remova o último elemento de novaLista. Imprima novaLista após a remoção.
novaLista.pop();
console.log(novaLista);
//Utilize o algoritmo de Fisher-Yates (também conhecido como Knuth Shuffle) para embaralhar os elementos em novaLista. 
//Pesquise e adapte o código para realizar o embaralhamento.
function knuthShuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Gera um índice aleatório entre 0 e i
        const j = Math.floor(Math.random() * (i + 1));
        // Troca os elementos array[i] e array[j]
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
knuthShuffle(novaLista);
console.log(novaLista);
//Crie uma função chamada removerDuplicatas que aceita um array como parâmetro e retorna um novo array sem elementos duplicados. 
//Teste a função com novaLista e imprima o array resultante.
function removerDuplicatas(arrays){
    let novoArray = [];
    for (let elemento of arrays) {
        if (!novoArray.includes(elemento)) {
            novoArray.push(elemento);
        }
    }
    return novoArray;
}
novaLista=removerDuplicatas(novaLista);
console.log(novaLista);
}
