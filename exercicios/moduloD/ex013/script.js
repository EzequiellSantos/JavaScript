function  calculou (){

    var inicio = document.getElementById('inpt1')
    var fim = document.getElementById('inpt2')
    var passo = document.getElementById('inpt3')
    var res = document.getElementById('res')

    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)


    if ( inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {

        alert('[ERROR_4] Preencha os campos')// validação dos inputs

    }else if(p <= 0){

        alert('[ERROR_1] O passo deve ser maior que 0')
        res.innerHTML = ' '
        p += 1 //validção do passo

    }else if(i < f && f < 1001 ) {

        //crescente
        res.innerText = 'contando: '

        for( var c = i ; c <= f ; c += p){
        res.innerHTML += ` ${c} 👉`
        }  
        res.innerHTML += ' 🏁' // ou \u{1F600} 

    }else if(i > f && f < 1001 ) {
        //decrescente
        res.innerText = 'contando: '
        for(var d = i ; d >= f ; d -= p){

        res.innerHTML += ` ${d} 👉`         
        }
        res.innerHTML += ' 🏁'
    }else{        
    res.innerHTML = ''     
    res.innerHTML += '[ERROR_5] Dados Inválidos __ Precisa ser menor que 1000'       
    }
    
}


var menu = document.getElementById('menu');
var menuImg = document.getElementById('img-menu')
var homeImg = document.getElementById('img-home');



menuImg.addEventListener('click', function() {
    menu.classList.add('actived')
    homeImg.style.display = 'block'
    menu.style.transition = 'none'
})

document.addEventListener('click', function(evento) {
    const clicadoDentroDoElemento = menu.contains(evento.target)
  
    if(!clicadoDentroDoElemento){
      homeImg.style.display = 'none'
      menu.style.transition = 'all 0.6s ease-in-out'
      menu.classList.remove('actived')
    }
  })
