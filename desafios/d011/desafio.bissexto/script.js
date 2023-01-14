
////////////////////////

var ver = document.getElementById('ver')
var res = document.getElementById('res')

ver.addEventListener('click', clicou)

function clicou(){
    var ano = window.prompt('Qual é o ano que você quer verificar?')

    var anodays = Number.parseInt(ano % 4 )

    if(anodays == 0){
        alert('ano Bissexto')
    }else{
        alert('não bissexto')
    }


} 




