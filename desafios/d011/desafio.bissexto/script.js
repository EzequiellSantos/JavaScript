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

var ver = document.getElementById('ver')
var res = document.getElementById('res')

ver.addEventListener('click', clicou)

function clicou(){
    var ano = window.prompt('Qual é o ano que você quer verificar?')

    var anodays = Number.parseInt(ano / 4 )

    //window.alert(typeof(anodays))
    var calc = anodays / 4
    var result = Number.parseInt(calc)

    var bix = new Date()
    var day = bix.getUTCDay()

    window.alert(`${day}`)
   /*  if(day == '366'){
        res.innerText = "é biseexto"
    }else{
     res.innerText = 'não é bissexto'
    } */
} 