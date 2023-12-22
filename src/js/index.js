// Buscando as IDs do documento
const subtitulo = document.querySelector('p#subtitulo');
const fundoDoDia = document.querySelector('div#img-container');

const data = new Date()
const hora = (data.getHours())
const minuto = (data.getMinutes())

if (hora < 5) {
    subtitulo.innerHTML = (`Agora é ${hora}:${minuto} da madrugada.`)
    fundoDoDia.classList.add('img-container-madrugada')
    document.body.style.backgroundColor = "#8d9ef1"
} else if (hora < 12) {
    subtitulo.innerHTML = (`Agora é ${hora}:${minuto} da manhã.`)
    fundoDoDia.classList.add('img-container-manha')
    document.body.style.backgroundColor = "#fbd7a8"
} else if (hora < 18) {
    subtitulo.innerHTML = (`Agora é ${hora}:${minuto} da tarde.`)
    fundoDoDia.classList.add('img-container-tarde')
    document.body.style.backgroundColor = "#dc9821"
} else if (hora < 24) {
    subtitulo.innerHTML = (`Agora é ${hora}:${minuto} da noite.`)
    fundoDoDia.classList.add('img-container-noite')
    document.body.style.backgroundColor = "#13345e"
}