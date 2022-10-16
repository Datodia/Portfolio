$('#burger').click(function () {
    $(".links").slideToggle();
})
$('header .links .link a').click(function () {
    $(".links").slideUp();
})


const form = document.querySelector('form');
const btn = document.querySelector('.test');
const closeBtn = document.querySelector('#close');
const main = document.querySelector('.main-container')
const logo = document.querySelector('#logo')
const sendBtn = document.querySelector('.send')

logo.textContent = "<DD />"

btn.addEventListener('click', () => {
    form.style.display = 'flex'
    // main.style.filter = 'blur(.2rem)'
});

closeBtn.addEventListener('click', () => {
    form.style.display = 'none'
})
