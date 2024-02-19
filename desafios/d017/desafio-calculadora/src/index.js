var firstInput = document.getElementById('firstInput') // primeiro input que vai aparecer para o usuário
var secondInput = document.getElementById('secondInput') // segundo input que vai aparecer para o usuário

let firstDisplay = '' //variável que vai armazionar dados para o primeiro input
let secondDisplay = '' //variável que vai armazionar dados para o segundo input
let resultadoParcial = '' //numeros digitados apenas
let resultadoFinal = '' //resultado das operações
let checagemResultado = 0 // checagem de decimais
let checkDivisao = '' // checagem de divisões
let numerosDigitados = '' //armazena números digitados
let meuAmorChamadoZero = '' //armazena o valor de 0 para verificações
let pontoPresenteNoNumero = false // variável para validações
let ultimoOperador = '' // armazema o operador antigo 
let operador = '' // armazena o operador digitado
let atuaisContas = 0 // armazena a resposta da ultima conta feita
let comprimentoDecimal = 0  // armazena a quantidade de casas depois da virgula se um numero for do tipo real

let resultSoma = 0 // variavel para armazenar o resultado das somas
let somar = [] //array para efetuar somas

let resultSubtra = 0 // variavel para armazenar o resultado das subtrações
let diminuir = [] //array para efetuar as subtrações

let resultDivisao = 0 // variavel para armazenar o resultado das divisões
let dividir = [] //array para efetuar divisões

let resultMultipli = 0 // variavel para armazenar o resultado das dvisões
let multiplicar = [] // array para efetuar multiplicações

let resultPorcent = 0 // variavel para armazenar o resultado das porcentagens
let porcentagem = [] //array para efetuar porcentagens

let calculou = false // variavel para validar a recursividade
let deletou = false // variavel para validar a recursividade
let mudarSinal = true // variavel para validar a recursividade