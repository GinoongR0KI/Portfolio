// Use this file for initialization of multiple scripts

import { Card } from "../blocks/Card";

let btn_addCard = document.querySelector("#btn_addCard");

btn_addCard.addEventListener("click", () => {
    let originalText = "New Card";
    let longText = "This is a very long sentence to use as an example to check if our card title will become truncated";
    let card = new Card(longText);
    console.log(card.object);
    let container = document.querySelector(".card-container");
    let insertedElement = container.insertBefore(card.object, btn_addCard);
    // .appendChild(card.object);
});

let header = document.querySelectorAll(".card-header");
header.forEach(function(element, index) {
    let target = document.querySelectorAll(".card-body")[index];
    let cardHeight = element.parentNode.offsetHeight;
    // get the card height - the header height to get the max height the card body can stretch to
    target.style.maxHeight = (cardHeight - element.offsetHeight) + "px";
    console.log(cardHeight, element.offsetHeight, target.style.maxHeight);
});