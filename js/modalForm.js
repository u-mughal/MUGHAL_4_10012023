// DECLARATION DE VARIABLE FIRST & FIRSTNAMERROR
let firstName = document.querySelector("#first");
let firstNameError = document.querySelector("firstNameError");

// CONDITION REGEX: FIRSTNAME
function firstNameControl() {

    if (/^([A-Za-z]{2,20})?([-]{0,1})?([A-Za-z]{2,20})$/.test(firstName.value)) {
        firstName.style.border = "solid 2px green";
        firstNameError.style.color = 'green';

        return true;
    }

    else {
        firstName.style.border = "solid 2px red";
        firstNameError.style.color = 'red';

        return false;
    }
}

// EVENEMENT D'ECOUTE POUR LE CONTROLE DE L'INPUT FIRSTNAME
firstName.addEventListener('change', () => {
    firstNameControl();
});



// DECLARATION DE VARIABLE LASTNAME & LASTNAMEERROR
let lastName = document.querySelector("#last");
let lastNameError = document.querySelector("#lastNameError");

// CONDITION REGEX: LASTNAME
function lastNameControl() {

    if (/^([A-Za-z]{2,20})?([-]{0,1})?([A-Za-z]{2,20})$/.test(lastName.value)) {
        lastName.style.border = "solid 2px green";
        lastNameError.style.color = 'green';

        return true;
    }

    else {
        lastName.style.border = "solid 2px red";
        lastNameError.style.color = 'red';

        return false;
    }

}


// EVENEMENT D'ECOUTE POUR LE CONTROLE DE L'INPUT LASTNAME
lastName.addEventListener('change', () => {
    lastNameControl();
});


// DECLARATION DE VARIABLE EMAIL & EMAILERROR
let email = document.querySelector("#email");
let emailError = document.querySelector("#emailError");

// CONDITION REGEX: LASTNAME
function emailControl() {

    if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.value)) {
        email.style.border = "solid 2px green";

        return true;
    }

    else {
        email.style.border = "solid 2px red";

        return false;
    }
}


// EVENEMENT D'ECOUTE POUR LE CONTROLE DE L'INPUT EMAIL
email.addEventListener('change', () => {
    emailControl();
});


// DECLARATION DE VARIABLE BIRTHDATE & BIRTHDATEERROR
let birthdate = document.querySelector("#brithdate");
let birthdateError = document.querySelector("#birthdateError");

// CONDITION REGEX: CHAMP DE DATE
function birthdateControl() {

    if (/^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/.test(birthdate.value)) {
        birthdate.style.border = "solid 2px green";

        return true;
    }

    else {
        birthdate.style.border = "solid 2px red";

        return false;
    }

}

// EVENEMENT D'ECOUTE POUR LE CONTROLE DE L'INPUT BIRTHDATE
birthdate.addEventListener('change', () => {
    birthdateControl();
});

// DECLARATION DE VARIABLE QUANTITY & QUANTITYERROR
let quantity = document.querySelector("#quantity");
let quantityError = document.querySelector("#quantityError");

// CONDITION REGEX: CHAMPS QUANTITY
function quantityControl() {

    if (quantity.value >= 0) {
        quantity.style.border = "solid 2px green";

        return true;
    }


    else {
        quantity.style.border = "solid 2px red";

        return false;
    }
}



// EVENEMENT D'ECOUTE POUR LE CONTROLE DE L'INPUT QUANTITY
quantity.addEventListener('change', () => {
    quantityControl();
});