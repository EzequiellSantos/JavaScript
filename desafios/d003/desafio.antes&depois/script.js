var link = document.getElementById('lnk')

link.addEventListener('click', clicou)


function clicou(){
    var nX = Number(window.prompt(`Digite um número  Qualquer`))
    var nM = nX + 1
    var nm = nX - 1
    window.alert(`Antes de ${nX}, temos o número ${nm}.\nDepois de ${nX}, temos o número ${nM}.`)
}