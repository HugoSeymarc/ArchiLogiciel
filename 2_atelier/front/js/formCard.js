function err_callback(error) {
    console.log(error);
}

const URL_API_POST = "https://asi2-backend-market.herokuapp.com/card";

function createCard() {
    console.log("onClick -> OK");

    var data = {
        name: document.getElementsByName("name")[0].value,
        description: document.getElementsByName("description")[0].value,
        family: document.getElementsByName("family")[0].value,
        affinity: document.getElementsByName("affinity")[0].value,
        imgUrl: document.getElementsByName("imgUrl")[0].value,
        energy: document.getElementsByName("energy")[0].value,
        hp: document.getElementsByName("hp")[0].value,
        defence: document.getElementsByName("defence")[0].value,
        attack: document.getElementsByName("attack")[0].value,
        price: document.getElementsByName("price")[0].value,
        userId: null,
        storeId: null
    }


    let context = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(data)
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