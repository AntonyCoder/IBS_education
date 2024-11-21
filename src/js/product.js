'use strict'

import { fetchProductData } from "./api.js";
import { LOCAL_SERVER_URL } from "./apiConfig.js";
import favoriteActiveIcon from '../assets/svg/favorite_active.svg';
import favoriteDisabledIcon from '../assets/svg/favorite.svg';

//Получение массива данных
async function getProductData() {
    try {
        const productId = new URLSearchParams(window.location).get('id');
        const responseData = await fetchProductData(productId);
        renderProduct(responseData.content);
    } catch (e) {
        console.error('Ошибка:', e);
    }
}

function renderProduct(item) {
    const itemPage = document.querySelector('.item-page');

    if (!itemPage) {
        throw new Error("Элемент с классом 'item-page' не найден.");
    }

    // Создаем контейнер для изображения
    const imageWrapper = document.createElement('div');
    imageWrapper.className = 'image-wrapper'

    // Создаем элемент изображения
    const itemImage = document.createElement('img');
    itemImage.className = 'item__image-main';
    itemImage.src = `${LOCAL_SERVER_URL}${item.picture.path}`;
    itemImage.alt = item.picture.alt;

    imageWrapper.appendChild(itemImage);

    // Создаем контейнер для основной информации товара
    const itemInformation = document.createElement('div');
    itemInformation.className = 'item-information'

    // Создаем элемент названия товара
    const itemTitle = document.createElement('h1');
    itemTitle.className = 'item__title-main'
    itemTitle.textContent = item.name;

    // Создаем элемент описания товара
    const itemDescription = document.createElement('p');
    itemDescription.className = 'item-description'
    itemDescription.textContent = item.info;

    //Создаем элемент подзаголовка товара
    const itemDetails = document.createElement('span');
    itemDetails.className = 'item-details'
    itemDetails.textContent = 'Details';

    // Создаем элемент деталей товара
    const itemDescriptionDetails = document.createElement('p');
    itemDescriptionDetails.className = 'item-description';
    itemDescriptionDetails.textContent = item.details;

    // Создаем контейнер для блока покупки
    const purchaseWrapper = document.createElement('div');
    purchaseWrapper.className = 'purchase-wrapper';

    // Создаем элемент стоимости товара
    const itemPrice = document.createElement('span');
    itemPrice.className = 'item__price-main';
    itemPrice.textContent = `${item.price.value} ${item.price.currency}`;

    // Создаем контейнер для изменения количества товара для покупки
    const quantityWrapper = document.createElement('div');
    quantityWrapper.className = 'quantity-wrapper';

    // Создаем кнопку уменьшения количества товара
    const btnMinus = document.createElement('button');
    btnMinus.className = 'control';
    btnMinus.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_3333_145)">
                                <path d="M19 13H5V11H19V13Z" fill="#E97F03" />
                            </g>
                            <defs>
                                <clipPath id="clip0_3333_145">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>`

    // Создаем поле изменения количества товара
    const quantityInput = document.createElement('input');
    quantityInput.className = 'quantity';
    quantityInput.value = '1';
    quantityInput.type = 'text';

    // Создаем кнопку увеличения количества товара
    const btnPlus = document.createElement('button');
    btnPlus.className = 'control';
    btnPlus.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_3333_142)">
                                <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#E97F03" />
                            </g>
                            <defs>
                                <clipPath id="clip0_3333_142">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>`

    //Добавляем кнопки и поле в обертку
    quantityWrapper.appendChild(btnMinus);
    quantityWrapper.appendChild(quantityInput);
    quantityWrapper.appendChild(btnPlus);

    // Создаем кнопку добавления товара в корзину
    const addToCartBtn = document.createElement('button');
    addToCartBtn.className = 'add-btn';
    addToCartBtn.textContent = 'Add to cart';

    // Иконка избранного
    const favoriteIcon = document.createElement('img');
    favoriteIcon.className = 'favorite__icon-main';
    favoriteIcon.alt = 'favorite';
    favoriteIcon.src = `${item.like ? favoriteActiveIcon : favoriteDisabledIcon}`;

    purchaseWrapper.appendChild(itemPrice);
    purchaseWrapper.appendChild(quantityWrapper);
    purchaseWrapper.appendChild(addToCartBtn);
    purchaseWrapper.appendChild(favoriteIcon);

    itemInformation.appendChild(itemTitle);
    itemInformation.appendChild(itemDescription);
    itemInformation.appendChild(itemDetails);
    itemInformation.appendChild(itemDescriptionDetails);
    itemInformation.appendChild(purchaseWrapper);

    itemPage.appendChild(imageWrapper);
    itemPage.appendChild(itemInformation);
}

getProductData();
