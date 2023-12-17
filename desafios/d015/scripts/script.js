var date = new Date() //coleta de data em dias, mês e ano

let day = date.getDay()
let dayMonth = date.getDate()
let month = date.getMonth()
let year = date.getFullYear()

switch (day){

    case 0:
        day =  "Domingo"
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

switch (month){

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

function calcTime(){ //coleta do tempo, segundos, minutos e hora. Atualização automática de cada segundo
    var date = new Date()

    let hour = date.getHours()
    let minute = date.getMinutes()
    let seconds = date.getSeconds()

    let hourForm = hour < 10 ? `0${hour}` : hour
    let minuteForm = minute < 10 ? `0${minute}` : minute
    let secondsForm = seconds < 10 ? `0${seconds}` : seconds

    document.getElementById("hora").innerHTML = `<p>${hourForm} : ${minuteForm} : ${secondsForm}</p>`

    setInterval(calcTime, 1000)

}

calcTime()

console.log(`cuida dormir kkkkjjk`)
