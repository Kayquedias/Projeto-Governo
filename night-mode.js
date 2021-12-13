function modoNoturno() {
    const divOndaVerde = document.querySelector('.onda1');
    const divOndaAmarela = document.querySelector('.onda2');

    const publi1 = document.querySelector('.img-publi1');
    const publi2 = document.querySelector('.img-publi2');
    const publi3 = document.querySelector('.img-publi3');
    const publi4 = document.querySelector('.img-publi4');

    const checkbox = document.querySelector('#nightmode');

    const iconeBuscar = document.querySelector('img.buscador');
    const menu = document.querySelector('#menu');
    const body = document.querySelector('body')
    const main = document.querySelector('main')
    
    if (checkbox.checked) {
        divOndaVerde.style = `background: url('../imagens/Green-Wave-Dark.png') no-repeat;`
        divOndaAmarela.style = `background: url('../imagens/Yellow-Wave-Dark.png') no-repeat; background-size: 100% 100%;`
        iconeBuscar.src = '../imagens/search-black.png';
        menu.src = '../imagens/menu-hamburguer.png';

        publi1.src = '../imagens/icon-1.5.png';
        publi2.src = '../imagens/icon-2.5.png';
        publi3.src = '../imagens/icon-3.1.png';
        publi4.src = '../imagens/icon-4.1.png';

        body.style = 'background-color: #000000'
        main.style = 'background-color: #000000'
    } else {
        divOndaVerde.style = `background: url('../imagens/onda-verde-cortada.png') no-repeat; background-size 100% 11rem;`
        divOndaAmarela.style = `background: url('../imagens/onda-laranja-cortada.png') no-repeat; background-size: 100% 100%`
        iconeBuscar.src = '../imagens/search-white.png';
        menu.src = '../imagens/menu-white.png';

        publi1.src = '../imagens/icon-1.png';
        publi2.src = '../imagens/icon-2.png';
        publi3.src = '../imagens/icon-3.png';
        publi4.src = '../imagens/icon-4.png';

        body.style = 'background-color: #ffffff'
        main.style = 'background-color: #ffffff'

    };

};

document.querySelector('#nightmode').addEventListener('click', modoNoturno);


