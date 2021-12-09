function modoNoturno() {
    const divOndaVerde = document.querySelector('.onda1');
    const divOndaAmarela = document.querySelector('.onda2');
    const checkbox = document.querySelector('#nightmode');
    const logoCeara = document.querySelector('#logo-ceara');

    
    if (checkbox.checked) {
        divOndaVerde.style = 'background: url(../imagens/Green-Wave-Dark.png) no-repeat;'
        divOndaAmarela.style = 'background: url(../imagens/Yellow-Wave-Dark.png) no-repeat;'
        logoCeara.src = 'imagens/logotipo-ceara-preto-2021.png'
    } else {
        divOndaVerde.style = 'background: url(../imagens/onda-verde-cortada.png) no-repeat;'
        divOndaAmarela.style = 'background: url(../imagens/onda-laranja-cortada.png) no-repeat;'
        logoCeara.src = 'imagens/logo-ceara.svg'
    };

};

document.querySelector('#nightmode').addEventListener('click', modoNoturno);