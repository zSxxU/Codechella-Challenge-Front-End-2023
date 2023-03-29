const hamburger = document.querySelector(".botao-hamburger")
const navMenu = document.querySelector(".itens-cabecalho")

hamburger.addEventListener("click" , () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".cabecalho-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))