//kiel
var ver = document.getElementById('ver')
var res = document.getElementById('res')

ver.addEventListener('click', clicou)

function clicou(){
    var ano = window.prompt('Qual é o ano que você quer verificar?')
    

    var anodays = Number.parseInt(ano % 4 )//resto da divisao

    if(anodays == 0){
        res.innerHTML += `<br><p>O ano ${ano} <mark class="bix">é BISSEXTO</mark></p><br><hr>`
    }else{
        res.innerHTML += `<br><p>O ano ${ano} <mark class="nobix">Não é BISSEXTO</mark></p><br><hr>`
    }


} 

////////////////////////

var animateButton = function (e) {
    e.preventDefault;
    //reset animation
    e.target.classList.remove("animate");

    e.target.classList.add("animate");
    setTimeout(function () {
        e.target.classList.remove("animate");
    }, 700);
};

var bubls = document.getElementsByClassName("bubl");

for (var i = 0; i < bubls.length; i++) {
    bubls[i].addEventListener("click", animateButton, false);
} 






