const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsContainer = document.querySelector('.containerEl')

const elements = ingredients.map(option => {

  const ingredientsItem = document.createElement('li')
  ingredientsItem.classList.add('item')
  ingredientsItem.textContent = option;

  return ingredientsItem;
})


console.log(elements)
ingredientsContainer.append(...elements);