var teste = document.getElementById("hora");

function executando(){
    teste.innerHTML += "<br> Hello <br>"
}

var intervaloFunction = setInterval(executando, 500)

 setTimeout(function (){ // cancelamento da função após 3 segundos atraves da função clearInterval
    clearInterval(intervaloFunction);
    teste.innerText = "repetição cancelada com 30 segundos"
}, 30000) 