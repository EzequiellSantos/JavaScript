var res = document.querySelector("#resultado");
var ipor = document.querySelector("#ipor");

//valores de porcentagens (tecla enter)
ipor.addEventListener('keydown', function (event) {

    if (event.keyCode === 13) {//validação da tecla enter(código 13)

        let inum = Number(document.querySelector("inum").value)
        let iporcent = Number(document.querySelector("#ipor").value);
        let ipornumb = Number(document.querySelector("#inum").value);

        if (ipor.value.length == '' || inum.length == '') { //validação

            alert('Preencha os Campos corretamente:)')

        } else if (iporcent >= 0 && iporcent <= 200) { //calculo (Valores de Porcentagens)

            function calcPercent(numero, percent) {

                let result = numero * percent / 100
                return result

            }

            res.innerHTML = `<span>${calcPercent(ipornumb, iporcent)}</span>`

        } else { //validação

            alert("Use Números acima de Zero e pequenos Na Porcentagem")

        }
    }
})

// calculo por botão (Valores de Porcentagens)

function executCalc() {

    let iporcent = Number(document.querySelector("#ipor").value);
    let ipornumb = Number(document.querySelector("#inum").value);

    if (ipor.value.length == '' || inum.value.length == '') {//validação

        alert('Preencha os Campos corretamente :)')

    } else if (iporcent >= 0 && iporcent <= 200) {

        function calcPercent(numero, percent) {

            let result = numero * percent / 100
            return result

        }

        res.innerHTML = `<span>${calcPercent(ipornumb, iporcent)}</span>`

    } else { //validação

        alert("Use Números acima de Zero e pequenos Na Porcentagem")

    }

}

//reload
let reload = document.getElementById('reload')

reload.addEventListener('click', function () {
    window.location.reload(true)
})


//menu
const menuItems = document.querySelectorAll('.menu li');
const highlightBar = document.querySelector('.highlight-bar');

menuItems.forEach((item) => {
    item.addEventListener('mouseover', () => {
        highlightBar.style.display = 'block'
        const itemPosition = item.getBoundingClientRect();
        highlightBar.style.left = itemPosition.left + 'px';
        highlightBar.style.width = itemPosition.width + 'px';
    });

    item.addEventListener('mouseout', () => {
        const selectedItem = document.querySelector('.menu li:hover');
        if (!selectedItem) {
            highlightBar.style.width = '0';
        }
    });
});
