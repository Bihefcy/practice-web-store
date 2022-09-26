const headerp = document.getElementById('header-p');
const bodyp = document.getElementById('body-p');
const headerc = document.getElementById('header-c');
const bodyc = document.getElementById('body-c');
const headerr = document.getElementById('header-r');
const bodyr = document.getElementById('body-r');

function myFunction(header, body) {
    header.addEventListener('click', () => {
        body.classList.toggle('show');
        console.log('click')
    })
}

myFunction(headerp, bodyp)
myFunction(headerr, bodyr)
myFunction(headerc, bodyc)





