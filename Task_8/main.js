/*const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => displayData(json))
}

fetchData();
*/
const fetchData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if(!response.ok){
            throw new Error(`Error statuse: ${response.status}`);
        }
        const data = await response.json();
        displayData(data);
    } catch (error) { 
        console.error(error);
    }
};
fetchData();
const displayData = (data) => {
    console.log(data);
 const container = document.querySelector('#blogContainer');
 data.forEach((post) => {
    const postElement = document.createElement('div');
    postElement.innerHTML = `
    <h2>${post.name}</h2>
    <p>${post.username}</p>
    <p>${post.email}</p>
    `;
    container.appendChild(postElement);
 });
};

