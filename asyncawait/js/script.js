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
const container = document.querySelector(".container")

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
    console.log("helo this is an function that calls itself")
})();


const apiUrl = "api.coincap.io/v2/assets/"
const proxy = "https://noroffcors.herokuapp.com/";
const corsFixUrl = proxy + apiUrl;

(async function cryptoNames() {
        try{
            const response = await fetch(corsFixUrl);
            const responseJSON = await response.json();
            const cryptoData = responseJSON.data;
            for (let i = 0; i < cryptoData.length; i++){
                console.log(cryptoData[i].id);
                if (i >= 20) {
                    return true
                }
                container.innerHTML = `<h1>${cryptoData[i].id}</h1>`
            }
        }
        catch(error) {
            console.log(error);
            container.innerHTML = `<h1>error</h1>`
        }
    }
)();


