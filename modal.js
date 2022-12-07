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


// lastname and firstname input empty when submit button is clicked
function validate() {
  var x = document.forms["reserve"]["first"].value;
  if (x == "") {
    alert("Le prénom doit contenir au moins 2 caractères");
    return false;
  }

  var y = document.forms["reserve"]["last"].value;
  if (y == "") {
    alert("Le nom doit contenir au moins 2 caractères");
    return false;
  }

// checkbox terms required 

  var m = document.getElementById("checkbox1");
  if (m.checked == false) {
    alert("Vous devez accepter les termes et conditions");
    return false;
  }
};
