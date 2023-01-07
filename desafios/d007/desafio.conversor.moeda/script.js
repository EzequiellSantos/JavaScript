var dlr  = Number(window.prompt('Antes de Tudo, Digite a cotação do dólar atualmente'))

var real = document.getElementById('bt')
real.addEventListener('click', clicou)

var res = document.getElementById('res')

function clicou (){
    var vlor = window.prompt('Quantos R$ Você tem na Sua Carteira?')

    var tt = vlor / dlr
    var arredondado = parseFloat(tt.toFixed(2))

    
    res.innerHTML += `<p>Com <strong>${vlor} R$</strong> o seu saldo em Dólar é de <strong>${arredondado} US$</strong></p><p>-</p>`
}