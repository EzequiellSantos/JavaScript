
var res = document.getElementById('res')
var res_2 = document.getElementById('res_2')
var arry = []

function adicionou (){
    var num = document.getElementById('num')

    if(Number(num.value) >= 0 && Number(num.value) <=100 && Number(num.value.length) > 0){
        arry.push(Number(num.value))
        res_2.innerHTML = ''
        res.innerHTML += `Valor ${num.value} adicionado <br>`
    }else if(num.value.length === 0){
        res.innerHTML += `Valor 0 adicionado <br>`
    }else{
        alert('DIgite um Número acima de 0')
    }
    num.value = ''
    num.focus()
}
 


function finalizou (){
    if(arry.length == 0 ){
       alert('Adicione Números')
    }else{
        let tot = arry.length
        let maior = arry[0] //equivale a 1
        let menor = arry[0]//equivale a 1
        let soma = 0
        let media = 0
        
        for(let pos in arry){
            soma += arry[pos]
            media = soma / tot
            if(arry[pos] > maior)
                maior = arry[pos]
            
            if(arry[pos] < menor)
                menor = arry[pos]
        
        }
        
        let mediatt = Number(media.toFixed(2))

        res_2.innerHTML = ''
        res_2.innerHTML += `<p>Ao todo temos ${tot} Número Cadastrados </p>`

        arry.sort()

        res_2.innerHTML += `<p>O Menor Número é o ${menor}</p>`
        res_2.innerHTML += `<p>O Maior Número é o ${maior}</p>`
        

        res_2.innerHTML += `<p>A Soma dos Valores é ${soma} </p>`
        res_2.innerHTML += `<p>A Média dos Valores é ${mediatt}</p>`

        var finl  = document.getElementById('finl')
        finl.innerHTML = '<div id="reset">Calcular Novamente</div>'
    }

    var reset = document.getElementById('reset')
    reset.addEventListener('click', reload)

    function reload(){
        window.location.reload(true)
    }
    
} 

/* var menu = document.getElementById('menu');
var menuImg = document.getElementById('img-menu') */
var homeImg = document.getElementById('img-home');


var div01 = document.getElementById('menu01')
var div02 = document.getElementById('menu02');



/* menuImg.addEventListener('click', function() {
    menu.classList.add('actived')
    homeImg.style.display = 'block'
    menu.style.transition = 'none'
})//menu hambuger */

function toggleKeyframe() {

    var menuSt = document.getElementById('setas');

    if (setas.classList.contains("actived_02")){
        homeImg.style.display = 'none'
        homeImg.classList.remove('mostrar')
/*         menuSt.style.transition = 'all 0.6s ease-in-out' */
        menuSt.classList.remove('actived_02')
    
        div01.classList.remove('actived')
        div02.classList.remove('actived')
    }else{
        menuSt.classList.add('actived_02')
        menuSt.style.transition = 'none'
        homeImg.classList.add('actived_02')

        homeImg.style.display = 'block'
        setTimeout(function(){
            homeImg.classList.add('mostrar')
        }, 600)
        homeImg.style.display = 'block'

        div01.classList.add('actived')
        div02.classList.add('actived')
    }
    
}//para menu seta






/* var divActiv = document.getElementById('restart')

divActiv.addEventListener('click', function() {
    homeImg.style.display = 'none'
    menuSt.style.transition = 'all 0.6s ease-in-out'
    menuSt.classList.remove('actived_02')

    div01.classList.remove('actived')
    div02.classList.remove('actived')
})
 */












/* document.addEventListener('click', function(evento) {
    const clicadoDentroDoElemento = menuSt.contains(evento.target)
  
    if(!clicadoDentroDoElemento){
      homeImg.style.display = 'none'
      menuSt.style.transition = 'all 0.6s ease-in-out'
      menuSt.classList.remove('actived_02')

      div01.classList.remove('actived')
      div02.classList.remove('actived')
    }
}) */


/* document.addEventListener('click', function(evento) {
    const clicadoDentroDoElemento = menu.contains(evento.target)
  
    if(!clicadoDentroDoElemento){
      homeImg.style.display = 'none'
      menu.style.transition = 'all 0.6s ease-in-out'
      menu.classList.remove('actived')
    }
}) */

// https://pt.stackoverflow.com/questions/549721/como-somar-medidas-de-um-array