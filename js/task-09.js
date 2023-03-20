function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};


const backgroundColorEl = document.querySelector('.color');
const colorBtn = document.querySelector('.change-color');
const body = document.body;


;

const changeColor = () => 
{
  backgroundColorEl.textContent
   = body.style.backgroundColor = getRandomHexColor();
  
}
colorBtn.addEventListener('click', changeColor)



