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

// let newBox = []

// function createBoxes(amount) {
  
//   for (let item = 1; item <= amount; item++){
    
//     const box =  document.createElement('div');
//     box.style.backgroundColor = getRandomHexColor();
//     box.classList = 'create-elem'
//     //box.style.width = '30px'
//     //box.style.height = '30px'
//     console.log(box.classList.value);
//     console.log(box);
  
//     newBox.push(box)
    
//   }
//   totalBox.append(...newBox)
  
//   //console.log(newBox);
// };

// createBoxes(value);

// function destroyBoxBtn(event) {

//   console.log(event.currentTarget);
//   box.remove()
//   //totalBox.remove(...newBox)
 
// }

//--------------------------------

let newBox = [];
let newBox1 = [];
let box;
// const box = document.createElement('div');
// box.style.backgroundColor = getRandomHexColor();
// box.classList = 'create-elem'
// console.log(box);  
//  totalBox.append(box) 


function createBoxes(amount) {
  
  for (let item = 1; item <= amount; item++){
     
    box =  document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    box.classList = 'create-elem'
    
    //box.style.width = '30px'
    //box.style.height = '30px'
    console.log(box.classList.value);
    newBox.push(box)

  }
 
  
  totalBox.append(...newBox);
  changeSizesOfBoxes(totalBox)
 

  // console.log(box.offsetHeight); 
  // console.log(box.clientWidth);
  
  //console.log(newBox);
};


function changeSizesOfBoxes(totalBox) {
  const arrayOfBoxes = totalBox.children;
  const changedBoxes = [];
  
  let width = box.clientWidth;
  //console.log(width);
  let height = box.offsetHeight;
  //console.log(height);
  console.log(arrayOfBoxes);
   
  
  for ( box of arrayOfBoxes) {
    console.log(box);
   
    width += 10;
    console.log(width);
    //let height = box.offsetHeight;
    height +=10
    console.log(height);
    changedBoxes.push(box)
  }
  console.log(changedBoxes);
  console.log(arrayOfBoxes);
  totalBox.append(...arrayOfBoxes)
}




//---------------------

// const box = document.createElement('div');
// box.style.backgroundColor = getRandomHexColor();
// box.classList = 'create-elem'
// console.log(box);   
// totalBox.append(box) 
// console.log(box.offsetHeight); 
// console.log(box.clientWidth);

//createBoxes(value);

function destroyBoxBtn(event) {

  console.log(event.currentTarget);
  
  //totalBox.remove(...newBox)
 
}
