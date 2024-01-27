var firstInput = document.getElementById('firstInput') // primeiro input que vai aparecer para o usuário
var secondInput = document.getElementById('secondInput') // segundo input que vai aparecer para o usuário

let firstDisplay = '' //variável que vai armazionar dados para o primeiro input
let secondDisplay = '' //variável que vai armazionar dados para o segundo input

function atualizarFirstDisplay(){ //atualizar display

    firstInput.value = firstDisplay //adiciona o valor atribuído ao primeiro input

}


let resultadoParcial = '' //numeros digitados apenas
let resultadoFinal = '' //resultado das operações

function mostrarResultadoAntecipado(){ //quando acontecer qualquer operação, mesmo sem apertar igual deve aparecer isso no segundo display

    if(numerosDigitados !== ''){ // caso o operador seja de mais, o resultado parcial será calculado com o operador definido

        switch(operador){
        
            case '+':
                resultadoParcial = parseFloat(resultSoma) + parseFloat(numerosDigitados) 
            break

            case '-':

                if(resultSubtra > numerosDigitados){ //se o resultado da subtração for maior que o numero digitado

                    resultadoParcial = resultSubtra - numerosDigitados  
                    console.log(diminuir)

                }else if(resultSubtra < numerosDigitados){//se o resultado da subtração for menor que o numero digitado
                    
                    resultadoParcial = numerosDigitados - resultSubtra 
                    resultadoParcial = resultadoParcial * -1  
                    console.log(diminuir)

                }else if(resultSubtra = numerosDigitados){

                    resultadoParcial = 0

                }
            break


        }

    }

    atualizarSecondDisplay()

}

function atualizarSecondDisplay(){
/* 

aqui deve ter uma verificação, se é o:
- numero digitado só
- resultado da soma do first input
- resultado depois de apertado igual

*/

    if(numerosDigitados !== '' && operador == ''){//apenas os numeros digitados sem o resultado e sem o operador

        secondInput.value = `= ${numerosDigitados}` 

    }else if(operador !== ''){ //apenas para mostrar o resultado antes de apertar igual

        secondInput.value = `= ${resultadoParcial}`
        
    }
    else if(resultSoma !== 0){
    }

}

//quando o usuário entrar na página ou limpar o input
function checkSecondDisplay(){

    if(secondInput.value == ''){ //verifica se o segundo input está vazio e coloca um zero    
        secondInput.value = 0
    } 

}

checkSecondDisplay() //verifica quando o documento carrega, pra prencher corretamente o secondDislay


let numerosDigitados = '' //armazena números digitados

function addNumber(number){

    firstDisplay += number //adiciona o numero
    resultadoParcial += number //adiciona apenas o numero digitado
    numerosDigitados += Number(number) //coloca os numeros digitados dentro da variavel de armazenamento

    atualizarFirstDisplay()
    atualizarSecondDisplay()
    mostrarResultadoAntecipado()

    console.log(numerosDigitados)

}

let operador = '' // armazena o operador digitado

let resultSoma = 0 // variavel para armazenar o resultado das somas
let somar = [] //array para efetuar somas

function efetuarSoma(){ //efetuação da soma dos itens dentro da array e armazena o resultado na resultSoma

    let SomaInArray = 0 // variavel para armazenar o resultado da array

    for(var i = 0 ; i < somar.length ; i++){

        SomaInArray += somar[i]
        SomaInArray = Number(SomaInArray)
        
    }

    resultSoma = SomaInArray + numerosDigitados //vai somar a array com o numero digitado


    atualizarSecondDisplay()
    mostrarResultadoAntecipado()


    console.log(resultSoma + 'kkk')

}

let resultSubtra = 0
let diminuir = []

function efetuarSubtracao(){

    let subtracaoInArray = 0 // variavel para armazenar o resultado da array

    subtracaoInArray = diminuir.reduce(function (a, b){
        return a - b
    })

    if(subtracaoInArray >= numerosDigitados){ // se a array for maior ou igual os numeros digitados..

        resultSubtra = subtracaoInArray - numerosDigitados    //vai subtrair a array com o numero digitado

    }else if(subtracaoInArray < numerosDigitados) { // se a array for menor ou igual os numeros digitados..

        resultSubtra = numerosDigitados - subtracaoInArray   //vai subtrair a numero digitado com a array
        resultSubtra = resultSubtra * -1 // converte o numero pra negativo para efetuar as contas perfeitamente

    }

    atualizarSecondDisplay() //atualiza o segundo display

    console.log(resultSubtra)

}

let dividir = []
let resultDivisao = 0

let multiplicar = []
let resultMultipli = 0

let porcentagem = []
let resultPorcent = 0


function clicouOperador(op){
    
    let numeroAntesOp = 0 //numero presente antes do sinal atribuido

    /* dps é preciso armazenar os resultados numa variável de ultima conta para fazer contas  de múltiplos sinais */

    operador = op //definindo o operador

    if(numerosDigitados !== ''){

        switch(operador){

            case '+':
    
            firstDisplay += ` ${op} ` //adicionando o operador em forma de string no primeiro display
    
            numeroAntesOp = numerosDigitados //armazena os numeros antes do sinal, para limpar a array
            somar.push(numeroAntesOp) //adiciona os números armazenados na array de soma
            numerosDigitados = '' // limpa a variável
            
    
            efetuarSoma() //vai efetuar a soma dos itens dentro da array Soma
            atualizarFirstDisplay() //vai atualizar o first display adicionando o sinal
    
            console.log(numerosDigitados)//teste
            console.log(somar)//teste
    
            break


            case '-':

            firstDisplay += ` ${op} ` //adicionando o operador em forma de string no primeiro display
    
            numeroAntesOp = numerosDigitados //armazena os numeros antes do sinal, para limpar a variável e receber novos números
            diminuir.push(numeroAntesOp) //adiciona os números armazenados na array de soma
            numerosDigitados = '' // limpa a variável
            
    
            efetuarSubtracao() //vai efetuar a subtraçao dos itens dentro da array subtraçao
            atualizarFirstDisplay() //vai atualizar o first display adicionando o sinal
    
            console.log(numerosDigitados)//teste
            console.log(diminuir)//teste
    
            break

        }

    }




}

/* quando clicar em igual, precisa somar as arrays guardadas(somar, dividir etc) e a atual => que pode ser o resultado parcial por enquanto */