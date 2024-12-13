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

function atividade2(){}
/*Crie um formulário simples com campos de entrada e utilize JavaScript para recuperar os valores digitados nos campos usando a propriedade value. Exiba os valores no console e na tela.

Tenha um elemento HTML na página (por exemplo, um parágrafo) e utilize JavaScript para modificar seu conteúdo usando a propriedade textContent.

Faça a soma de duas variáveis numéricas e apresente no console com uma mensagem amigável em Template String.

Receba, no mínimo, duas sentenças como uma string e utilize split() para quebrá-la em frases menores com base em um ponto e vírgula como delimitador.

Receba uma string contendo números separados por vírgulas. Utilize split() para separar os números e exibi-los no console.*/
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