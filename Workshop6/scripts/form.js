let formEl = document.getElementById("form");
let usernameEl = document.getElementById("username");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  // fac validarea

  let usernameValue = usernameEl.value;

  if (usernameValue === "") {
    setError(usernameEl, "Introdu un username");
  } else {
    setSuccess(usernameEl);
  }

  let emailEl = document.getElementById("email");
  let emailValue = emailEl.value;

  if (emailValue === "") {
    setError(emailEl, "Introdu un email");
  } else {
    setSuccess(emailEl);
  }

  let passwordEl = document.getElementById("password");
  let passwordValue = passwordEl.value;

  if (passwordValue === "") {
    setError(passwordEl, "Introdu o parola");
  } else {
    setSuccess(passwordEl);
  }

  let passwordCheckEl = document.getElementById("password2");
  let passwordCheckValue = passwordCheckEl.value;

  if (passwordCheckValue === "") {
    setError(passwordCheckEl, "Introdu inca o data parola");
  } else {
    setSuccess(passwordCheckEl);
  }

  checkSimilarValues(
    passwordValue,
    passwordCheckValue,
    passwordEl,
    passwordCheckEl
  );

  let isEmailValid = isEmail(emailValue);
  if (isEmailValid == true) {
    setSuccess(emailEl);
  } else {
    setError(emailEl, "Formatul email-ului nu este ok");
  }
}

function setError(inputValue, message) {
  let formControl = inputValue.parentElement;
  let smallEl = formControl.querySelector("small");
  smallEl.innerText = message;
  formControl.className = "form-control error";
}

function setSuccess(inputValue) {
  let formControl = inputValue.parentElement;
  formControl.className = "form-control success";
}

function checkSimilarValues(inputValue1, inputValue2, inputEl, inputEl2) {
  if (inputValue1 == inputValue2) {
    setSuccess(inputEl);
  } else {
    setError(inputEl, "Parola nu corespunde");
    setError(inputEl2, "Parola nu corespunde");
  }
}

function isEmail(email) {
  let atPosition = email.indexOf("@");
  let dotPosition = email.indexOf(".");
  let spacePosition = email.indexOf(" ");

  // atPosition!=-1 && atPosition!=0  similar with atPosition>0
  // dotPosition>atPosition+1 similar  dotPosition - atPosition>=2
  if (
    atPosition != -1 &&
    atPosition != 0 &&
    dotPosition != -1 &&
    dotPosition != 0 &&
    dotPosition > atPosition + 1 &&
    spacePosition == -1
  ) {
    return true;
  }
}

// if (inputValue === "") {
//   console.log(message);
// } else {
//   console.log("Totu-i ok YEYE");
// }
