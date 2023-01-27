


function adicionou (){
    var res = document.getElementById('res')
    var num = Number(document.getElementById('num').value)
     
    arry.push(num)

    res.innerHTML += `Valor ${num} adicionado <br>`
    
}
 
 var arry = []

 

function finalizou (){
    var res_2 = document.getElementById('res_2') 
    res_2.innerHTML = ''
    res_2.innerHTML += `<p>Ao todo temos ${arry.length} Número Cadastrados </p>`
    res_2.innerHTML +=`<p>${arry.sort()}</p>`
    res_2.innerHTML += `<p>O Menor Número é o ${arry.at(0)}</p>`
    res_2.innerHTML += `<p>O Maior Número é o ${arry.at(-1)}</p>`
    res_2.innerHTML += `<p> ${arry} </p>`
    
} 

// https://pt.stackoverflow.com/questions/549721/como-somar-medidas-de-um-array