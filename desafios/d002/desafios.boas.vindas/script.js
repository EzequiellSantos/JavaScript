var a = document.getElementById('lnk')

a.addEventListener('click', clicou)

function clicou(){
   var nome = window.prompt('Qual o seu nome?')
   var idade = window.prompt(`Olá! ${nome} Quantos anos Você tem?`)
   window.alert(`Acabei de conhecer o ${nome}, que tem ${idade} de idade!`)
}