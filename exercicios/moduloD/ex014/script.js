function calculou(){
    var res = document.getElementById('res')
    var num = document.getElementById('num')
    var tt = 0

    var numtt = Number(num.value)
    res.innerHTML = ''
    for(var c = 1 ; c <= 10 ; c++ ){
        
        tt = c * numtt
        res.innerHTML += `<br> ${numtt} x ${c} = ${tt}<br>`

    }
    
}