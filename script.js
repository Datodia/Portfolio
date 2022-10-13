// $('#burger').click(function () {
//     $(".links").slideToggle();
// })

const form = document.querySelector('form');
const btn = document.querySelector('.test');
const closeBtn = document.querySelector('#close');
const main = document.querySelector('.main-container')
btn.addEventListener('click', () => {
    form.style.display = 'flex'
    // main.style.filter = 'blur(.2rem)'
});


closeBtn.addEventListener('click', () => {
    form.style.display = 'none'
})