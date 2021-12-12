function modoNoturno() {
    const divOndaVerde = document.querySelector('.onda1');
    const divOndaAmarela = document.querySelector('.onda2');
    const checkbox = document.querySelector('#nightmode');
    const iconeBuscar = document.querySelector('img.buscador');
    const menu = document.querySelector('#menu');
    const mainBg = document.querySelector('body')
    const main = document.querySelector('main')
    
    if (checkbox.checked) {
        divOndaVerde.style = `background: url('../imagens/Green-Wave-Dark.png') no-repeat;`;
        divOndaAmarela.style = `background: url('../imagens/Yellow-Wave-Dark.png') no-repeat; background-size: 100% 200px;`;
        iconeBuscar.src = '../imagens/search-black.PNG';
        menu.src = '../imagens/menu-hamburguer.PNG';
        mainBg.style = 'background-color: #000000'
        main.style = 'background-color: #000000'
    } else {
        divOndaVerde.style = 'background: url(../imagens/onda-verde-cortada.png) no-repeat;';
        divOndaAmarela.style = 'background: url(../imagens/onda-laranja-cortada.png) no-repeat; background-size: 100% 100%';
        iconeBuscar.src = '../imagens/search-white.PNG';
        menu.src = '../imagens/menu-white.PNG';
        mainBg.style = 'background-color: #ffffff'
        main.style = 'background-color: #ffffff'

    };

};

document.querySelector('#nightmode').addEventListener('click', modoNoturno);


