var ver = document.getElementById('ver')
ver.addEventListener('click', clicou)


function clicou(){

    try{

        if(inputA.value != '' && inputB.value != '' && inputC.value != ''){

            let a = inputA.value
            let b = inputB.value
            let c = inputC.value
        

            var raizes = calculaBhaskara(a, b, c)
        
            console.log('x1:', raizes.x1)
            console.log('x2:', raizes.x2)
            console.log('Δ:', raizes.delta)

        } else{

            throw new Error("Preencha Todos os Campos")

        }
    
    } catch (erro) {

        console.error('Erro:', erro.message)
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

        console.log('Delta não possui raiz exata.')
        return  {delta: delta}

    }

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