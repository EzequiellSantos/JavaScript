var link = document.getElementById('lnk')
link.addEventListener('mouseup', clicou)

var p = document.getElementsByTagName('p')[1]
//p.addEventListener('click', clicar)

var p1 = document.getElementById('km')
var p2 = document.getElementById('hm')
var p3 = document.getElementById('dm')
var p4 = document.getElementById('dam')
var p5 = document.getElementById('cm')
var p6 = document.getElementById('mm')


function clicou(){
    var num = Number(window.prompt(`Digite uma distancia em metros (m)`))

    p.style.fontWeight = 'bold'
    p.style.fontSize = '1.2em'
    p.innerText = `A distância de ${num} metros corresponde a...`

    var km = num / 1000
    var hm = num / 100 
    var dam = num / 10
    var dm = num * 10 
    var cm = num * 100
    var mm = num * 1000

    km.toFixed(2).replace('.',',')
    hm.toFixed(1).replace('.',',')
    dam.toFixed(0).replace('.',',')
    dm.toFixed(1).replace('.',',')
    cm.toFixed(2)
    mm.toFixed(3)

    p1.innerHTML = `<strong>${km}</strong> quilômetros (km)`
    p2.innerHTML = `<strong>${hm}</strong> hectômetros (hm)`
    p3.innerHTML = `<strong>${dam}</strong> decâmetros (dam)`
    p4.innerHTML = `<strong>${dm}</strong> decímetros (dm)`
    p5.innerHTML = `<strong>${cm}</strong> centímetros (cm)`    
    p6.innerHTML = `<strong>${mm}</strong> milímetros (mm)`


    /* document.writeln(`${km} quilômetros (km)`)
    document.writeln(`<p>${hm} hectômetros (hm)</p>`)
    document.writeln(`${dm} decímetros (dm)`)
    document.writeln(`${dam} decâmetros (dam)`)
    document.writeln(`${cm} centímetros (cm)`)
    document.writeln(`${mn} milímetros (mm)`) */
}
    



    