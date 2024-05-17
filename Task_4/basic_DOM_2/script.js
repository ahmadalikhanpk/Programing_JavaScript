/* 

Write JavaScript code that adds an event listener to the button.

When the button is clicked, the function should:
- Retrieve the value from the input field.
- Create a new <li> element and set its text content to the input field's value.
- Append the new <li> element to the fruitList <ul>.

Ensure the input field is cleared after adding the fruit to the list.

*/
const button =  document.getElementById('addFruitBtn');

function addfruit(){

const inputfruit = document.getElementById('fruitInput').value.trim();
const fruitList = document.getElementById('fruitList');

     if(inputfruit) {
    const out1 = document.createElement('li');
    out1.textContent = inputfruit;
    fruitList.appendChild(out1);
    document.getElementById('myform').reset();
     } else {
        alert('Please enter a fruit name');
     }
}
   button.addEventListener('click',addfruit);

    