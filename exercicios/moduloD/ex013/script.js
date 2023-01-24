function  calculou (){

    var inicio = document.getElementById('inpt1')
    var fim = document.getElementById('inpt2')
    var passo = document.getElementById('inpt3')
    var res = document.getElementById('res')

    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)


////////////////// validção do passo ///////////////////
    if(p == 0){
        alert('O passo deve ser maior que zero!')
        alert('atualize a página e corrija o passo')
    }
    else if(p < 0){
        alert('O passo deve ser maior que zero!')
        alert('atualize a página e corrija o passo')
    }else{
        res.innerHTML += '<br>'
        if(i < f){//output da invalidação
            for(var ini = i ; ini <= f ; ini += Math.abs(p)){
                res.innerHTML += `${ini}`
                res.innerHTML += (ini != f) ? ' -> ' : '.'
            }
        }
        else{//output da invalidação
            for(var ini = i ; ini >= f ; ini -= Math.abs(p)){
                res.innerHTML += `${ini}`
                res.innerHTML += (ini != f) ? ' -> ' : '.'
            }
        }
    }
/////////////////// validação do passo ////////////////////



    if ( inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
        alert('[ERROR_4] Preencha os campos')// validação dos inputs
    }else if(i < f ) {
        //crescente
        res.innerText = 'contando: '

        for( var c = i ; c < f ; c += p){
        res.innerHTML += ` ${c} 👉`
        }  
        res.innerHTML += ' 🏁'
    }else if(i > f ) {
        //decrescente
        res.innerText = 'contando: '
        for(var d = i ; d > f ; d -= p){

        res.innerHTML += ` ${d} 👉`
                
        }
        res.innerHTML += ' 🏁' 
    }else{             
    res.innerHTML += '[ERROR_5] Dados Inválidos'       
    }
}
