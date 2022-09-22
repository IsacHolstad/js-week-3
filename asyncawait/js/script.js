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


const APIurl = "api.coincap.io/v2/assets/"
const proxy = "https://noroffcors.herokuapp.com/";
const corsFixUrl = proxy + APIurl;

(async function cryptoNames() {
        try{
            const response = await fetch(corsFixUrl);
            const responseJSON = await response.json(); // convert the response to json data
            const cryptoData = responseJSON.data;
            console.log(cryptoData)
        }
        catch(error) {
            console.log(error)
        }
    }
)();
