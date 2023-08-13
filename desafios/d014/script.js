var res = document.querySelector("#resultado");
let ipor =  document.querySelector("#ipor");


ipor.addEventListener('keydown', function(event){

    if(event.keyCode === 13){//validação da tecla enter(código 13)

        let iporcent =  Number(document.querySelector("#ipor").value);
        let ipornumb =  Number(document.querySelector("#inum").value);
        
        
        function calcPercent(numero, percent){

            let result = numero * percent / 100
            return result
            
        }

        res.innerHTML = `<span>${calcPercent(ipornumb, iporcent).toFixed(2)}</span>`
    }

})

function executCalc(){

    let iporcent =  Number(document.querySelector("#ipor").value);
    let ipornumb =  Number(document.querySelector("#inum").value);

    function calcPercent(numero, percent){

        let result = numero * percent / 100
        return result
        
    }

    res.innerHTML = `<span>${calcPercent(ipornumb, iporcent).toFixed(2)}</span>`
    refresh.innerHTML = '<span class="material-symbols-outlined">refresh</span>'
    
}

