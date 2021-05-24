const numEl = document.querySelector('#controls');
const boxEl = document.querySelector('#boxes')
const inputVariable = numEl.querySelector('input');

inputVariable.addEventListener('input', () => {
    const totolInputVariable = parseInt(inputVariable.value, 10);
    console.log(totolInputVariable)
});

if (totolInputVariable > 0) {
    boxEl.style.width = '30';
    boxEl.style.hight = '30';
}