var evnt = document.getElementById('pct')
evnt.addEventListener('click', clicou)

function clicou(){
    var pct = window.prompt('Digite a porcentagem de Desconto')
    var res = document.getElementById('res')
    //var produto = window.prompt('Digite o Nome do produto que voçe deseja comprar')
    var valor = window.prompt(`Quanto custa o que você qeur comprar?`)

    var por  = valor * pct / 100
    var ttpor = String(por.toFixed(2).replace('.',',')) 

    var fin = valor - por
    var ttfin = String(fin.toFixed(2).replace('.',','))
    




    res.innerHTML += `<p>O valor inicial do seu produto é <strong>${valor} R$</strong></p>`
    res.innerHTML += `E <strong>${pct}%</strong> de <strong>${valor} R$</strong> é igual <strong>${ttpor} R$</strong>`
    res.innerHTML += `<p>O seu produto com o Desconto de <strong>10%</strong> fica <strong>${ttfin} R$</strong></p><hr>`
}