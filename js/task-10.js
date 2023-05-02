function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const wraper = document.getElementById('controls');
const input = wraper.children[0];
const createBtn = wraper.children[1];
const destroyBtn = wraper.children[2];


let totalBox = document.getElementById('boxes');
totalBox.classList = 'wraper'

let value;

input.addEventListener('blur', getValue);

function getValue(event) {
  
  value = Number(event.currentTarget.value);

}

createBtn.addEventListener('click', createBoxBtn);
destroyBtn.addEventListener('click', destroyBoxBtn)
//---------------------------------------------------------------------------
function createBoxBtn(event) {
  event.preventDefault();
  createBoxes(value);
};

const newBox = []

function createBoxes(amount) {
  
  for (let item = 1; item <= amount; item++){
    
    const box =  document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    box.classList = 'create-elem'
    //box.style.width = '30px'
    //box.style.height = '30px'
    //console.log(box);
  
    newBox.push(box)
    
  }
  totalBox.append(...newBox)
  
  //console.log(newBox);
};

createBoxes(value);

function destroyBoxBtn(event) {
  //box.remove()
}
