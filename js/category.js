const ul = document.querySelector('.newer__products');
const typeOfFilter = document.querySelector('#typeOfClose');
const range = document.querySelector('#range');
const rangedPrice = document.querySelector('#showPrice');
const radioColor = document.querySelector('.colors');

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

// TODOsdfghjkllkjhgfdsdfghjklgffghjklkjdfgjlfghjklkjhgfghjkl;ljhgfghjkl;lhgfgk;lkjhgfggffghgi

let getAllColor = [];
getAllColors.forEach(el => {
    el.forEach(color => {
        getAllColor.push(color)
    })
});
getAllColor = new Set(getAllColor);



function inputMaker(parent,inputs){
inputs.forEach((el,i) => {
    parent.insertAdjacentHTML('beforeend',
        `
            <label class="radios" style="background-color: ${el};" for="radio-${i}">
                <input type="radio" name="radio" id="radio-${i}" hidden>
                <div class="show"></div>
            </label>
        `
    )
});    
}

inputMaker(radioColor,getAllColor);

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

range.addEventListener('input',()=>{
    rangedPrice.innerHTML= `${range.value}$`
    let filtered = typedProducts.filter(el => el.price <= range.value);
    showProducts(filtered);
});