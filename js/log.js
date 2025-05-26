let isLogged = localStorage.getItem('isLoggedIn');

const chekker = document.querySelector('.bi-x-lg');
if(isLogged)chekker.parentElement.style.display = "none";
chekker.onclick = ()=>{
    chekker.parentElement.style.display = "none";
    localStorage.setItem('isLoggedIn', true);
}