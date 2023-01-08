var pct = document.getElementById('pct')
pct.addEventListener('click', clicou)

function clicou(){
    var res = document.getElementById('res')
    var produto = window.prompt('Digite o Nome do produto que voçe deseja comprar')
    var valor = window.prompt(`Quanto custa ${produto} que você qeur comprar?`)


    var por  = valor * 10 / 100
    //var total = toString(por.toFixed(2))
    var fmrt = parseFloat(por.toFixed(2)) 
    var fin = valor - fmrt



    res.innerHTML += `<p>O valor inicial do seu produto é <strong>${valor} R$</strong></p>`
    res.innerHTML += `E <strong>10%</strong> de <strong>${valor} R$</strong> é igual <strong>${por} R$</strong>`
    res.innerHTML += `<p>O seu produto com o Desconto de <strong>10%</strong> fica <strong>${fin} R$</strong></p>`
}