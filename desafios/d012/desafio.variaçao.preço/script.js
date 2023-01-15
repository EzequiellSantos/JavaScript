var botao = document.getElementById('calc')
botao.addEventListener('click', clicou)

var bodao = window.document.body
bodao.style.textAlign = 'left'

function clicou(){
    var res = document.getElementById('res')
    var pa = 1100.35//window.prompt('Digite o preço antigo')
    var pn = 1000.75//window.prompt('Digite o preço atual')
    res.innerText = ''

   

    
    if (pa - pn < 0) {
        
        var dif = pn - pa
        var patt = String(pa.toFixed(2).replace('.',','))
        var pntt = String(pn.toFixed(2).replace('.',','))

        res.innerHTML += `<p>O produto custava R$ ${patt} agora custa R$ ${pntt}</p> `

        res.innerHTML += '<p>O produto esta mais caro!</p>'

        var diftt = String(dif.toFixed(2).replace('.',','))
        res.innerHTML += `<p>o preço subiu R$ ${diftt} em relação ao preço anterior </p>`

        var porc = (dif *100) / pa
        var porctt = String(porc.toFixed(2).replace('.',','))
        res.innerHTML += `<p>Uma variação de ${porctt}% pra cima</p>`

    } else {     
        var dif = pa - pn
        var patt = String(pa.toFixed(2).replace('.',','))
        var pntt = String(pn.toFixed(2).replace('.',','))

        res.innerHTML += `<p>O produto custava R$ ${patt} agora custa R$ ${pntt}</p> `
        
        res.innerHTML += '<p>O produto está mais barato!</p>'

        var diftt = String(dif.toFixed(2).replace('.',','))
        res.innerHTML += `<P>O preço caiu R$ ${diftt} em relação ao preço anterior</p>`
        
        var porc = (dif * 100) / pa
        var porctt = String(porc.toFixed(2).replace('.',','))
        res.innerHTML += `<p>Uma variação de ${porctt}% pra baixo</p>`
    }
    
    
    
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