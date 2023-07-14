let userInputEl = document.getElementById("userInput");
let userInputValue = userInputEl.value;
let groceriesEl = document.getElementById("groceryItems");

// adaugam un event listener care asteapta pana se incarca toata pagina: Event =DomContentLoaded
// executam metoda de get groceries

document.addEventListener("DOMContentLoaded", getLocalGroceries);

// add event listeners for keydown
userInputEl.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    console.log("Ati apaasat enter");
    addItem();
  }
});

function addItem() {
  let itemEl = document.createElement("h3"); // <h3></h3>;
  itemEl.innerText = "✔ " + userInputEl.value; //  <h3>lapte</h3>;

  itemEl.addEventListener("click", () => {
    if (itemEl.style.textDecoration != "line-through") {
      itemEl.style.textDecoration = "line-through";
    } else {
      itemEl.style.textDecoration = "none";
    }
  });
  groceriesEl.append(itemEl);
  saveGroceries(itemEl.innerText);
  userInputEl.value = "";
}

function saveGroceries(groceryItem) {
  let myGroceries;
  if (localStorage.getItem("groceries") != null) {
    myGroceries = JSON.parse(localStorage.getItem("groceries")); // transforma un string in array
  } else {
    myGroceries = [];
  }
  myGroceries.push(groceryItem);
  localStorage.setItem("groceries", JSON.stringify(myGroceries)); // transforma un array intr-un string
}

function getLocalGroceries() {
  let myGroceries;
  if (localStorage.getItem("groceries") === null) {
    myGroceries = [];
  } else {
    myGroceries = JSON.parse(localStorage.getItem("groceries")); // transforma un string in array
  }

  // pentru fiecare valoare din array executa corpul functiei
  // creaza elementul h3, asigneaza inner textul cu valoarea din local storage & adauga in DOM
  myGroceries.forEach((groceryValue) => {
    let itemEl = document.createElement("h3");
    let userInputValue = groceryValue;
    itemEl.textContent = userInputValue;

    itemEl.addEventListener("click", (e) => {
      if (itemEl.style.textDecoration != "line-through")
        itemEl.style.textDecoration = "line-through";
      else itemEl.style.textDecoration = "none";
    });
    groceriesEl.append(itemEl);
  });
}
