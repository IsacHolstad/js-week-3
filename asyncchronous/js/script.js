// syncronic code

console.log("i");
console.log("eat");
console.log("sandwich");

const a = 10;
const b = 20;

console.log(a);
console.log(b);

console.log(a + b);

// asyncronic code

console.log("I");
//setTimeout(()=>{
//    console.log("eat")
//
//}, 3000);

console.log("ice cream");

// Callbacks();

// Example function that will get passed as a callback
function exampleFunction() {
    console.log('Example function called');
}

// Our main function that will run the callback function
// being passed to it
function doSomethingWithCallback(callbackFunction) {
    // Calling the function that is being passed
    callbackFunction();
}

// Pass "exampleFunction" function into our main
// "doSomethingWithCallback" function
doSomethingWithCallback(exampleFunction);


// create a callback function
//that takes function as an agrument
// this callback function is who is eating ice cream

//function whoIsEatingIceCream(callBackFunction) {
   // callBackFunction();
//}
//function showName(){
//    console.log(`i am ${name}  i am eating ice cream`);
//}

//whoIsEatingIceCream(showName());


const values = [5, 32, 53, 20, 10, 9, 23];

const newValues = values.filter((value) =>{
    if (value > 10) {
        return true
    }

})
console.log("new values: " ,newValues);

//const newValues = values.filter(isBiggerThan10);
//console.log(newValues)


//Promises

const myPromise = new Promise((resolve, reject) => {
    // We are hard coding a value for this example
    const shouldResolve = true;
    if (shouldResolve) {
        // If the code inside of the promise was able to do what
        // it needed to do, then it will call this 'resolve' callback
        resolve('Promise resolved successfully.');
    } else {
        // If the code inside of the promise failed to do what
        // it needed to do then it will call this 'reject' callback
        reject('Promise has failed');
    }
});


console.log(myPromise);

// chaining();
// We fetch the data from the URL
let isLoading = true
fetch('https://jsonplaceholder.typicode.com/todos/1')
    // We have to asynchronously parse the data into JSON
    //   so we can make use of it
    .then((response) => response.json())
    // Data is now available as
    .then((json) => console.log(json))
    //
    .catch((error) => {
        console.log(error);

    })
    .finally(() =>{
        isLoading = false
        container.innerHTML = `<h1>succeses</h1> `


    });

const container = document.querySelector(".statusmessage");


const cryptoList = document.querySelector(".crypto-container")
let loading = true
fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) =>{
        console.log(error)
        console.log("error happening")
    })
    .finally(() =>{
        loading = false
        cryptoList.innerHTML = `<h2>loaded crypto in console</h2>`

    })









