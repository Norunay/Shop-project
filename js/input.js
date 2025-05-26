const fancyBtn = document.querySelector('.hero__radios');


console.log(element);


function inputMaker(parent,inputs){
    parent.innerHTML = '';
    inputs[0].colors.forEach((el,i) => {
        parent.insertAdjacentHTML('beforeend',
            `
                <label class="radios bigger" style="background-color: ${el};" for="radio-${i}">
                    <input type="radio" class="rrRadio" name="radio" value="${el}" id="radio-${i}" hidden>
                    <div class="show"></div>
                </label>
            `
        )
    });
}

inputMaker(fancyBtn,element);