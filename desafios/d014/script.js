var res = document.querySelector("#resultado");

function executCalc(){

    let iporcent =  Number(document.querySelector("#ipor").value);
    let ipornumb =  Number(document.querySelector("#inum").value);

    function calcPercent(numero, percent){

        let result = numero * percent / 100
        return result
        
    }

    res.innerHTML = `<span>${calcPercent(ipornumb, iporcent).toFixed(2)}</span>`
}

