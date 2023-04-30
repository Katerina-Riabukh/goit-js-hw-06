

const upBtn = document.querySelector('[data-action="increment"]');
const downBtn = document.querySelector('[data-action="decrement"]')
const initialValue = document.querySelector('#value');

let counterValue = 0;

const letIncrement = () => counterValue += 1;
const letDecrement = () => counterValue -= 1;


upBtn.addEventListener('click', makeIncrementStep);

function makeIncrementStep(even) {
        
        initialValue.textContent = letIncrement();
 
}



downBtn.addEventListener('click', makeDecrementStep);

function makeDecrementStep(el) {
        
    initialValue.textContent = letDecrement();
 
}










