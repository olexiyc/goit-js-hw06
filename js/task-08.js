const refs = {
    btn: document.querySelector('.submit'),
    inputEmail: document.querySelector('.email'),
    inputPassword: document.querySelector('.password'),
    loginFormEl: document.querySelector('.login-form')
}

refs.loginFormEl.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
    event.preventDefault();

    const formInputElements = event.currentTarget.elements;
    const email = formInputElements.email.value;
    const password = formInputElements.password.value;

    if (email === "" || password === "") {
        return alert("Fill all the forms");
    }
    const formInfo = {
        email,
        password,
    }
    console.log(formInfo);
    event.currentTarget.reset();
}
