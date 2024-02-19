/* mostrar resultados */

// resultado antecipado
function mostrarResultadoAntecipado() { // quando acontecer qualquer operação, mesmo sem apertar igual deve aparecer o resultado no segundo display

    if (numerosDigitados !== '' && resultadoFinal == 0) { //  resultado parcial será calculado com o operador definido mais os resultados das contas das arrays feito a conta com os numeros digitados

        if (operador == ultimoOperador) { // caso o o antigo operador seja igual ao novo digitado pelo user

            switch (operador) {

                case '+':
                    checagemResultado = parseFloat(resultSoma) + parseFloat(numerosDigitados) // mostrar o resultado antecipado da operação digitada

                    checkDecimals() // verificar se tem muitas casas decimais

                    resultadoParcial = parseFloat(checagemResultado)

                    break

                case '-':

                    if (resultSubtra > numerosDigitados) { //se o resultado da subtração for maior que o numero digitado

                        checagemResultado = parseFloat(resultSubtra) - parseFloat(numerosDigitados)

                        checkDecimals() // verificar se tem muitas casas decimais

                        resultadoParcial = parseFloat(checagemResultado)

                    } else if (resultSubtra < numerosDigitados) {//se o resultado da subtração for menor que o numero digitado

                        checagemResultado = parseFloat(numerosDigitados) - parseFloat(resultSubtra)
                        checagemResultado = parseFloat(checagemResultado) * -1  //transformação do número em negativo

                        checkDecimals() // verificar se tem muitas casas decimais

                        resultadoParcial = parseFloat(checagemResultado)

                    } else if (resultSubtra = numerosDigitados) {

                        checagemResultado = 0

                        checkDecimals() // verificar se tem muitas casas decimais

                        resultadoParcial = parseFloat(checagemResultado)

                    }

                    break

                case '/':

                    checagemResultado = parseFloat(resultDivisao) / parseFloat(numerosDigitados)

                    checkDecimals()

                    checkDivisao = checagemResultado // variavel para fazer a verificação de divisão inválida

                    if (verificarInfinity(checkDivisao)) { // se o numero for dividido por 0

                        resultadoParcial = `Can't divide by zero`

                    } else { // senão

                        resultadoParcial = parseFloat(checagemResultado)
                        checkDivisao = ''

                    }

                    validacaoEntradasDeDados() // verificação se o divisor é igual a 0

                    break

                case 'x':

                    checagemResultado = parseFloat(resultMultipli) * parseFloat(numerosDigitados)

                    checkDecimals() // verificar se tem muitas casas decimais

                    resultadoParcial = parseFloat(checagemResultado)

                    break

                case '%':

                    checagemResultado = resultPorcent * numerosDigitados / 100

                    checkDecimals() // verificar se tem muitas casas decimais

                    resultadoParcial = parseFloat(checagemResultado)

                    break
            }

        }
    }

    atualizarSecondDisplay() // chama a função de atualizar para, finalmente mostrar

}

function validacaoEntradasDeDados() { // função para verificar divisões por 0

    if (resultDivisao == 0 && operador == '/') { // verifica se o divisor é 0

        resultadoParcial = "0" // garante que ao ser dividido por zero seja em forma de string para não apagar o primeiro display por conta das validações presentes na recursividade do código

    }

}

//resultado final