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
setTimeout(()=>{
    console.log("eat")

}, 3000);

console.log("ice cream");




