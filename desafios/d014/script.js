var res = document.querySelector("#resultado");
let ipor =  document.querySelector("#ipor");




ipor.addEventListener('keydown', function(event){

    if(event.keyCode === 13){//validação da tecla enter(código 13)

        let iporcent =  Number(document.querySelector("#ipor").value);
        let ipornumb =  Number(document.querySelector("#inum").value);
    
        if(ipor.value.length == '' || inum.value.length == ''){

            alert('Preencha os Campos corretamente:)')

        }else if(iporcent >= 0 && iporcent <=200 ){      
            
            function calcPercent(numero, percent){
    
                let result = numero * percent / 100
                return result
                
            }
    
            res.innerHTML = `<span>${calcPercent(ipornumb, iporcent).toFixed(2)}</span>`

        }else{ 

            alert("Use Números acima de Zero e pequenos Na Porcentagem")

        }
    }    
})


function executCalc(){

    let iporcent =  Number(document.querySelector("#ipor").value);
    let ipornumb =  Number(document.querySelector("#inum").value);

    if(ipor.value.length == '' || inum.value.length == ''){

        alert('Preencha os Campos corretamente:)')

    }else if(iporcent >= 0 && iporcent <=200 ){      
        
        function calcPercent(numero, percent){

            let result = numero * percent / 100
            return result
            
        }

        res.innerHTML = `<span>${calcPercent(ipornumb, iporcent).toFixed(2)}</span>`

    }else{ 

        alert("Use Números acima de Zero e pequenos Na Porcentagem")

    }
    
}

