function calcTime(){
    var date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let seconds = date.getSeconds()
    let day = date.getDay()
    let dayMonth = date.getDate()
    let month = date.getMonth()
    let year = date.getFullYear()

    let hourForm = hour < 10 ? `0${hour}` : hour
    let minuteForm = minute < 10 ? `0${minute}` : minute
    let secondsForm = seconds < 10 ? `0${seconds}` : seconds

    document.getElementById("hora").innerHTML = `${hourForm} : ${minuteForm} : ${secondsForm}`

    setInterval(calcTime, 1000)

}

calcTime()

console.log(`cuida dormir kkkkjjk`)
