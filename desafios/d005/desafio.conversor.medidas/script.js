var link = document.getElementById('lnk')
link.addEventListener('click', clicou)

var p = document.getElementById('txt')
pbold.addEventListener('click', clicar)



function clicou(){
    var num = Number(window.prompt(`Digite uma distancia em metors (m)`))

   
    var km = num / 1000
    var hm = num / 100 
    var dm = num * 10
    var dam = num * 100
    var cm = num * 10000
    var mm = num * 100000 

    document.writeln(`${km} quilômetros (km)`)
    document.writeln(`${hm} hectômetros (hm)`)
    document.writeln(`${dm} decímetros (dm)`)
    document.writeln(`${dam} decâmetros (dam)`)
    document.writeln(`${cm} centímetros (cm)`)
    document.writeln(`${mn} milímetros (mm)`)
}


function clicar(){
    window.document.body `A distancia de  metros, corresponde a...`
}



    