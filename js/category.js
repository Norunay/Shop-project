const ul = document.querySelector('.newer__products');
const typeOfFilter = document.querySelector('#typeOfClose');
const range = document.querySelector('#range');
const rangedPrice = document.querySelector('#showPrice');
const radioColor = document.querySelector('.colors');
const fancy = document.querySelector('.fancyColor');

const param = new URLSearchParams(window.location.search);
let filtertype = param.get("type")

let typedProducts = [];

typeOfFilter.innerHTML = filtertype.charAt(0).toLocaleUpperCase() + filtertype.slice(1);

if(filtertype == 'casual'){
    typedProducts = products.filter(el => el.category == 'Casual');
}
if(filtertype == 'gym'){
    typedProducts = products.filter(el => el.category == 'gym');
}
if(filtertype == 'formal'){
    typedProducts = products.filter(el => el.category == 'Formal');
}
if(filtertype == 'party'){
    typedProducts = products.filter(el => el.category == 'Party');
}

let getAllColors = typedProducts.map(el => el.colors);
let getAllSizes = typedProducts.map(el => el.sizes);

// TODOsdfghjkllkjhgfdsdfghjklgffghjklkjdfgjlfghjklkjhgfghjkl;ljhgfghjkl;lhgfgk;lkjhgfggffghgi

let getAllColor = [];
let getAllSize = [];
getAllColors.forEach(el => {
    el.forEach(color => {
        getAllColor.push(color)
    })
});
getAllSizes.forEach(el => {
    el.forEach(color => {
        getAllSize.push(color);
    })
});
getAllColor = new Set(getAllColor);
getAllSize = new Set(getAllSize);




function inputMaker(parent,inputs,type){
    if(type == 'regular'){
        inputs.forEach((el,i) => {
            parent.insertAdjacentHTML('beforeend',
                `
                    <label class="radios" style="background-color: ${el};" for="radio-${i}">
                        <input type="radio" class="rrRadio" name="radio" value="${el}" id="radio-${i}" hidden>
                        <div class="show"></div>
                    </label>
                `
            )
        });
        return;
    }
    inputs.forEach((el,i) => {
        parent.insertAdjacentHTML('beforeend',
            `
                <label class="fancy filterer" for="radios-${i}">
                    ${el}
                    <input type="radio" name="radi" class="ffRadio" value="${el}" id="radios-${i}" hidden>
                    <div class="show">${el}</div>
                </label>
            `
        )
    });
}

inputMaker(radioColor,getAllColor,'regular');
inputMaker(fancy,getAllSize,'fancy');

function showProducts(array){
    ul.innerHTML = '';
    array.forEach(el => {
        ul.insertAdjacentHTML('beforeend',
            `
                <li class="new__product newer__p">
                    <a href="/body/detail.html?id=${el.id}" class="new__product">
                        <div class="new__img">
                            <img src="/images/${el.id+1}.jpg" alt=""> <span></span>
                        </div>
                        ${el.title}
                        
                        <div class="new__price">${el.price}$</div>
                        </a>
                        </li>
            `
        )
    });
}
showProducts(typedProducts);

rangedPrice.innerHTML= `${range.value}$`

let filterer;

range.addEventListener('input',()=>{
    rangedPrice.innerHTML= `${range.value}$`
    let filterer = typedProducts.filter(el => el.price <= range.value);
    showProducts(filterer);
});