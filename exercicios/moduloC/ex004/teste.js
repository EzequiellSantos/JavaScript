var pro = document.getElementById('pri')
var ps = window.document.getElementById('ag2')
var hs = document.querySelector('h3#ag3')
var pr = document.getElementsByClassName('pr')[0]
var lin = document.getElementsByTagName('hr')[0]
var pk = document.getElementsByName('pika')[0]
var ar = document.getElementById('pri')
var fnts = document.getElementById('txt')
var clic = document.getElementsByName('outro')[0]


function clicou() {
    clic.innerText += ', e ele Clicou mesmo '
}

fnts.style.fontFamily = 'arial'
ar.style.fontFamily = 'arial'
pr.style.color = 'orange'
hs.style.color = 'orange'
ps.style.color = 'darkred'
ps.style.fontFamily = 'cursive'
lin.style.maxWidth = '400px'
pro.style.textAlign = 'center'
pk.style.color = '#ff0081'


