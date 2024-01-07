//controle do Menu Share
var shareIcon = document.querySelector('#div-icon-share');
var allMenu = document.querySelector('#menu-share')
var menu = document.querySelector('#content-share')


shareIcon.onclick = () => {

    if(allMenu.classList.contains('menu-off')){

        allMenu.classList.add('exibindo-menu')
        allMenu.classList.remove('menu-off')

    } else{
        allMenu.classList.remove('exibindo-menu')
        allMenu.classList.add('menu-off')
        
    }

}

var clicarFora = menu.onmouseleave = () => {

    allMenu.classList.add('menu-off')
    allMenu.classList.remove('exibindo-menu')

}


var date = new Date() //coleta de data em dias, mês e ano

let day = date.getDay()
let dayMonth = date.getDate()
let month = date.getMonth()
let year = date.getFullYear()

switch (day) {

    case 0:
        day = "Domingo"
        break

    case 1:
        day = "Segunda-Feira"
        break

    case 2:
        day = "Terça-Feira"
        break

    case 3:
        day = "Quarta-Feira"
        break

    case 4:
        day = "Quinta-Feira"
        break

    case 5:
        day = "Sexta-Feira"
        break

    case 6:
        day = "Sábado"
        break

    default:
        window.alert("ERROR => day")
        break

}

switch (month) {

    case 0:
        month = "Jan"
        break

    case 1:
        month = "Fev"
        break

    case 2:
        month = "Mar"
        break

    case 3:
        month = "Abr"
        break

    case 4:
        month = "Mai"
        break

    case 5:
        month = "Jun"
        break

    case 6:
        month = "Jul"
        break

    case 7:
        month = "Ago"
        break

    case 8:
        month = "Set"
        break

    case 9:
        month = "Out"
        break

    case 10:
        month = "Nov"
        break

    case 11:
        month = "Dez"
        break
}

document.getElementById("date").innerHTML = `<p>${day} ${dayMonth} de ${month} ${year}</p>`

function calcTime() { //coleta do tempo, segundos, minutos e hora. Atualização automática de cada segundo
    var date = new Date()

    let hour = date.getHours()
    let minute = date.getMinutes()
    let seconds = date.getSeconds()

    let hourForm = hour < 10 ? `0${hour}` : hour
    let minuteForm = minute < 10 ? `0${minute}` : minute
    let secondsForm = seconds < 10 ? `0${seconds}` : seconds

    document.getElementById("hora").innerHTML = `<p>${hourForm} : ${minuteForm} : <p id="p-fixo">${secondsForm}</p> </p>`

    setInterval(calcTime, 1000)

}

calcTime()

var toggleIcon = document.getElementById("item");
var toggleSection = document.getElementById("toggle-icon")


if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) { // Modo escuro está ativado

    console.log('Modo escuro está ativado');
    msg.innerHTML = 'Seu dispositivo está no modo escuro'

    toggleIcon.setAttribute('class', 'dark')

    let islight = true

    toggleSection.onclick = () => {
        toggleIcon.classList.toggle("light")
        islight = !islight
    }

} 

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) { // Modo claro está ativado ou não suportado { // Modo claro está ativado ou não suportado

    console.log('Modo claro está ativado')
    msg.innerHTML = 'Seu dispositivo está no modo claro'

    toggleIcon.setAttribute('class', 'light')


    let islight = false

    toggleSection.onclick = () => {
        toggleIcon.classList.toggle("dark")
        islight = !islight
    }
}


//verificação dos cards-content, para encerrar o skeleton
var contain = document.querySelectorAll('#article');
var grupo = document.querySelectorAll('.cards-content');
var weatherWidget = document.querySelectorAll('#aside-weather');

// Verifica se o grupo possui algum elemento filho e se possuir remove o skeleton
grupo.forEach(function (grupo) {

    if (grupo.hasChildNodes()) {

        grupo.classList.remove('skeleton')

    } else {

        console.log('<- widgets free');

    }

});

// verificação especifica do widget de clima,se possui conteúdo ou não
weatherWidget.forEach(function (grupo) {
     
    if (grupo.hasChildNodes()) {

        grupo.classList.remove('skeletonTw')

    } else {

        console.log('The widget of weather is free')

    }
})



