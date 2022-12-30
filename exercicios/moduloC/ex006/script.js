

function somar(){
var tn1 = document.getElementById('txt1')
var tn2 = document.getElementById('txt2')
var res = document.getElementById('res') //selecionando div que vai aparecer o resultado


var n1 = Number(tn1.value)//valor de tn1 em números
var n2 = Number(tn2.value)//valor de tn1 em números
var s = n1 + n2

res.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong>${s}</strong>`

}