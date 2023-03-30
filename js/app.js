const button = document.querySelector('.button');
const footer = document.querySelector('.footer');
const sopla = document.querySelector('.sopla');
const pastel = document.querySelector('.pastel-active');
const buttonFooter = document.querySelector('.footer__button');
const main = document.querySelector('.main');
const reglos = document.querySelector('.regalos');

const typed = new Typed('.typed', {
    strings : ['<i class="palbra-main">Perra</i', '<i class="palbra-main">Sucia</i', '<i class="palbra-main">Mongola</i'],
    typeSpeed: 75,
    startDelay: 300,
    backSpeed: 75,
    backDelay: 2000,
    loop: true,
    contentType: 'html'

});

// const gege = new Typed('.main-maquina', {
//     strings: ['Esto es para la chica mas fea, osea la GLENDI'],
//     typeSpeed: 75,
//     startDelay: 300,
//     backSpeed: 75,
//     backDelay: 2000,
//     contentType: 'html'

// });

console.log(buttonFooter)

setTimeout(function() {
    const message = document.getElementById('result');
    message.innerHTML = "Espero te guste y si no andate a la mrd"
    button.style.display = "initial";
}, 6200);
setTimeout(function() {
    const message = document.getElementById('state-message');
    message.style.display = "none";
}, 6000);

button.addEventListener('click', ()=>{
    footer.style.display = "initial";
    footer.classList.add('footer-active')
})


buttonFooter.addEventListener('click', ()=>{
    footer.classList.remove('footer-active')
    main.style.display = "none";
    reglos.style.display = "initial";
    console.log('omar')
})