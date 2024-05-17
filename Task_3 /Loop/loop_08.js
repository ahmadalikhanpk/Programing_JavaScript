// Develop a program that initially asks the user how many numbers they wish to input. After receiving this information, the program should then prompt the user to enter each of these numbers. Once all numbers have been entered, the program should determine and display the smallest and biggest number provided by the user. 

let amountOfInputs = Number(prompt('How many numbers would you like to input?'));

let current Number;

let maxNumber Infinity;

let minNumber Infinity;

for (let 1 1; i < amountOfInputs; i++){

current Number Number(prompt("Please enter any number. (${i}/${amountOfInputs))));

(currentNumber> maxNumber) {

maxNumber currentNumber;

(current Number minNumber) {

minNumber currentNumber;

console.log("Smallest input number was ${minNumber) and largest input number was $(maxNumber));