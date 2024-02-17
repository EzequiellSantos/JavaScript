var imgToUp = document.querySelector('#toUp')
var imgToHome = document.querySelector('#toBack')
let novoTema = ''

document.addEventListener('DOMContentLoaded', function () {

    const temaEstilos = document.getElementById('tema-estilos'); // estilos => style.css / animation.css
    var toggleSection = document.getElementById("toggle-icon") // section que guarda lua | sol

    const temaPreferido = localStorage.getItem('tema-preferido') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    // Aplicação dos estilos iniciais
    aplicarTema(temaPreferido);

    // Mudando e Guardando o tema escolhido
    toggleSection.onclick = () => {

        novoTema = temaEstilos.dataset.tema === 'light' ? 'dark' : 'light';
        aplicarTema(novoTema);
        localStorage.setItem('tema-preferido', novoTema); // guardando o tema escolhido  

    };

    function aplicarTema(tema) {

        // Adicionar ou remover a classe conforme o tema
        document.body.classList.remove('dark', 'light');
        document.body.classList.add(`${tema}`);

        // Atualizar o dataset para referência futura
        temaEstilos.dataset.tema = tema;
        adequarImagens(tema)

    }


});

function adequarImagens(tema) { 

    imgToUp.src = `Imagens/icons-Direct/toUp-${tema}-96.png`
    imgToHome.src = `Imagens/icons-Direct/toHome-${tema}-96.png`

}

window.addEventListener('scroll', function() { // função para esconder ou mostrar o header

    var elementoSticky = document.getElementById('eloquio-header');
    var scrollTop = window.scrollY;
  
    if (scrollTop > 40) {  // verificando o quanto ja foi rolado a página para baixo

      elementoSticky.classList.add('oculto'); // deixar o header iculto

    } else {

      elementoSticky.classList.remove('oculto'); // mostra o header

    }

    var rolarParaCima = this.document.getElementById('toTop')
    rolarParaCima.style.opacity = this.window.scrollY > 1200 ? '1' : '0'

});

toTop.onclick = () => { // funçãi para quando clicar no botao, levar o usuário para o topo da página

    window.scrollTo({
        top: 100,
        behavior: 'smooth'
    })

}