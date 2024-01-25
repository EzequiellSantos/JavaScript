let atualInput = ''
let operador = ''
let resultado = 0
let seguirConta = 0
let fezUmaConta = false //limpar o input após uma conta


function addNumber(number){

    if(fezUmaConta == false){

        atualInput += number
        atualizarDisplay()

    } else if(fezUmaConta !== false){ //pra apagar o resultado da ultima conta
        limparDisplay()
        atualInput += number
        atualizarDisplay()
        fezUmaConta = false
    }


}

function clicouOperador(op){

    if (atualInput !== ''){

        if(fezUmaConta == false){
            
            operador = op
            resultado = parseFloat(atualInput)
            atualInput = ''
            display.value = ''
            atualizarDisplay()
            console.log(clicouOperador())

        } else if(fezUmaConta == true){

            operador = op
            atualInput = ''
            display.value = ''
            atualizarDisplay()
            fezUmaConta = false

        }


    }

}

function adicionarDecimal(){

    if(atualInput.indexOf('.')  === -1) {

        atualInput += '.'
        atualizarDisplay()

    }

}

function calcularResultado(){

    if(atualInput !== ''){

        switch(operador){
            case '+':
                resultado += parseFloat(atualInput)
                break
            case '-':
                resultado -= parseFloat(atualInput)
                break
            case '/':
                resultado /= parseFloat(atualInput)
                break
            case 'X':
                resultado *= parseFloat(atualInput)
                break
        }

        if(fezUmaConta == false){

            atualInput = resultado.toString()
            atualizarDisplay()
            fezUmaConta = true

        }



    }
}

function limparDisplay(){

    atualInput = ''
    operador = ''
    resultado = 0
    atualizarDisplay()
    fezUmaConta = false

}

function atualizarDisplay(){

    document.getElementById('display').value = atualInput !== '' ? atualInput : resultado

}

atualizarDisplay()