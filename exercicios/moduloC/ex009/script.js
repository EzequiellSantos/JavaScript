function carregar(){
    var img = document.getElementById('img')
    var msg = document.getElementById('msg')

    var data = new Date()
    var hr = 3//data.getHours()
    var mn = data.getMinutes()

    msg.innerHTML = `Agora são ${hr} horas e ${mn} minutos.`

    if (hr > 0 && hr < 12) {

        img.src = 'manha.jpg'
        document.body.style.backgroundColor = '#F9C665'

    } else if(hr >= 12 && hr <= 18){

        img.src = 'tarde.jpg'
        document.body.style.backgroundColor = '#AF5844'
        

    }else{
        img.src = 'noite.jpg'
        document.body.style.backgroundColor = "#3a383d"
    }
}