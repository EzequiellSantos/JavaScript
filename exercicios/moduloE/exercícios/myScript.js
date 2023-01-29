
var res = document.getElementById('res')
var res_2 = document.getElementById('res_2')
var arry = []

function adicionou (){
    var num = Number(document.getElementById('num').value)

    if(num >= 1 && num <=100){
    arry.push(num)
    res.innerHTML += `Valor ${num} adicionado <br>`
    } else{
        alert('DIgite um Número acima de 0')
    }
}
 


function finalizou (){
    var num = Number(document.getElementById('num').value)
    if(num === 0 ){
       alert('Adicione Números')
    }else{
    
        res_2.innerHTML = ''
        res_2.innerHTML += `<p>Ao todo temos ${arry.length} Número Cadastrados </p>`

        arry.sort()
        
        res_2.innerHTML += `<p>O Menor Número é o ${arry.at(0)}</p>`
        res_2.innerHTML += `<p>O Maior Número é o ${arry.at(-1)}</p>`

    }
} 

// https://pt.stackoverflow.com/questions/549721/como-somar-medidas-de-um-array