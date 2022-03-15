function err_callback(error) {
    console.log(error);
}

// function createCard() {
//     console.log("CreateCard -> Clicked");

//     var data = {
//         "name": document.getElementsByName("name")[0].value,
//         "description": document.getElementsByName("description")[0].value,
//         "family": document.getElementsByName("family")[0].value,
//         "affinity": document.getElementsByName("affinity")[0].value,
//         "imgUrl": document.getElementsByName("imgUrl")[0].value,
//         "energy": document.getElementsByName("energy")[0].value,
//         "hp": document.getElementsByName("hp")[0].value,
//         "defence": document.getElementsByName("defence")[0].value,
//         "attack": document.getElementsByName("attack")[0].value,
//         "price": document.getElementsByName("price")[0].value,
//         "userId": null,
//         "storeId": null
//     }

//     const POST_CARD_URL = "https://asi2-backend-market.herokuapp.com/card";

//     let context = {
//         method: 'POST',
//         body: JSON.stringify(data)
//     };

//     fetch(POST_CARD_URL, context)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(data) {
//             console.log(data)
//         });

//     console.log(data)
// }

function verifyPwd() {

    p1 = document.getElementsByName("password")[0].value
    p2 = document.getElementsByName("repassword")[0].value
    console.log(p1)
    console.log(p2)
    if (p1 != p2) {
        return false
    } else {
        return true
    }
}

function createUser() {
    console.log("CreateUser -> Clicked");

    if (verifyPwd()) {
        var data = {
            "name": document.getElementsByName("name")[0].value,
            "username": document.getElementsByName("description")[0].value,
            "password": document.getElementsByName("password")[0].value
        }

        const URL_API_BDD = "";

        let context = {
            method: 'POST',
            body: JSON.stringify(data)
        };

        fetch(URL_API_BDD, context)
            .then(data => data.json())
            .then(datajson => callback(datajson))
            .catch(error => err_callback(error));

        console.log(data)
    } else {
        alert("Password do not match")
    }


}