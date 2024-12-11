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