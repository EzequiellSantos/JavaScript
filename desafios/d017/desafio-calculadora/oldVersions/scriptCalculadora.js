let atualInput = ''
let secondInput = ''
let operador = ''
let resultado = ''
let primeiroNumero = ''
let podeDeletar = true 

let salvarConta = ''
var salvarOld = ''
let fezUmaConta = false //limpar o input após uma conta


function addNumber(number){


    if(fezUmaConta == false){

        atualInput += number
        atualizarDisplay()
        atualizarSecond()
        podeDeletar = true

    } else if(fezUmaConta !== false){ //pra apagar o resultado da ultima conta

        limparDisplay()
        atualInput += number

        atualizarDisplay()
        atualizarSecond()
        fezUmaConta = false
        podeDeletar = false
    }


}

function clicouOperador(op){

    if (atualInput !== ''){

        if(fezUmaConta == false){
            
            operador = op
            primeiroNumero = parseFloat(atualInput)
            atualInput = ''
            display.value = ''
            salvarConta = `${primeiroNumero} ${operador}`

            atualizarDisplay()
            podeDeletar = true

        } else if(fezUmaConta == true){

            operador = op
            atualInput = ''
            display.value = ''
            salvarConta = `${primeiroNumero} ${operador}`

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
                salvarOld = primeiroNumero
                resultado = primeiroNumero += parseFloat(atualInput)
                salvarConta = `${salvarOld} + ${parseFloat(atualInput)} = `
                break

            case '-':
                salvarOld = primeiroNumero
                resultado = primeiroNumero -= parseFloat(atualInput)
                salvarConta = `${salvarOld} - ${parseFloat(atualInput)} = `
                break

            case '/':
                salvarOld = primeiroNumero
                resultado = primeiroNumero /= parseFloat(atualInput)
                salvarConta = `${salvarOld} / ${parseFloat(atualInput)} = `
                break

            case 'x':
                salvarOld = primeiroNumero
                resultado = primeiroNumero *= parseFloat(atualInput)
                salvarConta = `${salvarOld} x ${parseFloat(atualInput)} = `
                break

            case '%':
                salvarOld = primeiroNumero
                resultado = primeiroNumero * parseFloat(atualInput) / 100
                salvarConta = `${salvarOld} % ${parseFloat(atualInput)} =`

                break

        }

        if(fezUmaConta == false){

            atualInput = resultado.toString()

            atualizarDisplay()
            atualizarSecond()
            fezUmaConta = true
            salvarConta = ''
        }

/*         display.value = '' limpar o display após executar a conta */
        secondInput = salvarConta
        podeDeletar = false

    }
}

function limparDisplay(){

    atualInput = ''
    operador = ''
    resultado = ''
    primeiroNumero = ''
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

    }


}

function atualizarDisplay(){

    document.getElementById('display').value = atualInput !== '' ? atualInput : resultado

}

function atualizarSecond(){

    document.getElementById('secondDisplay').value = atualInput == resultado ? `${salvarConta}  ${resultado}` : `${salvarConta} ${atualInput}`

}

function checkDisplay(){

    if(display.value == ''){
        display.value = 0
    }
    
}

function checkagemSecondDisplay(){
    display.value = 'pika'
}