import { conectaApi } from "./conecao.js";

const listaUl = document.querySelector('[data-lista]')

function constroiCard(titulo, descricao, url, imagem) {

    const video = document.createElement('li');
    video.classList = 'videos__item';
    video.innerHTML = `  <iframe width="100%" height="72%" src="${url}"
    title="${titulo}"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
<div class="descricao-video">
    <img src="${imagem}">
    <h3>${titulo}</h3>
    <p>${descricao}</p>
</div>`

    return video
}

async function listaVideos() {
//FUNÇÃO Q VAI CONSUMIR OS ELEMNTOS DO CONECTAAPI
    const listaApi = await conectaApi.listaVideos();
    listaApi.forEach(element => listaUl.appendChild(
        constroiCard(element.titulo, element.descricao, element.url, element.imagem
        ))
        // no forEach para cada item da listaApi vai ser add um elemento
    );
}

listaVideos();