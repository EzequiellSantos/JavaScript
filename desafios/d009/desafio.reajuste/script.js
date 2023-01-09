var ver = document.getElementById('ver')
ver.addEventListener('click', clicou)

function clicou(){
    var res = document.getElementById('res')
    var nome = window.prompt('Digite o nome do Funcionário')
    var sal  = Number(window.prompt(`Quanto ${nome} ganha?`))
    var esco = String(window.prompt('Digite (a) para aumento ou (d) para diminuir'))
    var pct  = Number(window.prompt('Qual a porcentagem de aumento ou diminuição do salário?'))

    var pctma = sal * pct / 100  
    var mais = pctma + sal
    var menos = sal - pctma

    // formatação de (sal) para decimal
    var salfmt = String(sal.toFixed(2).replace('.',','))

    //formatação de (mais) para decimal
    var ttmais = String(mais.toFixed(2).replace('.',','))

    // formatação de (menos) para decimal
    var ttmenos = String(menos.toFixed(2).replace('.',','))

   

    //formatação de (pctma) para decimal
    var tt = String(pctma.toFixed(2).replace('.',','))

    if (esco == 'a') {
        res.innerHTML += `<h3>O ${nome} Recebeu um aumento salarial!</h3>`
        res.innerHTML += `<p>O salário atual era R$ ${salfmt}.</p>`
        res.innerHTML += `<p>Com o aumento de ${pct}%, o salário vai aumentar R$ ${tt} no próximo mês</p>`
        res.innerHTML += `<p>A partir daí, ${nome} vai passar a ganhar R$ ${ttmais}</p><br><hr>`
    } 
    
    if (esco == 'd'){
        res.innerHTML += `<h3>O ${nome} Recebeu uma diminuição salarial!</h3>`
        res.innerHTML += `<p>O salário atual era R$ ${salfmt}.</p>`
        res.innerHTML += `<p>Com a diminuição de ${pct}%, o salário vai diminuir R$ ${tt} no próximo mês</p>`
        res.innerHTML += `<p>A partir daí, ${nome} vai passar a ganhar R$ ${ttmenos}</p><br><hr>`
    }  
    if (sal == ' '){   
        res.innerHTML = '<p>Não ouve reajuste :)</p><br><hr>'
    }
    if (esco == ' '){   
        res.innerHTML = '<p>Não ouve reajuste :)</p><br><hr>'
    }
    if (pct == ' '){   
        res.innerHTML = '<p>Não ouve reajuste :)</p><br><hr>'
    }

    

}