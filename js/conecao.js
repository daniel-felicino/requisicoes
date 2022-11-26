async function listaVideos() {

    const conexao = await fetch('http://localhost:3000/videos');
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida

}
async function criarVideos(titulo, descricao, url, imagem) {

    const conexao = await fetch('http://localhost:3000/videos', {
        // Requisições do tipo POST são usadas para enviar dados para a API.
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
            //aqui especifica o tipo de aplicação q vai ser enviada
        },
        body: JSON.stringify({

            titulo: titulo,
            descricao: `${descricao} mil vizualizações`,
            url: url,
            imagem: imagem,
        })
    });
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida
}
export const conectaApi = {
    listaVideos, criarVideos
}

