//fetch("", {})


console.log(fetch("https://reqres.in/api/users"));
fetch("https://reqres.in/api/users")
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
    .then(jsonResponse => console.log(jsonResponse.data))
    .catch(err => console.log(err))