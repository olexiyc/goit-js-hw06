 const inputId = document.querySelector('#validation-input');
    
inputId.addEventListener('blur', ()=> {
    if (inputId.value.length === Number(inputId.dataset.length)) 
    {
     
      inputId.classList.add('valid');
      inputId.classList.remove('invalid')
      
    } else {
      
      inputId.classList.add('invalid');
      inputId.classList.remove('valid');
    }
  });