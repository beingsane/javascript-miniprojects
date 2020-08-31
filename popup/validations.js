const inputs = document.querySelectorAll('input');

const regExp = {
    phone: /^\d{10}$/,
    password: /^[\w@#!&*$-]{8,15}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};

let validate = (field,regex) => {
    if(regex.test(field.value)){
        field.className = 'valid';
    }
    else{
        field.className = 'invalid';
    }
}

inputs.forEach(input => {
    input.addEventListener('keyup',e => {
        validate(e.target,regExp[e.target.attributes.name.value]);
    });
});