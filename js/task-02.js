const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.getElementById('ingredients');

const makeElementOfList = ingredients.map((item, index, arr) => {
  const elementOfList = document.createElement('li');
  elementOfList.classList.add('item')
  elementOfList.textContent = ingredients[index];
  return elementOfList;
});

list.append(...makeElementOfList);

