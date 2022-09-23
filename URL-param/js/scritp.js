// Select the container
const container = document.getElementById("container");

// Values of my query string

const firstName = "Elon";
const lastName = "Musk";

// Create anchor tag



//newLink.href = `https://www.example.com/?firatName=${firstName}&lastName=${lastName}`;

container.innerHTML += `<a href="https://www.example.com/?firatName=${firstName}&lastName=${lastName}" class="button">Submit</a>`

console.log(window);
console.log(window.location);
console.log(window.location.search);

//making new url search parameter

const parametersString = window.location.search;
const searchParams = new URLSearchParams(parametersString);
console.log(searchParams);

//for(const param of parametersString){
//    console.log(param)
//}
