var cnvrt = document.getElementsByClassName('botao')[0]
cnvrt.addEventListener('click', clicou)

function clicou(){
    var res = document.getElementById('class')
    var Clsu = window.Number(prompt('Digite uma temperatura em °C (Celsius)'))
    //var vlr = Number(Clsu.value)
    var klvn = Clsu + 273
    var Fhrein = Clsu * 1.8 + 32

    //var ttkelvin = Number.parseFloat(klvn.toFixed(2))
    //var ttfhrein = Number.parseFloat(Fhrein.toFixed(2))

    res.innerHTML = `<p><strong>A temperatura ${Clsu}, Corresponde a...</strong></p>`
    res.innerHTML += `<p>${klvn}°K (Kelvin)</p>`
    res.innerHTML += `<p>${Fhrein}°F (Fahrenheint)</p>`
}