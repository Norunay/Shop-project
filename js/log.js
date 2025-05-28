if(localStorage.getItem('isLoggedIn') !== 'true') localStorage.setItem('isLoggedIn', 'false');

let isLogged = localStorage.getItem('isLoggedIn');

const chekker = document.querySelector('.bi-x-lg');
if(isLogged == 'true')chekker.parentElement.style.display = "none";
chekker.onclick = ()=>{
    chekker.parentElement.style.display = "none";
    localStorage.setItem('isLoggedIn', 'true');
}