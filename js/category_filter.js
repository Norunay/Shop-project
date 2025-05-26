const allCheckboxes = document.querySelectorAll('.rrRadio');
const range = document.querySelector('#range');

rangedPrice.innerHTML= `${range.value}$`

let filterer;

function filterProdu() {
    rangedPrice.innerHTML= `${range.value}$`;
    
    let chelkbekValues = Array.from(allCheckboxes)
    .filter((radio) => radio.checked)
    .map((el) => el.value);  
    
    
    let filtered = typedProducts.filter(el => {
        return el.colors.includes(chelkbekValues[0]);
    });    
    
    let filterer = filtered.filter(el => el.price <= range.value);
    
    if(filtered.length == 0){
        filterer = typedProducts.filter(el => el.price <= range.value);
    }

    showProducts(filterer);
}

[...allCheckboxes,range].forEach(el => {
    el.addEventListener('input', filterProdu);
})