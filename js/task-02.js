const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];


const list = document.querySelector('ul#ingredients');

const ingredient = ingredients.map(el => {
    const liEl = document.createElement('li');
    liEl.textContent = el;
    return liEl;
})

list.append(...ingredient)