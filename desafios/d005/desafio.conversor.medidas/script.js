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
    var num = window.prompt(`Digite uma distancia em metros (m)`)

    p.style.fontWeight = 'bold'
    p.style.fontSize = '1.2em'

    var wndwnum = new Intl.NumberFormat('pt-BR', { maximumSignificantDigits: 3 }).format(num)

    p.innerText = `A distância de ${wndwnum} metros corresponde a...`

    var km = num / 1000
    var hm = num / 100 
    var dam = num / 10
    var dm = num * 10 
    var cm = num * 100
    var mm = num * 1000

    var ttkm = String(km.toFixed(3).replace('.',','))
    var tthm = String(hm.toFixed(3).replace('.',','))
    var ttdam = String(dam.toFixed(3).replace('.',','))
    var ttdm = String(dm.toFixed(1).replace('.',','))
    
    var ttcm = new Intl.NumberFormat('pt-BR', { maximumSignificantDigits: 3 }).format(cm)
    var ttmm = new Intl.NumberFormat('pt-BR', { maximumSignificantDigits: 3 }).format(mm)

    p1.innerHTML = `<strong>${ttkm}</strong> quilômetros (km)`
    p2.innerHTML = `<strong>${tthm}</strong> hectômetros (hm)`
    p3.innerHTML = `<strong>${ttdam}</strong> decâmetros (dam)`
    p4.innerHTML = `<strong>${ttdm}</strong> decímetros (dm)`
    p5.innerHTML = `<strong>${ttcm}</strong> centímetros (cm)`    
    p6.innerHTML = `<strong>${ttmm}</strong> milímetros (mm)`


    /* document.writeln(`${km} quilômetros (km)`)
    document.writeln(`<p>${hm} hectômetros (hm)</p>`)
    document.writeln(`${dm} decímetros (dm)`)
    document.writeln(`${dam} decâmetros (dam)`)
    document.writeln(`${cm} centímetros (cm)`)
    document.writeln(`${mn} milímetros (mm)`) */
}
    



    