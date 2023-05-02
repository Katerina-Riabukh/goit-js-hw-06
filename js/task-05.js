const inputName = document.getElementById('name-input');
console.log(inputName);

const outputName = document.getElementById('name-output');
console.log(outputName);

inputName.addEventListener('input', (e) => outputName.textContent = e.currentTarget.value || 'Anonymous');


   
    


