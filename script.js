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

// sendBtn.addEventListener('click', function (e) {
//     e.preventDefault()


//     const mail2 = document.querySelector('#mail').value
//     const title = document.querySelector('#title').value
//     const text = document.querySelector('#text').value
//     const body = 'Email: ' + mail2 + '<br/> Title: ' + title + '<br/> Text: ' + text;
//     Email.send({
//         Host: "smtp.elasticemail.com",
//         Username: "diasamidzed651@gmail.com",
//         Password: "09E4A609F8A44DF9A4CEC605FB2630ECE5F9",
//         To: 'dato.diasamidze.02@gmail.com',
//         From: mail2,
//         Subject: title,
//         Body: body
//     }).then(
//         message => alert(message)
//     );
// })


const logo2 = document.querySelector('#logo2')
logo2.textContent = "<DD />"