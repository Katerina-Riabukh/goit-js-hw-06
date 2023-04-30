const form = document.querySelector('.login-form'); 

form.addEventListener('submit', getUserFormData);

function getUserFormData(event) {
    event.preventDefault();
  
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    const dataForm = {email, password}

    if (email === "" || password === "") {
        alert('Pleas fill in all required fields 😀')
        return
    }
    
    console.log(dataForm);
   
    form.reset();
}