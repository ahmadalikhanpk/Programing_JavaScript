'use strict';

// Task 1: Basic Try-Catch Usage
/*
Wrap the code inside a try-catch block to catch potential errors.
Log 'An error occurred' in the catch block.
*/
function task1(){
    try {
        a + b;
        throw new Error('Oops, something went wrong!');
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }

// Task 2: Catching ReferenceError
/*
Attempt to access an undefined variable inside a try block.
Catch the ReferenceError and log it to the console.
*/

function task2() {
    try{
        console.log(fox);
    } catch (error){
        console.error(error);
    }
}

// Task 3: Using Finally
/*
Use a try-catch-finally block. In the finally block, log 'Execution completed'.
*/

function task3() {
  try{
    console.log('inside try block');
} catch (error){
    console.log('error caught');
} finally {
    // Cleanup code that runs regardless of the operation's outcome
    console.log('Execution Completed');
  }
}

// Task 4: Nested Try-Catch
/*
Inside a try block, nest another try-catch block.
Simulate an error in the nested try block and handle it in the nested catch block.
*/

function task4() {
    try {
        console.log('outer try block');
        console.log(fox);
        try {
        
            throw new Error('Nested error occured');
          } catch (error) {
            // Handle any errors that occurred
            console.error('An error occurred during the operation:', error);
          }
    
      } catch (error) {
        // Handle any errors that occurred
        console.error('An error occurred during the operation:', error);
      }
}

// Task 5: Function with Try-Catch
/*
Create a function that uses try-catch to handle an array index out of bounds error.
*/

function task5(array, index) {
  try {
    if(index < 0 || index >= array.length ){
        throw new Error('index out of bounds');
    }
    console.log('Value: ', array[index]);
  } catch (error) {
    console.log(error.message);
  }
}