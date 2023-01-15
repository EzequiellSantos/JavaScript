var botao = document.getElementById('calc')
botao.addEventListener('click', clicou)

var bodao = window.document.body
bodao.style.textAlign = 'left'

function clicou(){
    var res = document.getElementById('res')
    var pa = window.prompt('Digite o preço antigo')
    var pn = window.prompt('Digite o preço atual')
    res.innerText = ''


    if (pa - pn < 0) {
        var aoub = 'mais caro'
        var aoud = 'aumentou'
        var coub = 'cima'
        var dif = pn - pa
        var porc = (dif *100) / pa
    } else { 
        var aoub = 'mais barato'
        var aoud = 'caiu'
        var coub = 'baixo'
        var dif = pa - pn
        var porc = (dif * 100) / pa
    }

    var patt = String(pa.toFixed(2).replace('.',','))
    var pntt = String(pn.toFixed(2).replace('.',','))
    var diftt = String(dif.toFixed(2).replace('.',','))
    var porctt = String(porc.toFixed(2).replace('.',','))

    res.innerHTML += `<p>O produto custava R$ ${patt} agora custa R$ ${pntt}</p> `
    res.innerHTML += `<p>O produto está ${aoub}!</p>`
    res.innerHTML += `<p>o preço ${aoud} R$ ${diftt} em relação ao preço anterior </p>`
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