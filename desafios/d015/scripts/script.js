//controle do Menu Share
var shareIcon = document.querySelector('#div-icon-share');
var allMenu = document.querySelector('#menu-share')
var menu = document.querySelector('#content-share')


shareIcon.onclick = () => { //ativar e desativar menu com clique

    if (allMenu.classList.contains('menu-off') || allMenu.classList.contains('recolhendo-menu')) {

        allMenu.classList.add('exibindo-menu')
        allMenu.classList.remove('menu-off')
        allMenu.classList.remove('recolhendo-menu')

    } else {

        allMenu.classList.remove('exibindo-menu')
        allMenu.classList.add('recolhendo-menu')

    }

}

menu.onmouseleave = () => { //ocultar menu ao retirar o mouse de dentro do menu

    allMenu.classList.add('recolhendo-menu')
    allMenu.classList.remove('exibindo-menu')

} 

xMenu.onclick = () => { //ocultar menu pelo X

    allMenu.classList.remove('exibindo-menu')
    allMenu.classList.add('recolhendo-menu')

}

copyLinkIcon.onclick = () => { // Usando a API de área de transferência para copiar o texto


    // Texto que você deseja copiar
    const textoCopiar = 'https://ezequiellsantos.github.io/JavaScript/desafios/d015/';

    // Criando um elemento oculto para copiar
    const input = document.createElement('input');
    input.value = textoCopiar;
    document.body.appendChild(input);

    // Selecionando e copiando o texto
    input.select();
    input.setSelectionRange(0, 99999); // Para dispositivos móveis
    document.execCommand('copy');

    // Removendo o elemento de texto oculto
    document.body.removeChild(input);

    copyLinkIcon.innerHTML = 'Copiado'
    copyLinkIcon.classList.add('copyed')

}


var date = new Date() //coleta de data em dias, mês e ano

let day = date.getDay()
let dayMonth = date.getDate()
let month = date.getMonth()
let year = date.getFullYear()
let intervaloRelogio;

switch (day) {

    case 0:
        day = "Domingo"
        break

    case 1:
        day = "Segunda-Feira"
        break

    case 2:
        day = "Terça-Feira"
        break

    case 3:
        day = "Quarta-Feira"
        break

    case 4:
        day = "Quinta-Feira"
        break

    case 5:
        day = "Sexta-Feira"
        break

    case 6:
        day = "Sábado"
        break

    default:
        window.alert("ERROR => day")
        break

}

switch (month) {

    case 0:
        month = "Jan"
        break

    case 1:
        month = "Fev"
        break

    case 2:
        month = "Mar"
        break

    case 3:
        month = "Abr"
        break

    case 4:
        month = "Mai"
        break

    case 5:
        month = "Jun"
        break

    case 6:
        month = "Jul"
        break

    case 7:
        month = "Ago"
        break

    case 8:
        month = "Set"
        break

    case 9:
        month = "Out"
        break

    case 10:
        month = "Nov"
        break

    case 11:
        month = "Dez"
        break
}

document.getElementById("date").innerHTML = `<p>${day} ${dayMonth} de ${month} ${year}</p>`


function atualizarRelogio() { 

    const now = new Date();
    const hour = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    hora.innerHTML = `<p>${hour} : ${minutes} : <p id="p-fixo">${seconds}</p> </p>`;

}


/* 
    configurações para otimização da página e evitar lentidão e excesso de memória utilizada
    pelo navegador
*/

function iniciarRelogio(){

    intervaloRelogio = setInterval(atualizarRelogio, 1000); //atualização automática do relógio
    atualizarRelogio();

}

function pararRelogio(){

    clearInterval(intervaloRelogio);

}


/* 
    verificação para identificar se 
    o usuário está ou não na página
*/

function pageVisibility(){

    if(document.hidden){

        pararRelogio();

    }else{

        iniciarRelogio();
        titulo.innerHTML = 'Direct by Kiel'

    }

}

document.addEventListener('visibilitychange', pageVisibility)

window.addEventListener('blur', function(){ // qunado o usuário sai da página

    pararRelogio();
    //titulo.innerHTML = 'Direct by Kiel :('

})

window.addEventListener('focus', function(){ //quando a aba ganha foco

    iniciarRelogio();

})

iniciarRelogio();

window.addEventListener('beforeunload', function(){ //parar o relógio quando o user mudar de página ou minimizar

    pararRelogio();

})


/* 
    Gerenciamento do Tema do site
*/

document.addEventListener('DOMContentLoaded', function () {

    const temaEstilos = document.getElementById('tema-estilos');// animation
    var toggleSection = document.getElementById("toggle-icon")// section que guarda lua | sol

    const temaPreferido = localStorage.getItem('tema-preferido') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    // Aplicação dos estilos iniciais
    aplicarTema(temaPreferido);
    

    // Mudando e Guardando o tema escolhido
    toggleSection.onclick = () => {
 
        let novoTema = temaEstilos.dataset.tema === 'light' ? 'dark' : 'light';
        aplicarTema(novoTema);
        localStorage.setItem('tema-preferido', novoTema); //guardando o tema escolhido  
        
    };

    function aplicarTema(tema) {

        // Adicionar ou remover a classe conforme o tema
        document.body.classList.remove('dark', 'light');
        document.body.classList.add(`${tema}`);
        msg.innerHTML = `<p>Você esta no tema ${tema}`

        // Atualizar o dataset para referência futura
        temaEstilos.dataset.tema = tema;

    }

    
});


/* 
    Checagem de conteúdo, para atribuir ou retirar 
    o carregamento de conteúdo
*/

var contain = document.querySelectorAll('#article');
var grupo = document.querySelectorAll('.cards-content');
var weatherWidget = document.querySelectorAll('#aside-weather');


grupo.forEach(function (grupo) { // Verifica se o grupo possui algum elemento filho e se possuir remove o skeleton

    if (grupo.hasChildNodes()) {

        grupo.classList.remove('skeleton')

    } else {

        console.log('<- widgets free');

    }

});




