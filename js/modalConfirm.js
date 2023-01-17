// Dom element modal
const btnSubmit = document.querySelector(".btn-submit");
const modalConfirmBtn = document.querySelector(".formConfirmation");
const btnCloseConfirm = document.querySelector(".btn-close-confirm");
const form = document.querySelector('form');
const modalbd = document.querySelector('.modal-body')


// Fonction pour ouvrir la modale de confirmation d'inscription :
btnSubmit.addEventListener('click', e => {
    e.preventDefault();

    if (validation(firstName, firstNameError, /^[a-zA-Z]{2,20}$/, "Champ Valide", "Veuillez saisir deux caractères minimums")
        && validation(lastName, lastNameError, /^[a-zA-Z]{2,20}$/, "Champ Valide", "Veuillez saisir deux caractères minimums")
        && validation(email, emailError, /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/, "Champ Valide", "Veuillez saisir une adresse email valide")
        && validation(birthdate, birthdateError, /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/, "Champ Valide", "Veuillez saisir votre date de naissance")
        && validation(quantity, quantityError, /^[0-9]+$/, "Champ Valide", "Merci d'indiquer le nombre de tournois")
        && locationChecking()
        && checkbox1.checked) {
        modalConfirmBtn.style.display = "block";
        modalbd.style.display = "none";



    } else {
        if (!checkbox1.checked) {
            conditionCheckboxError.textContent = "Merci d'accepter les conditions d'utilisation";
            conditionCheckboxError.style.color = 'red';
            conditionCheckboxError.style.fontSize = '15px';
            conditionCheckboxError.style.marginBottom = '5px';

            alert("Merci de remplir le formulaire correctement");
        }
    }
});

// Fonction pour fermer la modale de confirmation d'inscription
btnCloseConfirm.addEventListener("click", () => {
    window.location.reload();
});