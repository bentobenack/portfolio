
const menuMobile = document.querySelector('.menu-mobile');
const body = document.querySelector('body');

menuMobile.addEventListener('click', () => {
    menuMobile.classList.contains("bi-list")
    ? menuMobile.classList.replace("bi-list", "bi-x")
    : menuMobile.classList.replace("bi-x", "bi-list");

    body.classList.toggle("menu-nav-active");
});

// Ocultar menu-nav on mobile when click on nav-link/menu item and
// Activar o a opcao do menu quando es clicado, e desactivar os demais

const navLink = document.querySelectorAll('.nav-link')

navLink.forEach(link => {
    link.addEventListener("click", () => {

        if (body.classList.contains("menu-nav-active")){
            body.classList.remove("menu-nav-active")
            menuMobile.classList.replace("bi-x", "bi-list")
        }

        navLink.forEach(e => {
            e.classList.remove("active")
        })
        link.classList.add("active")
    })
});

// Animando os elementos

const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.85;

    item.forEach(element => {
        if (windowTop > element.offsetTop) {
            element.classList.add("animate");
        } else {
            // element.classList.remove("animate");
        }
    });
};

animeScroll();

window.addEventListener("scroll", () => {
    animeScroll();
})

// Activar carregamento no botao do formulario

const btnSend = document.querySelector('#btn-send');
const btnSendLoader = document.querySelector('#btn-send-loader');

btnSend.addEventListener("click", () => {
    btnSendLoader.style.display = "block";
    btnSend.style.display = "none";
})

// Tirar a mensagem depois de umtempo

setTimeout(() => {
    document.querySelector("#alert").style.display = "none";
}, 5000)


