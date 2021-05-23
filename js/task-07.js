const slider = document.querySelector('input#font-size-control');
const size = document.querySelector('span#text')

slider.addEventListener('input', () => {
    size.style.fontSize = `${slider.value}px`;
});
