function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
body.style.backgroundColor = 'white'

const color = body.querySelector('.color');
const chengeColorBtn = body.querySelector('.change-color');

chengeColorBtn.addEventListener('click', getRandomBgdColor);

function getRandomBgdColor(){
  body.style.backgroundColor = getRandomHexColor();
  color.textContent = body.style.backgroundColor;
}