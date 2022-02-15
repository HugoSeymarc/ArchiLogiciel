const GET_CARD_URL = "https://asi2-backend-market.herokuapp.com/cards";
let context = {
    method: 'GET'
};

fetch(GET_CARD_URL, context)
    .then(data => data.json())
    .then(datajson => callback(datajson))
    .catch(error => err_callback(error));

function err_callback(error) {
    console.log(error);
}

function getRandomInt(max) { // DOnne un nombre aleatoire
    return Math.floor(Math.random() * max);
}

function callback(data) {

    let template = document.querySelector("#selectedCard");

    let button = "buy";

    for (const card of data) {

        comment = getRandomInt(1000); // Permet de donner des valeurs aleatoires aux variables qui n'en ont pas
        like = getRandomInt(1000);
        date = getRandomInt(250) + "h";

        let clone = document.importNode(template.content, true);

        newContent = clone.firstElementChild.innerHTML
            .replace(/{{family_src}}/g, card.smallImgUrl)
            .replace(/{{family_name}}/g, card.name)
            .replace(/{{image_src}}/g, card.imgUrl)
            .replace(/{{date}}/g, date)
            .replace(/{{comment}}/g, comment)
            .replace(/{{like}}/g, like)
            .replace(/{{button}}/g, button);
        clone.firstElementChild.innerHTML = newContent;

        let cardContainer = document.querySelector("#gridContainer");
        cardContainer.appendChild(clone);
    }
}