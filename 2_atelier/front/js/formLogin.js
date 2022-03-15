const URL_API_BDD = `http://127.0.0.1:8080/login`;


function userLogin() {
    console.log("login -> Clicked");

    var data = {
        "userName": document.getElementsByName("userName")[0].value,
        "password": document.getElementsByName("password")[0].value
    }

    let context = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    };


    fetch(URL_API_BDD, context)
        .then(response => response.json()
            .then(data => callbackUserLogin({ status: response.status, response: data })))
        .catch(error => console.log('error', error));
}

function callbackUserLogin(response) {
    console.log('login', response.status)
    if (response.status === 200) {
        localStorage.setItem('user',  JSON.stringify(response.response))
        window.location = '/index.html'
    } else {
        console.log('error', response.response.message)
        let error = document.querySelector('#error');
        error.innerHTML = response.response.message;
    }
}