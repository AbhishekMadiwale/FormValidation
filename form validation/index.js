console.log("Form validation Project")

const name1 = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validEmail = false;
let validPhone = false;
let validUser = false;
// $('#failure').hide();
// $('#success').hide();


// console.log(name,email,phone);
name1.addEventListener('blur', () => {
    console.log("name is blurred")
    // name validation
    let regex = /^[a-zA-Z]([0-9a-zA-z]){3,10}$/
    let str = name1.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("name is a valid");
        name1.classList.remove("is-invalid");
        validUser = true
    }
    else {
        console.log('name is not valid');
        name1.classList.add('is-invalid');
        validUser = false
    }
})

email.addEventListener('blur', () => {
    console.log("email is blurred")
    // email validation
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,20}$/
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("email is a valid");
        email.classList.remove('is-invalid');
        validEmail = true
    }
    else {
        console.log('email is not valid');
        email.classList.add('is-invalid');
        validEmail = false
    }
})

phone.addEventListener('blur', () => {
    console.log("phone is blurred")
    // phone number validation
    let regex = /^([0-9]){10}$/
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("phone number is a valid");
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else {
        console.log('phone number is not valid');
        phone.classList.add('is-invalid')
        validPhone = false;
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault()

    console.log('You clicked on SUBMIT');
    console.log(validEmail, validPhone, validUser);

    // submit your form here
    if (validEmail && validUser && validPhone) {
        let failure = document.getElementById('failure')

        console.log('Phone, Email and User are valid');
        let success = document.getElementById('success');
        success.classList.add('show');
        failure.classList.remove('show');
        // $('#failure').alert('close')
        $('#failure').hide();
        $('#success').show();

    }
    else {
        console.log('Something wrong, form is not submited');
        let failure = document.getElementById('failure')
        failure.classList.add('show');
        success.classList.remove('show');
        // $('#success').alert('close');
        $('#success').hide()
        $('#failure').show()
    }
})

