const button = document.querySelector('.button');
const footer = document.querySelector('.footer');
const sopla = document.querySelector('.sopla');
const pastel = document.querySelector('.pastel-active');

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

sopla.addEventListener('click', ()=>{
    pastel.style.display = "none";
})