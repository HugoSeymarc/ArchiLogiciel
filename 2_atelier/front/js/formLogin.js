const URL_API_BDD = "ONSAITPASENCORE";

function err_callback(error) {
    console.log(error);
}

function login() {
    console.log("login -> Clicked");

    var data = {
        "login": document.getElementsByName("name")[0].value,
        "password": document.getElementsByName("password")[0].value
    }

    let context = {
        method: 'GET',
        body: JSON.stringify(data)
    };


    fetch(URL_API_BDD, context)
        .then(data => data.json())
        .then(datajson => callback(datajson))
        .catch(error => err_callback(error));

    console.log(data)
}