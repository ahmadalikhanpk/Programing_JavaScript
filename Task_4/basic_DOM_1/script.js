/* 

Write JavaScript code that selects content id by using getElementById.
Write a function which will update the text content of the selected element to "Hello, World!" by clicking the button.
*/

function changetext() {
    const element = document.getElementById("content");
//element.innerHTML = "Hello, World!";
element.textContent ='Hello World';
}
