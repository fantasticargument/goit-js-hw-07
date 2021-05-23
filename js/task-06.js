const inputValue = document.querySelector('input#validation-input');

let totalSymbol = parseInt(inputValue.getAttribute('data-length'), 10);

inputValue.addEventListener('blur', () => {
    if (totalSymbol !== inputValue.value.length) {
        inputValue.classList.add('invalid')
    } else if (totalSymbol === inputValue.value.length) { }
    inputValue.classList.add('valid')
});
   
inputValue.addEventListener('focus', () => {
    inputValue.classList.remove('invalid', 'valid')
} )


// inputValue.addEventListener('input', onInputChenge)

// function onInputChenge(event) {
//     if(event.currentTarget.value.length === )
    // youName.innerHTML= `${event.currentTarget.value}`
// }