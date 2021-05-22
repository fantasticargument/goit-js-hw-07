const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];


const link = document.querySelector('ul#ingredients');

const ingredient = ingredients.map(el => {
    const liEl = document.createElement('li');
    liEl.textContent = el;
    return liEl;
})

link.append(...ingredient)