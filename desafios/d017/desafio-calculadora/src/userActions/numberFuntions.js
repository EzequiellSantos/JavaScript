// adição de numeros

function addNumber(number) { // função de adicionar numeros

    verficandoMeuAmorzinho() // chama a função de verificação caso o resultado final seja 0

    if (resultadoFinal == "" && !verificarInfinity(checkDivisao) && meuAmorChamadoZero !== 0) { // verificação para evitar erros com o numero 0 e respostas inválidas

        reporStyles() //repôe estilos
        firstDisplay += number //adiciona o numero
        resultadoParcial += number //adiciona apenas o numero digitado ao segundo input
        numerosDigitados += number //coloca os numeros digitados dentro da variavel de armazenamento

        atualizarFirstDisplay()
        atualizarSecondDisplay()
        mostrarResultadoAntecipado()

        calculou = false // (recursividae) para validar

    } else if (!verificarInfinity(checkDivisao) && meuAmorChamadoZero == 0) { // verificação para quando digitar igual e o usuário queira digitar um novo numero diferente do resultado final

        reporStyles() //repôe estilos
        limparDisplay() // limpa tudo que estava nos inputs
        firstDisplay = number //adiciona o numero
        resultadoParcial += number //adiciona apenas o numero digitado ao segundo input
        numerosDigitados += number //coloca os numeros digitados dentro da variavel de armazenamento

        atualizarFirstDisplay()
        atualizarSecondDisplay()
        mostrarResultadoAntecipado()

        calculou = false

    } else if (resultadoFinal == `Can't divide by zero`) { // validação para caso o usuário divida por 0

        reporStyles() // (recursividade) repôe estilos
        limparDisplay() // limpa tudo que estava nos inputs

        firstDisplay += number //adiciona o numero
        resultadoParcial += number //adiciona apenas o numero digitado ao segundo input
        numerosDigitados += number //coloca os numeros digitados dentro da variavel de armazenamento

        atualizarFirstDisplay()
        atualizarSecondDisplay()
        mostrarResultadoAntecipado()

        calculou = false

    }

}
