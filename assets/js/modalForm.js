document.addEventListener("DOMContentLoaded", function () {

    //-------------------fonction principale-------------------//
    //--------------------------------------------------------//
    function main() {

        const modalBtn = document.querySelectorAll(".modal-btn");
        const closeBtn = document.querySelectorAll(".close");
        const closeBtnFooter = document.querySelectorAll("#closeBtnRed");

        modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
        closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));
        closeBtnFooter.forEach((btn) => btn.addEventListener("click", closeModal));
        Validation();
    }

    main();


    //-------------------fonction Lancement du modal-------------------//
    //----------------------------------------------------------------//
    function launchModal() {
        const modalbg = document.querySelector(".bground");
        modalbg.style.display = "block";

    }

    //-------------------fonction Fermeture du modal-------------------//
    //----------------------------------------------------------------//
    function closeModal() {
        const modalbg = document.querySelector(".bground");
        modalbg.style.display = "none";
    }
    //---------------------Validation formulaire------------------------//
    //------------------------------------------------------------------//
    function ValidationForm(formData) {
        console.log(formData)

        // Initialisation de nos variables de test.
        const stringRegex = /^[a-zA-Z-]+$/;
        const emailRegex = /^\w+([.-]?\w+)@\w+([.-]?\w+).(.\w{2,3})+$/;
        const date_regex = /^[0-9]{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])/;

        let control = true;

        // Si une des valeurs dans nos inputs de notre Form on affiche un méssage d'érreur.
        if (!formData[0].children[2].value.match(stringRegex) || formData[0].children[2].value.length < 2) {
            document.getElementById("firstNameErrorMsg").innerText = "Veuillez entrer 2 charactères ou plus pour le champ du prénom";
            control = false;
            // Sinon on affiche rien
        } else {
            document.getElementById("firstNameErrorMsg").innerText = "";
        }
        if (!formData[1].children[2].value.match(stringRegex) || formData[1].children[2].value.length < 2) {
            document.getElementById("lastNameErrorMsg").innerText = "Veuillez entrer 2 charactères ou plus pour le champ du nom";
            control = false;
            // Sinon on affiche rien
        } else {
            document.getElementById("lastNameErrorMsg").innerText = "";
        }
        if (!formData[2].children[2].value.match(emailRegex)) {
            document.getElementById("emailErrorMsg").innerText = "Veuillez entrer un email correct";
            control = false;
            // Sinon on affiche rien
        } else {
            document.getElementById("emailErrorMsg").innerText = "";
        }

        if (!formData[3].children[2].value.match(date_regex)) {
            document.getElementById("birthdateErrorMsg").innerText = "Entrez une date de naissance valide.";
            control = false;
            // Sinon on affiche rien
        } else {
            document.getElementById("birthdateErrorMsg").innerText = "";
        }

        if (formData[4].children[2].value === "") {
            document.getElementById("quantityErrorMsg").innerText = "Veuillez entrer le nombre de tournois participé.";
            control = false;
            // Sinon on affiche rien
        } else {
            document.getElementById("quantityErrorMsg").innerText = "";
        }

        let compteurlocation = 0;

        for (let i = 1; i < document.getElementById('GetInput').getElementsByTagName('input').length + 1; i++) {

            let location = document.getElementById("location" + i);
            if (location.checked) {
                compteurlocation++;
            }
        }

        if (compteurlocation > 0) {
            document.getElementById("CheckboxVilleErrorMsg").innerText = "";
        } else {
            document.getElementById("CheckboxVilleErrorMsg").innerText = "Veuillez selectionné au moins une options.";
            control = false;
        }

        if (!formData[6].children[0].checked) {
            document.getElementById("CheckboxConditionErrorMsg").innerText = "Veuillez accepté les conditions d'utilisation.";
            control = false;
            // Sinon on affiche rien
        } else {
            document.getElementById("CheckboxConditionErrorMsg").innerText = "";
        }

        if (control) {
            return true;
        } else {
            return false;
        }
    }


    //---------------------Fonction de validation------------------------//
    //-------------------------------------------------------------------//
    function Validation() {

        let ModalSendButton = document.getElementById("sendmodal");

        ModalSendButton.addEventListener("click", function (event) {
            const formData = document.querySelectorAll(".formData");
            event.preventDefault();

            if (ValidationForm(formData)) {

                // on affiche en changeant la class display none par block
                const confirm = document.getElementById("confirmationMsg").style

                confirm.display = "flex";
                confirm.justifyContent = "center";
                confirm.alignItems = "center";
                document.getElementById("reserve").style.display = "none";
                document.getElementById("closeBtnRed").style.display = "block";
            } else {

                event.preventDefault();
                alert("Le formulaire est mal remplis.")
            }
        })

    }


})

//-------------------fonction Apparition menu burger-------------------//
//----------------------------------------------------------------//
function editNav() {

    var x = document.getElementById("myTopnav");

    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }

}

// DOM Elements







