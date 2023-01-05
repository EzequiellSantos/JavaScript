/* var link = document.getElementById('lnk')

var n1 = String(window.prompt('digite outro número'))
var n2 = String(window.prompt(' digite outro numero'))
var total = n1 + n2

window.alert(` a soma é igual a ${total}`) */

var link = document.getElementById('lnk')

link.addEventListener('click',  clicou)

function clicou(){
    var produto = String(window.prompt(`Que produto Você está comprando?`))
    var valor = Number(window.prompt(`Quanto custa o(a) ${produto} que você está comprando?`))
    var gasto = Number(window.prompt(`Qual foi o valor que você deu para pagar o(a) ${produto}`))

    var troco = gasto - valor
    Number(troco)
    //valor.toFixed(2).replace('.',',')
    //gasto.toFixed(2).replace('.',',')
    //troco.toFixed(2).replace('.',',')
    //valor.toLocaleString('pt:BR', {style: 'currency', currency:'BRL'})
    //gasto.toLocaleString('pt:BR', {style: 'currency', currency:'BRL'})

    window.confirm(`você comprou ${produto} que custou R$ ${valor}. \n Deu R$ ${gasto} em dinheiro e vai receber R$ ${troco} de troco. \n Volte Sempre`)
}