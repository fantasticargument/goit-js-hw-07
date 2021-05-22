let counterValue = 0;
const value = document.querySelector('span#value');
const addBatton = document.querySelector('[data-action="increment"]');
const delBatton = document.querySelector('[data-action="decrement"]');

addBatton.addEventListener('click', () => {
    counterValue += 1;
    value.innerHTML = `${counterValue}`
})

delBatton.addEventListener('click', () => {
    counterValue -= 1;
    value.innerHTML = `${counterValue}`
})