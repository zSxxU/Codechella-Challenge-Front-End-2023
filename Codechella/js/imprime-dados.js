const nomeElement = document.querySelector('#nomesobrenome');
const ingressoElement = document.querySelector('#ingresso-tipo');

const nome = localStorage.getItem('nome');
const ingresso = localStorage.getItem('ingresso');

nomeElement.textContent = nome;
ingressoElement.textContent = ingresso;