/// Sozinho

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


var menu = document.getElementById('menu');
var menuImg = document.getElementById('img-menu')
var homeImg = document.getElementById('img-home');



menuImg.addEventListener('click', function() {
    menu.classList.add('actived')
    homeImg.style.display = 'block'
    menu.style.transition = 'none'
})

document.addEventListener('click', function(evento) {
    const clicadoDentroDoElemento = menu.contains(evento.target)
  
    if(!clicadoDentroDoElemento){
      homeImg.style.display = 'none'
      menu.style.transition = 'all 0.6s ease-in-out'
      menu.classList.remove('actived')
    }
})