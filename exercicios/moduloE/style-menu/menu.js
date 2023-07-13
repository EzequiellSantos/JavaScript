var menu = document.getElementById('menu');
var menuImg = document.getElementById('img-menu')
var homeImg = document.getElementById('img-home');

menuImg.addEventListener('click', function() {
    menu.classList.add('actived')
    homeImg.style.display = 'block'
    menu.style.transition = 'none'
}) //para menus hambuger

document.addEventListener('click', function(evento) {
    const clicadoDentroDoElemento = menu.contains(evento.target)
  
    if(!clicadoDentroDoElemento){
      homeImg.style.display = 'none'
      menu.style.transition = 'all 0.6s ease-in-out'
      menu.classList.remove('actived')
    }
})  