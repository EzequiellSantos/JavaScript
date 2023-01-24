function clicou (){
    var inicio = document.getElementById('inpt1')
    var fim = document.getElementById('inpt2')
    var passo = document.getElementById('inpt3')
    var res = document.getElementById('res')
    

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
        alert('error kklkk')
    } else {
        res.innerText = 'contando'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        for( var c = i ; c <= f ; c += p){
        res.innerHTML += `${c}`
        }  
    }
    
} 

///////////////////

