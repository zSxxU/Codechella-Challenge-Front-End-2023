const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = document.querySelector('#nomesobrenome').value;
    const ingresso = document.querySelector('#ingresso-tipo').value;

    localStorage.setItem('nome', nome);
    localStorage.setItem('ingresso', ingresso);

    window.location.href = 'seu-ingresso.html';
});
