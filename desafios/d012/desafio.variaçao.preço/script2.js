//levy

var botao = document.getElementById('calc')
botao.addEventListener('click', clicou) // função

var bodao = window.document.body
bodao.style.textAlign = 'left' // style do body

function clicou(){
    var res = document.getElementById('res')
    var pa = window.prompt('Digite o preço antigo')
    var pn = window.prompt('Digite o preço atual')
    res.innerText = '' // limpa


    if (pa - pn < 0) {
        var aoub = 'mais caro'
        var aoud = '<mark class="bix">aumentou</mark>'
        var coub = 'cima'
        var dif = pn - pa
        var porc = (dif *100) / pa // procentagem
    } else { 
        var aoub = 'mais barato'
        var aoud = '<mark class="nobix">diminuiu</mark>'
        var coub = 'baixo'
        var dif = pa - pn
        var porc = (dif * 100) / pa // porcentagem
    }

    //var patt = String(pa.toFixed(2).replace('.',','))
    //var pntt = String(pn.toFixed(2).replace('.',','))          //formatações de . para ,
    //var diftt = String(dif.toFixed(2).replace('.',','))
    var porctt = String(porc.toFixed(2).replace('.',','))

    res.innerHTML += `<p>O produto custava R$ ${pa} agora custa R$ ${pn}</p> `
    res.innerHTML += `<p>O produto está ${aoub}!</p>`
    res.innerHTML += `<p>o preço ${aoud} R$ ${dif} em relação ao preço anterior </p>`
    res.innerHTML += `<p>Uma variação de ${porctt}% pra ${coub}</p>`


} 








//////////////////////

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