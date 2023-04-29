const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const list = document.querySelector('.gallery');

const img = images.map(({ url, alt }) => {
  const itemOfList = `<li class="list-item"><img src="${url}" alt="${alt}"></img></li>`;
  return itemOfList
}).join('');

list.insertAdjacentHTML("afterbegin", img);

//list.style.display = 'flex'

const item = document.querySelectorAll('.list-item')

const imageEl = document.querySelectorAll('img')

imageEl.forEach(function (image) {
  image.width = 320;
  image.height = 190;
});




