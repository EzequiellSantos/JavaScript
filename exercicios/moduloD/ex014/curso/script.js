///Com o Curso em vídeo


function calculou(){
    var tabu = document.getElementById('slct')
    var num = document.getElementById('num')
    
     
    if(num.value.length === 0){
        alert('Por Favor Digite um número')
    }else{ 
        var numtt = Number(num.value)
        tabu.innerHTML = ' '
        for(var c = 1 ; c <= 10 ; c++ ){
            
            var item = document.createElement('option')
            item.innerHTML += `<br> ${numtt} x ${c} = ${numtt*c} <br>`
            item.value += `tab ${c}`
            tabu.appendChild(item)

        }
    }
}