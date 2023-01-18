var ver = document.getElementById('ver')
ver.addEventListener('click', clicou)


 function clicou(){
    var res = document.getElementById('res')
    var a = window.prompt('Digite o valor de a')
    var b = window.prompt('Digite o valor de b')
    var c = window.prompt('Digite o valor de c')

    var delta = b ** 2 - 4 * a * c //conta do delta

    res.innerHTML += `<p>A equação atual é  ${a}x<sup>2</sup> + ${b}x + ${c} = 0</p> `//numeros do delta
    res. innerHTML += `O cálculo realizado será &#x0394 = ${b}x<sup>2</sup> - 4 . ${a} . ${c}`//calculo
    res.innerHTML += `<p>Delta é igual a <mark>  &#x0394 = ${delta} </mark></p> <br><hr><br>`//resposta do delta
} 


/////////////////////////////////////////////


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