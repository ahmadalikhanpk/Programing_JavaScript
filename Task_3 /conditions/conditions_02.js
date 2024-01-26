/*
Create a program getTemperature that asks the user to input a temperature in Celsius and then outputs whether they should wear a jacket (if the temperature is below 15°C) or not.
 */

function getTemperature(temp){
    //let promptinput = number(prompt("give me a number"));
   // console.log(typeof promptinput);
   if(temp){
    console.log("they should wear jacket");
   } else {
    console.log("you are good to go");
   }
}
let example = prompt("what is the temperature");
let number = Number(example);
getTemperature(number);
//getTemperature(Number(prompt('What is the current temperature?')));