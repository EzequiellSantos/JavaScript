var ver = document.getElementById('ver')
ver.addEventListener('click', clicou)
var res = document.getElementById('res')
var inp = document.querySelectorAll('.allInputs')[2]
var contain = document.getElementById('contain')


inp.addEventListener('keydown', function(event){

    if(event.keyCode === 13){
        clicou()
    }

})

function clicou(){

    try{

        if(inputA.value != '' && inputB.value != '' && inputC.value != ''){

            let a = inputA.value
            let b = inputB.value
            let c = inputC.value
        

            var raizes = calculaBhaskara(a, b, c)
        

            if(raizes.x1 != undefined) {

                contain.innerHTML += `
                <div id="res">
                <p class="first-p">
                    A equação é: ${b}<sup>2</sup> - 4 . ${a} . ${c} 
                </p> 
                <br> 
                <p>
                    Δ: ${raizes.delta}
                </p>
                <br>
                <p>
                    x1: ${raizes.x1} <br><br>
                    x2: ${raizes.x2}
                </p>
                </div>`

            } else {

                contain.innerHTML += `
                <div id="res">
                <p  class="first-p">
                    A equação é:  Δ = ${b}<sup>2</sup> - 4 . ${a} . ${c} 
                </p> 
                <br> 
                <p>
                    Δ = ${raizes.delta}
                </p>
                <br>
                ${raizes.noExat}
                </div>`
                

            }

            checkRes()

        } else{

            throw new Error("Preencha Todos os Campos :)")

        }
    
    } catch (erro) {

        window.alert("Error: " + erro.message)
        return null

    }


} 


function calculaBhaskara(a, b, c){

    let delta = b ** 2 - 4 * a * c

    let raizDelta = Math.sqrt(delta)

    if(raizDelta % 1 == 0){ // verificação se delta possui raiz exata

        var x1 = (-b + raizDelta) / (2 * a)
        var x2 = (-b - raizDelta) / (2 * a)

        return { x1: x1, x2: x2, delta: delta }

    } else{

        var noExat = `<p>Delta não possui raiz exata.</p>`
        return  {delta: delta, noExat: noExat }

    }

}

function checkRes() {
    
    if(res.hasChildNodes()){

        res.style.display = 'block'

    }else{

        res.style.display = 'none'

    }

}

checkRes()


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