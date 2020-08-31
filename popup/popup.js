const closeButton = document.querySelector('#close');
const button = document.querySelector('#pop-here');
const form = document.querySelector('#register-form');
const popup = document.querySelector('#popup-wrapper');

button.addEventListener('click', (e) => {
    popup.style.display = 'block';
})

closeButton.addEventListener('click', (e) => {
    popup.style.display = 'none';
})

popup.addEventListener('click', (e) => {
    if(e.target.tagName == 'FORM' || e.target.tagName == 'LABEL' || e.target.tagName == 'INPUT')
        return;    
    
    popup.style.display = 'none';
    console.log(e.target.tagName);
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(form.email.value);
    console.log(form.password.value);
})

