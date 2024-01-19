const key = 'adbe00f238877e96d2b64a528c71ebb2'

function consumirDados(dados){

    document.getElementById('tempo-cidade').innerHTML = "Tempo em " + dados.name

    document.getElementById('graus').innerHTML = dados.main.temp.toFixed(0) + "°C"

    document.querySelector('.info-clima').innerHTML = dados.weather[0].description

    document.querySelector('.img-info').setAttribute('src', `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`)

    document.querySelector('#umidade').innerHTML = "Umidade: " +  dados.main.humidity + "%"

    console.log(dados)
}   

async function buscarCidade(cidade){ //quando for funções que precisam de servidor externo, se usa async antes

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json())
    // o await diz para que o código espere até quando  o servidor responder

    consumirDados(dados)
}

pesquisa.onclick = () => {

    var townName = document.getElementById('townName').value
    buscarCidade(townName)

}

townName.addEventListener('keydown', function(event){
    if(event.keyCode === 13){

        var townName = document.getElementById('townName').value
        buscarCidade(townName)
        
    }
})

