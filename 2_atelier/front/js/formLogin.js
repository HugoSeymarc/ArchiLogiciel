const URL_API_BDD = "http://127.0.0.1:8080/login";

function err_callback(error) {
    console.log(error);
}

function userLogin() {
    console.log("login -> Clicked");

    var data = {
        "userName": document.getElementsByName("login")[0].value,
        "password": document.getElementsByName("password")[0].value
    }

    let context = {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(data)
    };


    fetch(URL_API_BDD, context)
        .then(data => data.json())
        .then(datajson => callback(datajson))
        .catch(error => err_callback(error));

    console.log(data)
}