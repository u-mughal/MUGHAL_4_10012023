// DECLARATION DE VAR FIRST et FIRSTNAMERROR
let firstName = document.querySelector("#first");
let firstNameError = document.querySelector("firstNameError");

// CONDITION REGEX POUR FIRSTNAME
function firstNameControle() {

    if (/^([A-Za-z]{2,20})?([-]{0,1})?([A-Za-z]{2,20})$/.test(firstName.value)) {
        firstName.style.border = "solid 2px green";
        firstNameError.textContent = "Champ Valide";
        firstNameError.style.color = 'green';
        return true;
    }

    else {
        firstName.style.border = "solid 2px red";
        firstNameError.textContent = "Veuillez rentrer deux caractères minimum";
        firstNameError.style.color = 'red';
        return false;
    }
}