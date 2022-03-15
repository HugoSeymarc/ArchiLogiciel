const URL_API_GET = "http://127.0.0.1:8080/cards";
let context = {
    method: 'GET'
};



fetch(URL_API_GET, context)
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

    for (const card of data) {

        console.log(card)
        like = getRandomInt(1000);

        let clone = document.importNode(template.content, true);

        newContent = clone.firstElementChild.innerHTML
            .replace(/{{energy}}/g, card.energy)
            .replace(/{{name}}/g, card.name)
            .replace(/{{imgUrl}}/g, card.imgSrc)
            .replace(/{{description}}/g, card.description)
            .replace(/{{energy}}/g, card.energy)
            .replace(/{{familyName}}/g, card.familyName)
            .replace(/{{hp}}/g, card.hp)
            .replace(/{{defence}}/g, card.defence)
            .replace(/{{attack}}/g, card.attack)
            .replace(/{{price}}/g, card.price)
            .replace(/{{like}}/g, like)
            .replace(/{{id}}/g, card.id);
        clone.firstElementChild.innerHTML = newContent;

        let cardContainer = document.querySelector("#gridContainer");
        cardContainer.appendChild(clone);
    }
}