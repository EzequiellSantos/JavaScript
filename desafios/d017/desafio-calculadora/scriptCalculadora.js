
let atualInput = ''
let operador = ''
let resultado = ''
let seguirConta = 0

let salvarConta = ''
var salvarOld = ''
let fezUmaConta = false //limpar o input após uma conta


function addNumber(number){


    if(fezUmaConta == false){

        atualInput += number
        atualizarDisplay()
        atualizarSecond()

    } else if(fezUmaConta !== false){ //pra apagar o resultado da ultima conta
        limparDisplay()
        atualInput += number
        atualizarDisplay()
        fezUmaConta = false
        atualizarSecond()
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
            atualizarSecond()

        } else if(fezUmaConta == true){

            operador = op
            atualInput = ''
            display.value = ''
            atualizarDisplay()
            fezUmaConta = false

        }
        atualizarSecond()

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
                salvarOld = resultado
                resultado += parseFloat(atualInput)
                salvarConta = `${salvarOld} + ${parseFloat(atualInput)} = `
                break
            case '-':
                salvarOld = resultado
                resultado -= parseFloat(atualInput)
                salvarConta = `${salvarOld} - ${parseFloat(atualInput)} = `
                break
            case '/':
                salvarOld = resultado
                resultado /= parseFloat(atualInput)
                salvarConta = `${salvarOld} / ${parseFloat(atualInput)} = `
                break
            case 'X':
                salvarOld = resultado
                resultado *= parseFloat(atualInput)
                salvarConta = `${salvarOld} X ${parseFloat(atualInput)} = `
                break
        }

        if(fezUmaConta == false){

            atualInput = resultado.toString()
            atualizarDisplay()
            atualizarSecond()
            atualizarSecond
            fezUmaConta = true

        }

    }
}

function limparDisplay(){

    atualInput = ''
    operador = ''
    resultado = ''
    salvarConta = ''
    atualizarDisplay()
    atualizarSecond()
    fezUmaConta = false
    display.value = 0

}

function deleteNumber(){
    atualInput = atualInput.slice(0, -1)
    atualizarDisplay()
    atualizarSecond()
    checkDisplay()

}

function atualizarDisplay(){

    document.getElementById('display').value = atualInput !== '' ? atualInput : resultado

}

function atualizarSecond(){

    document.getElementById('secondDisplay').value = resultado == atualInput ? `${salvarConta.toString()} ${resultado}` : `${resultado} ${operador} ${atualInput}`

}

function checkDisplay(){

    if(display.value == ''){
        display.value = 0
    }
    
}

