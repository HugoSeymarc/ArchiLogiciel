function err_callback(error) {
    console.log(error);
}

const URL_API_POST = "http://127.0.0.1:8080/card";

function createCard() {
    console.log("onClick -> OK");
    console.log(localStorage.getItem("user"))

    var data = {
        name: document.getElementsByName("name")[0].value,
        description: document.getElementsByName("description")[0].value,
        familyName: document.getElementsByName("family")[0].value,
        affinity: document.getElementsByName("affinity")[0].value,
        imgSrc: document.getElementsByName("imgUrl")[0].value,
        energy: document.getElementsByName("energy")[0].value,
        hp: document.getElementsByName("hp")[0].value,
        defence: document.getElementsByName("defence")[0].value,
        attack: document.getElementsByName("attack")[0].value,
        price: document.getElementsByName("price")[0].value,
        user: {
            id: localStorage.getItem("user")
        },
    }


    let context = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    };

    fetch(URL_API_POST, context)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data)
        });

    console.log(data)








}