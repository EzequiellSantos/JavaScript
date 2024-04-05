function adequarImagens(tema) {// adequa as imagens ao tema

    toBack.src = `Imagens/icons-Direct/toHome-${tema}-96.png`

}

var itensLi = document.querySelectorAll('#menuLeituras li')
var background = document.getElementById('background')
var itemVar = ''

itensLi.forEach((item) => {

    document.addEventListener('DOMContentLoaded', () => {
        menuBackgroundInitial(liFirstReading)
    })

    item.addEventListener('click', () => {

        itemVar = item
        menuBackground(item)

    })

})

function menuBackground(item) {

    let initiaLeft = background.offsetLeft

    background.style.left = initiaLeft < item.offsetLeft ? item.offsetLeft + 10 + 'px' : item.offsetLeft - 10 + 'px'
    background.style.width = item.offsetWidth * 1.08 + 'px'
    setTimeout(menuBackgroundDelay, 450)

}

function menuBackgroundDelay() {

    background.style.left = itemVar.offsetLeft * 0.99 + 'px'

}

function menuBackgroundInitial(liFirstReading) {

    background.style.width = liFirstReading.offsetWidth + 'px'
    background.style.left = liFirstReading.offsetLeft + 'px'

}

const url = 'https://intermediary-api.vercel.app/api'

fetch(url)
    .then(response => response.json())
    .then(data => {
        coletarLeiturasAPI(data)
        menuBackgroundInitial(liFirstReading)
    })
    .catch(error => {
        console.error('Erro ao com a API; ', error);
    })

var leituras = {
    firstLi: '',
    salmos: '',
    secondli: '',
    evangelho: ''
}

function coletarLeiturasAPI(dados) {

    // first reading
    leituras.firstLi = dados.today.readings.first_reading.all_html

    // salmos
    leituras.salmos = dados.today.readings.psalm.all_html

    // second reading
    if (dados.hasOwnProperty('second_reading')) {

        liSecondReading.style.display = 'block'
        leituras.secondli = dados.today.readings.second_reading.all_html

    } else {

        ocultarSecondReading()
        console.log('não ha segunda leitura');

    }

    // gospel
    leituras.evangelho = dados.today.readings.gospel.all_html

    // create first reading
    gerarPrimeiraLeitura()

}

var containerTexto = document.getElementById('texto')

var liSecondReading = document.getElementById('liTwoLeitura')
liSecondReading.onclick = () => {

    containerTexto.innerHTML = leituras.secondli

}

var liSalmos = document.getElementById('Salmos')
liSalmos.onclick = () => {

    containerTexto.innerHTML = leituras.salmos

}

var liEvangelho = document.getElementById('liEvangelho')
liEvangelho.onclick = () => {

    containerTexto.innerHTML = leituras.evangelho

}

var liFirstReading = document.getElementById('liOneLeitura')
liFirstReading.onclick = () => {

    gerarPrimeiraLeitura()

}

function gerarPrimeiraLeitura() {

    containerTexto.innerHTML = leituras.firstLi

}

function ocultarSecondReading() {

    liSecondReading.style.display = 'none'

}