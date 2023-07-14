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
// function faCeva() {
//   let imageEl = document.getElementById("myImage");
//   let buttonEl = document.getElementById("myButton");

//   if (imageEl.style.display == "none") {
//     imageEl.style.display = "block";
//     buttonEl.innerText = "Afiseaza";
//   } else {
//     imageEl.style.display = "none";
//     buttonEl.innerText = "Ascunde";
//   }
// }

// .addEventListeners (event,function,useCapture)
// You can add many event handlers to one element
// Event the same event that invokes different functions

// myDivEl.addEventListener("click", faAltceva);
// myDivEl.addEventListener("load", faAltceva);

// let myVar = ()=>{
//   console.log("dsakgdja");
// }

// window.addEventListener("keydown", (e) => {
//   console.log(e.key);
// });
// let myDivEl = document.getElementById("myDiv");
// let myImageEl = document.getElementById("myImage");
// window.addEventListener("keydown", move);
// let x = 0;
// let y = 0;

// function move(event) {
//   switch (event.key) {
//     case "ArrowUp":
//       y = y - 10;
//       myImageEl.style.top = y + "px"; //5px
//       break;
//     case "ArrowDown":
//       y = y + 10;
//       myImageEl.style.top = y + "px";
//       break;
//     case "ArrowRight":
//       x = x + 10; //  x+=5;
//       myImageEl.style.left = x + "px";
//       break;
//     case "ArrowLeft":
//       x = x - 10; //  x-=5;
//       myImageEl.style.left = x + "px";
//       break;
//     default:
//       console.log("apasa o sageata");
//       break;
//   }
// }

localStorage.setItem("name", "Marina");
localStorage.setItem("name", "Alexandra");
console.log(localStorage.getItem("name"));
localStorage.removeItem("name");

sessionStorage.setItem("name", "Marina");
sessionStorage.setItem("name", "Alexandra");
console.log(sessionStorage.getItem("name"));
sessionStorage.removeItem("name");
