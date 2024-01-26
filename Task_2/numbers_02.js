function fahrenheitToCelsius(fahrenheit){
let answer = ((fahrenheit - 32) / 9);
    return answer.toFixed(1);
}
console.log(fahrenheitToCelsius(21));