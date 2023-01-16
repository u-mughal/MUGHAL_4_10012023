// Dom element modal
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.getElementsByClassName('close');

// fonction pour ouvrir le modal
modalBtn.forEach((btn) => btn.addEventListener("click", () => {
  modalbg.style.display = "block";
}));

// // Fonction pour ouvrir le modal
Array.from(closeBtn).forEach((btn) => {
  btn.addEventListener("click", () => {
    modalbg.style.display = "none";
  });
});

// fonction responsive navbar
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}