// ações do displays

//primeiro Input
function atualizarFirstDisplay() { // fiunção de preenchimento do primeiro display (input)

    firstInput.value = firstDisplay //adiciona o valor atribuído ao primeiro input

}

// segundo Input
function atualizarSecondDisplay() { // função pra preenchimento correto do segundo diplay (Input)

    if (numerosDigitados !== '' && operador == '') {//apenas os numeros digitados sem o resultado e sem o operador

        secondInput.value = '= ' + parseFloat(numerosDigitados)

    } else if (operador !== '' && resultadoFinal == 0) { //apenas para mostrar o resultado antes de apertar igual

        secondInput.value = '= ' + resultadoParcial

    } else if (ultimoOperador !== operador) {

        secondInput.value = '= ' + parseFloat(resultadoFinal)

    } else if (calculou == true) { // quando clicar em igual

        secondInput.value = '= ' + parseFloat(resultadoFinal)

    } else if (deletou == true && operador == '') {

        checkDels() // validar o que foi deletado

    }

}