
const list = document.getElementById('categories');
const elements = list.children;
const newElements = [...elements];

console.log(`Number of categories: ${elements.length}`);

const getQuantityOfElem = newElements.forEach(function (element, index, array) {
   
    const firstChildEl = element.firstElementChild;
   
    const name = firstChildEl.textContent;
    
     const lastChildEl = element.lastElementChild;
   
    const arreyOfChildren = lastChildEl.children;

    console.log(`Category: ${name}`);
    console.log(`Elements: ${arreyOfChildren.length}`);
});


    


