    
    
    //primeiro botão
    var p = document.getElementById('pri')
    var a = document.getElementsByTagName('a')[0]
    var h1 = document.getElementsByTagName('h1')[0]
    //segundo botão
    var a2 = document.getElementById('sec')
    var p2 = document.getElementsByTagName('a')[1]

        p.style.background = '#ff0081'
        p2.style.background = '#ff0081'

            function clicar (){
                p.style.scale = '0.7'
                p.style.transition = '0.3s'
            }
            
            /* function soltou (){
                a.style.scale = '0.5'
                p.style.transition = '0.7s'
            } */

            function entrar(){
                a.style.background = '#ff0050'
                a.style.scale = '0.9'
                a.style.transition = 'all 0.8s'
            }

            function sair(){
                p.style.background = '#ff0081'
                p.style.scale = '1.0'
            }

            function segurou(){
                p.style.color = '#00bbff'
            }

            //Evento do Segundo Botão
            p2.addEventListener('mouseenter', entrou)
            p2.addEventListener('mouseout', saiu)

            function entrou (){
                p2.style.scale = '0.9'
                p2.style.transition = '0.8s'
            }

            function saiu(){
                p2.style.scale = '1'
            }






var bo = document.body

bo.addEventListener('wheel', rolou)
h1.addEventListener('keyup', copr)

function rolou(){
    bo.style.backgroundColor = '#aabbaa'
}

function copr(){
    h1.style.color = '#ff0000'
}
