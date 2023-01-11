// DOM ELEMENTS MODAL
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.getElementsByClassName('close');


// FONCTION POUR LANCER LE MODAL :
modalBtn.forEach((btn) => btn.addEventListener("click", () => {
  modalbg.style.display = "block";
}));

// FONCTION POUR FERMER LE MODAL
closeBtn.addEventListener("click", () => {
  modalbg.style.display = "none";
});


// FONCTION RESPONSIVE NAVBAR
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}