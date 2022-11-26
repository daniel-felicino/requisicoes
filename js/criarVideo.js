
import { conectaApi } from "./conecao.js";
const formulario = document.querySelector('[data-formulario]');

async function criarVideos(e) {
    e.preventDefault();
    const titulo = document.querySelector('[data-titulo]').value;
    const url = document.querySelector('[data-url]').value;
    const imagem = document.querySelector('[data-imagem]').value;
    const discricao = Math.floor(Math.random() * 10).toString();

await conectaApi.criarVideos(titulo,discricao,url,imagem);

window.location.href = '../pages/envio-concluido.html';
}

formulario.addEventListener('submit', e => criarVideos(e))

// Math.random()
// A função Math.random() é usada para retornar um número pseudoaleatório 
// de ponto flutuante entre 0 e 1. Para conseguirmos um número maior, precisamos 
// multiplicar esse retorno pelo intervalo desejado. No nosso caso, gostaríamos de 
// receber um valor aleatório entre 1 e 10, então definimos como: Math.random() * 10.

// O retorno desse trecho de código traria um número real gigantesco, como 5.252057315392287 e 
// 7.8684543703382076.

// Math.floor() OU parseInt()
// Para transformar o resultado da função anterior em um número inteiro 
// usamos a função Math.floor(). Ela é usada para arredondar o número passado
//  como parâmetro para seu inteiro mais próximo, levando como base o valor menor.