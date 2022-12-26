window.document.write('Olá,  mundo <br>')
        //escrever um texto

        window.document.write(window.document.charset + '<br>')
        //escrever o tipo de letra que está sendo usado

        window.document.write(window.navigator.appCodeName + '<br>')
        //nome do fabricante do navegador

        window.document.write(window.document.URL)
        //mostra a URL da página

        var p1 = window.document.getElementsByTagName('p')[0]//primeiro parágrafo
        var p2 = window.document.getElementsByTagName('p')[1]//segundo parágrafo
        var corpo = window.document.body//body

        window.document.write(' <br> o texto fica assim - - - ' + p2.innerText)
        //repetir sem marcação

        window.document.write(' <br>O texto é assim - - - '+ p2.innerHTML)
        //repetir com marcação

        

        p2.style.color = '#ffff05'
        //colocar  a cor amarela no segundo parágrafo
        p2.style.fontWeight = 'bolder'
        //deixar o segundo texto preto

        corpo.style.lineHeight = '2.0em'
        corpo.style.background = '#ff0081'
        //mudar o line-weight e a cor do body