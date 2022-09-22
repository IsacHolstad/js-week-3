//fetch("", {})
let fetchOptions ={  method:"POST", headers:{
        "Content-Type": "application/json"
    },
    body: JSON.stringify({name: "Isac"})
}

fetch("https://reqres.in/api/users", fetchOptions)
    // .then(res => console.log(res))
    .then(res => {
        if (res.ok) {
            console.log("SUCCESS");
            return res.json();
        } else {
            console.log("NOT SUCCESSFUL");
        }
    })
    // .then(res => res.json())
    .then(jsonResponse => console.log(jsonResponse))
    .catch(err => console.log(err))