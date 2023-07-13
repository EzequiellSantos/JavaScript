var homeImg = document.getElementById('img-home');/* imagem home */
var div01 = document.getElementById('menu01')/* div 1 da seta */
var div02 = document.getElementById('menu02');/* div 2 da seta */

function toggleKeyframe() {

    var menuSt = document.getElementById('setas');

    if (setas.classList.contains("actived_02")){/* removendo as animações do menu */

        homeImg.style.display = 'none'
        homeImg.classList.remove('mostrar')

        menuSt.classList.remove('actived_02')

        div01.classList.remove('actived')
        div02.classList.remove('actived')

    }else{ /* adicionando as animações do menu */

        menuSt.classList.add('actived_02')
        menuSt.style.transition = 'none'

        homeImg.classList.add('actived_02')
        homeImg.style.display = 'block'
        setTimeout(function(){
            homeImg.classList.add('mostrar')
        }, 600) /* delay de surgimento */
        homeImg.style.display = 'block'

        div01.classList.add('actived')
        div02.classList.add('actived')
    }
    
}