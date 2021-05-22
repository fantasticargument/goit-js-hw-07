const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const makeElementLi = ({url,alt}) => {
  
    return `
    <li>
        <img src = ${url}
            alt = ${alt}
            width = 220/>
    </li>`
}
const htmlElement = document.querySelector('ul#gallery')

const makeListImages = images.map(makeElementLi).join(' ')
htmlElement.insertAdjacentHTML('beforeend', makeListImages)
console.log(makeListImages)

htmlElement.style.display = 'flex';
htmlElement.style.listStyleType = 'none';
