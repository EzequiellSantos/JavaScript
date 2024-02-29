var link = document.getElementById('lnk')
link.addEventListener('click', clicou)

var p = document.getElementById('text')
//p.addEventListener('click', clicar)

var p1 = document.getElementById('km')
var p2 = document.getElementById('hm')
var p3 = document.getElementById('dm')
var p4 = document.getElementById('dam')
var p5 = document.getElementById('cm')
var p6 = document.getElementById('mm')


function clicou(){
    var num = window.prompt(`Digite uma distancia em metros (m)`)

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

    p1.innerHTML = `quilômetros (km): <strong>${ttkm}</strong>`
    p2.innerHTML = `hectômetros (hm): <strong>${tthm}</strong>`
    p3.innerHTML = `decâmetros (dam): <strong>${ttdam}</strong>`
    p4.innerHTML = `decímetros (dm): <strong>${ttdm}</strong>`
    p5.innerHTML = `centímetros (cm): <strong>${ttcm}</strong>`    
    p6.innerHTML = `milímetros (mm): <strong>${ttmm}</strong>`

    artic.style.fontWeight = 'bold'
    artic.style.fontSize = '1.0em'

    checksChildren()


    /* document.writeln(`${km} quilômetros (km)`)
    document.writeln(`<p>${hm} hectômetros (hm)</p>`)
    document.writeln(`${dm} decímetros (dm)`)
    document.writeln(`${dam} decâmetros (dam)`)
    document.writeln(`${cm} centímetros (cm)`)
    document.writeln(`${mn} milímetros (mm)`) */
}

var artic = document.getElementById('numConvertidos')

function checksChildren(){

    if(p1.hasChildNodes()){

        artic.style.display = 'grid'

    }else{

        artic.style.display = 'none'

    }
}

checksChildren()
    



    