var firstInput = document.getElementById('firstInput') // primeiro input que vai aparecer para o usuário
var secondInput = document.getElementById('secondInput') // segundo input que vai aparecer para o usuário

let firstDisplay = '' //variável que vai armazionar dados para o primeiro input
let secondDisplay = '' //variável que vai armazionar dados para o segundo input

function atualizarFirstDisplay(){ //atualizar display

    firstInput.value = firstDisplay //adiciona o valor atribuído ao primeiro input

}


let resultadoParcial = '' //numeros digitados apenas
let resultadoFinal = '' //resultado das operações

function atualizarSecondDisplay(){
/* 

aqui deve ter uma verificação, se é o:
- numero digitado só
- resultado da soma do first input
- resultado depois de apertado igual

*/

    secondInput.value = `= ${resultadoParcial}` //apenas os numeros digitados sem o resultado

}

let numerosDigitados = [] //armazena números digitados

//quando o usuário entrar na página ou limpar o input
function checkSecondDisplay(){

    if(secondInput.value == ''){ //verifica se o segundo input está vazio e coloca um zero
        
        secondInput.value = 0

    }
   

}

checkSecondDisplay() //verifica quando o documento carrega, pra prencher corretamente o secondDislay

function addNumber(number){

    firstDisplay += number //adiciona o numero
    resultadoParcial += number //adiciona apenas o numero digitado
    numerosDigitados.push(number) //coloca os numeros digitados dentro da array

    atualizarFirstDisplay()
    atualizarSecondDisplay() 

    console.log(numerosDigitados)

}

let operador = '' // armazena o operador digitado

let somar = [] //array para efetuar somas
let resultSoma = 0 // variavel para armazenar o resultado das somas
function efetuarSoma(array){ //efetuação da soma dos itens dentro da array e armazena o resultado na resultSoma



}

let diminuir = []
let resultSubtra = 0

let dividir = []
let resultDivisao = 0

let multiplicar = []
let resultMultipli = 0

let porcentagem = []
let resultPorcent = 0


function clicouOperador(op){
    
    let numeroAntesOp = 0 //numero presente antes do sinal atribuido

    operador = op //definindo o operador

    switch(operador){

        case '+':

        firstDisplay += ` ${op} ` //adicionando o operador em forma de string no primeiro display

        numeroAntesOp = numerosDigitados //armazena os numeros antes do sinal, para limpar a array
        numerosDigitados = [] // limpa a array
        somar.push(numeroAntesOp) //adiciona os números armazenados na array de soma

        efetuarSoma(somar) //vai efetuar a soma dos itens dentro da array Soma
        atualizarFirstDisplay() //vai atualizar o first display adicionando o sinal

        console.log(numerosDigitados)//teste
        console.log(somar)//teste

        break
    }


}

/* quando clicar em igual, precisa somar as arrays guardadas(somar, dividir etc) e a atual => que pode ser o resultado parcial por enquanto */