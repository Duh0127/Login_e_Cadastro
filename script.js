const container = document.querySelector('.container');

const loginLink = document.querySelector('.login-link');

const cadastroLink = document.querySelector('.cadastrar-login');

const botao = document.querySelector('.btn');

const fechar = document.querySelector('.fechar');

cadastroLink.addEventListener('click', ()=> {
    container.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    container.classList.remove('active');
});

botao.addEventListener('click', ()=> {
    container.classList.add('popup');
});

fechar.addEventListener('click', ()=> {
    container.classList.remove('popup');
});
