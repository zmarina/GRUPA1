/*
1. reference external script file in html
2. add extension Quokka.js Wallaby
3. practice & watch the course recording
*/
//alert("Workshop5");

// 4. pop-up methods: alert, confirm, prompt

// let age = 30;
// alert("Varsta mea:" + myVar);

// 5. console.log()

// 6. variables (var, let, const) = >  case sensitive language
// camel-case => firstName; lastName : variabile with let and var;
// const: UPPER CASE;  SNAKE_UPPERCASE
//Pascal Case = CarOwner

let name = "marina";
//console.log(Name);
const PI_MATH = 3.14;
const E = 2.3;

/* 7. data types & structures
numbers ->  1, 5, 10, 100, 2.5
strings -> 'salut', "ma numesc Marina"
boolean -> true / false (banks)
arrays -> []
objects -> {}
undefined -> ceva ce nu e definit
null -> nimic
*/

/* 8. Math Operators
Multiply *
Exponents **
Divide /
Modulo/Restul impartirii %  5%2 = 1
Add +
Subtract -
*/

let lastName = "silaghi";
let firstName = "marina";
console.log(firstName + " " + lastName);

let concatNames = firstName + " " + lastName;
concatNames = `${firstName} ${lastName}`;

let noApples = 4;
concatName = `Eu am ${noApples} mere`;
console.log(concatName);
console.log(firstName + noApples);

console.log(firstName[2]);

console.log(firstName.replace(" ", ""));

for (let i = 0; i < firstName.length; i++) {
  console.log(firstName[i]);
}

for (let i = firstName.length - 1; i >= 0; i--) {
  console.log(firstName[i]);
}

let myNumber = 5;
myNumber = myNumber - 20;
myNumber -= 20;

myNumber = myNumber - 1;
myNumber--;

console.log(firstName.length);
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());
/* 9. Math Methods
Floor - Rounds down
Ceil - Rounds up
Random - numar random intre 0 si 1
*/

// 10. Increment & Decrement

// 11. arrays and operations on arrays

let myVar = "marina";
myVar = parseInt(myVar);
console.log(myVar);

let age = parseInt(prompt("Ce varsta ai tu?"));
if (!isNaN(age)) {
  console.log(age);
} else {
  console.log("Introdu un numar valid");
}

let fruits = ["mar"];
let fruits2 = ["mar", "para", "banana"];

console.log(fruits[1]);
console.log(fruits[fruits.length - 1]);

fruits.push("kiwi");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.unshift("mango");
console.log(fruits);

console.log(fruits2.sort());

console.log(fruits.indexOf("para"));
console.log(fruits2.sort());

// 12. conditional operators
// ==, ===, >, <, <=, >=, !=, !== NaN =not a number
age = 20;

if (age !== 20) {
  console.log("Esti din generatia z");
} else if (age > 20) {
  console.log("Bravo ai peste 20 de ani");
} else {
  console.log("Bravo ai sub 20 de ani");
}

for (let i = 0; i <= fruits2.length - 1; i++) {
  console.log(fruits2[i]);
}

for (let fruit of fruits) {
  console.log(fruit);
}

// 13. Date Object

//let birthday = new Date();
//console.log(birthday);
//console.log(birthday.toLocaleString());
let birthday = new Date(1989, 7, 10, 10, 30, 23, 22);
console.log(birthday);
// 15. if statement and for statement
