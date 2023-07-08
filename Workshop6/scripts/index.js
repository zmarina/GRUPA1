/*
Object =  a group of properties and methods
        properties = what an object Has
        methods = what an object can do
        use. to access properties and methods
 */

// let car1 = {
//   model: "Mustang",
//   year: 2023,
//   fuel: "benzina",
//   color: "red",
// };

// class Car {
//   model;
//   year;
//   fuel = "electric";
//   color;
//   drive() {
//     console.log(`Masina ${this.model} merge bine`);
//   }
// }

// let car2 = new Car();
// car2.model = "Skoda";
// car2.year = 2023;
// car2.fuel = "motorina";

// car2.drive();
// console.log(car2);

// let car3 = new Car();
// car3.year = 2023;
// car3.drive();
// console.log(car1.model);
// car1.owner = "Marina";
// console.log(car1);
// car1.model = "bmw";

/*
Function = a block of code designed to perform a particular task/procedure
           We invoke a call whenever we want tit to do something.
*/

// greet();
// function greet() {
//   console.log("Salutare tuturor");
// }

// console.log("ceva cod");

// greet();

function greetByName(name) {
  console.log(`Salutare ${name}`);
}

// greetByName("Cipri");
// greetByName("Claudia");
// greetByName("Miruna");
// greetByName("Denisa");

// function greetByName(name, job) {
//   console.log(`Persoana cu numele ${name} are urmatorul job ${job}`);
// }

// greetByName("Marina", "programator");
// greetByName("Andrei", "student");
// let firstNumber;
// let secondNumber;
// firstNumber = 2;
// secondNumber = 10;
// diffOfNumbers(firstNumber, secondNumber);

// function diffOfNumbers(number1, number2) {
//   console.log(number1 - number2);
//   console.log("Number 1 is " + number1);
//   console.log("Number 2 is " + number2);
// }

// function diffOfNumbers(number1, number2) {
//   return number1 - number2;
// }

// let sumaMea = diffOfNumbers(10, 7);

// let suma1 = function (){

//        return number1 - number2;
// }

// console.log(sumaMea);
// console.log(diffOfNumbers(10, 7));

// global and local scope
// functions have access to anything is global

// var message = "Rezultatul Inmultirii este: ";

// function inmultireNumere(number1, number2) {
//   console.log(message);
//   if (number1 > 0 || number2 > 0) {
//     console.log(number1 * number2);
//   } else {
//     console.log("unul dintre numere nu este pozitiv");
//   }
// }

// console.log(inmultireNumere(-1, 9));
// console.log(message);

// let employee = {
//   name: "Anca Pop",
//   age: 25,
//   salariuBrut: 50,
//   taxe: 20,
//   calculeazaSalariuNet() {
//     return this.salariuBrut - this.taxe;
//   },
//   lucreaza() {
//     console.log("Angajatul lucreaza");
//   },
// };

class Employee {
  name;
  age;
  salariuBrut;
  taxe;
  calculeazaSalariuNet() {
    return this.salariuBrut - this.taxe;
  }
  lucreaza() {
    console.log("Angajatul lucreaza");
  }

  constructor(name, age, salariuBrut, taxe) {
    this.name = name;
    this.age = age;
    this.salariuBrut = salariuBrut;
    this.taxe = taxe;
  }
}

let angajat = new Employee("miruna", 20, 1000, 600);
console.log(angajat.calculeazaSalariuNet());

// let angajat1 = new Employee();
// angajat1.salariuBrut = 200;
// angajat1.taxe = 50;
// angajat1.name = "Monica";

// console.log(angajat1);
// console.log("Salariu net este " + angajat1.calculeazaSalariuNet());

class Person {
  name;
  job;
  mananca() {
    console.log(`Persoana cu numele ${this.name} mananca banane `);
  }
  constructor() {
    console.log("Am ceva default");
  }
  // constructor(name, job) {
  //       this.name = name;
  //       this.job = job;
  //     } ;
}

// let person2 = new Person();
// console.log(person2);

// let person1 = new Person("stefan", "programator");
// console.log(person1);
// // employee.lucreaza();
// let salariuNet = employee.calculeazaSalariuNet();
// console.log(salariuNet);

// let human = {
//   alive: true,
//   hobbies: ["Eat", "Sleep", "Drink", "Play"],
//   beverages: { morning: { copii: "lapte", adultii: "cafea" }, evening: "Tea" },
//   hands: 2,
// };

// console.log(" are proprietatea hands" + human.hasOwnProperty("hands"));
// console.log(" are proprietatea feet " + human.hasOwnProperty("feet"));

// console.log(Object.keys(human));
// console.log(Object.values(human));

// console.log(human.hobbies);
// console.log(human.hobbies[0]);
// console.log(human.hobbies[2]);

// console.log(human.beverages.evening);
// console.log(human.beverages.morning.copii);

// function expression
// arrow functions

/*
this  = reference to a particular object
the object depends on the immediate context
 */

/*
class= a template for creating objects
       define what properties and methods they have
       use a constructor for unique properties
*/

/*
DOM = Document Object Model
      An interface for changing the content of a page
*/

// let divEl = document.getElementById("myDiv");
// divEl.style.border ="2px solid red";
// divEl.innerHTML="textul meu";

// divEl.className = "myClass myClass2";

// let paragraphEl = document.getElementsByClassName("par-class");
// document.getElementsByTagName("p");
console.log(document.querySelector("#myDiv"));
console.log(document.querySelector(".par-class"));
console.log(document.querySelector("a"));

console.log(document.querySelectorAll(".par-class"));
// console.log(paragraphEl);
console.log(document.getElementsByName("fruits"));
let fruitsEl = document.getElementsByName("fruits");
fruitsEl.forEach((fruit) => {
  if (fruit.checked) {
    console.log("Elementul este checked" + fruit.value);
  }
});
