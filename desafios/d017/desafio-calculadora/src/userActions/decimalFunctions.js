// adição de decimais

function adicionarDecimal() { // função para adcionar decimais

    if (pontoPresenteNoNumero == false) {// verificação se ja existe um ponto nos numeros digitados

        if (firstDisplay == '') { // caso o usuário digite um ponto de início

            firstDisplay += '0.'
            numerosDigitados = '0.'
            atualizarFirstDisplay()
            atualizarSecondDisplay()
            pontoPresenteNoNumero = true // bloqueando a adição de mais de um ponto

        } else if (calculou == false && !verificarInfinity(checkDivisao)) { // caso ja tenha numeros digitados

            firstDisplay += '.'
            numerosDigitados += '.'
            atualizarFirstDisplay()
            atualizarSecondDisplay()
            pontoPresenteNoNumero = true // bloqueando a adição de mais de um ponto

        } else if (calculou == true && resultadoFinal == 0 && !verificarInfinity(checkDivisao)) { // para caso o usuário adicione ponto logo após apertar igual

            firstDisplay += '.'
            numerosDigitados += '.'
            atualizarFirstDisplay()
            atualizarSecondDisplay()
            pontoPresenteNoNumero = true // bloqueando a adição de mais de um ponto  

        }
    }

}