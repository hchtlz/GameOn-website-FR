function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
closeBtn.addEventListener("click", closeModal);

function closeModal() {
  modalbg.style.display = "none";
}

// close modal form when clicking outside of the form
window.addEventListener("click", outsideClick);

function outsideClick(e) {
  if (e.target == modalbg) {
      modalbg.style.display = "none";
  }
}

// Validation of the form

function validate(event) {

  // Manage the error 
  event.preventDefault();

  let error = false;

  // validation first name
  const firstName = document.getElementById("first");

  if (firstName.value.length < 2) {
      error = true;
      document.getElementById("error-first-name").innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
      document.getElementById("first").style.border = "2px solid red";
  }
  else {
    document.getElementById("error-first-name").innerHTML = "";
    document.getElementById("first").style.border = "";
  }

  // validation last name
  const lastName = document.getElementById("last");

  if (lastName.value.length < 2) {
      error = true;
      document.getElementById("error-last-name").innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
      document.getElementById("last").style.border = "2px solid red";
  }
  else {
    document.getElementById("error-last-name").innerHTML = "";
    document.getElementById("last").style.border = "";
  }

  // validation email with regex
  const email = document.getElementById("email");
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!emailRegex.test(email.value)) {
      error = true;
      document.getElementById("error-email").innerHTML = "Veuillez entrer une adresse email valide.";
      document.getElementById("email").style.border = "2px solid red";
  }
  else {
    document.getElementById("error-email").innerHTML = "";
    document.getElementById("email").style.border = "";
  }

  // validation quantity of tournaments with regex 
  const quantity = document.getElementById("quantity");
  const quantityRegex = /^[0-9]+$/;

  if (!quantityRegex.test(quantity.value)) {
      error = true;
      document.getElementById("error-quantity").innerHTML = "Veuillez entrer un nombre valide.";
      document.getElementById("quantity").style.border = "2px solid red";
  }
  else {
    document.getElementById("error-quantity").innerHTML = "";
    document.getElementById("quantity").style.border = "";
  }

    // validation of birthdate
    const birthdate = document.getElementById("birthdate");

    if (birthdate.value == "") {
      error = true;
      document.getElementById("error-birthdate").innerHTML = "Vous devez entrer votre date de naissance.";
      document.getElementById("birthdate").style.border = "2px solid red";
    } 
    else {
      document.getElementById("error-birthdate").innerHTML = "";
      document.getElementById("birthdate").style.border = "";
    }

  // validation of tournament location
  const location1 = document.getElementById("location1");
  const location2 = document.getElementById("location2");
  const location3 = document.getElementById("location3");
  const location4 = document.getElementById("location4");
  const location5 = document.getElementById("location5");
  const location6 = document.getElementById("location6");

  if (!location1.checked && !location2.checked && !location3.checked && !location4.checked && !location5.checked && !location6.checked) {
      error = true;
      document.getElementById("error-location").innerHTML = "Vous devez choisir une option.";
  }
  else {
    document.getElementById("error-location").innerHTML = "";
  }

  // validation of the checkbox
  const checkbox = document.getElementById("checkbox1");

  if (!checkbox.checked) {
      error = true;
      document.getElementById("error-checkbox").innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions.";
  }
  else {
    document.getElementById("error-checkbox").innerHTML = "";
  }

  // add message if the form is valid
  const validation = document.getElementById("btn-validation");

  if (!error) {
    document.getElementById("form").style.display = "none";
    document.getElementById("form-confirmation").style.display = "flex"; 
  }

  // close the form with the button
  const closeValidation = document.getElementById("btn-close");

  closeValidation.addEventListener("click", closeModal);
}