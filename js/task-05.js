
 const   input = document.querySelector('#name-input');
const  nameLabel = document.querySelector('#name-output');


const inputValue = ({currentTarget}) => {
    if(currentTarget.value.trim() !== '')
    {
        nameLabel.textContent = currentTarget.value.trim();
    }
    else 
    {
        nameLabel.textContent = 'Anonymous';
    }
};

input.addEventListener('input', inputValue);
