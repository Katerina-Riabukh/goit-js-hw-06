const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.getElementById('ingredients');

//console.log(list);

const makeElementOfList = ingredients.map((item, index, arr) => {
  const elementOfList = document.createElement('li');
  elementOfList.classList.add('item')
   elementOfList.textContent = ingredients[index];
  list.append(elementOfList)
  return elementOfList;
})
 

console.log(...makeElementOfList);



