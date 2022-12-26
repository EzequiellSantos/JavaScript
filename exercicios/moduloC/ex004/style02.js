        var black = window.document.getElementById('msg') /*  selecionando por IDs */
        var p1 = window.document.getElementsByTagName('p')[0] /* selecionando por tags */
        var clss = window.document.getElementsByClassName('par')[0] /* selecionando por classes */
        document.write('texto duplicado -> '+ p1.innerText)
        
        clss.style.color = 'red'
        p1.style.background = 'black'
        black.style.background = 'green'

        //black.innerText = 'Agora é esse texto' /* código menor */
        window.document.getElementById('msg').innerText =  'deu certo' /* código completo porém maior */