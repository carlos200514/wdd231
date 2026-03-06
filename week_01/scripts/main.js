const navbutton= document.querySelector('#btn-ham');
const linksnav= document.querySelector('#nav-bar');

navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    linksnav.classList.toggle('show');
})

const year= document.getElementById("year");
const date= new Date();
year.innerHTML= date.getFullYear();

document.getElementById("lastModified").innerHTML = document.lastModified;