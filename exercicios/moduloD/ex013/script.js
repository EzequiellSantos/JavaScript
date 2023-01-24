var ver = document.getElementById('ver')
ver.addEventListener('click', clicou)

function clicou(){
    var res = document.getElementById('res')
    var inpt1 = document.getElementsById('inpt1')
    var inpt2 = document.getElementsById('inpt2')
    var inpt3 = document.getElementsById('inpt3')

    
    if (inpt1.value.length == 0 || inpt2.value.length == 0 || inpt3.value.length == 0) {

        alert('[ERROR_1] verifique as caixas de textos')

    } else {
        res.innerText = 'contando:'
        var i = Number(inpt1.value)
        var f = Number(inpt2.value)
        var p = Number(inpt3.value)

        for(var c = i ; i<= f ; c += p){

        res.innerText += `${c}`
        }
    }
    

}

