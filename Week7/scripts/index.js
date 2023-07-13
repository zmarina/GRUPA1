// add/change HTML elements
// .innerHTML (vulnerable to XSS attacks)
// .textContent (more secure)

// let h2El = document.createElement("h2");
// h2El.innerHTML = document.body.append(h2El);

// let h3El = document.createElement("h3");
// let myName = prompt("Introdu numele tau");
// h3El.innerHTML = myName;
// h2El.textContent = myName;
// document.body.append(h3El);

// let ulEl = document.querySelector("#fruit");
// let liEl = document.createElement("li");
// liEl.textContent = "ananas";
// ulEl.append(liEl);
// ulEl.prepend(liEl);

//ulEl.insertBefore(liEl, ulEl.getElementsByTagName("li")[4]);

// Events and add listeners
// onclick, onload, onmouseover, onmouseup, onmousedown
// document.getElementById("myImage") similar cu document.querySelector("#myImage")
function faCeva() {
  let imageEl = document.getElementById("myImage");
  let buttonEl = document.getElementById("myButton");

  if (imageEl.style.display == "none") {
    imageEl.style.display = "block";
    buttonEl.innerText = "Afiseaza";
  } else {
    imageEl.style.display = "none";
    buttonEl.innerText = "Ascunde";
  }
}

// .addEventListeners (event,function,useCapture)
// You can add many event handlers to one element
// Event the same event that invokes different functions
