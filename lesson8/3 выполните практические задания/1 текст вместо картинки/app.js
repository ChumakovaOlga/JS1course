'use strict';
let buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", function(event) {
        handleClick(event);
    });
})
/**
 * Функция обрабатывает клик по кнопке в карточке товара и попеременно вызывает
 * функции для показа или скрытия текста о товаре.
 * @param {MouseEvent} clickedButtonEvent 
 */
function handleClick(clickedButtonEvent) {
    const cardNode = clickedButtonEvent.target.parentNode;
    const card = {
        wrap: cardNode,
        img: cardNode.querySelector('img'),
        productName: cardNode.querySelector('.productName'),
        button: cardNode.querySelector('button'),
    };
    let textButton = card.button.innerText;
    if (textButton === 'Подробнее') {
        showMoreText(card);
    } else if (textButton === 'Отмена') {
        hideMoreText(card);
    }
}
/**
 * Функция скрывает текст с описанием товара.
 * @param {Object} card 
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLButtonElement} card.button
 */
function hideMoreText(card) {
    card.img.style.display = "block";
    card.wrap.querySelector(".desc").remove();
    card.button.innerText = "Подробнее";
}
/**
 * Функция показывает текст с описанием товара.
 * @param {Object} card 
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLButtonElement} card.button 
 */
function showMoreText(card) {
    card.img.style.display = "none";
    let text = "подробное описание изображения";
    card.productName.insertAdjacentHTML("afterend", `<div class="desc">${text}</div>`);
    card.button.innerText = "Отмена";
}