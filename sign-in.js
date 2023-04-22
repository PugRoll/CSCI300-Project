function checkForm() {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const error = document.getElementById('formErrors');
    error.innerHTML = ''; // clear previous error messages
    let errorsFound = false;
  
    // Check for invalid or missing email
    if (!email.value || !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/.test(email.value)) {
      errorsFound = true;
      email.classList.add('error');
      const emailErr = document.createElement('li');
      emailErr.textContent = 'Invalid or missing email address.';
      error.appendChild(emailErr);
    }
  
    // Check for password length
    if (password.value!="password") {
      errorsFound = true;
      password.classList.add('error');
      const passErr1 = document.createElement('li');
      passErr1.textContent = 'Password Incorrect';
      error.appendChild(passErr1);
    }
  

    if (errorsFound) {
      error.classList.remove('hide');
    } else {
      error.classList.add('hide');
      email.classList.remove('error');
      password.classList.remove('error');
      return true;
    }
  }
  
 
 document.getElementById("submit").addEventListener("click", function(event) {
    if(checkForm()){
        event.checkForm;
    }
    else{
    // Prevent default form action. DO NOT REMOVE THIS LINE
    event.preventDefault();
    }
 });