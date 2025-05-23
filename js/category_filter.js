const allCheckboxes = document.querySelectorAll('.rrRadio');

function filterProdu() {
  let chelkbekValues = Array.from(allCheckboxes)
  .filter((radio) => radio.checked)
  .map((el) => el.value);  
  console.log(chelkbekValues);
  
  
    let filtered = typedProducts.filter(el => {
        let material = el.colors.includes(chelkbekValues[0]);
        return material;
    })  
    console.log(filtered);
    showProducts(filtered);
}

[...allCheckboxes].forEach(el => {
    el.addEventListener('input', filterProdu);
})