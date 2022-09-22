//const  url = "https://reqres.in/api/users";


// unknown errors in console
//async function getData() {
//    try{
//        const data = fetch(myApi);
//        console.log(data)
//        const jsonData = await data.json();
//        console.log(jsonData)
//
//    }
//    catch (error){
//        console.log(error);
//    }
//
//}
//getData();


// problems with api
async function doFetch(url) {
    try {
        const data = await fetch(url);
        return await data.json();
    } catch (error) {
        console.log(error);
    }
}


async function main() {
    const data = await Promise.all([
        doFetch('https://jsonplaceholder.typicode.com/todos/1'),
        doFetch('https://jsonplaceholder.typicode.com/todos/2'),
        doFetch('https://jsonplaceholder.typicode.com/todos/3'),
    ]);
}

main();

// function that calls itself
(function ()  {
    console.log("helo")
})();
