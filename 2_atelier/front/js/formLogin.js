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
    .then(data => data.json())
    .then(datajson => console.log(datajson))
    .catch(error => err_callback(error));
    
    console.log(data)
}

function err_callback(error) {
    console.log(error);
}