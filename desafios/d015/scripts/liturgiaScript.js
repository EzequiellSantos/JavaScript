function adequarImagens(tema) {// adequa as imagens ao tema

    toBack.src = `Imagens/icons-Direct/toHome-${tema}-96.png`

}

var itensLi = document.querySelectorAll('#menuLeituras li')
var firstLi = document.getElementById('liOneLeitura')
var background = document.getElementById('background')
var itemVar = ''


itensLi.forEach((item) => {

    document.addEventListener('DOMContentLoaded', () => {
        menuBackgroundInitial(firstLi)
    })

    item.addEventListener('click', () => {

        itemVar = item
        menuBackground(item)


    })


})

let initiaLeft = firstLi.offsetLeft * 2.5
function menuBackground(item){


    background.style.left = initiaLeft < item.offsetLeft ? item.offsetLeft + 10 + 'px' : item.offsetLeft - 10 + 'px'
    background.style.width = item.offsetWidth * 1.08 + 'px'
    setTimeout(menuBackgroundDelay, 450)

}

function menuBackgroundDelay(){
    background.style.left = itemVar.offsetLeft * 0.99 + 'px'
}

function menuBackgroundInitial(firstLi){
    background.style.width = firstLi.offsetWidth + 'px'
    background.style.left = firstLi.offsetLeft + 'px'
}