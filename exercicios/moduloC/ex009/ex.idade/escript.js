var nas = document.getElementById('nas')
var sex = document.getElementById('sex')
var ver = document.getElementById('ver')
var ima = document.getElementById('ima')
var img = document.getElementsByTagName('section')[0]

ver.addEventListener('click', clicou)

function clicou(){
    const imaidosa = document.getElementById('imgs');

    /* const image = new Image() */
    ima.src = 'https://github.com/EzequiellSantos/JavaScript/blob/main/exercicios/moduloC/ex009/idosa.perfil.jpg?raw=true';

    imaidosa.appendChild(ima);


/* 
    if (nas <= 1978 ) {
        
    } else {
        img.innerHTML =
    } */

}