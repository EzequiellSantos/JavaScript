var menu = document.getElementById('menu');
var menuImg = document.getElementById('img-menu')
var homeImg = document.getElementById('img-home');



menuImg.addEventListener('click', function() {
    menu.classList.add('actived')
    homeImg.style.display = 'block'
})