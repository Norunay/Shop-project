const ul = document.querySelector('.new__products');

products.forEach(el => {
    ul.insertAdjacentHTML('beforeend',
        `
            <li class="new__product">
                <div class="new__img">
                    <img src="/assets/hero/image 7.png" alt="">
                </div>
                T-SHIRT WITH TAPE DETAILS
                <img src="" alt="">
                <div class="new__price">100$</div>
                <div class="new__price-new"></div>
            </li>
        `
    )
});