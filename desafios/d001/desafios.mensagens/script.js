var b1 = document.getElementsByTagName('div')[0]
var b2 = document.getElementsByTagName('div')[1]
var b3 = document.getElementsByTagName('div')[2]

b1.addEventListener('click', clicou1)
b1.addEventListener('mouseenter', entrou1)
b1.addEventListener('mouseout', saiu1)

b2.addEventListener('click', clicou2)
b2.addEventListener('mouseenter', entrou2)
b2.addEventListener('mouseout', aiu2)

b3.addEventListener('click', clicou3)
b3.addEventListener('mouseenter', entrou3)
b3.addEventListener('mouseout', iu3)


function clicou1(){
    window.alert('Você Clicou no 1° Botão')
}
function entrou1(){
    b1.style.background = '#404040'
}
function saiu1(){
    b1.style.background = 'gray'
}

function clicou2(){
    window.alert('Você Clicou no 2° Botão')
}
function entrou2(){
    b2.style.background = '#404040'
}
function aiu2(){
    b2.style.background = 'gray'
}

function clicou3(){
    window.alert('Você Clicou no 3° Botão')
}
function entrou3(){
    b3.style.background = '#404040'
}
function iu3(){
    b3.style.background  = 'gray'

    
}