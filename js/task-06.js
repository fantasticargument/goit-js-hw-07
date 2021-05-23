const inputValue = document.querySelector('input#validation-input');

let totalSymbol = parseInt(inputValue.getAttribute('data-length'), 10);

inputValue.addEventListener('blur', () => {
    if (totalSymbol === inputValue.value.length) {
        inputValue.classList.add('valid')
    }
    else if (totalSymbol !== inputValue.value.length) {
        inputValue.classList.add('invalid')
    }
});
   
inputValue.addEventListener('focus', () => {
    inputValue.classList.remove('invalid', 'valid')
});

