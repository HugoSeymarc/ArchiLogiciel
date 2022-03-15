function err_callback(error) {
    console.log(error);
}

const URL_API_POST_BUY = "http://127.0.0.1:8080/buy";
const URL_API_POST_SELL = "http://127.0.0.1:8080/sell"

function buy() {

    console.log("user : ", localStorage.getItem("user"))

    var data = {
        user: {
            id: localStorage.getItem("user")
        },
        card: {
            id: localStorage.getItem("card")
        },
    }


    let context = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    };

    fetch(URL_API_POST_BUY, context)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data)
        });

    refresh()

}

function sell() {

    console.log("user : ", localStorage.getItem("user"))

    var data = {
        user: {
            id: localStorage.getItem("user")
        },
        card: {
            id: localStorage.getItem("card")
        },
    }


    let context = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    };

    fetch(URL_API_POST_SELL, context)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data)
        });

    refresh()
}

function refresh() {
    location.reload();
}