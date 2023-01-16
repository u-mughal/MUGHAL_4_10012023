//Récupération des variables des differents champs du formulauire
let firstName = document.querySelector("#first");
let lastName = document.querySelector("#last");
let email = document.querySelector("#email");
let birthdate = document.querySelector("#birthdate");
let quantity = document.querySelector("#quantity");
let checkLocation = document.getElementsByName("location");
let checkbox1 = document.querySelector("#checkbox1");


//Récupération des champs d'erreur du formulaire
let firstNameError = document.querySelector("#firstNameError");
let lastNameError = document.querySelector("#lastNameError");
let emailError = document.querySelector("#emailError");
let birthdateError = document.querySelector("#birthdateError");
let quantityError = document.querySelector("#quantityError");
let locationError = document.querySelector("#locationError");
let conditionCheckboxError = document.querySelector("#generalCheckboxError");

//fonction générale pour les input firstName lastName Email
function validation(input, error, regex, validMessage, invalidMessage) {
    if (regex.test(input.value)) {
        input.style.border = "solid 2px green";
        error.textContent = validMessage;
        error.style.color = 'green';
        error.style.fontSize = '15px';
        error.style.marginBottom = '5px';
        return true;
    } else {
        input.style.border = "solid 2px red";
        error.textContent = invalidMessage;
        error.style.color = 'red';
        error.style.fontSize = '15px';
        error.style.marginBottom = '5px';
        return false;
    }
}

// Evenement d'écoute sur les differents inputs du formulaire
firstName.addEventListener('change', () => {
    validation(firstName, firstNameError, /^[a-zA-Z]{2,20}$/, "Champ Valide", "Veuillez saisir deux caractères minimums");
});

lastName.addEventListener('change', () => {
    validation(lastName, lastNameError, /^[a-zA-Z]{2,20}$/, "Champ Valide", "Veuillez saisir deux caractères minimums");
});

email.addEventListener('change', () => {
    validation(email, emailError, /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Champ Valide", "Veuillez saisir une adresse email valide");
});

birthdate.addEventListener('change', () => {
    validation(birthdate, birthdateError, /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/, "Champ Valide", "Veuillez saisir votre date de naissance");
});

quantity.addEventListener('change', () => {
    validation(quantity, quantityError, /^[0-9]+$/, "Champ Valide", "Merci d'indiquer le nombre de tournois");
});

function locationChecking() {
    let isChecked = false;
    for (let i = 0; i < checkLocation.length; i++) {
        if (checkLocation[i].checked) {
            isChecked = true;
            break;
        }
    }

    if (isChecked) {
        locationError.textContent = "Champ valide";
        locationError.style.color = 'green';
        locationError.style.fontSize = '15px';
        locationError.style.marginBottom = '5px';
        return true;
    } else {
        locationError.textContent = "Merci de sélectionner une localisation";
        locationError.style.color = 'red';
        locationError.style.fontSize = '15px';
        locationError.style.marginBottom = '5px';
        return false;
    }
}

checkLocation.forEach((checkLocationInput) => checkLocationInput.addEventListener('change', locationChecking));

checkbox1.addEventListener('change', () => {
    if (!checkbox1.checked) {
        conditionCheckboxError.textContent = "Merci d'accepter les conditions d'utilisations";
        conditionCheckboxError.style.color = 'red';
        conditionCheckboxError.style.fontSize = '15px';
        conditionCheckboxError.style.marginBottom = '5px';
    } else {
        conditionCheckboxError.textContent = "Champs Valide";
        conditionCheckboxError.style.color = 'green';
        conditionCheckboxError.style.fontSize = '15px';
        conditionCheckboxError.style.marginBottom = '5px';
    }
})