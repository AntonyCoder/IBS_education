'use strict'

import fetchCatalogListData from "./api.js";
import { fetchPictureMin } from "./api.js";

//Получение массива данных
async function getCatalogListData() {
    try {
        const responseData = await fetchCatalogListData();
        renderCatalogList(responseData);
    } catch (e) {
        console.error("Ошибка:", e);
    }
}

export async function renderCatalogList(items) {
    const catalogItems = document.querySelector('.catalog-items');

    //Получение пути для изображения
    const picturePath = await fetchPictureMin('80f09214-ea18-46bf-9cbd-22d7493060d9');

    catalogItems.innerHTML = '';

    items.forEach(item => {
        //Создаем элемент карточки товара
        const productItem = document.createElement('div');
        productItem.classList.add('item');

        //Создаем элемент кнопки добавления в избранное
        productItem.innerHTML = `<img src="${item.like ? 'svg/favorite_active.svg' : 'svg/favorite.svg'}" 
        alt="favorite" class="item__favorite-icon">`

        //Создаем элемент изображения
        const productImage = document.createElement('img');
        productImage.src = picturePath;
        productImage.alt = item.picture.alt;
        productImage.classList.add('item-image');

        //Создаем элемент названия товара
        const productTitle = document.createElement('span');
        productTitle.classList.add('item-title');
        productTitle.textContent = item.name;

        //Создаем элемент цены товара
        const productPrice = document.createElement('span');
        productPrice.classList.add('item-price');
        productPrice.textContent = `${item.price.value} ${item.price.currency}`;

        productItem.appendChild(productImage);
        productItem.appendChild(productTitle);
        productItem.appendChild(productPrice);

        catalogItems.appendChild(productItem);
    })
}

getCatalogListData();
