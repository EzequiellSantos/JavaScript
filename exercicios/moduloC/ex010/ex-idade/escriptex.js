
    var res = document.getElementById('res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    var imgnicio = document.getElementById('ima')
    ima.src = 'https://github.com/EzequiellSantos/JavaScript/blob/main/exercicios/moduloC/ex010/ex-idade/imagens/no.profile.jpg?raw=true'
    res.style.textAlign = 'center'
    res.appendChild(ima)//imagem sem perfil


function verificar(){

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('nas')


    if(fano.value.length == '0'  || fano.value > ano){

        window.alert('[ERROR] Verifique os dados e tente novamente')

    }else{

        var sexo = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var gen = ''

        if(sexo[0].checked){
            gen = 'Mulher'

            if(idade >= 0 && idade < 14){

                //criança
                img.setAttribute('src', 'imagens/girl.perfil.jpg')
                img.style.maxHeight = '270px'

            }else if(idade < 23){

                //jovem
                img.setAttribute('src', 'imagens/mulher.perfil.jpg')

            }else if(idade < 40){

                //adulto
                img.setAttribute('src', 'imagens/woman.jpg')

            }else {

                //idoso
                img.setAttribute('src', 'imagens/idosa.perfil.jpg' )

            }
            

        }else if(sexo[1].checked){
            gen = 'Homem'

            if(idade >= 0 && idade < 14){

                //criança
                img.setAttribute('src', 'imagens/boy.perfil.jpg')

            }else if(idade < 23){

                //jovem
                img.setAttribute('src', 'imagens/young.jpg')

            }else if(idade < 40){

                //adulto
                img.setAttribute('src', 'imagens/man.jpg')
                
            }else {

                //idoso
                img.setAttribute('src', 'imagens/idoso.perfil.jpg')

            }
        }
        res.innerText = `Detectamos ${gen} com ${idade} Anos`
        res.appendChild(img)//imagem da idade
    }
}