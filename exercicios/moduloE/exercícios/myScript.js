var num = Number(document.getElementById('num').value)
var res = document.getElementById('res')
var res_2 = document.getElementById('res_2')
var arry = []

function adicionou (){
    
    arry.push(num)
    res.innerHTML += `Valor ${num} adicionado <br>`

}
 


function finalizou (){
    if(num === 0 ){
       alert('Adicione Números')
    }else{
    
        res_2.innerHTML = ''
        res_2.innerHTML += `<p>Ao todo temos ${arry.length} Número Cadastrados </p>`
        res_2.innerHTML +=`<p>${arry.sort()}</p>`
        res_2.innerHTML += `<p>O Menor Número é o ${arry.at(0)}</p>`
        res_2.innerHTML += `<p>O Maior Número é o ${arry.at(-1)}</p>`

    }
} 

// https://pt.stackoverflow.com/questions/549721/como-somar-medidas-de-um-array