// Buscando as IDs do documento
const subtitulo = document.querySelector('p#subtitulo');
const imagemDeFundo = document.querySelector('#imagem');

const data = new Date()
const hora = (data.getHours())
const minuto = (data.getMinutes())

if (hora < 5) {
    subtitulo.innerHTML = (`Agora é ${hora}:${minuto} da madrugada.`)
    imagemDeFundo.src = '../src/imagens/madrugada.jpg'
    document.body.style.backgroundColor = "#8d9ef1"
} else if (hora < 12) {
    subtitulo.innerHTML = (`Agora é ${hora}:${minuto} da manhã.`)
    imagemDeFundo.src = '../src/imagens/manha.jpg'
    document.body.style.backgroundColor = "#fbd7a8"
} else if (hora < 18) {
    subtitulo.innerHTML = (`Agora é ${hora}:${minuto} da tarde.`)
    imagemDeFundo.src = '../src/imagens/tarde.jpg'
    document.body.style.backgroundColor = "#dc9821"
} else if (hora < 24) {
    subtitulo.innerHTML = (`Agora é ${hora}:${minuto} da noite.`)
    imagemDeFundo.src = '../src/imagens/noite.jpg'
    document.body.style.backgroundColor = "#13345e"
}