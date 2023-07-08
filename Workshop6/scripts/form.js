let formEl = document.getElementById("form");
let usernameEl = document.getElementById("username");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  // fac validarea

  let usernameValue = usernameEl.value;

  // if (usernameValue === "") {
  //   console.log("introdu valoare");
  // } else {
  //   console.log("Totu-i ok YEYE");
  // }
  setError(usernameEl, "Introdu un username");

  let emailEl = document.getElementById("email");
  let emailValue = emailEl.value;

  // if (emailValue === "") {
  //   console.log("introdu valoare");
  // } else {
  //   console.log("Totu-i ok YEYE");
  // }
  setError(emailEl, "Introdu un email");

  let passwordEl = document.getElementById("password");
  let passwordValue = passwordEl.value;

  // if (passwordValue === "") {
  //   console.log("introdu valoare");
  // } else {
  //   console.log("Totu-i ok YEYE");
  // }
  setError(passwordEl, "Introdu o parola");

  let passwordCheckEl = document.getElementById("password2");
  let passwordCheckValue = passwordCheckEl.value;

  setError(passwordCheckEl, "Introdu inca o data parola");

  // if (passwordCheckValue === "") {
  //   console.log("introdu valoare");
  // } else {
  //   console.log("Totu-i ok YEYE");
  // }
}

function setError(inputValue, message) {
  let formControl = inputValue.parentElement;
  let smallEl = formControl.querySelector("small");
  smallEl.innerText = message;
  formControl.className = "form-control error";

  // if (inputValue === "") {
  //   console.log(message);
  // } else {
  //   console.log("Totu-i ok YEYE");
  // }
}
