 const refs = {
    input: document.querySelector("input"),
    data: document.querySelector('input[data-length ="6"]'),
    inputId: document.querySelector('#validation-input'),
    colorGreen: document.querySelector("#validation-input.valid"),
    colorRed: document.querySelector("#validation-input.invalid"),
}



refs.input.addEventListener('blur', () => {
    if (refs.input.value.length === parseInt(refs.data.dataset.length)) 
    {
      console.log('valid');
      refs.input.classList.add('valid');
      refs.input.style = refs.colorGreen;
    } else {
      console.log('invalid');
      refs.input.classList.add('invalid');
    }
  });


