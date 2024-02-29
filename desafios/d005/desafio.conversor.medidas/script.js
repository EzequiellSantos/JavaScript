var link = document.getElementById('lnk')
link.addEventListener('click', clicou)

var p = document.getElementById('text')
var inpt = document.getElementById('numInput')

numInput.addEventListener('keydown', function(event){


    if(event.keyCode === 13){
        event.preventDefault();
        clicou()
    }
})


function clicou(){

    var p1 = document.getElementById('km')
    var p2 = document.getElementById('hm')
    var p3 = document.getElementById('dam')
    var p4 = document.getElementById('m')
    var p5 = document.getElementById('dm')
    var p6 = document.getElementById('cm')
    var p7 = document.getElementById('mm')
    var num = inpt.value

    try{

        if(num == ''){ //validação

            throw new Error('Digite um valor');

        }

        if(numInput.value.length > 20){  //validação

            throw new Error('Ai ce me quebra né');

        }

        if(medidasEscolh.value == ''){ // validação
           
            throw new Error('Escolha um tipo de medida. Ex: Km ou m ou cm');

        }

        var formatedNum = new Intl.NumberFormat('pt-BR', { maximumSignificantDigits: 3 }).format(num)


        switch (medidasEscolh.value){
            case 'Km':
                converterKm(num)
            break

            case 'Hm':
                converterHm(num)
            break

            case 'Dam':
                converterDam(num)
            break

            case 'm':
                converterM(num)
            break

            case 'Dm':
                converterDm(num)
            break

            case 'Cm':
                converterCm(num)
            break

            case 'Mm':
                converterMm(num)
            break
        }

        // universal convert
        km = m / 10 ** 3
        hm = m / 10 ** 2
        dam = m / 10 ** 1
        dm = m * 10 ** 1
        cm = m * 10 ** 2
        mm = m * 10 ** 3

        var ttkm = new Intl.NumberFormat('pt-BR', { maximumSignificantDigits: 3 }).format(km) /* String(km.toFixed(3).replace('.',',')) */
        var tthm = new Intl.NumberFormat('pt-BR', { maximumSignificantDigits: 3 }).format(hm) /* String(hm.toFixed(3).replace('.',',')) */
        var ttdam = new Intl.NumberFormat('pt-BR', { maximumSignificantDigits: 3 }).format(dam) /* String(dam.toFixed(3).replace('.',',')) */
        var ttdm = new Intl.NumberFormat('pt-BR', { maximumSignificantDigits: 3 }).format(dm) /* String(dm.toFixed(1).replace('.',',')) */
        var ttm = new Intl.NumberFormat('pt-BR', { maximumSignificantDigits: 3 }).format(m)
        
        var ttcm = new Intl.NumberFormat('pt-BR', { maximumSignificantDigits: 3 }).format(cm)
        var ttmm = new Intl.NumberFormat('pt-BR', { maximumSignificantDigits: 3 }).format(mm) 

        p.innerText = `A distância de ${formatedNum} ${medidasEscolh.value} corresponde a...`
    
        p1.innerHTML = `quilômetros: <strong>${ttkm} km</strong>`
        p2.innerHTML = `hectômetros: <strong>${tthm} hm</strong>`
        p3.innerHTML = `decâmetros: <strong>${ttdam} Dam</strong>`
        p4.innerHTML = `metros: <strong>${ttm} m</strong>`
        p5.innerHTML = `decímetros: <strong>${ttdm} dm</strong>`
        p6.innerHTML = `centímetros: <strong>${ttcm} cm</strong>`    
        p7.innerHTML = `milímetros: <strong>${ttmm} mm</strong>`
    
    
        checksChildren()
        clear()


    } catch (erro) {

        alert(erro.message)
        return null

    }

}

//conversão separada por medidas

var km = 0
var hm = 0
var dm = 0
var dam = 0
var m = 0
var cm = 0
var mm = 0

function converterKm(numKm){

    m = numKm * 10 ** 3
}

function converterHm(numHm){

    m = numHm * 10 ** 2

}

function converterDam(numDam){

    m = numDam * 10 ** 1

}

function converterM(numM){

    m = numM 

}

function converterDm(numDm){

    m = numDm / 10 ** 1

}

function converterCm(numCm){

    m = numCm / 10 ** 2

}

function converterMm(numMm){

    m = numMm / 10 ** 3

}


function clear(){

    km = 0
    hm = 0
    dam = 0
    m = 0
    dm = 0
    cm = 0
    mm = 0

}


var artic = document.getElementById('numConvertidos')
function checksChildren(){

    if(text.hasChildNodes()){

        artic.style.display = 'grid'

    }else{

        artic.style.display = 'none'

    }
}

checksChildren()
    



    