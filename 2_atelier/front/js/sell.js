const URL_API_GET = "http://127.0.0.1:8080/cards/" + localStorage.getItem("user");
let context = {
    method: 'GET'
};

let cardId = 0

fetch(URL_API_GET, context)
    .then(data => data.json())
    .then(datajson => callback(datajson))
    .catch(error => err_callback(error));

function err_callback(error) {
    console.log(error);
}


function callback(data) {

    let template = document.querySelector("#row");

    for (const card of data) {
        let clone = document.importNode(template.content, true);

        newContent = clone.firstElementChild.innerHTML
            .replace(/{{family_name}}/g, card.familyName)
            .replace(/{{img_src}}/g, card.imgSrc)
            .replace(/{{name}}/g, card.name)
            .replace(/{{description}}/g, card.description)
            .replace(/{{hp}}/g, card.hp)
            .replace(/{{energy}}/g, card.energy)
            .replace(/{{attack}}/g, card.attack)
            .replace(/{{defence}}/g, card.defence)
            .replace(/{{price}}/g, card.price)
            .replace(/{{id}}/g, card.id);
        clone.firstElementChild.innerHTML = newContent;

        let cardContainer = document.querySelector("#tableContent");
        cardContainer.appendChild(clone);
    }
}