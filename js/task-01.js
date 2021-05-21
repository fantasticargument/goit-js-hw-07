const categoriesEl = document.querySelectorAll(".item");
console.log(`У списку ${categoriesEl.length} категорії.`);

for (const category of categoriesEl){
    console.log(`Категорія:${category.firstElementChild.textContent}`);
    
    const list = category.querySelectorAll('li');
    console.log(`Кількість елементів: ${list.length}`)
}