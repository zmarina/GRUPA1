// Task 1
// Check if a string is uppercase.

// Example:
// Input: upperCaseString = "The quick brown fox jumps over the lazy dog"
// Expected Result: false
// Input: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG"
// Expected Result: true

// let keyword = prompt("Introdu stringul");
// if (keyword != keyword.toUpperCase()) {
//   console.log("Stringul introdus nu e cu litere mari");
// } else {
//   console.log("Stringul introdus contine litere mari");
// }

// Task 2
// Remove the spaces from the string, then log the resultant string.

// Example:
// Input: noSpacesString = "The quick brown fox jumps over the lazy dog"
// Expected Result: "Thequickbrownfoxjumpsoverthelazydog"

// let keyword = prompt("Introdu stringul"); // marina silaghi
// for (let i = 0; i < keyword.length; i++) {
//   if (keyword[i] == " ") {
//     keyword = keyword.replace(keyword[i], ""); //cipricojocariu
//   }
// }
// console.log(keyword);

// Task 3
// Calculate the sum of 2 numbers and log the result.

// Example:
// Input: a = 2 , b = 3
// Expected Result: sum = 5

// let firstNumber = prompt("Introdu primul numar");
// let secondNumber = prompt("Introdu al doilea numar");

// if (!(isNaN(firstNumber) || isNaN(secondNumber))) {
//   console.log(parseInt(firstNumber) + parseInt(secondNumber));
// } else {
//   console.log("Nu ati introdus 2 numere");
// }

// Task 4
// Return the square root of a number n .

// Example:
// Input: n = 9
// Expected Result: sqrt = 3

// Task 5
// Log to the console your current age.

// Example:
// Input: year = 1990
// Expected Result: "You are ${x} years old"

// TEMA DE CASA

// Task 6
// Given 2 variables, return the value of the second variable, multiplied as many times as the value of the first.

// Example:
// Input: count = 5, multiplyString = "Hello"
// Expected Result: "HelloHelloHelloHelloHello"

// let myString = prompt("Introdu stringul");
// let result = myString;
// let times = parseInt(prompt("Introdu de cate ori sa se repete stringul"));
// let concatName = "";

// if (!isNaN(times)) {
//   for (let i = 0; i < times; i++) {
//     concatName = concatName + result;
//     myString = concatName; //hellohello
//   }
//   console.log(myString);
// }

// TASK 7
// Multiply a given number by eight if it is an even number and by nine otherwise.
// IF SYNTAX: a > b ? c : d ( translation: if a > b , then c , else d)

// Example:
// Input: 8
// Expected Result: 64
// Input: 5
// Expected Result: 45

// TASK 8
// Return the final number, at the given power.

// Example:
// Input: pow = 4, nr = 2
// Expected Result: 16
// Input: pow = 3, nr = 3
// Expected Result: 27

// TASK 9
// Reverse a string

// Example:
// Input: revString = "alabala"
// Expected Result: "alabala"
// Input: revString = "ItFactory"
// Expected Result: "yrotcaFtI"

// Task 10:
// Log if a string is valid or not based on length.
// Length should be between 4 and 16 characters (both included).

// Example:
// Input: "itFactory"
// Expected Result: true
// Input: "itf"
// Expected Result: false

// Task 11
// Your task is to convert strings so that each word starts with a capital letter.

// Example:
// Input: "The quick brown fox jumps over the lazy dog"
// Expected Result: "The Quick Brown Fox Jumps Over The Lazy Dog"
// let myString = "marina silaghi";

// myString.indexOf(" ");
// daca index 7  diferit de spatiu fa uppercase

// Task 12
// Return the first element of a given array.

// Example:
// Input: [1, 2, 3]
// Expected Result: 1
// Input: [80, 5, 100]
// Expected Result: 80

// Task 13
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

// Example:
// Input: 22, 15
// Expected Result: true
// Input: 83, 34
// Expected Result: false

// Task 14
// Return both the minimum and maximum numbers, of a given Array in that order.

// Example
// Input: [1, 2, 3, 4, 5]
// Expected Result: [1,5]
// Input: [22, 81, 33, 14, 52]
// Expected Result: [14,81]

// let myArray = [5, 2, 8, 4, 1];
// console.log(myArray);
// for (let i = 0; i < myArray.length; i++) {
//   myArray[i] = parseInt(myArray[i]);
// }

// let sortedArray = myArray.sort();
// console.log(sortedArray);

// let result = [sortedArray[0], sortedArray[sortedArray.length - 1]];
// console.log(result);

// Task 15
// A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.
// Take the array of names and return the name of the secret society.

// Example
// Input: ["Adam", "Sarah", "Malcolm"]
// Expected Result: "AMS"
// Input: ["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]
// Expected Result: CJMPRR

// let friend = "denisa";
// friend[0];

let friends = ["Denisa", "Claudia", "Alexandra", "Cipri", "Alin", "Marina"]; //
let friendsCapital = [];
let result = "";
// AACCDM
// ACDM

for (let friend of friends) {
  //friendsCapital = friendsCapital + friend[0].toUpperCase();
  friendsCapital.push(friend[0].toUpperCase());
  friendsCapital = friendsCapital.sort();
}
for (let letter of friendsCapital) {
  result = result + letter;
}
console.log(result);
