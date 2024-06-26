/**
 * Function for the navigation bar (header responsive)
 */
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

/** 
 * Function for launching the modal form
 */
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
closeBtn.addEventListener("click", closeModal);

/**
 * Function for closing the modal form
 */
function closeModal() {
  modalbg.style.display = "none";
}

// close modal form when clicking outside of the form
window.addEventListener("click", outsideClick);

/** 
 * Function for closing the modal when clicking outside of the form
 */
function outsideClick(e) {
  if (e.target == modalbg) {
      modalbg.style.display = "none";
  }
}

/**
 * Function for the validation of the form
 */
function validate(event) {

  // manage the error 
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
  if (!error) {
    document.getElementById("form").style.display = "none";
    document.getElementById("form-confirmation").style.display = "flex"; 
  }

  // close the form with the button
  const closeValidation = document.getElementById("btn-close");

  closeValidation.addEventListener("click", closeModal);

  // launch new form after validation
  if (document.getElementById("btn-close")) {
    document.getElementById("btn-close").addEventListener("click", launchNewForm);
  }

  /**
   * Function for launching a new form
   */
  function launchNewForm() {
    document.getElementById("form").style.display = "block";
    document.getElementById("form-confirmation").style.display = "none";
  }

  // launch new form after validation with empty fields
  if (document.getElementById("btn-close")) {
    document.getElementById("btn-close").addEventListener("click", emptyFields);
  }

  /**
   * Function for emptying the fields of the form
   */
  function emptyFields() {
    document.getElementById("first").value = "";
    document.getElementById("last").value = "";
    document.getElementById("email").value = "";
    document.getElementById("birthdate").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("location1").checked = false;
    document.getElementById("location2").checked = false;
    document.getElementById("location3").checked = false;
    document.getElementById("location4").checked = false;
    document.getElementById("location5").checked = false;
    document.getElementById("location6").checked = false;
    document.getElementById("checkbox1").checked = false;
  }

  // launch new form with box checked and button radio checked
  if (document.getElementById("btn-close")) {
    document.getElementById("btn-close").addEventListener("click", checkCheckbox);

    document.getElementById("btn-close").addEventListener("click", checkRadio);
  }

  /**
   * Function for checking the checkbox
   */
  function checkCheckbox() {
    document.getElementById("checkbox1").checked = true;
  }

  /**
   * Function for checking the radio button
   */
  function checkRadio() {
    document.getElementById("location1").checked = true;
  }
}



