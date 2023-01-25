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


//-----------------------------------------------------

var ver = document.getElementById('ver')
var res = document.getElementById('res')

ver.addEventListener('click', clicou)

function clicou(){
    var nome = prompt('Qual o nome do Aluno(a)')

    /* var tipo = typeof nome
    res.innerText = `${tipo}` */


    if(nome === 'number'){
        // erro de typeof - - - - - não funciona
        res.innerHTML += `<p>[ERROR_1]</p><hr class="mnr">` 

    }else{

        var n1 = Number(window.prompt(`Digite a nota 1 de ${nome}`))
        var n2 = Number(window.prompt(`Digite a nota 2 de ${nome}`))
        var soma = (n1 + n2) / 2
        var somafrm = Number.parseFloat(soma.toFixed(1))

        if(somafrm >= 0 && somafrm < 3){
            //resposta reprovado
            res.innerHTML += `<p>Aluno(a) <span class="nome-aluno">${nome}</span><br><br> Situação: <mark class="nobix">Reprovado</mark></p><hr class="mnr">`

        }else if( somafrm > 6 && somafrm <= 10){
            //resposta aprovado
            res.innerHTML +=  `<p>Aluno(a) <span class="nome-aluno">${nome}</span><br><br> Situação: <mark class="bix">Aprovado</mark></p><hr class="mnr">`

        }else if( somafrm >= 3 && somafrm <= 6){
            //resposta recuperação
            res.innerHTML += `<p>Aluno(a) <span class="nome-aluno">${nome}</span><br><br> Situação: <mark class="intr">Recuperação</mark></p><hr class="mnr">`

        }
        else{
            // erro de dados
            res.innerHTML += `<p>[ERROR_2]<hr class="mnr">`

        }
    } 
}