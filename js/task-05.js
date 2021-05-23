const input = document.querySelector('input#name-input');
const youName = document.querySelector('span#name-output');

input.addEventListener('input', (event) => {
    youName.innerHTML = `${event.currentTarget.value}`
});