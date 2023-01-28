let num = document.getElementById('num')
let res = document.getElementById('res')
let res_2 = document.getElementById('res_2')
let vetor = []

let bt1 = document.getElementById('ver')
let bt2 = document.getElementById('ver-2')

bt1.addEventListener('click', adicionou)
bt2.addEventListener('click', finalizou)

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inlista(n, l){/* numero e uma lista */
    if(l.indexOf(Number(n)) != -1){// identifica se o valor ja está na lista -> return = -1
        return true
    } else{
        return false
    }
}

function adicionou (){
    if(isNumero(num.value) && !inlista(num.value, vetor)){
        alert('tudo ok')
    } else{
        alert('Valor inválido ou ja contido na lista')
    }
}