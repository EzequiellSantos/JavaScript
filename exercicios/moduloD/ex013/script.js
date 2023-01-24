var ver = document.getElementById('ver')
ver.addEventListener('click', clicou)

function clicou(){
    var res = document.getElementById('res')
    var inpt1 = document.getElementsByName('inpt1')
    var inpt2 = document.getElementsByName('inpt2')
    var inpt3 = document.getElementsByName('inpt3')

    var inicio = inpt1.value.length
    var fim = inpt2.value.length
    var passo = inpt3.value.length

    while(inicio <= fim){
        var tt = inpt1 += inpt3
        res.innerText+= `${fim}\n`
        
    }
}

