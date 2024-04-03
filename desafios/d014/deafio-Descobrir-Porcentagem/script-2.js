var res = document.querySelector("#resultado");
var ivalue = document.querySelector('#ival');
var iallval = document.querySelector("#iallVal");

//valores de porcentagens (tecla enter)
ivalue.addEventListener('keydown', function (event) {

    if (event.keyCode === 13) {//validação da tecla enter(código 13)

        let ivaluenum = Number(document.querySelector("#ival").value);
        let iallValue = Number(document.querySelector("#iallVal").value);

        if (ivalue.value.length == '' || iallval.value.length == '') {//validação

            alert('Preencha os campos corretamentes :)')

        } else if (ivalue <= iallValue || ivalue >= 0 || iallValue > 0) {

            function calcPercent(todo, valor) {
                let resultado = 100 / todo * valor
                return resultado
            }

            res.innerHTML = `<span>${calcPercent(iallValue, ivaluenum).toFixed(2)} %</span>`

        } else if (ivaluenum > iallValue) {//validação

            alert('Use Números Acima de Zero | O valor sempre tem que ser menor que o total')
        }
    }
})


//calculo botão (Porcentagens de Valores)

function executCont() {

    let iallValue = Number(document.querySelector('#iallVal').value);
    let ivaluenum = Number(document.querySelector('#ival').value);

    if (ivalue.value.length == '' || iallval.value.length == '') {//validação

        alert('Preencha os campos corretamentes :)')

    } else if (ivaluenum <= iallValue || ivaluenum >= 0 && iallValue > 0) {

        function calcPercent(todo, valor) {
            let resultado = 100 / todo * valor
            return resultado
        }

        res.innerHTML = `<span>${calcPercent(iallValue, ivaluenum).toFixed(2)} %</span>`

    } else {//validação

        alert('Use Números Acima de Zero | O valor sempre tem que ser menor que o completo (100%)')

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
        highlightBar.style.left = item.offsetLeft * 1.015 + 'px';
        highlightBar.style.width = item.offsetWidth * 1.015 + 'px';
    });

    item.addEventListener('mouseout', () => {
        const selectedItem = document.querySelector('.menu li:hover');
        if (!selectedItem) {
            highlightBar.style.width = '0';
        }
    });
});