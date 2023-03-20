function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
let x = getRandomHexColor();

const backgroundColorEl = document.querySelector('.color');
const colorBtn = document.querySelector('.change-color');
const body = document.body;

colorBtn.addEventListener('click', function onClick(event)
{
  document.body.style.backgroundColor = x;
  return backgroundColorEl.textContent = x;
}
)




