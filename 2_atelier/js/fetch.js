function err_callback(error) {
    console.log(error);
}

function createNewCard() {
    console.log("onClick -> OK");

    var data = {
        "name": document.getElementsByName("name")[0].value,
        "description": document.getElementsByName("description")[0].value,
        "family": document.getElementsByName("family")[0].value,
        "affinity": document.getElementsByName("affinity")[0].value,
        "imgUrl": document.getElementsByName("imgUrl")[0].value,
        "energy": document.getElementsByName("energy")[0].value,
        "hp": document.getElementsByName("hp")[0].value,
        "defence": document.getElementsByName("defence")[0].value,
        "attack": document.getElementsByName("attack")[0].value,
        "price": document.getElementsByName("price")[0].value,
        "userId": null,
        "storeId": null
    }

    const URL_API_BDD = "ONSAITPASENCORE";

    let context = {
        method: 'POST',
        body: JSON.stringify(data)
    };

    fetch(POST_CARD_URL, context)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data)
        });

    console.log(data)








}