const param = new URLSearchParams(window.location.search);
let filtertype = param.get("id");
let element = products.filter(el => el.id == filtertype);

const pictures = document.querySelector('.hero__imgs');
const comment = document.querySelector('.rating__menu');
const showMore = document.querySelector('.rating__btn');

comment.style.boxShadow = "inset 0px -150px 10px -30px rgba(232, 232, 232, 0.37)";
comment.style.height = '510px';
comment.style.overflow = 'hidden';

showMore.onclick = ()=>{
    comment.style.boxShadow = "inset 0px -150px 10px -30px transparent";
    comment.style.height = 'auto';
    comment.style.overflow = 'hidden';
    showMore.style.display = 'none';
}

 pictures.innerHTML = 
 `
    <img src="${element[0].image}" alt="" class="hero__img" style="width: 100%;">
    <div class="hero__img-box">
        <img src="/assets/hero1.svg" alt="">
        <img src="/assets/hero2.svg" alt="">
        <img src="/assets/hero3.svg" alt="">
    </div>
 `;

comment.innerHTML = '';

element[0].comments.forEach((el,i) => {
     comment.insertAdjacentHTML('beforeend',
    `
        <li class="rating__item">
            <div class="rating__item-top">
            <img src="/${el.userRate}.png" alt="" width="100px">
            </div>
            <div class="rating__box">
                <p class="rating__menu-title">${el.user}</p>
                <img src="/assets/rating-icon.svg" alt="">
            </div>
            <p class="rating__text">"${el.comment}"</p>
            <p class="rating__date">${el.posted}</p>

        </li>
    `
 )    
});