let inputEl = document.getElementById("filter");
let ulEl = document.getElementById("result");
let listUsers = [];
getData();

inputEl.addEventListener("input", (e) => {
  filterData(e);
});

function getData() {
  let url = "https://randomuser.me/api?results=20";
  fetch(url).then(getJson).then(displayResult);
}

function getJson(data) {
  return data.json();
}

function displayResult(data) {
  // console.log(data.results);
  let users = data.results;

  users.forEach((user) => {
    let liEl = document.createElement("li");
    liEl.innerHTML = `<img src ="${user.picture.large}"></img>
   <div class="user-info">
       <h4>${user.name.first} ${user.name.last}</h4>
       <p>${user.location.city}, ${user.location.country} </p>
   </div>`;
    ulEl.append(liEl);
    listUsers.push(liEl);
  });
}

function filterData(searchTerm) {
  listUsers.forEach((liPerson) => {
    console.log(liPerson.innerText.includes(searchTerm));
    if (liPerson.innerText.toLowerCase.includes(searchTerm.toLowerCase)) {
      liPerson.classList.remove("hide");
    } else {
      liPerson.classList.add("hide");
    }
    //  console.log(person);
  });
}
