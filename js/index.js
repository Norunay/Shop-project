const ul = document.querySelector('.new__products');
const best = document.querySelector('.top__wrapp');

products.forEach(el => {
    ul.insertAdjacentHTML('beforeend',
        `
            <li class="new__product">
                <a href="/detail.html?id=${el.id}" class="new__product">
                    <div class="new__img">
                        <img src="${el.image}">
                    </div>
                    ${el.title}
                    <img src="" alt="">
                    <div class="new__price">${el.price}$</div>
                    <div class="new__price-new"></div>
                </a>
            </li>
        `
    )
});

products.reverse().forEach(el => {
    best.insertAdjacentHTML('beforeend',
        `
            <li class="new__product">
                <a href="/detail.html?id=${el.id}" class="new__product">
                    <div class="new__img">
                        <img src="${el.image}">
                    </div>
                    ${el.title}
                    <img src="" alt="">
                    <div class="new__price">${el.price}$</div>
                    <div class="new__price-new"></div>
                </a>
            </li>
        `
    )
});