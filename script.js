let emailInput = document.getElementById('email');
let emailError = document.getElementById('emailError');
let passwordInput = document.getElementById('password');
let passwordError = document.getElementById('passError');
let form = document.getElementById('signupForm');
let successMessage = document.getElementById('successMessage');
let button = document.getElementById('button');

emailInput.addEventListener('input', validation1);
passwordInput.addEventListener('input', validation2);

const emailRegex = /^[a-zA-Z0-9._%{|}+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

let email="em";
let password="pw";

function validation1(eventDetails1){
    eventDetails1.preventDefault()
    validation(eventDetails1.target.value, "pw")
}
function validation2(eventDetails2){
    eventDetails2.preventDefault();
    validation("em", eventDetails2.target.value)
}
function validation(value1, value2){
    
    
    if(value1!="em"){
        email=value1;
    }
    if(value2!="pw"){
        password=value2;
    }
    
    console.log(email+" "+password);
    if(emailValidation(email) && passwordValidation(password)){
        successMessage.style.display = 'block';
        emailError.style.display = 'none';
        passwordError.style.display ='none';
        button.disabled=false;
    }else{
        successMessage.style.display = 'none';
        emailError.style.display ='block';
        passwordError.style.display ='block';
        button.disabled=true;
    }
}
function emailValidation(inputEmail){
    if(inputEmail.length >3 && emailRegex.test(inputEmail)){
        return true;
    }else{
        return false;

    }
}
function passwordValidation(value){
    if(value.length >8){
        return true;
    }else{
        return false;
    }
}

form.addEventListener('submit', submitForm)

function submitForm(eventDetails){
    eventDetails.preventDefault();
    if (window.confirm('Are you sure you want to submit?')) {
        alert('Successful signup!');
        window.location.href = window.location.href;
        emailInput.value = '';
        passwordInput.value = '';
        emailError.textContent = '';
        passwordError.textContent = '';
    } else {
        window.location.href = window.location.href;
        emailInput.value = '';
        passwordInput.value = '';
        emailError.textContent = '';
        passwordError.textContent = '';
    }
}