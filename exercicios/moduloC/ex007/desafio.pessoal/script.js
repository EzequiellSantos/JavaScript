
var vrf = document.getElementById('verificacao')
vrf.addEventListener('click', verificar)

function verificar (){
    var inpt = document.getElementsByName('txtrga')[0] 
    var pais = inpt.value
    var res = document.getElementById('res')
    res.innerHTML = `<p>Você mora em <strong>${pais}</strong> Certo?</p><br>`

    if (pais == 'Brasil'){
        res.innerHTML += '<p>Você é Brasileiro, eu também sou :)</p>'
    } 
    else{
        res.innerHTML += '<p>Você é estrangeiro</p>'
    }
    

    

    /* if (pais == 'Estados Unidos','USA','EUA','Estados Unidos da America'){
        res.innerHTML ='<p>Você é americano, que legal!</p>'
    }

    else{
        res.innerHTML += '<p>Você é estrangeiro</p>'
    } */
}