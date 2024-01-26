let atualInput = ''
let secondInput = ''
let operador = ''
let resultado = ''
let seguirConta = 0
let podeDeletar = true 

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
        atualizarSecond()
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
            atualizarSecond()

        } else if(fezUmaConta == true){

            operador = op
            atualInput = ''
            display.value = ''

            atualizarDisplay()
            atualizarSecond()
            fezUmaConta = false
            podeDeletar = true

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

            case 'x':
                salvarOld = resultado
                resultado *= parseFloat(atualInput)
                salvarConta = `${salvarOld} x ${parseFloat(atualInput)} = `
                break

            case '%':
                salvarOld = resultado
                resultado = resultado * parseFloat(atualInput) / 100
                salvarConta = `${salvarOld} % ${parseFloat(atualInput)} =`

                break

        }

        if(fezUmaConta == false){

            atualInput = resultado.toString()
            atualizarSecond

            atualizarDisplay()
            atualizarSecond()
            fezUmaConta = true
        }

        secondInput = salvarConta
        podeDeletar = false

    }
}

function limparDisplay(){

    atualInput = ''
    operador = ''
    resultado = ''
    salvarConta = ''

    atualizarDisplay()
    atualizarSecond()
    checkDisplay()
    fezUmaConta = false

}

function deleteNumber(){

    if(podeDeletar == true){

        atualInput = atualInput.slice(0, -1)
        atualizarDisplay()
        atualizarSecond()
        checkDisplay()

    }else{
        podeDeletar = true
    }


}

function atualizarDisplay(){

    document.getElementById('display').value = atualInput !== '' ? atualInput : resultado

}

function atualizarSecond(){

    document.getElementById('secondDisplay').value = resultado == atualInput ? `${salvarConta}  ${resultado}` : `${resultado} ${operador} ${atualInput}`

}

function checkDisplay(){

    if(display.value == ''){
        display.value = 0
    }
    
}

function checkagemSecondDisplay(){
    display.value = 'pika'
}