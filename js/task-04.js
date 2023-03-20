const targetBtnPlus = document.querySelector('[data-action="increment"]');
const targetBtnMinus = document.querySelector('[data-action="decrement"]');
const numberCalc = document.querySelector('#value');

let counterValue = 0;

targetBtnMinus.addEventListener('click', () => {
    counterValue -= 1; 
    numberCalc.textContent = counterValue;
});

targetBtnPlus.addEventListener('click', () =>{
    counterValue += 1;
    numberCalc.textContent = counterValue;
});
