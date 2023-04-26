
const list = document.getElementById('categories');

const elements = list.children;

const newElements = [...elements];

console.log(`Number of categories: ${elements.length}`);

const getQuantityOfElem = newElements.forEach(function (element, index, array) {
    //console.log(element);
    const firstChildEl = element.firstElementChild;
    //console.log(firstChildEl);
    const name = firstChildEl.textContent;
    //console.log(name);
     const lastChildEl = element.lastElementChild;
    //console.log(lastChildEl);
    const arreyOfChildren = lastChildEl.children;
    //console.log(arreyOfChildren);
    //console.log(arreyOfChildren.length);
    //return arreyOfChildren.length;
    //console.log(`Category: ${name}, Elements: ${arreyOfChildren.length}`);
    console.log(`Category: ${name}`);
    console.log(`Elements: ${arreyOfChildren.length}`);
});


    


