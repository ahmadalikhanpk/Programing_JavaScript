// Initial array of team members
let teamMembers = ['John', 'Emily', 'Mike', 'Sarah'];
 console.log(teamMembers);

// Exercise 1: Loop through `teamMembers` and log each name to the console.
// Write your code here:

for (let i = 0; i < teamMembers.length; i++) {
    text = teamMembers[i];
    console.log(text);
  }

// Exercise 2: Remove the first member of the array.
// Write your code here:
teamMembers.shift();
console.log(teamMembers);
console.log("\n");



// Exercise 3: Remove the last member of the array.
// Write your code here:
teamMembers.pop();
console.log(teamMembers);
console.log("\n");


// Exercise 4: Add a new member "Alex" to the front of the array.
// Write your code here:
teamMembers.unshift('Alex');
console.log(teamMembers);
console.log("\n");


// Exercise 5: Append a new member "Linda" to the end of the array.
// Write your code here:
teamMembers.push("Linda");
console.log(teamMembers);
console.log("\n");

// Exercise 6: Create a new array that excludes the first two members.
// Write your code here:
let newarray = []; 
console.log("Exercise 6: Create a new array that excludes the first two members.");
console.log(teamMembers);
for (let i = 2; i < teamMembers.length; i++) {
    newarray[i - 2] = teamMembers[i]; 
  }
  console.log(newarray);
  console.log("\n");

// Exercise 7: Find the index of "Mike" in the array.
// Write your code here:
console.log("Exercise 7: Find the index of Mike in the array.");
let indexofMike = teamMembers.indexOf("Mike");
console.log(indexofMike);
console.log("\n");

// Exercise 8: Try to find the index of "Jake" (who is not in the array).
// Write your code here:
console.log("Exercise 8: Try to find the index of Jake (who is not in the array).");
ans = teamMembers.includes("Jake");
if (ans == false){
    console.log("Jake is not in Array");
} else {
    let indexofMike = teamMembers.indexOf("Mike");
    console.log(indexofMike);
}
console.log("\n");

// Exercise 9: Use `splice` to remove "Mike" and add "Carol" and "Bruce" in his place.
// Write your code here:
console.log("Exercise 9: Use `splice` to remove Mike and add Carol and Bruce in his place.");
console.log(teamMembers);
console.log("Use `splice` to remove Mike ");
teamMembers.splice(2, 1,);
console.log(teamMembers);
console.log("add Carol and Bruce in his place.");
teamMembers.splice(2, 0, "Carol", "Mike");
console.log(teamMembers);
console.log("\n");
// Exercise 10: Concatenate a new member "Bob" to the end of the array and create a new array.
// Write your code here:
console.log("Exercise 10: Concatenate a new member Bob to the end of the array and create a new array.");
console.log(teamMembers);
newitem = "Bob";
let newarr = [] = teamMembers.concat(newitem);
console.log(newarr);
console.log("\n");

// Exercise 11: Using `slice` to Copy the Entire Array
// Write your code here:
console.log("Exercise 11: Using `slice` to Copy the Entire Array");
console.log(teamMembers);
let newteam = [];
newteam = teamMembers.slice(0, teamMembers.length);
console.log("New Array");
console.log(newteam);
console.log("\n");

// Exercise 12: Combining Arrays with `concat`
// Assume `newMembers` array is defined
console.log("Exercise 12: Combining Arrays with `concat`");
console.log(teamMembers);
let newMembers = ['Tina', 'Dean'];
console.log(newMembers);
// Write your code here:
let botharray = [] = teamMembers.concat(newMembers);
console.log(botharray);

console.log("\n");
// Exercise 13: Finding all occurrences of a John
// Write your code here:
console.log("Exercise 13: Finding all occurrences of a John");
let teamMembers1 = ['John', 'Emily', 'Mike', 'Sarah'];
console.log(teamMembers1);
let countocc = 0;
for(let j = 0; j < teamMembers1.length; j++ ){
    if(teamMembers1[j] == "John"){
        countocc = countocc + 1;
    } 
}
console.log("occurrences of a John: ", countocc);
console.log("\n");


// Exercise 14: Transforming members with `map` to be all written uppercase
// Write your code here:
console.log("Exercise 14: Transforming members with `map` to be all written uppercase");
console.log(teamMembers1);
let toUpperCasearr = [];

for(let j = 0; j < teamMembers1.length; j++ ){
   toUpperCasearr[j] = teamMembers1[j].toLocaleUpperCase(); 
}
console.log("In upperCase");
console.log(toUpperCasearr);
console.log("\n");