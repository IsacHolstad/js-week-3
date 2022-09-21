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
    else {
        return  false
    }
})
console.log("new values: " ,newValues)





