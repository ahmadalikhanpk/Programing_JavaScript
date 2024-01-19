// Complete the function convertNumberToString such that it converts the number it receives into a string.
// Complete the function convertStringToNumber such that it converts the string it receives into a number.

function convertNumberToString(number) {
    return number.toString();
}

function convertStringToNumber(string) {
    return parseInt(string);
}
// Sample usage - do not modify
console.log(convertNumberToString(42)); // "42"
console.log(convertNumberToString(97)); // "97"
console.log(convertNumberToString(11)); // "11"

console.log(convertStringToNumber('42')); // 42
console.log(convertStringToNumber('97')); // 97
console.log(convertStringToNumber('11')); // 11

// Define a function to convert a temperature from Fahrenheit to Celsius.
// This function uses the formula (Fahrenheit - 32) * 5/9
// The resulting temperature is rounded to one decimal place for precision.
function fahrenheitToCelsius(fahrenheit){
    farn =(fahrenheit - 32) * 5/9; 
    farnn = parseInt(farn);
    return farnn;
}
// Sample usage - do not modify
console.log(fahrenheitToCelsius(21)); // "-6,1"

