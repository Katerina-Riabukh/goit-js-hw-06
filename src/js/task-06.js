const input = document.getElementById('validation-input');
const lengthValue = Number(input.dataset.length);
//console.log(lengthValue);

input.addEventListener('blur', changeBorderColor);

function changeBorderColor(event) {

    input.classList.add('invalid')
    
    if (event.currentTarget.value.length === lengthValue) {

         input.classList.replace('invalid', 'valid')
    }

};


