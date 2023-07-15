// let pizza = "🍕";
// console.log(pizza);
// let pizza = "nimic";
// let myPizza = getPizza();

// function getPizza() {
//   console.log("Comand pizza");
//   setTimeout(() => {
//     pizza = "🍕";
//     console.log(pizza + "este gata"); // `${pizza} este gata`
//   }, 2000);

//   console.log("Mananc pizza");
//   return pizza;
// }

// console.log(pizza);

// 1. notific cand a terminat executia codul lung pentru a-mi executa codul dependent
// 2  codul care nu are dependinta de codul lung =>execut mai departe

// let myPizza;
// let pizza;
// myPizza = getPizza(eatDesert);

// console.log("Ma uit la filme");
// console.log("Ma joc cu catelul");
// eatDesert();

// getPizza = apelanta
// myFunction = apelata
// function getPizza(myFunction) {
//   console.log("Comand pizza");
//   setTimeout(() => {
//     pizza = "🍕";
//     console.log(pizza + "este gata"); // `${pizza} este gata`
//     myFunction(pizza);
//   }, 2000);
// }

// 1. Comand
// 2. ma uit la film/catel
// 3. pizza este gata
// 4  mananc desert
// 5. returneaza pizza

// function eatDesert(resultat) {
//   console.log(`Mananc ${resultat}`);
//   console.log(`A venit ${resultat}. Am mancat ar merge si un desert`);
//   console.log(resultat);
// }

// function step1(callback) {
//   callback();
// }

// function step2(callback) {
//   callback();
// }

// function step3(callback) {
//   callback();
// }

// function step4(callback) {
//   callback();
// }

// step1(() => {
//   step2(() => {
//     clkmdsakm.mndsa;
//     lkmlkmsda;
//     step3(() => {
//       step4();
//     });
//   });
// });

// step1()
//   .then(step2)
//   .then(step3)
//   .then(step4);

// console.log(getWeather());
//let rezultat = getWeather().then(displayResult);

// console.log("Ma gandesc cu ce ma imbrac");
// console.log("Alte chestii");

// function displayResult(data) {
//   console.log(`Afara este ${data}`);
// }

// promises
// functia care Promite
// function getWeather() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       resolve("ALTCEVA");
//     }, 2000);
//   });
// }

// function getWeatherIcon(weather) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       switch (weather) {
//         case "CALD":
//           resolve("🌞");
//           break;
//         case "FRIG":
//           resolve("❄");
//           break;
//         case "PLOAIE":
//           resolve("🌧");
//           break;
//         default:
//           resolve("Nu am iconita pentru vremea ta");
//       }
//     });
//   });
// }

// getWeather()
//   .then(getWeatherIcon)
//   .then(logResult, logErrorResult)
//   .catch(logErrorResult);

// getWeather().then(getWeatherIcon).then(logResult).catch(logErrorResult);

// function logResult(data) {
//   console.log(data);
// }

// function logErrorResult(data) {
//   console.log(`Am prevazut cazul asta`);
//   console.log(`ATENTIE: EROARE!`);
// }

let url = "https://reqres.in/api/users";

//"http://worldtimeapi.org/api/timezone/Europe/Bucharest";

// let result = fetch(url);

fetch(url).then(getJson).then(displayResult);

function getJson(data) {
  return data.json();
}

function displayResult(result) {
  console.log(result);
  console.log(result.data[0].email);
}
